var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSUMRef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportSetUpRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSUMRef = function() {
    try {

        SYS_GetRefNo_S("ACRSUR", "SYF_TSUM_setTSUMRef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportSetUpRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSUMRef = function(ref) {
    try {

        var C_MAIN_REF = "";
        var TSU_MESSAGE_ID = "";
        TSU_MESSAGE_ID = "ARS" + ref;
        C_MAIN_REF = TSU_MESSAGE_ID;
        SYT_setFldValue("C_MAIN_REF", C_MAIN_REF);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportSetUpRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportSetUpRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportSetUpRequest.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_HOURS_NB_onchange = function(event) {
    try {
        var TSU_HOURS_NB = SYT_getFldValue("TSU_HOURS_NB");
        var reg = /^([0-2][0-3])|([0-1][4-9]):[0-5][0-9]:[0-5][0-9]$/;
        if (!reg.test(TSU_HOURS_NB)) {
            alert('The format of "Number Of Hours" is not right. The correct format is "hh:mm:ss"!');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportSetUpRequest.js", e);
    }
}