stp.setAutoProcess(true);
stp.writeLog("============ReceiveAmendSBRfromCE====start============");
stp.setGapiRule("BKTS_FADA_009_ReqAmdSBR_ME");
var C_MAIN_REF = stp.getXMLNodeValue("FA_SBR_REF");
stp.writeLog("--------------C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);

var FA_BUSI_TYPE = stp.getXMLNodeValue("FA_BUSI_TYPE");
stp.writeLog("--------------FA_BUSI_TYPE=" + FA_BUSI_TYPE);
stp.updateFieldValue("FA_BUSI_TYPE", FA_BUSI_TYPE);

var FA_BUYER_NM = stp.getXMLNodeValue("FA_BUYER_NM");
stp.writeLog("--------------FA_BUYER_NM=" + FA_BUYER_NM);
stp.updateFieldValue("FA_BUYER_NM", FA_BUYER_NM);

var FA_SEL_NM = stp.getXMLNodeValue("FA_SEL_NM");
stp.writeLog("--------------FA_SEL_NM=" + FA_SEL_NM);
stp.updateFieldValue("FA_SEL_NM", FA_SEL_NM);

var FA_SEL_ID = stp.getXMLNodeValue("FA_SEL_ID");
stp.writeLog("--------------FA_SEL_ID=" + FA_SEL_ID);
stp.updateFieldValue("FA_SEL_ID", FA_SEL_ID);

var FA_BUYER_ID = stp.getXMLNodeValue("FA_BUYER_ID");
stp.writeLog("--------------FA_BUYER_ID=" + FA_BUYER_ID);
stp.updateFieldValue("FA_BUYER_ID", FA_BUYER_ID);

var FA_LMT_CCY = stp.getXMLNodeValue("FA_LMT_CCY");
stp.writeLog("--------------FA_LMT_CCY=" + FA_LMT_CCY);
stp.updateFieldValue("FA_LMT_CCY", FA_LMT_CCY);

var FA_LMT_AMT = stp.getXMLNodeValue("FA_LMT_AMT");
stp.writeLog("--------------FA_LMT_AMT=" + FA_LMT_AMT);
stp.updateFieldValue("FA_LMT_AMT", FA_LMT_AMT);

var FA_SBR_CCY = stp.getXMLNodeValue("FA_SBR_CCY");
stp.writeLog("--------------FA_SBR_CCY=" + FA_SBR_CCY);
stp.updateFieldValue("FA_SBR_CCY", FA_SBR_CCY);

var FA_RELATION_STATUS = stp.getXMLNodeValue("FA_RELATION_STATUS");
stp.writeLog("--------------FA_RELATION_STATUS=" + FA_RELATION_STATUS);
stp.updateFieldValue("FA_RELATION_STATUS", FA_RELATION_STATUS);

stp.writeLog("============ReceiveAmendSBRfromCE====END============");