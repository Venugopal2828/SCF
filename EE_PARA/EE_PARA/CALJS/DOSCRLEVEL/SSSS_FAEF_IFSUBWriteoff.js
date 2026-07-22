"path:SCRN/o2m/FAEF_IFSUBWriteoff.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBWriteoff.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = 0;
        forBAAmt();
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBWriteoff.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBWriteoff.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBWriteoff.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        forBAAmt();
        foramountformate();
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain('FA_PMT_VAL_DT');
        document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.CLERK_ID.value = SYS_getValueFromMain('CLERK_ID');
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;

    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBWriteoff.js", e);
    }
}

csDOScreenProto.forBAAmt = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
            document.MAINFORM.FA_TEMP_INV_BA.value = document.MAINFORM.FA_DOC_BAL.value;
            document.MAINFORM.FA_TEMP_CRN_BA.value = 0;
            document.MAINFORM.FA_CRN_AMT_SUM.value = 0;
        }
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            document.MAINFORM.FA_TEMP_CRN_BA.value = document.MAINFORM.FA_DOC_BAL.value;
            document.MAINFORM.FA_TEMP_INV_BA.value = 0;
            document.MAINFORM.FA_CRN_AMT_SUM.value = document.MAINFORM.FA_DOC_BAL.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBWriteoff.js", e);
    }
}

csDOScreenProto.foramountformate = function() {
    try {
        document.MAINFORM.FA_DOC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        document.MAINFORM.FA_CRN_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CRN_AMT_SUM.value);
        document.MAINFORM.FA_PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_IFSUBWriteoff.js", e);
    }
}