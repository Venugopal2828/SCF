stp.setAutoProcess(true);
stp.writeLog("============ReceiveINVCfromCEForUpdate====start============");
stp.setGapiRule("BKTS_INVCfromCEForUpdate");



var FA_DOC_REF = stp.getXMLNodeValue("FA_DOC_REF");
stp.writeLog("FA_DOC_REF=" + FA_DOC_REF);
stp.updateFieldValue("C_MAIN_REF", FA_DOC_REF);

var SBRREF = stp.getXMLNodeValue("FA_SBR_REF");
stp.writeLog("FA_SBR_REF=" + SBRREF);
var FA_DOC_STATUS = stp.getXMLNodeValue("FA_DOC_STATUS");
stp.writeLog("FA_DOC_STATUS=" + FA_DOC_STATUS);
stp.updateFieldValue("FA_DOC_STATUS", FA_DOC_STATUS);



stp.writeLog("============ReceiveINVCfromCEForUpdate====END============");

