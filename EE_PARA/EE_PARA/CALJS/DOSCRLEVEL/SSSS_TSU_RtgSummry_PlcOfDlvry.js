"path:SCRN/DO/TSU_RtgSummry_PlcOfDlvry.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PlcOfDlvry.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PlcOfDlvry.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PlcOfDlvry.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        XPathCheck();
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PlcOfDlvry.js", e);
    }
}

csDOScreenProto.XPathCheck = function() {
    try {
        if (SYS_DO_XPATH == "FowdDataSetRep.TrnsprtDataSet.TrnsprtInf.RtgSummry2.MltmdlTrnsprt2.PlcOfDlvry") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PLC_DLV, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PlcOfDlvry.js", e);
    }
}