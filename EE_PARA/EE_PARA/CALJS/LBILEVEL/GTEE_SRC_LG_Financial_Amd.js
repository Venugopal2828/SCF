"path:SCRN/Library/GTEE/LG_Financial_Amd.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_LG_Finacial_Amd_IntFldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'AmdOutward1Step':
            case 'OutApReAmd':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.NEW_GTEE_AMT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_LG_Financial_Amd.js", e);
    }
}