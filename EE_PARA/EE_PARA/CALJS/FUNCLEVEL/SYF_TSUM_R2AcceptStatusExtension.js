var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TSU_RL_MSG_ID.value = document.MAINFORM.TSU_MESSAGE_ID.value;
        SYF_TSUM_getTSURef();
        document.MAINFORM.TSU_OUR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusExtension.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_SETTSUREF = function(ref) {
    try {

        var TSU_MESSAGE_ID = "";
        document.MAINFORM.TSU_MESSAGE_ID.value = "SEA" + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusExtension.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo('TSUM', 'SYF_TSUM_SETTSUREF')
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusExtension.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusExtension.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptStatusExtension.js", e);
    }
}