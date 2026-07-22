"path:SCRN/DO/TSU_RtgSummry_PortOfLoadng.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfLoadng.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfLoadng.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfLoadng.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        XPathCheck();
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfLoadng.js", e);
    }
}

csDOScreenProto.XPathCheck = function() {
    try {
        if (SYS_DO_XPATH == "FowdDataSetRep.TrnsprtDataSet.TrnsprtInf.RtgSummry2.MltmdlTrnsprt2.PortOfLoadng") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PORT_LOAD, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfLoadng.js", e);
    }
}