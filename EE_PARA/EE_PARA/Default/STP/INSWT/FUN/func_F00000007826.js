stp.setAutoProcess(true);
stp.writeLog("@@@@@@START@@@@@@");
stp.setEventTimes(0);


stp.writeLog("tag20@@@@@@START@@@@@@");
var sTag21P = stp.getSWIFTTagValue("21P");
stp.updateFieldValue("C_MAIN_REF", sTag21P);
stp.writeLog("tag20@@@@@@END@@@@@@");


/*tag12 */
stp.writeLog("tag12@@@@@@START@@@@@@");
var Tag12 = stp.getSWIFTTagValue("12");
stp.updateFieldValue("SUB_MESS_TYPE", Tag12);
stp.writeLog("tag12@@@@@@END@@@@@@");

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