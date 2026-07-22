"path:SCRN/o2m/FAEF_InvAdjust.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.FA_DOC_VERIFIED_onchange = function() {
    try {
        if (document.MAINFORM.FA_DOC_VERIFIED.value == "Hit") {
            document.MAINFORM.FA_DOC_STATUS.value = "Hit";
        } else {
            document.MAINFORM.FA_DOC_STATUS.value = "Reject";
        }
        if (document.MAINFORM.INV_POOL_STATUS.value == "IN") {
            document.MAINFORM.INV_POOL_STATUS.value = "OUT";
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvAdjust.js*FA_DOC_VERIFIED_onchange", e);
    }
}