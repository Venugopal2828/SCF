stp.setAutoProcess(true);

/* create C_MAIN_REF */
var ref = stp.SYS_getRefNo("EPLC");
stp.setMainRef(ref);

/* Map ISSUE_BK_SW_ADD from B6 */
var TagB6 = stp.getSWIFTTagValue("B6");
var pre = TagB6.substr(14, 8);
var suf = TagB6.substr(23, 3);
var ISSUE_BK_SW_ADD = pre + suf;
stp.updateFieldValue("ISSUE_BK_SW_ADD", ISSUE_BK_SW_ADD);

/* for business control */
stp.updateFieldValue("CURRNT_STATUS", "RcvMT705");

/* for ISSUE_DT */
var sB6TAG = stp.getSWIFTTagValue("B6");
var year = sB6TAG.substr(8, 2);
var month = sB6TAG.substr(10, 2);
var day = sB6TAG.substr(12, 2);
var ISS_DT = '20' + year + '-' + month + '-' + day;
stp.updateFieldValue("PRE_ADV_DT", ISS_DT);

/*for BENE details*/
var TAG59 = stp.getSWIFTTagValue("59");
if (TAG59.substr(0, 1) == "/") {
    stp.updateFieldValue("BENE_ACNO", stp.getLineValue(TAG59, 1));
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59, 2));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59, 3));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59, 4));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59, 5));
} else {
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59, 1));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59, 2));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59, 3));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59, 4));
}
/*for ADV_THU_BK details*/
var TAG57A = stp.getSWIFTTagValue("57A");
if (TAG57A == "") {
    var TAG57D = stp.getSWIFTTagValue("57D");
    if (TAG57D.substr(0, 1) == "/") {
        stp.updateFieldValue("ADV_THU_BK_PARTY_ID", stp.getLineValue(TAG57D, 1));
        stp.updateFieldValue("ADV_THU_BK_NM", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("ADV_THU_BK_ADD1", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("ADV_THU_BK_ADD2", stp.getLineValue(TAG57D, 4));
        stp.updateFieldValue("ADV_THU_BK_ADD3", stp.getLineValue(TAG57D, 5));
    } else {
        stp.updateFieldValue("ADV_THU_BK_NM", stp.getLineValue(TAG57D, 1));
        stp.updateFieldValue("ADV_THU_BK_ADD1", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("ADV_THU_BK_ADD2", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("ADV_THU_BK_ADD3", stp.getLineValue(TAG57D, 4));
    }
} else {
    if (TAG57A.substr(0, 1) == "/") {
        stp.updateFieldValue("ADV_THU_BK_PARTY_ID", stp.getLineValue(TAG57A, 1));
        stp.updateFieldValue("ADV_THU_BK_SW_ADD", stp.getLineValue(TAG57A, 2));
    } else {
        stp.updateFieldValue("ADV_THU_BK_SW_ADD", stp.getLineValue(TAG57A, 1));
    }
}