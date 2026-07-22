stp.setAutoProcess(true);
stp.writeLog("============ReceiveCAAfromCE====start============");
stp.setGapiRule("BKTS_FAEF_003_CCAR");
var C_MAIN_REF = stp.getXMLNodeValue("EE_C_MAIN_REF");
stp.writeLog("--------------C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
stp.writeLog("============ReceiveCAAfromCE====END============");