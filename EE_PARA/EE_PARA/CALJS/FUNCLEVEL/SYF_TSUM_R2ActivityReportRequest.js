var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_TSUM_get_DateTime();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_get_DateTime = function() {
    try {

        var TSU_FROM_DT = SYT_getFldValue("TSU_FROM_DT");
        var TSU_TO_DT = SYT_getFldValue("TSU_TO_DT");
        var TSU_FROM_DT_TM = "";
        var TSU_TO_DT_TM = "";
        TSU_FROM_DT_TM = TSU_FROM_DT + "T" + "00:00:00";
        if (document.MAINFORM.TSU_TO_DT.value != null && document.MAINFORM.TSU_TO_DT.value != '') {
            TSU_TO_DT_TM = TSU_TO_DT + "T" + "23:59:59";
        }
        SYT_setFldValue("TSU_FROM_DT_TM", TSU_FROM_DT_TM);
        SYT_setFldValue("TSU_TO_DT_TM", TSU_TO_DT_TM);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportRequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_getTSUMRef();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_getTSUMRef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_setTSUMRef");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportRequest.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_setTSUMRef = function(ref) {
    try {

        var C_MAIN_REF = "";
        var TSU_MESSAGE_ID = "";

        TSU_MESSAGE_ID = "ARR" + ref;
        C_MAIN_REF = TSU_MESSAGE_ID;

        SYT_setFldValue("C_MAIN_REF", C_MAIN_REF);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2ActivityReportRequest.js", e);
    }
}