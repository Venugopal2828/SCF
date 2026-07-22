stp.setAutoProcess(true);
stp.writeLog("============ReceivePOfromCE====start============");
stp.setGapiRule("BKTS_FAEF_016_PO");

var SBRREF = stp.getXMLNodeValue("FA_SBR_REF");
stp.writeLog("FA_SBR_REF=" + SBRREF);
pre = SBRREF.substr(0, 3);
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();

stp.updateFieldValue("TRX_DT", date);
stp.writeLog("FA_BUSI_TYPE=" + pre);
stp.writeLog("UnitCode=" + UnitCode);
stp.writeLog("BusiDate=" + date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var seqRef = stp.SYS_getRefNo("FAEF_INV_REF");
var sub = 'PO';
var C_MAIN_REF = pre + UnitCode + year + month + seqRef + sub;
stp.writeLog("---------------C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
stp.updateFieldValue("PO_REF", C_MAIN_REF);
stp.updateFieldValue("C_UNIT_CODE", UnitCode);

var FA_BUYER_NM = stp.getXMLNodeValue("FA_BUYER_NM");
var FA_SEL_NM = stp.getXMLNodeValue("FA_SEL_NM");
var PO_CCY = stp.getXMLNodeValue("PO_CCY");
var PO_AMT = stp.getXMLNodeValue("PO_AMT");
var PO_DT = stp.getXMLNodeValue("PO_DT");
var PO_NO = stp.getXMLNodeValue("PO_NO");
var FA_SBR_REF = stp.getXMLNodeValue("FA_SBR_REF");
var FA_CE_MAIN_REF = stp.getXMLNodeValue("FA_CE_MAIN_REF");
stp.updateFieldValue("FA_BUYER_NM", FA_BUYER_NM);
stp.updateFieldValue("FA_SEL_NM", FA_SEL_NM);
stp.updateFieldValue("PO_CCY", PO_CCY);
stp.updateFieldValue("PO_CCY", PO_CCY);
stp.updateFieldValue("PO_DT", PO_DT);
stp.updateFieldValue("PO_NO", PO_NO);
stp.updateFieldValue("FA_SBR_REF", FA_SBR_REF);
stp.updateFieldValue("FA_CE_MAIN_REF", FA_CE_MAIN_REF);

stp.updateFieldValue("PO_STATUS", 'UPLOADED');

var sellerNM = stp.getNodeValue("FA_SEL_NM");
var vFieldList = stp.addFieldList(null, "C_MAIN_REF");
var vCondition = stp.addSQLCondition(null, "PARTY_NM", sellerNM);
var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
var FA_SEL_ID = stp.getDBFieldValue(vResult, "C_MAIN_REF");
stp.updateFieldValue("FA_SEL_ID", FA_SEL_ID);

var buyerNM = stp.getNodeValue("FA_BUYER_NM");
var vFieldList = stp.addFieldList(null, "C_MAIN_REF");
var vCondition = stp.addSQLCondition(null, "PARTY_NM", buyerNM);
var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER", vFieldList, vCondition);
var FA_BUYER_ID = stp.getDBFieldValue(vResult, "C_MAIN_REF");
stp.updateFieldValue("FA_BUYER_ID", FA_BUYER_ID);
stp.writeLog("============ReceiveINVromCE====END============");