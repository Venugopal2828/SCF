"path:SCRN/DO/R2TSU_RtgSummry_MltmdlTrnsprt.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2TrnsprtDataSet017.R2TrnsprtInf017.RtgSummaryR2.R2MltmdlTrnsprt") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_FNL_DSTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_TAK_CHG, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}