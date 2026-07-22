stp.setAutoProcess(true);
stp.writeLog("@@@@@@START@@@@@@");
stp.setEventTimes(0);

var sTag20 = stp.getSWIFTTagValue("20");
stp.updateFieldValue("LC_NO", sTag20);
stp.writeLog("LC_NO==" + sTag20);
var LC_NO = stp.getFieldValue("LC_NO");
stp.SYS_getCUBK("C_MAIN_REF_722", "LC_NO");

/* tag13E */
stp.writeLog("tag13E@@@@@@START@@@@@@");
var Tag13E = stp.getSWIFTTagValue("13E");
var s13EDATE = Tag13E.substr(0, 7);
var s13ETIME = Tag13E.substr(8, 11);
stp.updateFieldValue("X798_CRE_DATE", s13EDATE);
stp.updateFieldValue("X798_CRE_TIME", s13ETIME);
stp.writeLog("tag13E@@@@@@END@@@@@@");


/*for 52 details*/
var TAG52A = stp.getSWIFTTagValue("52A");
if (TAG52A == "") {
    stp.updateFieldValue("ISSUE_BK_SW_TAG", "D");
    var TAG52D = stp.getSWIFTTagValue("52D");
    if (TAG52D.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_AC_NO", stp.getLineValue(TAG52D, 1));
        stp.updateFieldValue("ISSUE_BK_NM", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_ADD1", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_ADD2", stp.getLineValue(TAG52D, 4));
        stp.updateFieldValue("ISSUE_BK_ADD3", stp.getLineValue(TAG52D, 5));
    } else {
        stp.updateFieldValue("ISSUE_BK_NM", stp.getLineValue(TAG52D, 1));
        stp.updateFieldValue("ISSUE_BK_ADD1", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_ADD2", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_ADD3", stp.getLineValue(TAG52D, 4));
    }
} else {
    stp.updateFieldValue("ISSUE_BK_SW_TAG", "A");
    if (TAG52A.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_AC_NO", stp.getLineValue(TAG52A, 1));
        stp.updateFieldValue("ISSUE_BK_SW_ADD", stp.getLineValue(TAG52A, 2));
    } else {
        stp.updateFieldValue("ISSUE_BK_SW_ADD", stp.getLineValue(TAG52A, 1));
    }

}
/*for 52 details*/
var TAG58A = stp.getSWIFTTagValue("58A");
var TAG58C = stp.getSWIFTTagValue("58C");
if (TAG58A == "") {
    if (TAG58C == "") {
        stp.updateFieldValue("ADV_THU_BK_SW_TAG", "D");
        var TAG58D = stp.getSWIFTTagValue("58D");
        if (TAG58D.substr(0, 1) == "/") {
            stp.updateFieldValue("ADV_THU_BK_PARTY_ID", stp.getLineValue(TAG58D, 1));
            stp.updateFieldValue("ADV_THU_BK_NM", stp.getLineValue(TAG58D, 2));
            stp.updateFieldValue("ADV_THU_BK_ADD1", stp.getLineValue(TAG58D, 3));
            stp.updateFieldValue("ADV_THU_BK_ADD2", stp.getLineValue(TAG58D, 4));
            stp.updateFieldValue("ADV_THU_BK_ADD3", stp.getLineValue(TAG58D, 5));
        } else {
            stp.updateFieldValue("ADV_THU_BK_NM", stp.getLineValue(TAG58D, 1));
            stp.updateFieldValue("ADV_THU_BK_ADD1", stp.getLineValue(TAG58D, 2));
            stp.updateFieldValue("ADV_THU_BK_ADD2", stp.getLineValue(TAG58D, 3));
            stp.updateFieldValue("ADV_THU_BK_ADD3", stp.getLineValue(TAG58D, 4));
        }
    } else {
        stp.updateFieldValue("ADV_THU_BK_SW_TAG", "C");
        stp.updateFieldValue("AC_WT_BK_PARTY_ID", stp.getLineValue(TAG58C, 1));
    }
} else {
    stp.updateFieldValue("ADV_THU_BK_SW_TAG", "A");
    if (TAG58A.substr(0, 1) == "/") {
        stp.updateFieldValue("ADV_THU_BK_PARTY_ID", stp.getLineValue(TAG58A, 1));
        stp.updateFieldValue("ADV_THU_BK_SW_ADD", stp.getLineValue(TAG58A, 2));
    } else {
        stp.updateFieldValue("ADV_THU_BK_SW_ADD", stp.getLineValue(TAG58A, 1));
    }

}

var TAG59B = stp.getSWIFTTagValue("59B");
if (TAG59B.substr(0, 1) == "/") {
    stp.updateFieldValue("BENE_ACNO", stp.getLineValue(TAG59B, 1));
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59B, 2));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59B, 3));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59B, 4));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59B, 5));
} else {
    stp.updateFieldValue("BENE_NM", stp.getLineValue(TAG59B, 1));
    stp.updateFieldValue("BENE_ADD1", stp.getLineValue(TAG59B, 2));
    stp.updateFieldValue("BENE_ADD2", stp.getLineValue(TAG59B, 3));
    stp.updateFieldValue("BENE_ADD3", stp.getLineValue(TAG59B, 4));
}

var TAG59A = stp.getSWIFTTagValue("59A");
if (TAG59A.substr(0, 1) == "/") {
    stp.updateFieldValue("APPL_NM", stp.getLineValue(TAG59A, 2));
    stp.updateFieldValue("APPL_ADD1", stp.getLineValue(TAG59A, 3));
    stp.updateFieldValue("APPL_ADD2", stp.getLineValue(TAG59A, 4));
    stp.updateFieldValue("APPL_ADD3", stp.getLineValue(TAG59A, 5));
} else {
    stp.updateFieldValue("APPL_NM", stp.getLineValue(TAG59A, 1));
    stp.updateFieldValue("APPL_ADD1", stp.getLineValue(TAG59A, 2));
    stp.updateFieldValue("APPL_ADD2", stp.getLineValue(TAG59A, 3));
    stp.updateFieldValue("APPL_ADD3", stp.getLineValue(TAG59A, 4));
}