var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.INSU_POLICY_NO.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_STAT_AddInsurance1Step.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddInsurance1Step.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_STAT_AddInsurance1Step.js", e);
    }
}

csFuncLevelProto.FLD_STAT_APPL_ID_onchange = function(event) {
    try {
        SYM_STAT_APPL_ID();
    } catch (e) {
        DisExcpt("SYF_STAT_AddInsurance1Step.js", e);
    }
}