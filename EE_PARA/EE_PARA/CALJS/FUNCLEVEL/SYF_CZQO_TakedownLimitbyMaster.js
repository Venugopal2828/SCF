var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_CZQO_SetRefNo();
        document.MAINFORM.LM_PAY_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.LM_PARENT_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_CZQO_TakedownLimitbyMaster.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CZQO_TakedownLimitbyMaster.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CZQO_TakedownLimitbyMaster.js", e);
    }
}