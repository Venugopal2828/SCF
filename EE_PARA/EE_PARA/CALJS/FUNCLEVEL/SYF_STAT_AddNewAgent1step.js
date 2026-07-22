var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewAgent1step.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewAgent1step.js", e);
    }
}

csFuncLevelProto.FLD_STAT_AGNT1_BK_ID_onchange = function(event) {
    try {
        SYM_STAT_AGNT1_BK_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewAgent1step.js", e);
    }
}