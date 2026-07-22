"path:SCRN/DO/TSU_RtgSummry_IndvTrnsprt.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_IndvTrnsprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_IndvTrnsprt.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_IndvTrnsprt.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "RoutingSummary.IndvTrnsprt") {
            SYS_checkDoAdd('RoutingSummary.MltmdlTrnsprt');
        }
        if (SYS_DO_XPATH == "LineItmDtls.RtgSummry.IndvTrnsprt") {
            SYS_checkDoAdd('LineItmDtls.RtgSummry.MltmdlTrnsprt');
        }
        if (SYS_DO_XPATH == "NewTrnsprtDataSet.RtgSummry2.IndvTrnsprt2") {
            SYS_checkDoAdd('NewTrnsprtDataSet.RtgSummry2.MltmdlTrnsprt2');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_IndvTrnsprt.js", e);
    }
}