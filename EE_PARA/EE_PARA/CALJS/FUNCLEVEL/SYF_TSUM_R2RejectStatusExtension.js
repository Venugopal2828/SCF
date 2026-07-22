var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_TSU_REF = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RejectStatusExtension.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TSU_RL_MSG_ID.value = document.MAINFORM.TSU_MESSAGE_ID.value;
        SYF_TSUM_TSU_REF();
        document.MAINFORM.TSU_OUR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RejectStatusExtension.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var Perfix = 'SER';
        document.MAINFORM.TSU_MESSAGE_ID.value = Perfix + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RejectStatusExtension.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RejectStatusExtension.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2RejectStatusExtension.js", e);
    }
}