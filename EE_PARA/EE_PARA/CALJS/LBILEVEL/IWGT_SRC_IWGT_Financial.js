"path:SCRN/Library/Main/IWGT_Financial.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_IWGT_Financial_IntFieldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'RegisterInward':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'M');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;

            case 'ProcessMT760':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'M');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;

            case 'InwardAdviseGtee':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            case 'RegInwAmend':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            case 'ProcessMT767':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;

            case 'RegInwardClaim':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;

            case 'AmendInwardClaim':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            case 'SettleClaim':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            case 'CloseInward':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            case 'ReinstateGteeLia':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            case 'ExpireInGtee':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            case 'ReopenGtee':
                SYT_ChangeFldClass(document.MAINFORM.GTEE_REF_NUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.LIAB_TRXCCY_AMT, 'P');
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_Financial.js", e);
    }
}