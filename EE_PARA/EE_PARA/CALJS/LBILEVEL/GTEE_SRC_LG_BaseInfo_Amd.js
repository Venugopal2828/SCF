"path:SCRN/Library/GTEE/LG_BaseInfo_Amd.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_LG_base_Amd_IntFldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'AmdOutward1Step':
            case 'OutApReAmd':
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AMD_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.NO_OF_AMD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'O');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'O');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_PLC, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'M');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_DT, 'P');
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_LG_BaseInfo_Amd.js", e);
    }
}