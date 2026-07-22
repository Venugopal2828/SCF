stp.setAutoProcess(true);
/* for AMD_REF && NO_OF_AMD */
stp.writeLog("============EPLC_ReceiveAmtFromCE====start============");
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
var AmdmntRepns = stp.getXMLNodeValue("AmdmntRepns");
stp.updateFieldValue("BENE_CONS_FLG", AmdmntRepns);

/*stp.SYS_getCUBK("NO_OF_AMD","C_MAIN_REF");
var NO_OF_AMD=stp.toInteger(stp.getFieldValue("NO_OF_AMD"));*/
var NO_OF_AMD = stp.getXMLNodeValue("NoOfAmdmnt");
if (NO_OF_AMD < 10) {
    NO_OF_AMD = '0' + NO_OF_AMD;
}

if (AmdmntRepns == 'REJECTED') {
    stp.SYS_getCUBK("GET_OLD_VALUE", "C_MAIN_REF");
    var LC_AMT = stp.getFieldValue("LC_AMT");
    stp.updateFieldValue("NEW_LC_AMT", LC_AMT);
    var LC_BAL = stp.getFieldValue("LC_BAL");
    stp.updateFieldValue("NEW_LC_BAL", LC_BAL);
    stp.updateFieldValue("BASE_BAL", LC_BAL);
    stp.updateFieldValue("INC_AMT", 0);
    stp.updateFieldValue("DEC_AMT", 0);
}

var ref = C_MAIN_REF + "-" + NO_OF_AMD;

stp.updateFieldValue("AMD_REF", ref);
stp.writeLog("AMD_REF=" + ref);

stp.updateFieldValue("NO_OF_AMD", NO_OF_AMD);

stp.setGapiRule("EXLC_003_RsponAmdmntDesin");
stp.updateFieldValue("CURRNT_STATUS", "EPLC_ReceiveAmtFromCE");
stp.updateFieldValue("NXT_STATUS", "EPLC_RegisterAmendment");
stp.writeLog("============EPLC_ReceiveAmtFromCE====END============");