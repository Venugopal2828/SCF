var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('BPOM_SIGN', 'SYF_BPOM_setRef');
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_AGM_VAL_DT.value = SYS_BUSI_DATE;
        SYF_BPOM_CAL_FA_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_setRef = function(ref) {
    try {

        var mainRef = ref;
        document.MAINFORM.C_MAIN_REF.value = mainRef;
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_GETCUBK_CUST_ID = function() {
    try {

        if (document.MAINFORM.CUST_ID.value == '') {
            document.MAINFORM.CUST_NM.value = '';
        } else {
            SYS_GetCUBK_S('CUST_ID', 'CUST_ID');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_FA_VALID_DAYS = function() {
    try {

        document.MAINFORM.FA_VALID_DAYS.value = SYS_GetSubDays(document.MAINFORM.FA_AGM_VAL_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BUSI_TP.value = 'AGREEMENT';
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CUST_ID_onchange = function(event) {
    try {
        SYF_BPOM_GETCUBK_CUST_ID();
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_FA_AGM_DUE_DT_onchange = function(event) {
    try {
        SYF_BPOM_CAL_FA_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_FA_AGM_VAL_DT_onchange = function(event) {
    try {
        SYF_BPOM_CAL_FA_VALID_DAYS();
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_button_onclick = function(event) {
    try {
        SYS_InqCUBK('CUST_ID');
    } catch (e) {
        DisExcpt("SYF_BPOM_SignAgreement.js", e);
    }
}