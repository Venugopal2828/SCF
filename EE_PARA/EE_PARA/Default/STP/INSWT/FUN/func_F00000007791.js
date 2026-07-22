stp.setAutoProcess(true);
stp.writeLog("@@@@@@START@@@@@@");
stp.setEventTimes(0);
/* tag20 */



stp.writeLog("tag20@@@@@@START@@@@@@");
var sTag20 = stp.getSWIFTTagValue("20");
stp.updateFieldValue("DRAWING_REF", sTag20);
stp.writeLog("tag20:" + sTag20);

stp.writeLog("sTag20.length" + sTag20.length());
var C_MAIN_REF = sTag20.substr(0, sTag20.length() - 3);;

stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
/*tag12 */
stp.writeLog("tag12@@@@@@START@@@@@@");
var Tag12 = stp.getSWIFTTagValue("12");
stp.updateFieldValue("SUB_MESS_TYPE", Tag12);
stp.writeLog("tag12@@@@@@END@@@@@@");





/*for ADV_THU_BK details*/
var TAG57A = stp.getSWIFTTagValue("57A");
var TAG57B = stp.getSWIFTTagValue("57B");
var TAG57D = stp.getSWIFTTagValue("57D");
if (TAG57A == "") {
    stp.writeLog("TAG57D_1====" + TAG57D.substr(0, 1) + "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    if (TAG57B == "") {
        stp.writeLog("TAG57D_1====" + TAG57D.substr(0, 1) + "##########################");
        stp.updateFieldValue("AC_WT_BK_SW_TAG", "D");
        if (TAG57D.substr(0, 1) == "/") {
            stp.writeLog("TAG57D_1====" + TAG57D.substr(0, 1) + "$$$$$$$$$$$$$$$$");
            stp.writeLog("TAG57D_line_1====" + stp.getLineValue(TAG57D, 1) + "KKKKKKKKKKKKKKKKKKKKKKKK");
            stp.updateFieldValue("AC_WT_BK_PARTY_ID", stp.getLineValue(TAG57D, 1));
            stp.updateFieldValue("AC_WT_BK_NM", stp.getLineValue(TAG57D, 2));
            stp.updateFieldValue("AC_WT_BK_ADD1", stp.getLineValue(TAG57D, 3));
            stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57D, 4));
            stp.updateFieldValue("AC_WT_BK_ADD3", stp.getLineValue(TAG57D, 5));
        } else {
            stp.writeLog("TAG57D_1====" + TAG57D.substr(0, 1) + "@@@@@@@@@@@@@@@@@@@@@@@@");
            stp.updateFieldValue("AC_WT_BK_NM", stp.getLineValue(TAG57D, 1));
            stp.updateFieldValue("AC_WT_BK_ADD1", stp.getLineValue(TAG57D, 2));
            stp.updateFieldValue("AC_WT_BK_ADD2", stp.getLineValue(TAG57D, 3));
            stp.updateFieldValue("AC_WT_BK_ADD3", stp.getLineValue(TAG57D, 4));
        }
    } else {
        stp.updateFieldValue("AC_WT_BK_SW_TAG", "B");
        if (TAG57B.substr(0, 1) == "/") {
            stp.updateFieldValue("AC_WT_BK_PARTY_ID", stp.getLineValue(TAG57B, 1));
            stp.updateFieldValue("AC_WT_BK_LOCATION", stp.getLineValue(TAG57B, 2));
        } else {
            stp.updateFieldValue("AC_WT_BK_LOCATION", stp.getLineValue(TAG57B, 2));
        }
    }
} else {
    stp.updateFieldValue("AC_WT_BK_SW_TAG", "A");
    if (TAG57A.substr(0, 1) == "/") {
        stp.updateFieldValue("AC_WT_BK_PARTY_ID", stp.getLineValue(TAG57A, 1));
        stp.updateFieldValue("AC_WT_BK_SW_ADD", stp.getLineValue(TAG57A, 2));
    } else {
        stp.updateFieldValue("AC_WT_BK_SW_ADD", stp.getLineValue(TAG57A, 1));
    }

}