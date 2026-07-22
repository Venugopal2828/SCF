"path:SCRN/o2m/FAEF_writeoff.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var docbal = 0;
var invloanbal = 0;

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_writeoff.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = 0;
        document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED';
    } catch (e) {
        DisExcpt("SSSS_FAEF_writeoff.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_writeoff.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_writeoff.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain('FA_PMT_VAL_DT');
        document.MAINFORM.CLERK_ID.value = SYS_getValueFromMain('CLERK_ID');
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        foramountformate();

    } catch (e) {
        DisExcpt("SSSS_FAEF_writeoff.js", e);
    }
}

csDOScreenProto.foramountformate = function() {
    try {
        document.MAINFORM.FA_DOC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        document.MAINFORM.FA_CRN_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CRN_AMT_SUM.value);
        document.MAINFORM.FA_PMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_writeoff.js", e);
    }
}