stp.setAutoProcess(true);
/* for C_MAIN_REF*/
var TAG21 = stp.getSWIFTTagValue("21");
if (TAG21 == "NONREF" || TAG21 == "") {
    stp.SYS_getCUBK("AMD_C_MAIN", "LC_NO");
} else {
    stp.updateFieldValue("C_MAIN_REF", TAG21);
}
/* for AMD_REF && NO_OF_AMD */
var C_MAIN_REF = stp.getFieldValue("C_MAIN_REF");
stp.SYS_getCUBK("NO_OF_AMD", "C_MAIN_REF");
var NO_OF_AMD = stp.toInteger(stp.getFieldValue("NO_OF_AMD")) + 1;

var ref = C_MAIN_REF + "-" + NO_OF_AMD;
stp.updateFieldValue("AMD_REF", ref);
stp.updateFieldValue("NO_OF_AMD", NO_OF_AMD);

/* for business control */
stp.updateFieldValue("CURRNT_STATUS", "RcvMT707");

/* for Tag 39A */
var TAG_39A = stp.getSWIFTTagValue("39A");
var str = TAG_39A.split("/");
var POS_TOL = str[0];
var NEG_TOL = str[1];
if (TAG_39A != "" && TAG_39A != "null" && TAG_39A != null && TAG_39A != "undefined") {
    stp.updateFieldValue("NEW_POS_TOL", POS_TOL);
    stp.updateFieldValue("NEW_NEG_TOL", NEG_TOL);
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
    stp.updateFieldValue("ADD_AMT_COVRD", TAG_39C);
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
var b58A = stp.getSWIFTTagValue("58A");
if (b58A.substr(0, 1) == "/") {
stp.updateFieldValue("NEW_CONF_BK_SW_ADD", stp.getLineValue(b58A, 2));
}else{
stp.updateFieldValue("NEW_CONF_BK_SW_ADD", stp.getLineValue(b58A, 1));	
}
var b58D = stp.getSWIFTTagValue("58D");
if (b58D.substr(0, 1) == "/") {
    stp.updateFieldValue("NEW_CONF_BK_NM", stp.getLineValue(b58D, 2));
    stp.updateFieldValue("NEW_CONF_BK_ADD1", stp.getLineValue(b58D, 3));
    stp.updateFieldValue("NEW_CONF_BK_ADD2", stp.getLineValue(b58D, 4));
    stp.updateFieldValue("NEW_CONF_BK_ADD3", stp.getLineValue(b58D, 5));
} else {
    stp.updateFieldValue("NEW_CONF_BK_NM", stp.getLineValue(b58D, 1));
    stp.updateFieldValue("NEW_CONF_BK_ADD1", stp.getLineValue(b58D, 2));
    stp.updateFieldValue("NEW_CONF_BKNEW_CONF_BK_ADD2", stp.getLineValue(b58D, 3));
    stp.updateFieldValue("NEW_CONF_BK_ADD3", stp.getLineValue(b58D, 4));
}

/*2024.01.22*/
var b59 = stp.getSWIFTTagValue("59");

if (b59.substr(0, 1) == "/") {
	stp.writeLog('start process tag59-acno');
    stp.updateFieldValue("NEW_BENE_ACNO", stp.getLineValue(b59, 1));
    stp.updateFieldValue("NEW_BENE_NM", stp.getLineValue(b59, 2));
    stp.updateFieldValue("NEW_BENE_ADD1", stp.getLineValue(b59, 3));
    stp.updateFieldValue("NEW_BENE_ADD2", stp.getLineValue(b59, 4));
    stp.updateFieldValue("NEW_BENE_ADD3", stp.getLineValue(b59, 5));
} else {
		stp.writeLog('start process tag59 w/o acno');
	stp.updateFieldValue("NEW_BENE_ACNO", '');	
    stp.updateFieldValue("NEW_BENE_NM", stp.getLineValue(b59, 1));
    stp.updateFieldValue("NEW_BENE_ADD1", stp.getLineValue(b59, 2));
    stp.updateFieldValue("NEW_BENE_ADD2", stp.getLineValue(b59, 3));
    stp.updateFieldValue("NEW_BENE_ADD3", stp.getLineValue(b59, 4));
}

var TAG41A = stp.getSWIFTTagValue("41A");
var AVAL_BY=stp.getLineValue(TAG41A, 2);
stp.writeLog("TAG41A====" + AVAL_BY);
var TAG42CMP = stp.getSWIFTTagValue("42C") + stp.getSWIFTTagValue("42M") + stp.getSWIFTTagValue("42P");
stp.writeLog("TAG42CMP====" + TAG42CMP);
if (TAG42CMP != "" && AVAL_BY != "BY PAYMENT" && AVAL_BY != "BY MIXED PYMT") {
    var TAG42CMP_TENOR_DAYS = parseInt(TAG42CMP);
    var TAG42CMP_TENOR_TYPE = TAG42CMP.substr(parseInt(TAG42CMP_TENOR_DAYS.toString().length) + 1, TAG42CMP.length - parseInt(TAG42CMP_TENOR_DAYS.toString().length) - 1);
if (isNaN(TAG42CMP_TENOR_DAYS)==true){
TAG42CMP_TENOR_DAYS = 0;
}
    stp.writeLog("TAG42CMP_TENOR_DAYS====" + TAG42CMP_TENOR_DAYS);
    stp.writeLog("TAG42CMP_TENOR_TYPE====" + TAG42CMP_TENOR_TYPE);
    stp.updateFieldValue("NEW_TENOR_DAYS", TAG42CMP_TENOR_DAYS);
    stp.updateFieldValue("NEW_TENOR_TYPE", TAG42CMP_TENOR_TYPE);
}

/* it should be followed after parse C_MAIN_REF 
stp.setEventTimesFromTable("EPLC_MASTER"); */