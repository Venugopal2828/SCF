var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if ('RE' != SYS_FUNCTION_TYPE && 'EC' != SYS_FUNCTION_TYPE && 'IQ' != SYS_FUNCTION_TYPE) {
            SYS_GetDataForDO_S("GET_Establish_DO", "N", false, '', "FincAmend");
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'RE') {
            if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Amend Rate') {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}

csFuncLevelProto.FLD_CFNC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_CFNC_FinanceAmendment.js", e);
    }
}