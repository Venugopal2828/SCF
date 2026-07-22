var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_ORG_DUE_DT.value = document.MAINFORM.FA_AGM_DUE_DT.value;

        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            document.MAINFORM.FA_AGM_DUE_DT.value = '';
            document.MAINFORM.FA_END_REASON.value = '';
        } else if (document.MAINFORM.FA_BUSI_FUNC.value == '2') {
            document.MAINFORM.FA_AGM_DUE_DT.value = SYS_BUSI_DATE;
        } else {
            document.MAINFORM.FA_AGM_DUE_DT.value = '';
            document.MAINFORM.FA_END_REASON.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_MPO_FA_AGM_DUE_DT = function() {
    try {

        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            SYT_ChangeFldClass_New('FA_AGM_DUE_DT', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_AGM_DUE_DT', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_MPO_FA_AGM_DUE_DT();
        SYF_BPOM_CAL_FA_VALID_DAYS();
        SYF_BPOM_CAL_FA_END_REASON();
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_FA_VALID_DAYS = function() {
    try {

        if (document.MAINFORM.FA_BUSI_FUNC.value == '1') {
            document.MAINFORM.FA_VALID_DAYS.value = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
        } else {
            document.MAINFORM.FA_VALID_DAYS.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_FA_END_REASON = function() {
    try {

        if (document.MAINFORM.FA_BUSI_FUNC.value == '2') {
            SYT_ChangeFldClass_New('FA_END_REASON', 'M');
        } else {
            SYT_ChangeFldClass_New('FA_END_REASON', 'P'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BUSI_TP.value = 'AGREEMENT';
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_FA_AGM_DUE_DT_onchange = function(event) {
    try {
        SYF_BPOM_CAL_FA_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_FA_BUSI_FUNC_onchange = function(event) {
    try {
        SYF_BPOM_MPO_FA_AGM_DUE_DT();
        SYF_BPOM_CAL_FA_END_REASON();
        SYF_BPOM_CAL_FA_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_BPOM_AmendAgreement.js", e);
    }
}