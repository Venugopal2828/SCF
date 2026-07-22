stp.writeLog("===================START===============");
stp.setAutoProcess(true);
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.setMainRef(C_MAIN_REF);
stp.updateFieldValue("CLS_FLG", "No");
stp.setGapiRule("IMLC_003_ResmtImpLcApplctn");
stp.updateFieldValue("NXT_STATUS", "ReviewLCFromCE");
stp.updateFieldValue("CURRNT_STATUS", "ResubmitLCFromCE");
stp.writeLog("===================END===============");