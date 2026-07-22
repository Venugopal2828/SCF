"path:SCRN/DO/R2TSU_DT_CertInf.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_CertInf.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_CertInf.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_CertInf.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2OthrCertDataSet017.DT_CertInf") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_INF, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_CertInf.js", e);
    }
}