var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var aa = SYS_getDoByXpath('Settle_New');
        var mData = [];
        var arrayvalue = SYS_getRecords(aa);
        var poolstatus;
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            poolstatus = SYS_getValFromRec(record, 'INV_POOL_STATUS');
            if (poolstatus =='IN') {
            record = SYS_setValToRec(record, 'INV_POOL_STATUS', 'OUT');
            mData.push(record);
            }
          }
        SYS_reLoadGrid(aa, mData);
      
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'PMT';
        //document.MAINFORM.FA_SETTLE_FLG.value = 'Unfinanced Invoices';
        document.MAINFORM.FA_PMT_TYPE.value = 'PMT';
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_PMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_PMT_AMT_SUM.value = 0;
        //document.MAINFORM.TEMP_DUE_DT.value = SYS_BUSI_DATE;
        SYS_GetRefNo('FAEF_PMT_GUR', 'SYF_FAEF_Cal_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_FAEF_MLDC_SetDebitCreditData();
            //SYF_FAEF_Cal_103_info();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_AMTTOSELLER = function() {
    try {
        var selamt; // Utility Auto Fix Comments
        selamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) * 1000;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(selamt) / 1000;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);


        var arrayvalue; // Utility Auto Fix Comments
        var docamt; // Utility Auto Fix Comments
        var invsum;
        var percent;
        var invamtsum;
        var poolstatus;
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("Settle_New");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        invamtsum = 0;
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            poolstatus = SYS_getValFromRec(record, 'INV_POOL_STATUS');
            if (poolstatus == 'IN') {
                docamt = SYS_getValFromRec(record, 'FA_ADJ_AMT');
            } else {
                docamt = 0;
            }
            invamtsum = SYS_FloatAdd(invamtsum, docamt);
        }
        percent = SYS_getValueFromMain('FA_MAX_LOAN_PERC');
        invsum = SYS_FloatMul(invamtsum, percent) / 100;
        invsum = SYT_AmtFormat(document.MAINFORM.FA_PMT_CCY.value, invsum);
        SYS_setValueToMain('FA_ORG_LMT_AMT', invsum);
        SYS_setValueToMain('FA_TEMP_AMT16', invamtsum);
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*SYF_FAEF_Cal_AMTTOSELLER", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_SetRefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(0, 4);
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year.substr(2, 4) + ref + 'PMT';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*SYF_FAEF_Cal_SetRefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");
        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiDebitSummary'));
            if (sum != SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value)) {
                alert('Multi Debit Amount is not equal to Payment Amount!');
                return false;
            }
        }

        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value)) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {
        var actions; // Utility Auto Fix Comments
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        descs = "Payment by buyer";
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
        payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_PMT_AMT_SUM.value;
        descs += "/Payment to Seller Bank";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}