var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_get_TSU_SUBMITR_BIC = function() {
    try {

        var TSU_SUBMITR_BIC = "";
        TSU_SUBMITR_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUBMITR_BIC", TSU_SUBMITR_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2TransactionReportRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2TransactionReportRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TSU_TRX_DTTM.value = SYS_BUSI_DATE;
        SYF_TSUM_get_TSU_SUBMITR_BIC();
        SYF_TSUM_getTSURef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2TransactionReportRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var C_MAIN_REF = "";
        var TSU_MESSAGE_ID = "";
        var TSU_SUBMITR_BIC = SYT_getFldValue("TSU_SUBMITR_BIC");

        C_MAIN_REF = TSU_SUBMITR_BIC + ref;
        TSU_MESSAGE_ID = "TRR" + C_MAIN_REF;
        SYT_setFldValue("C_MAIN_REF", TSU_MESSAGE_ID);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2TransactionReportRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2TransactionReportRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2TransactionReportRequest.js", e);
    }
}