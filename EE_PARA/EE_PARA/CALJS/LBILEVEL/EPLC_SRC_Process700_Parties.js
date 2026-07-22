"path:SCRN/Library/EPLC/Process700_Parties.lbi";

var csLbiCompProto = {};

csLbiCompProto.AFTER_BENE_ID = function() {
    try {
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, "onchange");
    } catch (e) {
        DisExcpt("EPLC_SRC_Process700_Parties.js", e);
    }
}