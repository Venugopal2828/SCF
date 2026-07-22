var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.C_MAIN_REF, 'P');
    } catch (e) {
        DisExcpt("SYF_STAT_EditAgent.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_EditAgent.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_EditAgent.js", e);
    }
}

csFuncLevelProto.FLD_STAT_AGNT1_BK_ID_onchange = function(event) {
    try {
        SYM_STAT_AGNT1_BK_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_EditAgent.js", e);
    }
}