"path:SCRN/DO/TSUR2_TX_STS.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSUR2_TX_STS.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSUR2_TX_STS.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSUR2_TX_STS.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SYT_RemoveOption(document.MAINFORM.TSUR2_TRX_STATUS.name, "SUBM");
        SYT_RemoveOption(document.MAINFORM.TSUR2_TRX_STATUS.name, "INIT");

    } catch (e) {
        DisExcpt("SSSS_TSUR2_TX_STS.js", e);
    }
}