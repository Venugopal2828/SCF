var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusChangeRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TSUR2_TRX_STATUS.value = document.MAINFORM.TSU_REQ_STS.value;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusChangeRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_TSU_SUBMITR_BIC();
        SYF_TSUM_getTSURef();
        document.MAINFORM.TSU_REQ_STS.value = document.MAINFORM.TSU_PROPSD_STS.value;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusChangeRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_SUBMITR_BIC = function() {
    try {

        var TSU_SUBMITR_BIC = "";
        TSU_SUBMITR_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUBMITR_BIC", TSU_SUBMITR_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusChangeRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var Prefix = 'SCRA';
        document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusChangeRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusChangeRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusChangeRequest.js", e);
    }
}