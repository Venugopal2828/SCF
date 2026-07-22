"path:SCRN/DO/TSU_RtgSummry_MltmdlTrnsprt.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "LineItmDtls.RtgSummry.MltmdlTrnsprt") {
            SYS_checkDoAdd('LineItmDtls.RtgSummry.IndvTrnsprt');
        }
        if (SYS_DO_XPATH == "RoutingSummary.MltmdlTrnsprt") {
            SYS_checkDoAdd('RoutingSummary.IndvTrnsprt');
        }
        if (SYS_DO_XPATH == "NewTrnsprtDataSet.RtgSummry2.MltmdlTrnsprt2") {
            SYS_checkDoAdd('NewTrnsprtDataSet.RtgSummry2.IndvTrnsprt2');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_MltmdlTrnsprt.js", e);
    }
}