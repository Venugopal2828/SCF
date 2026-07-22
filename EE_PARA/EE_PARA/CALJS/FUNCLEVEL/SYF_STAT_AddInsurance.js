var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddInsurance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddInsurance.js", e);
    }
}

csFuncLevelProto.FLD_STAT_APPL_ID_onchange = function(event) {
    try {
        SYM_STAT_APPL_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_AddInsurance.js", e);
    }
}