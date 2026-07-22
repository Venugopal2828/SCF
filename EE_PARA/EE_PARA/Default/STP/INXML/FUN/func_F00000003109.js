stp.setAutoProcess(true);
/* for AMD_REF && NO_OF_AMD */
stp.writeLog("============EXCO_ReceiveAmtFromCE====start============");
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
var CUST_REF = stp.getXMLNodeValue("CUST_NO");
stp.writeLog("C_MAIN_REF=====" + C_MAIN_REF);
stp.writeLog("CUST_REF=====" + CUST_REF);
stp.updateFieldValue("CUST_REF", CUST_REF);
stp.updateFieldValue("WEB_REF", CUST_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);


stp.SYS_getCUBK("NO_OF_AMD", "C_MAIN_REF");
var NO_OF_AMD = stp.toInteger(stp.getFieldValue("NO_OF_AMD"));
if (NO_OF_AMD < 10) {
    NO_OF_AMD = '0' + NO_OF_AMD;
}
var ref = C_MAIN_REF + "-" + NO_OF_AMD;
stp.updateFieldValue("AMD_REF", ref);
stp.updateFieldValue("NO_OF_AMD", NO_OF_AMD);

stp.updateFieldValue("PMT_REF", "");
stp.updateFieldValue("CLS_FLG", "No");
stp.setGapiRule("EXCO_003_CretExptCollAmd");
stp.updateFieldValue("CURRNT_STATUS", "EXCO_ReceiveAmtFromCE");
stp.updateFieldValue("NXT_STATUS", "EXCO_AmendorDischarge");
stp.writeLog("============EXCO_ReceiveAmtFromCE====END============");