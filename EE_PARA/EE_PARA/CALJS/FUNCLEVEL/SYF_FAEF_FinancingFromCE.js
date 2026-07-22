var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_CCY = function() {
    try {

        document.MAINFORM.FA_LOAN_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LOAN_INT_RT = function() {
    try {

        var FA_IRT_SPREAD; // Utility Auto Fix Comments
        var FA_LOAN_INT_RT; // Utility Auto Fix Comments
        var XBOR_RT; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value != '1') {
            XBOR_RT = SYS_BeFloat(document.MAINFORM.XBOR_RT.value);
            FA_IRT_SPREAD = SYS_BeFloat(document.MAINFORM.FA_IRT_SPREAD.value);
            FA_LOAN_INT_RT = XBOR_RT + FA_IRT_SPREAD;
            document.MAINFORM.FA_LOAN_INT_RT.value = DecimalFormat(FA_LOAN_INT_RT, 6);
            EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SEL_AC_AMT = function() {
    try {

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_TTL_LOAN_BAL = function() {
    try {

        document.MAINFORM.FA_TTL_LOAN_BAL.value = document.MAINFORM.FA_TTL_LOAN_AMT.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_RefNo = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'PUR';
        document.MAINFORM.FA_LOAN_ID.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_LOAN_ID.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_Busi_Type = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value != 'EF') {
            EEHtml.getElementById('EF1').style.display = "none";
            EEHtml.getElementById('EF2').style.display = "none";
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value != 'DF') {
            EEHtml.getElementById('DF1').style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_LOAN_PERC = function() {
    try {

        var loanprec; // Utility Auto Fix Comments
        var temprate; // Utility Auto Fix Comments
        loanprec = SYS_BeFloat(document.MAINFORM.FA_LOAN_PERC.value);
        temprate = SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value);
        if (loanprec > temprate) {
            alert('Financing Percentage cannot be more than' + document.MAINFORM.FA_MAX_LOAN_PERC.value + '% please have a check!');
            if (document.MAINFORM.FA_MAX_LOAN_PERC.value != '') {
                document.MAINFORM.FA_LOAN_PERC.value = document.MAINFORM.FA_MAX_LOAN_PERC.value;
            } else {
                document.MAINFORM.FA_LOAN_PERC.value = 0;
            }
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MAX_LOAN_PERC = function() {
    try {

        if (document.MAINFORM.FA_MAX_LOAN_PERC.value == 0 || document.MAINFORM.FA_MAX_LOAN_PERC.value == null) {
            alert('Max. Loan Percentage and Interest Rate Type cannot  be null, please check  your Pricing Info.');
            document.MAINFORM.FA_LOAN_PERC.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
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
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['N_MLDC_AMT'];
                if (SYS_BeFloat(recordTypeTemp) != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_RecordStatus = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var docNo; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var loanAmt; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_TTL_LOAN_AMT.value == 0) {
            alert('Please do Finance before you confirm the Transaction!');
            return false;

        }
        _do = SYS_getDoByXpath('InvFinance'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("InvFinance");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                loanAmt = SYS_getValFromRec(record, 'FA_INV_LOAN_AMT');
                docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                if (SYS_BeFloat(loanAmt) == 0) {
                    alert("Please Edit " + docNo + " to finance it.");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.LM_CSL_DESC.value = 'Factoring';
        SYF_FAEF_FA_BPOINV_LOAN_ID();
        SYF_FAEF_invAllocation();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FAEF_Chk_MAX_LOAN_PERC()) {
            return false;
        }
        if (!SYT_checkFactoringChildRecord('InvFinance')) {
            return false;
        }
        if (!SYF_FAEF_Chk_RecordStatus()) {
            return false;
        }

        if (!SYM_FAEF_checkDspInvoice()) {
            return false;
        }
        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_BPOINV_LOAN_ID = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('InvFinance'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("InvFinance");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                document.MAINFORM.FA_BPOINV_LOAN_ID.value = SYS_getValFromRec(record, 'FA_INV_LOAN_ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BaseDay_CCYDec = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_BaseDay_CCYDec_1', '1', 'Y');
        document.MAINFORM.FA_TEMP6.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOC_CCY = function() {
    try {

        var ccy; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        ccy = document.MAINFORM.FA_SEL_AC_CCY.value;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_3', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = SYS_LOCAL_CCY;
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            //SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_DOC_CCY_4', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        }
        /* For BPOM Module
else if (document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_INV_CCY.value;
        }
*/
        if (ccy != '' && ccy != null) {
            document.MAINFORM.FA_DOC_CCY.value = ccy;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Pricing = function() {
    try {

        var dTrxDate; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            dTrxDate = document.MAINFORM.TRX_DT.value;
            //mark by echo for test getTableData
            //document.MAINFORM.TRX_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.TRX_DT.value);
            //sFieldList = "FA_FIN_INFO;FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5;FA_LOAN_RT_TYPE1;FA_LOAN_RT_TYPE2;FA_LOAN_RT_TYPE3;FA_LOAN_RT_TYPE4;FA_LOAN_RT_TYPE5;FA_MAX_LOAN_PERC;FA_IRT_SPREAD";
            //sMappingList = "FA_FIN_INFO;FA_REMI_CCY1;FA_REMI_CCY2;FA_REMI_CCY3;FA_REMI_CCY4;FA_REMI_CCY5;FA_TEMP_RT_TYPE1;FA_TEMP_RT_TYPE2;FA_TEMP_RT_TYPE3;FA_TEMP_RT_TYPE4;FA_TEMP_RT_TYPE5;FA_MAX_LOAN_PERC;FA_TEMP5";
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_Get_Pricing_2', '1', 'Y');
            document.MAINFORM.TRX_DT.value = dTrxDate;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_ratetype = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY1.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE1.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY2.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE2.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY3.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE3.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY4.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE4.value;
            } else if (document.MAINFORM.FA_DOC_CCY.value == document.MAINFORM.FA_REMI_CCY5.value) {
                document.MAINFORM.FA_LOAN_IRATE_TYPE.value = document.MAINFORM.FA_TEMP_RT_TYPE5.value;
            }
        }

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
            document.MAINFORM.XBOR_RT.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M'); // Utility Auto Fix Comments
            if (SYS_FUNCTION_TYPE == 'PM' && document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
                //FOR HISTORICAL DATA
                document.MAINFORM.FA_IRT_SPREAD.value = document.MAINFORM.FA_TEMP5.value;
            }
            EEHtml.fireEvent(document.MAINFORM.FA_IRT_SPREAD, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'LOAN';
        document.MAINFORM.FA_LOAN_STATUS.value = 'Normal';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        //SYF_FAEF_Init_For_BPO();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Init_For_BPO = function() {
    try {

        /* For BPOM Module
if (document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            document.MAINFORM.FA_LOAN_PERC.value = 100;
            document.MAINFORM.FA_MAX_LOAN_PERC.value = 100;
            document.MAINFORM.FA_INT_CHG_TYPE.value = '1';
            document.MAINFORM.FA_LOAN_IRATE_TYPE.value = '1';
        }
*/
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {

        var IntSum; // Utility Auto Fix Comments
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
        IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Upfront Interest Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
        } else {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            descs = "Total Loan Amt/Amount to Seller";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
        }
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy = function(flag) {
    try {

        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_Financing_back = function(tag) {
    try {

        if (tag == 'M') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_PERC, 'M');
            if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '1') {
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'M');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.XBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Post_For_BPO = function() {
    try {

        /* For BPOM Module
if (document.MAINFORM.FA_BUSI_TYPE.value == 'BPO') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_INT_CHG_TYPE, 'P');
        }
*/
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_ExchRate_FIX_PENDING();
        }

        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == 'EC') {
            SYF_FAEF_MPO_Financing_back('P');
        }

        SYF_FAEF_Chk_Busi_Type();

        SYF_FAEF_Get_DOC_CCY();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();

        SYF_FAEF_Get_Pricing();

        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_LOAN_PERC.value = document.MAINFORM.FA_MAX_LOAN_PERC.value;
        }


        SYF_FAEF_Get_ratetype();


        if (document.MAINFORM.FA_TTL_LOAN_AMT.value != 0 && document.MAINFORM.FA_TTL_LOAN_AMT.value != '') {
            SYF_FAEF_MPO_Financing_back('P');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        } else {
            SYF_FAEF_MPO_Financing_back('M');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        }
        //SYF_FAEF_Post_For_BPO();
        SYF_FAEF_Get_EXCH_RT6();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        exchRateOnLoadFlag = false;
        SYS_GetRefNo('FAEF_FINANCE', 'SYF_FAEF_Cal_RefNo');

        arrOptionV = ['1', '2', '4'];
        SYS_FilterOptions('FA_LOAN_IRATE_TYPE', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_InvFinance = function() {
    try {

        var LMTAPPRV; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var intchgtype; // Utility Auto Fix Comments
        var invref; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        document.MAINFORM.FA_PAID_INT_SUM.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        intchgtype = document.MAINFORM.FA_INT_CHG_TYPE.value;
        if (intchgtype == '' || intchgtype == null) {
            alert('Please input the interest charge type!');
            return;
        }
        SYS_GetDataForDO_S('InvFinanceforCE');
        num = SYS_getcurrRecordCount("InvFinance");
        if (num > 0) {
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        } else {
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        }
        node = SYS_getDoByXpath("InvFinance");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            SYS_setFieldValue(node, id, "FA_LOAN_INT_AMT", 0);
            SYS_setFieldValue(node, id, "FA_INV_LOAN_AMT", 0);
            SYS_setFieldValue(node, id, "FA_INV_LOAN_EBAL", 0);
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            document.MAINFORM.FA_TEMP2.value = invref;
            //sFieldList = "LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
            //sMappingList = "LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
            SYS_GetTableDataByRule_S('SYF_FAEF_Financing_SYF_FAEF_getDOdata_InvFinance_0', '1', 'Y');
            LMTAPPRV = SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value);
            SYS_setFieldValue(node, id, "FA_INV_LMT_APPRV", LMTAPPRV);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_invAllocation = function() {
    try {

        var LMT_FLG; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var invamt; // Utility Auto Fix Comments
        var invccy; // Utility Auto Fix Comments
        var invduedt; // Utility Auto Fix Comments
        var invno; // Utility Auto Fix Comments
        var invref; // Utility Auto Fix Comments
        var invvaldt; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var ref; // Utility Auto Fix Comments
        LMTS.Ext.deleteAll();

        node = SYS_getDoByXpath('InvFinance');
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            invno = SYS_getValFromRec(record, 'FA_DOC_NO');
            ref = document.MAINFORM.FA_SBR_REF.value;
            invamt = SYS_getValFromRec(record, 'FA_DOC_AMT');
            invccy = SYS_getValFromRec(record, 'FA_DOC_CCY');
            rate = document.MAINFORM.EXCH_RT6.value;
            invvaldt = SYS_getValFromRec(record, 'FA_DOC_VAL_DT');
            invduedt = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            //LMT_FLG = SYS_getValFromRec(record, 'FA_BA_FLG');

            // if (LMT_FLG == '1' && (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF')) {
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
                LMTS.Ext.invAllocation(invref, invno, ref, invamt, invccy, rate, SYS_BUSI_DATE, invvaldt, invduedt);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_EXCH_RT6 = function() {
    try {

        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT6');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT6, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Get_ratetype();
        SYF_FAEF_Cal_FA_LOAN_CCY();
        SYF_FAEF_Get_BaseDay_CCYDec();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_CCY, 'onChange');
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        //GetTrxCcyExchRt(document.MAINFORM.FA_DOC_CCY.value,document.MAINFORM.FA_SEL_ID.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IRT_SPREAD_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_CCY_onchange = function(event) {
    try {
        SYF_FAEF_Get_BaseDay_CCYDec();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_INT_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        //20080731
        //();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_PERC_onchange = function(event) {
    try {
        SYF_FAEF_Chk_MAX_LOAN_PERC();
        SYF_FAEF_Chk_FA_LOAN_PERC();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_GRC_DAY_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_PMT_GRC_DAY.value == '') {
            document.MAINFORM.FA_PMT_GRC_DAY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SEL_AC_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_LOAN_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_TTL_LOAN_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_BAL, 'onchange');
        SYF_FAEF_Cal_FA_SEL_AC_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_XBOR_RT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_LOAN_INT_RT();
        EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_RT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE.js", e);
    }
}