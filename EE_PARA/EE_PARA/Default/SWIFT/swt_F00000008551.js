var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_799 = DV.getFieldValue("TRM_TO_BK_SW_ADD");
var sB2_730 = DV.getFieldValue("ISSUE_BK_SW_ADD");
var sB2_799 = DV.getFieldValue("ISSUE_BK_SW_ADD");

var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");
var sResult_730 = DV.checkRMA(sB1, sB2_730, "730");
var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");

var MSGTYPE = DV.getFieldValue("MESG_TYPE");
var CLMSETTLETHRU = DV.getFieldValue("CLM_STLMNT_THU");

if (MSGTYPE == 'MT799') {
    if (sResult_799 == "TRUE") {
        DV.appendSWIFT("SSSS_SWFMT799");
    } else {
        var arr_para = new Array(sB1, sB2_799, "799");
        DV.throwException('1847', arr_para);
    }
}

if (MSGTYPE == 'MT999') {
    DV.appendSWIFT("SSSS_SWFMT999");
}
var MT798_FLG = DV.getFieldValue("APPLY_FLG");
if (MT798_FLG == "YES") {
    DV.appendSWIFT("GTEE_OUT_MT781");

}