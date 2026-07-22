"path:SCRN/DO/TSU_RtgSummry_TrnsprtByRail017.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_TrnsprtByRail017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_TrnsprtByRail017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_TrnsprtByRail017.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2TrnsprtDataSet017.R2TrnsprtInf017.RtgSummaryR2.IndvTrnsprtR2.TransportByRail2" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2InsrncDataSet017.Dt_Trnsprt.TransportByRail2" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.Dt_Trnsprt.TransportByRail2") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PLC_RCT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PLC_DLV, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_RAIL_CARR_NM, 'P', 'N');
        }

    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_TrnsprtByRail017.js", e);
    }
}