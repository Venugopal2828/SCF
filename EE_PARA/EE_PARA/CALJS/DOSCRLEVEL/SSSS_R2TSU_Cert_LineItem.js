"path:SCRN/DO/R2TSU_Cert_LineItem.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Cert_LineItem.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Cert_LineItem.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Cert_LineItem.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.DT_LineItm") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_PO_DT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PO_ID, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Cert_LineItem.js", e);
    }
}