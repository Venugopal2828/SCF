var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSURef();
        document.MAINFORM.TSU_OUR_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TSU_ACCP_AMDMB.value = document.MAINFORM.TSU_AMD_NO.value;
        document.MAINFORM.TSU_TRX_AMD.value = "005";
        document.MAINFORM.SHORT_NAME.value = "005";
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptAmendment.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_SETTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptAmendment.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_SETTSURef = function(ref) {
    try {

        var TSU_MESSAGE_ID = "";
        document.MAINFORM.TSU_MESSAGE_ID.value = "ACC" + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2AcceptAmendment.js", e);
    }
}