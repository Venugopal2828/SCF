"path:SCRN/Library/Party/Part/IWGT_BENE_GTEE.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_IWGT_BENE_GTEE_IntFieldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'RegisterInward':
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CLASS, 'O');
                break;
            case 'ProcessMT760':
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CLASS, 'O');
                break;
            case 'InwardAdviseGtee':
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CLASS, 'O');
                break;

            default:
                return;
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_BENE_GTEE.js", e);
    }
}

csLbiCompProto.FLD_IWGT_BENE_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_BENE_GTEE.js", e);
    }
}

csLbiCompProto.FLD_IWGT_BENE_EMAIL_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.BENE_EMAIL.value)) == true) {
            document.MAINFORM.BENE_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_BENE_GTEE.js", e);
    }
}

csLbiCompProto.FLD_IWGT_BENE_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_BENE_GTEE.js", e);
    }
}