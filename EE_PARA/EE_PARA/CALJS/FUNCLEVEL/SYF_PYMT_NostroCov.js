var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_SetRefNo = function(sRef) {
    try {

        document.MAINFORM.C_MAIN_REF.value = sRef;
    } catch (e) {
        DisExcpt("SYF_PYMT_NostroCov.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo("PYMT", "SYF_PYMT_SetRefNo");
    } catch (e) {
        DisExcpt("SYF_PYMT_NostroCov.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_NostroCov.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_NostroCov.js", e);
    }
}