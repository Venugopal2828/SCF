"path:SCRN/DO/R2TSU_RtgSummry_TrnsprtBySea017.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_TrnsprtBySea017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_TrnsprtBySea017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_TrnsprtBySea017.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        XPathCheck();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_TrnsprtBySea017.js", e);
    }
}

csDOScreenProto.XPathCheck = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2TrnsprtDataSet017.R2TrnsprtInf017.RtgSummaryR2.IndvTrnsprtR2.TransportBySeaR2" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2InsrncDataSet017.Dt_Trnsprt.TransportBySeaR2" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.Dt_Trnsprt.TransportBySeaR2") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PORT_LOAD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PORT_DSCH, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_VSSLNM, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_SEA_CARR_NM, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_RtgSummry_TrnsprtBySea017.js", e);
    }
}