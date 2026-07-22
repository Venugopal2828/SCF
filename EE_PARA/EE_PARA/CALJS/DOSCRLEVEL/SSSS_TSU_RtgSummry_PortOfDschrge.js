"path:SCRN/DO/TSU_RtgSummry_PortOfDschrge.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfDschrge.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfDschrge.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfDschrge.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        XPathCheck();
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfDschrge.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "NewTrnsprtDataSet.RtgSummry2.MltmdlTrnsprt2.PortOfDschrge") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PORT_DSCH, 'O', 'N');
        }

    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfDschrge.js", e);
    }
}

csDOScreenProto.XPathCheck = function() {
    try {
        if (SYS_DO_XPATH == "FowdDataSetRep.TrnsprtDataSet.TrnsprtInf.RtgSummry2.MltmdlTrnsprt2.PortOfDschrge") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_RTG_PORT_DSCH, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_PortOfDschrge.js", e);
    }
}