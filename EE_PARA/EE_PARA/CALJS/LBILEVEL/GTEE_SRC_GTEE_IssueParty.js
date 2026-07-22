"path:SCRN/Library/GTEE/GTEE_IssueParty.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_APPL_ADD1 = function() {
    try {
        if (document.MAINFORM.APPL_ID_BTN.value == "BANK") {
            SYS_InqCUBK('APPL_ID_BANK', 'APPL_ID', 'ID');
        } else {
            SYS_InqCUBK('APPL_ID_CUST', 'APPL_ID', 'ID');
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_GTEE_IssueParty.js", e);
    }
}

csLbiCompProto.Cal_APPL_MAIL_ADD = function() {
    try {
        if (document.MAINFORM.APPL_ID_BTN.value == "BANK") {
            SYS_InqCUBK('APPL_ID_BANK', 'APPL_ID', 'ID');
        } else {
            SYS_InqCUBK('APPL_ID_CUST', 'APPL_ID', 'ID');
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_GTEE_IssueParty.js", e);
    }
}

csLbiCompProto.lbi_LG_IssueParty_InitFldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'IssueOut1Step':
            case 'IssueOutAfterReg':
            case 'RegisterOutward':
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MOBILE_NO, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_TEL_NO, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CLASS, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.VAT_INV_NOTES, 'O');
                break;

            case 'AmdInAfterReg':
            case 'AmdFrmMT767':
            case 'AmdOutAfterReg':
            case 'AmdOutReg':
            case 'AmdOutward1Step':
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MOBILE_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_CORR_MEDIUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_EMAIL, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_FAX, 'P');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CLASS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'M');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CNTY_CD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CNTY_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CORR_MED, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_TAG, 'P');
                break;
            case 'AmdInReg':

                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_MOBILE_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
                break;
            case 'RcvAck':
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'M');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_TAG, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_CORR_MEDIUM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_EMAIL, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_FAX, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AGNT1_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD1, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD2, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ID, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'P');
                break;

            case 'RegisterGTEE':
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED1, 'M');
                SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_BR_CD, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APPL_ID_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APPL_SW_TAG, 'P');


                SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.BENE_SW_TAG, 'P');

                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_CORR_MED, 'M');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'P');

                SYT_ChangeFldClass(document.MAINFORM.INDEMN_NM, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD2, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD3, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_CORR_MED, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_ID_BTN, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_TAG, 'P');
                break;

            default:
                return;
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_GTEE_IssueParty.js", e);
    }
}