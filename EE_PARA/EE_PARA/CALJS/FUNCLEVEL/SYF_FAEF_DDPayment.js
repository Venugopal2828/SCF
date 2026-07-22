var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var lmt_bal = document.MAINFORM.FA_LMT_BAL.value;
        if (lmt_bal > 0) {
            document.MAINFORM.LM_CRED_LMT.value = document.MAINFORM.FA_PMT_AMT_SUM.value;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FAEF_Inv_Recheck()) {
           return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'PMT';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        SYS_GetRefNo_S('FAEF_PMT_GUR', 'SYF_FAEF_Cal_RefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_ExchRate_FIX_PENDING();
        }
        SYF_FAEF_Get_DOC_CCY();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        SYF_FAEF_Get_DDRate_ID();
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_CalDDFee = function() {
    try {
        var ChgTp = document.MAINFORM.FA_DD_CHG_TP.value;
        var Fixed = document.MAINFORM.FA_DD_CHG_FIX.value;
        var Percent = document.MAINFORM.FA_DD_CHG_SHA.value;
        var num = SYS_getcurrRecordCount("InvFinance");
        //document.MAINFORM.FA_LOAN_INT_SM_AMT.value =0;
        if (num > 0) {
            if (ChgTp == 'F') {
                document.MAINFORM.FA_LOAN_INT_SM_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_SBR_CCY.value, Fixed);
            } else {
                document.MAINFORM.FA_LOAN_INT_SM_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_SBR_CCY.value, SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(Percent) / 100);
            }

        } else {
            document.MAINFORM.FA_LOAN_INT_SM_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_CalDDFee", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_SELBUY_AC_AMT = function() {
    try {
        var ChgBy = document.MAINFORM.CHG_PAID_BY.value;
        var FA_PMT_AMT_SUM = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value);
        if (FA_PMT_AMT_SUM > 0) {

            if (ChgBy == 'BY OUR CUST') {
                document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
                document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
                document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_SM_AMT.value);
                document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_AMT_CLEARED.value);
            } else if (ChgBy == 'BY COUNTER') {

                document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_SM_AMT.value);
                document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
                document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
                document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_AMT_CLEARED.value);
            }

        } else {
            document.MAINFORM.FA_SEL_AC_AMT.value = 0;
            document.MAINFORM.FA_TTL_AMT_CLEARED.value = 0;
             var bb = SYS_getDoByXpath('MultiCreditSummary');
                     bb.clearAllDataSets(true);
               var cc = SYS_getDoByXpath('MultiDebitSummary');
                    // cc.clearAllDataSets(true); 
                     cc.clearAll();
                     //return false;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_Cal_FA_SELBUY_AC_AMT", e);
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
        year = date.substr(0, 4);
        document.MAINFORM.FA_LOAN_ID.value = pre + UnitCode + year.substr(2, 4) + ref + 'PMT';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_LOAN_ID.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Fail_Warning = function() {
    try {
        var Rate_ID = document.MAINFORM.TSU_PO_ID.value;
        if (Rate_ID == '') {
            alert("No DD Rate to use, please to set.");
            SYS_highTrxButton("_cancel");
            return false;

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_Fail_Warning", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DDDRate_ID = function() {
    try {
        SYS_GetTableDataByRule('Get_DD_Rate_Specific', '2', null, 'SYF_FAEF_Fail_Warning()', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_Get_DDDRate_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DDRate_ID = function() {
    try {
        SYS_GetTableDataByRule('Get_DD_Rate_Specific', '1', null, 'SYF_FAEF_Get_DDDRate_ID()', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_Get_DDRate_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOC_CCY = function() {
    try {
        var ccy;
        var sFieldList;
        var sMappingList;
        ccy = document.MAINFORM.FA_SEL_AC_CCY.value;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        SYS_GetTableDataByRule_S('GET_LOAN_CCY_FROM_INV', '1', null, 'Y', "Y");
        SYM_FAEF_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
        if (ccy != '' && ccy != null) {
            document.MAINFORM.FA_DOC_CCY.value = ccy;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_Get_DOC_CCY", e);
    }
}

csFuncLevelProto.SYF_FAEF_Inv_Recheck = function() {
    try {
        var id;
        var num; // Utility Auto Fix Comments
        var record;
        var arrayvalue;
        var mData;
        var mCRef = new HashMap();
        var ref='';
        num = SYS_getcurrRecordCount("InvFinance");
        node = SYS_getDoByXpath("InvFinance");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 1, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            var FA_LOAN_INT_RT = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');

            var FA_LOAN_DAYS = SYS_getValFromRec(record, 'FA_LOAN_DAYS');
            if (FA_LOAN_INT_RT == null || FA_LOAN_INT_RT == '' && FA_LOAN_DAYS > 0) {
                var docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                var ref = ref + docNo + '; ' ;
            }
        }
        if(ref.length!=0){
        alert("Invoice: " + ref + " have no available DD Rate Rule, can't do discount, please remove it.");
            return false;
          }
return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_Inv_Recheck", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {
        var actions; // Utility Auto Fix Comments
        var actionA;
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        var DDAmt;
        var CrAmt;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        var ChgBy = document.MAINFORM.CHG_PAID_BY.value;
        var int_ref = document.MAINFORM.C_MAIN_REF.value + 'INT';



        dcFlgs = "C/C/D"; //debit and credit group
        keyindex = document.MAINFORM.FA_SEL_ID.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value + "/" + document.MAINFORM.FA_DOC_CCY.value;
        payAMTs = document.MAINFORM.FA_SEL_AC_AMT.value + "/" + document.MAINFORM.FA_LOAN_INT_SM_AMT.value + "/" + document.MAINFORM.FA_TTL_AMT_CLEARED.value;
        descs = "Amount to Seller/Bank Fee Collect/Payment Amount";
        ccyProtecteFlgs = "N/N/N"; //protected ccy
        actions = "S/S/S"; //save
        actionA = "D/D/D"; //save
        merges = "N/N/N";
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_AMT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_SELBUY_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*FLD_FAEF_FA_PMT_AMT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_LOAN_AMT_onchange = function(event) {
    try {
        SYF_FAEF_CalDDFee();
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*FLD_FAEF_FA_TTL_LOAN_AMT_onchange", e);
    }
}