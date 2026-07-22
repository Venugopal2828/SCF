"path:SCRN/Library/Main/LG/LG_CommissionBillingInfo_GTEE.lbi";

var csLbiCompProto = {};

csLbiCompProto.lbi_LG_CommissionBillingInfo_GTEE_InitFldClass = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {

            case 'AmdOutward1Step':
            case 'OutApReAmd':
                SYT_ChangeFldClass(document.MAINFORM.CHG_POLICY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.COMM_START_DT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.VALID_FM_DT, 'P');

                break;

            default:
                return;
        }
    } catch (e) {
        DisExcpt("GTEE_SRC_LG_CommissionBillingInfo_GTEE.js", e);
    }
}