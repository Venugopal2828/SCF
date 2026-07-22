"path:SCRN/DO/MultiCreditSummary.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiCreditSummary.js", e);
    }
}