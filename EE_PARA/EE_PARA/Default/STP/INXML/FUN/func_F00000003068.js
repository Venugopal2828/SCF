stp.setAutoProcess(true);
/* for AMD_REF && NO_OF_AMD */
stp.writeLog("============EPLC_ReceiveAmtFromCE====start============");
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
var AmdmntRepns = stp.getXMLNodeValue("AmdmntRepns");
stp.updateFieldValue("BENE_CONS_FLG", AmdmntRepns);

stp.SYS_getCUBK("NO_OF_AMD", "C_MAIN_REF");
var NO_OF_AMD = stp.toInteger(stp.getFieldValue("NO_OF_AMD"));
if (NO_OF_AMD < 10) {
    NO_OF_AMD = '0' + NO_OF_AMD;
}

var ref = C_MAIN_REF + "-" + NO_OF_AMD;
stp.updateFieldValue("AMD_REF", ref);
stp.updateFieldValue("NO_OF_AMD", NO_OF_AMD);

stp.setGapiRule("EPLC_EEIN");
stp.updateFieldValue("CURRNT_STATUS", "EPLC_ReceiveAmtFromCE");
stp.updateFieldValue("NXT_STATUS", "EPLC_RegisterAmendment");
stp.writeLog("============EPLC_ReceiveAmtFromCE====END============");