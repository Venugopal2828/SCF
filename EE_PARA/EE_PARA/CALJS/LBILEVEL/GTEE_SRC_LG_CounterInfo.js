"path:SCRN/Library/Main/LG/LG_CounterInfo.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_LG_CounterInfo_InitFldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'AmendFromMT760':
            case 'AmdInAfterReg':
            case 'InClaimIssue':
            case 'AmdOutAfterReg':
            case 'InwardClaimReg':
            case 'AmdOutReg':
            case 'AmdInReg':
            case 'DemMT767':
            case 'AmdOutward1Step':
            case 'AmdInward1Step':
            case 'Tracers':
                SYT_ChangeFldClass(document.MAINFORM.COUNTR_GTEE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'P');
                SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'P');
                break;
            case 'RegisterOutward':

                SYT_ChangeFldClass(document.MAINFORM.COUNTR_GTEE, 'O');
                SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'P');
                SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'P');
                break;

            case 'OutApReAmd':

                SYT_ChangeFldClass(document.MAINFORM.COUNTR_GTEE, 'O');
                SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'P');
                SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'P');

                break;


            default:
                return;
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_LG_CounterInfo.js", e);
    }
}