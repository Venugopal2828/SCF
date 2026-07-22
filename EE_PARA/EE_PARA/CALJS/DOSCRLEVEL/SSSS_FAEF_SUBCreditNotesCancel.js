"path:SCRN/o2m/FAEF_SUBCreditNotesCancel.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CCY_AMT = function() {
    try {
        document.MAINFORM.FA_DOC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        FA_RET_BAL();
    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}

csDOScreenProto.FA_RET_BAL = function() {
    try {
        var exRt; // Utility Auto Fix Comments
        document.MAINFORM.FA_TEMP_AMT7.value = document.MAINFORM.FA_FIN_RET_BAL.value;
        document.MAINFORM.FA_FIN_RET_BAL.value = Math.max((SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT7.value) - SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value)), 0);
        document.MAINFORM.FA_TEMP_AMT8.value = Math.min(SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT7.value), SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value));
        exRt = SYS_BeFloat(document.MAINFORM.FA_TRF_FX_RT.value);
        document.MAINFORM.TEMP_AMT18.value = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) * exRt);
    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.FA_DOC_BAL.value = 0;
            document.MAINFORM.FA_DOC_STATUS.value = 'CANCEL';
            document.MAINFORM.FA_MSG_FUNC.value = '9';
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID; // Utility Auto Fix Comments
            //document.MAINFORM.FA_TEMP4.valuee=document.MAINFORM.FA_DOC_NO.value;
            document.MAINFORM.FA_BUSI_STATUS.value = SYS_getValueFromMain('FA_BUSI_STATUS');
        }

        CCY_AMT();
        //sSQLWhere = "FA_DOC_REF = '" + document.MAINFORM.FA_INV_LINK_REF.value + "'";
        //sTableName = "INVC_MASTER";
        //sFieldList = "FA_FIN_RET_BAL;FA_INV_LOAN_BAL;FA_TRF_FX_RT";
        //sMappingList = "FA_FIN_RET_BAL;FA_INV_LOAN_BAL;FA_TRF_FX_RT";
        SYS_GetTableDataByRule_S('SSSS_FAEF_SUBCreditNotesCancel_PostconditionOnInit_0', '1', true);

    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}

csDOScreenProto.FA_TRF_FX_RT_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_SUBCreditNotesCancel.js", e);
    }
}