"path:SCRN/Library/Party/Part/IWGT_APPL_BRCH_GTEE.lbi";

var csLbiCompProto = {};

csLbiCompProto.IWGT_APPL_BRCH_GTEE = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'ProcessMT760':
            case 'AdviseInAmend':
            case 'AppRejAmd':
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'O');
                break;
            case 'RegisterInward':
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'O');
                break;
            case 'InwardAdviseGtee':
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'O');
                break;

            default:
                return;
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_APPL_BRCH_GTEE.js", e);
    }
}

csLbiCompProto.FLD_IWGT_APPL_EMAIL_1_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.APPL_EMAIL_1.value)) == true) {
            document.MAINFORM.APPL_EMAIL_1.value = '';
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_APPL_BRCH_GTEE.js", e);
    }
}