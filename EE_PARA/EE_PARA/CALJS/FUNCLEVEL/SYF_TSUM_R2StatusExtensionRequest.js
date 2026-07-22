var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_get_DateTime = function() {
    try {

        //var TSUR2_EXT_DT = document.MAINFORM.TSUR2_EXT_DTTM.value;
        var TSUR2_EXT_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.TSUR2_EXT_DTTM.value); //Edit by amy for unformat date in 20140919
        var TSUR2_EXT_DT_TM = "";
        TSUR2_EXT_DT_TM = TSUR2_EXT_DT + "T" + "00:00:00";
        document.MAINFORM.TSUR2_EXT_DTTM.value = TSUR2_EXT_DT_TM;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_TSUM_get_DateTime();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_REF = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TSU_RL_MSG_ID.value = document.MAINFORM.TSU_MESSAGE_ID.value;
        SYF_TSUM_TSU_SUBMITR_BIC();
        SYF_TSUM_TSU_REF();
        document.MAINFORM.TSU_OUR_REF.value = document.MAINFORM.C_MAIN_REF.value;
        SYF_TSUM_TSU_STS_TOBXTXNDED();
        document.MAINFORM.TSUR2_EXT_DTTM.value = "";
        document.MAINFORM.TSUR2_REQ_EXT_DESC.value = "";
        document.MAINFORM.TSUR2_STS_NONXTNDED.value = document.MAINFORM.TSUR2_TRX_STATUS.value;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_SUBMITR_BIC = function() {
    try {

        var TSU_SUBMITR_BIC = "";
        TSU_SUBMITR_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUBMITR_BIC", TSU_SUBMITR_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_STS_TOBXTXNDED = function() {
    try {

        document.MAINFORM.TSUR2_STS_TOBXTNDED.value = document.MAINFORM.TSUR2_TRX_STATUS.value;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var Prefix = 'SER';
        document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusExtensionRequest.js", e);
    }
}