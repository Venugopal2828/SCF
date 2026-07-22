"path:SCRN/Library/Party/IWGT_ClaimParty_Inward.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_IWGT_ClaimParty_Inward_FLD = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'RegInwardClaim':
            case 'AmendInwardClaim':
            case 'SettleClaim':

                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_BTN, 'P');


                SYT_ChangeFldClass(document.MAINFORM.BENE_ACNO, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_BR_CD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_LANG, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_REF, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_BTN, 'P');



                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CORR_MED, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_TLX, 'O');

                SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_TO_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_BR_CODE, 'O');
                break;

            default:
                return;
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_ClaimParty_Inward.js", e);
    }
}