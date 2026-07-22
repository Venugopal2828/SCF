stp.writeLog("===================START===============");
stp.setEventTimes("0");
stp.setAutoProcess(true);
var C_MAIN_REF = stp.SYS_getRefNo("GTEE");
stp.writeLog("C_MAIN_REF=" + C_MAIN_REF);
var APPL_ID = stp.getXMLNodeValue("unti-code");
var OUR_ROLE = stp.getXMLNodeValue("OUR_ROLE");
var GteeWord = stp.getXMLNodeValue("GteeWord");
stp.writeLog("APPL_ID=" + APPL_ID);
stp.SYS_getCUBK("APPL_ID", "APPL_ID");
stp.updateFieldValue("CLS_FLG", "NO");
if(OUR_ROLE =='Counter Undertaking'){
  stp.updateFieldValue("PURP_OF_MESS", "ISCO");
  stp.updateFieldValue("UNDERTAKING_TERMS_COND_LOCAL", GteeWord);
}
else{
  stp.updateFieldValue("PURP_OF_MESS", "ISSU");
}
stp.setGapiRule("OWGT_001_GteeApplctn");
stp.setMainRef(C_MAIN_REF);


stp.updateFieldValue("APPL_ID", APPL_ID);
stp.updateFieldValue("CURRNT_STATUS", "ReceiveGTEEFromCE");
stp.updateFieldValue("NXT_STATUS", "ReviewGTEEFromCE");
stp.writeLog("===================END===============");