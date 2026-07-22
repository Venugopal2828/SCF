var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        //document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.SYND_ACTION_REF.value;
        document.MAINFORM.SYND_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_ACTION.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SHOW_HIDE_TradeEventDate();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_ACTION.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_ACTION.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_ACTION.js", e);
    }
}