"path:SCRN/Library/CFNC/CFNC_Main.lbi";

var csLbiCompProto = {};

csLbiCompProto.InitValues = function() {
    try {
        if (document.MAINFORM.FINC_TYPE.value == 'EXCO' || document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            document.getElementById("RELA_DRAW_REF").style.display = "none";
            document.getElementById("AVALIABLE_BY").style.display = "none";
        } else if (document.MAINFORM.FINC_TYPE.value == 'EPLC' || document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            document.getElementById("DELIVER_DOC_AGAINST").style.display = "none";
            document.getElementById("DAY_MON_FLG").style.display = "none";
        }
    } catch (e) {
        DisExcpt("CFNC_SRC_CFNC_Main.js", e);
    }
}