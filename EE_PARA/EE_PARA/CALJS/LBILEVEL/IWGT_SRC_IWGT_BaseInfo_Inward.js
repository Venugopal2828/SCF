"path:SCRN/Library/Main/IWGT_BaseInfo_Inward.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_BaseInfo_IntFldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case 'RegisterInward':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'M');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'M');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'M');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M');
                break;

            case 'ProcessMT760':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'M');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'O');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M');
                break;


            case 'InwardAdviseGtee':

                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');


                break;

            case 'RegisterInwAmend':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;
            case 'ProcessMT767':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                break;

            case 'AdviseInAmend':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                break;
            case 'AppRejAmd':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                break;

            case 'RegInwardClaim':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;
            case 'AmendInwardClaim':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;
            case 'SettleClaim':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.MTHD_OF_ISS, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;
            case 'CloseInward':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;
            case 'ReinstateGteeLia':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;
            case 'ExpireInGtee':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;
            case 'ReopenGtee':
                SYT_ChangeFldClass(document.MAINFORM.INWARD_RCV_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AUTO_RENEW, 'P');
                SYT_ChangeFldClass(document.MAINFORM.REG_DT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FXD_EXPIRY, 'P');
                break;

            default:
                return;
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_BaseInfo_Inward.js", e);
    }
}