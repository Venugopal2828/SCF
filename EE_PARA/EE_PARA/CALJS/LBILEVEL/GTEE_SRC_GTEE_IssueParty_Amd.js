"path:SCRN/Library/GTEE/GTEE_IssueParty_Amd.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_LG_IssueParty_Amd_InitFldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {

            case 'AmdOutward1Step':
            case 'OutApReAmd':

                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CNTY_CD, 'M');
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_GTEE_IssueParty_Amd.js*lbi_LG_IssueParty_Amd_InitFldClass", e);
    }
}