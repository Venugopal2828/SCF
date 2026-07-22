"path:SCRN/Library/EPLC/TENOR.lbi";

var csLbiCompProto = {};

csLbiCompProto.CLASS_42C42a = function() {
    try {
        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
        var nSYS_ORG_FUNCTION_SHORT_NAME = SYS_ORG_FUNCTION_SHORT_NAME;
        switch (nSYS_ORG_FUNCTION_SHORT_NAME) {
            case "AdvLC":
            case "AdvLCOneStep":
            case "AmdOneStep":
            case "BeneAmdResponse":
            case "Proc700After705":
            case "ProcMT700X":
            case "ProcMT707":
            case "RegAmd":
            case "RegisterDocsnot":
            case "RegLC":
                SYM_EPLC_CALL_FOR_DRAFTS_AT();
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("EPLC_SRC_TENOR.js", e);
    }
}