"path:SCRN/DO/R2TSU_DT_AddtlInf.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_AddtlInf.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_AddtlInf.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_AddtlInf.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.DT_AddtlInf") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ADDTL_INF, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DT_AddtlInf.js", e);
    }
}