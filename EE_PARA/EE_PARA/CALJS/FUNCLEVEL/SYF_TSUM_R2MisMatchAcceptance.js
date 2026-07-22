var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var Prefix = 'MMA';
        document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchAcceptance.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSURef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchAcceptance.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('Get013MismatchInfo');
            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchAcceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchAcceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchAcceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TSU_ACCEPT_MISMATCH.value = 'Y';
    } catch (e) {
        DisExcpt("SYF_TSUM_R2MisMatchAcceptance.js", e);
    }
}