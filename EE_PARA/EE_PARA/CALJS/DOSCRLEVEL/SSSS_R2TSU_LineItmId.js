"path:SCRN/DO/R2TSU_LineItmId.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItmId.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItmId.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItmId.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.DT_LineItm.R2LineItmId") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_LNITMNB, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItmId.js", e);
    }
}