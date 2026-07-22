stp.setEventTimes("0");
stp.setAutoProcess(true);
stp.writeLog("============EXCO_CreateColl_STP====start============");
var C_MAIN_REF = stp.SYS_getRefNo("EXCO");
var DRWR_ID = stp.getXMLNodeValue("unti-code");
stp.writeLog("DRWR_ID=" + DRWR_ID);
/*
stp.writeLog("DRWR_ID="+DRWR_ID);
stp.updateFieldValue("DRWR_ID",DRWR_ID);
stp.SYS_getCUBK("DRWR_ID","DRWR_ID");
*/
stp.setMainRef(C_MAIN_REF);
stp.writeLog("C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);

var DRWR_NM = stp.getXMLNodeValue("DRWR_NM");
stp.updateFieldValue("DRWR_NM", DRWR_NM);
var CUST_REF = stp.getXMLNodeValue("CUST_NO");
stp.writeLog("CUST_REF=" + CUST_REF);
stp.writeLog("CUST_REF=====" + CUST_REF);
stp.updateFieldValue("CUST_REF", CUST_REF);

stp.updateFieldValue("WEB_REF", CUST_REF);

//stp.updateFieldValue("CLS_FLG","No"); Mark by Hattie on 20190124 for 64739;
stp.updateFieldValue("CLS_FLG", "NO");
stp.setGapiRule("EXCO_001_CretExptColl");
/*stp.updateFieldValue("DRWR_ID",DRWR_ID);*/
stp.updateFieldValue("CURRNT_STATUS", "EXCO_CreateColl_STP");
stp.updateFieldValue("NXT_STATUS", "EXCO_CreateCollection_FromCE");

stp.writeLog("============EXCO_CreateColl_STP====end============");