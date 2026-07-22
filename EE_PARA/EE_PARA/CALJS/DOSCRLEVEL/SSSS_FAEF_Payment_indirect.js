"path:SCRN/o2m/FAEF_Payment_indirect.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var bocbal = 0;
var invloanbal = 0;

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        //for historical data , give the value trx_dt back to real trx_dt
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT');
        document.MAINFORM.FA_LAST_PINT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_INV_LOAN_BAL.value = 0;
        forBAAmount();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.DOC_BAL = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = 0;
        document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.FA_INV_LOAN_BAL = function() {
    try {
        document.MAINFORM.FA_INV_LOAN_BAL.value = 0;
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT = function() {
    try {
        document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT13.value) - SYS_BeFloat(document.MAINFORM.FA_BK_CHG_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
        document.MAINFORM.FA_PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('IndirectPmt.Settle_loan');
        arrayvalue = SYS_getRecords(node);
        if (document.MAINFORM.FA_LOAN_VAL_DT.value != '' && document.MAINFORM.FA_LOAN_VAL_DT.value != null) {
            if (SYS_FUNCTION_TYPE == 'PM') {
                //SYS_GetDataForDO_S('SUBIndirectPmt');
                SYS_GetDataForDO_S("SUBIndirectPmt", "N", false, '', "Settle_loan");
            }
            IndirectPmt_Settle_loan(node);
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('FA_TEMP_TRX_DT');
        document.MAINFORM.FA_PMT_TYPE.value = SYS_getValueFromMain('FA_PMT_TYPE');
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain('FA_PMT_VAL_DT');
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain('FA_PMT_DT');
        document.MAINFORM.CLERK_ID.value = SYS_getValueFromMain('CLERK_ID');
        document.MAINFORM.FA_PMT_REF.value = SYS_getValueFromMain('FA_PMT_REF');
        document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED';
        document.MAINFORM.FA_PMT_CLEAR_TYPE.value = '1';
        //document.MAINFORM.FA_TEMP_AMT12.value = document.MAINFORM.FA_DOC_BAL.value;
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
        document.MAINFORM.FA_TEMP7.value = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name); // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_CLEAR_TYPE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_CLEAR_TYPE, 'O');
        }
        changeclass();
        DOC_BAL();
        FA_PMT_AMT();
        FA_INV_LOAN_BAL();
        document.MAINFORM.FA_PAID_PRIN_AMT.value = document.MAINFORM.FA_INV_LOAN_BAL.value;
        SetValForFA_Temp_dt2();
        SYS_GetTableDataByRule_S('SSSS_FAEF_Payment_indirect_PostconditionOnInit_0', '1', true);

        if (document.MAINFORM.FA_DSP_STATUS.value != '' && document.MAINFORM.FA_DSP_STATUS.value != null && document.MAINFORM.FA_DSP_STATUS.value != 3) {
            alert("There is unsettled dispute on this invoice!");
        }

    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.SetValForFA_Temp_dt2 = function() {
    try {
        var date; // Utility Auto Fix Comments
        var vDate; // Utility Auto Fix Comments
        var vDay; // Utility Auto Fix Comments
        var vMonth; // Utility Auto Fix Comments
        var vYear; // Utility Auto Fix Comments
        date = SYS_GetDateByIncrement('TRX_DT', 0, 0);
        vYear = date.getFullYear();
        vMonth = date.getMonth() + 1;
        vDay = date.getDate();
        if (vMonth < 10) {
            vMonth = "0" + vMonth;
        }
        if (vDay < 10) {
            vDay = "0" + vDay;
        }
        vDate = vYear.toString() + vMonth.toString() + vDay.toString();
        document.MAINFORM.FA_TEMP_DT2.value = vDate;
        SYS_FormatDate('FA_TEMP_DT2');
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.changeclass = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BK_CHG_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BK_CHG_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.forBAAmount = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
            document.MAINFORM.FA_TEMP_INV_BA.value = document.MAINFORM.FA_PMT_AMT.value;
            document.MAINFORM.FA_TEMP_CRN_BA.value = 0;
        }
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            document.MAINFORM.FA_TEMP_CRN_BA.value = document.MAINFORM.FA_PMT_AMT.value;
            document.MAINFORM.FA_TEMP_INV_BA.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.forbalance = function() {
    try {
        /*if(bocbal==''||bocbal==0){
	bocbal= 0;}
else{
	document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(bocbal);
}
if(invloanbal==''||invloanbal==0){
	invloanbal = 0;
}
else{
	document.MAINFORM.FA_INV_LOAN_BAL.value = SYS_BeFloat(invloanbal);
}*/
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.FA_BK_CHG_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_BK_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_BK_CHG_AMT.value);

        FA_PMT_AMT();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}

csDOScreenProto.FA_DEDUCT_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_DEDUCT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DEDUCT_AMT.value);

        FA_PMT_AMT();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Payment_indirect.js", e);
    }
}