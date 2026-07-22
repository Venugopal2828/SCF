stp.setAutoProcess(true);
/* for C_MAIN_REF*/

var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);



/* for AMD_REF && NO_OF_AMD */
var C_MAIN_REF = stp.getFieldValue("C_MAIN_REF");
stp.SYS_getCUBK("NO_OF_AMD", "C_MAIN_REF");
//var NO_OF_AMD =stp.toInteger(stp.getFieldValue("NO_OF_AMD"))+1; marked by susie
var NO_OF_AMD = stp.toInteger(stp.getFieldValue("NO_OF_AMD"));

var ref = C_MAIN_REF + "-" + NO_OF_AMD;
stp.updateFieldValue("AMD_REF", ref);
stp.updateFieldValue("NO_OF_AMD", NO_OF_AMD);

/* for business control */
stp.updateFieldValue("CURRNT_STATUS", "IPLC_RECV_MT707");
stp.updateFieldValue("NXT_STATUS", "ISS_LC_AMD798");
stp.updateFieldValue("CLS_FLG", "No");


/* for Tag 39A */
var TAG_39A = stp.getSWIFTTagValue("39A");
var str = TAG_39A.split("/");
var POS_TOL = str[0];
var NEG_TOL = str[1];
if (TAG_39A != "" && TAG_39A != "null" && TAG_39A != null && TAG_39A != "undefined") {
    stp.updateFieldValue("NEW_POS_TOL", POS_TOL);
    stp.updateFieldValue("NEW_NEG_TOL", NEG_TOL);
}

/* for Tag 34B */
var nAMT;
var TAG34B = stp.getSWIFTTagValue("34B");
if (TAG34B != "") {
    stp.writeLog("TAG34B====" + TAG34B);
    var SLCY34B = TAG34B.substr(0, 3);
    var L_AMT34B = TAG34B.replace(SLCY34B, "");
    stp.writeLog("L_AMT34B====" + L_AMT34B);
    nAMT = L_AMT34B.indexOf(",");
    stp.writeLog("nAMT====" + nAMT);
    if (nAMT > -1) {
        stp.updateFieldValue("NEW_LC_BAL", L_AMT34B.substring(0, nAMT));
    }
}

/* for Tag 40E */
var TAG_40E = stp.getSWIFTTagValue("40E");
var str = TAG_40E.split("/");
var APLB_RULE = str[0];
var APLB_RULE_NARR = str[1];
if (TAG_40E != "" && TAG_40E != "null" && TAG_40E != null && TAG_40E != "undefined") {
    stp.updateFieldValue("NEW_APLB_RULE", APLB_RULE);
    stp.updateFieldValue("NEW_APLB_RULE_NARR", APLB_RULE_NARR);
}

/* for Tag 39C/44A/44E/44F/44B/44C/44D */
var TAG_39C = stp.getSWIFTTagValue("39C");
var TAG_44A = stp.getSWIFTTagValue("44A");
var TAG_44E = stp.getSWIFTTagValue("44E");
var TAG_44F = stp.getSWIFTTagValue("44F");
var TAG_44B = stp.getSWIFTTagValue("44B");
var TAG_44C = stp.getSWIFTTagValue("44C");
var TAG_44D = stp.getSWIFTTagValue("44D");

if (TAG_39C != "") {
    stp.updateFieldValue("NEW_ADDIT_COV_AMT", TAG_39C);
}
if (TAG_44A != "") {
    stp.updateFieldValue("NEW_LOAD_PLACE", TAG_44A);
}
if (TAG_44E != "") {
    stp.updateFieldValue("NEW_LOAD_PORT", TAG_44E);
}
if (TAG_44F != "") {
    stp.updateFieldValue("NEW_DEST_PORT", TAG_44F);
}
if (TAG_44B != "") {
    stp.updateFieldValue("NEW_DEST_PLACE", TAG_44B);
}
if (TAG_44C != "") {
    var YYYY = "20" + TAG_44C.substr(0, 2);
    var MM = TAG_44C.substr(2, 2);
    var DD = TAG_44C.substr(4, 2);
    var LTST_SHIP_DT = YYYY + "-" + MM + "-" + DD;
    stp.updateFieldValue("NEW_LTST_SHIP_DT", LTST_SHIP_DT);
}
if (TAG_44D != "") {
    stp.updateFieldValue("NEW_SHIP_PRD", TAG_44D);
}


/* it should be followed after parse C_MAIN_REF 
stp.setEventTimesFromTable("EPLC_MASTER"); */

/* tag13E */

stp.writeLog("tag13E----------START-----------");
var Tag13E = stp.getSWIFTTagValue("13E");
var s13EDATE = Tag13E.substr(0, 8);
var s13ETIME = Tag13E.substr(8, 4);
stp.updateFieldValue("X798_CRE_DATE", s13EDATE);
stp.updateFieldValue("X798_CRE_TIME", s13ETIME);
stp.writeLog("tag13E------------END----------");