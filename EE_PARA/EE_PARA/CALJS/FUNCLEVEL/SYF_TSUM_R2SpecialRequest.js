var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_setTSURef = function(ref) {
    try {

        var Prefix = 'SPCR';
        document.MAINFORM.TSU_MESSAGE_ID.value = Prefix + ref;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2SpecialRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSURef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSURef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2SpecialRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSURef();
        document.MAINFORM.TSUR2_NOTI_TP.value = '';
        document.MAINFORM.TSU_ADDITION_INFO.value = '';
    } catch (e) {
        DisExcpt("SYF_TSUM_R2SpecialRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2SpecialRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2SpecialRequest.js", e);
    }
}