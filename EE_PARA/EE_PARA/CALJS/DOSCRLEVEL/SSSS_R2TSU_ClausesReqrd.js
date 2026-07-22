"path:SCRN/DO/R2TSU_ClausesReqrd.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ClausesReqrd.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ClausesReqrd.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ClausesReqrd.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2InsrncDataSet017.R2ClausesReqrd") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CLAUS_REQRD, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_ClausesReqrd.js", e);
    }
}