var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_get_TSU_SUBMITR_BIC = function() {
    try {

        var TSU_SUBMITR_BIC = "";
        TSU_SUBMITR_BIC = SYS_LOGIN_BIC;
        SYT_setFldValue("TSU_SUBMITR_BIC", TSU_SUBMITR_BIC);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusChangeRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var Prefix = 'SCRM';
        document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusChangeRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_get_TSU_SUBMITR_BIC();
        SYF_TSUM_getTSURef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusChangeRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusChangeRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusChangeRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusChangeRequest.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_REQ_STS_onchange = function(event) {
    try {
        if (document.MAINFORM.TSU_REQ_STS.value == 'ACTV') {
            if (document.MAINFORM.TSUR2_TRX_STATUS.value == 'ESTD') {
                alert('Current Status is ESTD,Can not Change to ACTV!')
            }
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2StatusChangeRequest.js", e);
    }
}