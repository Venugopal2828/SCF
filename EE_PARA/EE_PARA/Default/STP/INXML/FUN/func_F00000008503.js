stp.setAutoProcess(true);
/* for AMD_REF && NO_OF_AMD */
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.writeLog("C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
stp.SYS_getCUBK("NO_OF_AMD", "C_MAIN_REF");
var NO_OF_AMD = stp.toInteger(stp.getFieldValue("NO_OF_AMD")) + 1;
stp.writeLog("NO_OF_AMD=" + NO_OF_AMD);
stp.updateFieldValue("NO_OF_AMD", NO_OF_AMD);
if (NO_OF_AMD < 10) {
    NO_OF_AMD = '0' + NO_OF_AMD;
}

var ref = C_MAIN_REF + "-" + NO_OF_AMD;
stp.writeLog("NO_OF_AMD=" + NO_OF_AMD);
stp.writeLog("ref=" + ref);
stp.updateFieldValue("AMD_REF", ref);

stp.setGapiRule("OWGT_005_AmdApplctn");
stp.updateFieldValue("CURRNT_STATUS", "ReceiveGTEEAmtFromCE");
stp.updateFieldValue("NXT_STATUS", "ReviewGTEEAmtFrCE");