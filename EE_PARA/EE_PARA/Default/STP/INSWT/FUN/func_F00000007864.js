stp.setAutoProcess(true);
stp.writeLog("@@@@@@START@@@@@@");
stp.setEventTimes(0);

/* tag20 */
stp.writeLog("tag20@@@@@@START@@@@@@");
var sTag20 = stp.getSWIFTTagValue("20");
stp.updateFieldValue("C_MAIN_REF", sTag20);
stp.writeLog("tag20@@@@@@END@@@@@@");

/* for CLM_REF && CLM_CNTR */
var C_MAIN_REF = stp.getFieldValue("C_MAIN_REF");
stp.writeLog("C_MAIN_REF==" + C_MAIN_REF);
stp.SYS_getCUBK("CLM_CNTR", "C_MAIN_REF");
var CLM_CNTR = stp.toInteger(stp.getFieldValue("CLM_CNTR")) + 1;
stp.writeLog("CLM_CNTR======" + CLM_CNTR);
var ref = C_MAIN_REF + "/" + CLM_CNTR;
stp.updateFieldValue("CLM_REF", ref);
stp.updateFieldValue("CLM_CNTR", CLM_CNTR);


/*for tag57*/
var TAG57A = stp.getSWIFTTagValue("57A");
if (TAG57A == "") {
    var TAG57D = stp.getSWIFTTagValue("57D");
    if (TAG57D.substr(0, 1) == "/") {
        stp.updateFieldValue("AC_WT_BK_PARTY_ID", stp.getLineValue(TAG57D, 1));
        stp.updateFieldValue("AC_WT_BK_NM", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("AC_WT_BK_ADD1", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57D, 4));
        stp.updateFieldValue("AC_WT_BK_ADD3", stp.getLineValue(TAG57D, 5));
    } else {
        stp.updateFieldValue("AC_WT_BK_NM", stp.getLineValue(TAG57D, 1));
        stp.updateFieldValue("AC_WT_BK_ADD1", stp.getLineValue(TAG57D, 2));
        stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57D, 3));
        stp.updateFieldValue("AC_WT_BK_ADD3", stp.getLineValue(TAG57D, 4));
    }
} else {
    if (TAG57A.substr(0, 1) == "/") {
        stp.updateFieldValue("AC_WT_BK_PARTY_ID", stp.getLineValue(TAG57A, 1));
        stp.updateFieldValue("AC_WT_BK_SW_ADD", stp.getLineValue(TAG57A, 2));
    } else {
        stp.updateFieldValue("AC_WT_BK_SW_ADD", stp.getLineValue(TAG57A, 1));
    }

}

/*for 52 details*/
var TAG52A = stp.getSWIFTTagValue("52A");
if (TAG52A == "") {
    var TAG52D = stp.getSWIFTTagValue("52D");
    if (TAG52D.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_52_NM", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_52_ADD1", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_52_ADD2", stp.getLineValue(TAG52D, 4));
        stp.updateFieldValue("ISSUE_BK_52_ADD3", stp.getLineValue(TAG52D, 5));
    } else {
        stp.updateFieldValue("ISSUE_BK_52_NM", stp.getLineValue(TAG52D, 1));
        stp.updateFieldValue("ISSUE_BK_52_ADD1", stp.getLineValue(TAG52D, 2));
        stp.updateFieldValue("ISSUE_BK_52_ADD2", stp.getLineValue(TAG52D, 3));
        stp.updateFieldValue("ISSUE_BK_52_ADD3", stp.getLineValue(TAG52D, 4));
    }
} else {
    if (TAG52A.substr(0, 1) == "/") {
        stp.updateFieldValue("ISSUE_BK_52_SW_ADD", stp.getLineValue(TAG52A, 2));
    } else {
        stp.updateFieldValue("ISSUE_BK_52_SW_ADD", stp.getLineValue(TAG52A, 1));
    }

}