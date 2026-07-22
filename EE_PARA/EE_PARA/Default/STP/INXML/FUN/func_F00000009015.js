stp.setAutoProcess(true);
stp.writeLog("============ReceiveAmendAgreementfromCE====start============");
stp.setGapiRule("BKTS_FADA_006_RAA_ME");
var C_MAIN_REF = stp.getXMLNodeValue("FA_CONTRACT_REF");
stp.writeLog("--------------C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);

var FA_BUSI_FUNC = stp.getXMLNodeValue("FA_BUSI_FUNC");
stp.writeLog("--------------FA_BUSI_FUNC=" + FA_BUSI_FUNC);
stp.updateFieldValue("FA_BUSI_FUNC", FA_BUSI_FUNC);

var FA_AGM_DUE_DT = stp.getXMLNodeValue("FA_AGM_DUE_DT");
stp.writeLog("--------------FA_AGM_DUE_DT=" + FA_AGM_DUE_DT);
stp.updateFieldValue("FA_AGM_DUE_DT", FA_AGM_DUE_DT);

var FA_CUST_INSTR = stp.getXMLNodeValue("FA_CUST_INSTR");
stp.writeLog("--------------FA_CUST_INSTR=" + FA_CUST_INSTR);
stp.updateFieldValue("FA_CUST_INSTR", FA_CUST_INSTR);

var FA_CNTR_DOC_NO = stp.getXMLNodeValue("FA_CNTR_DOC_NO");
stp.writeLog("--------------FA_CNTR_DOC_NO=" + FA_CNTR_DOC_NO);
stp.updateFieldValue("FA_CNTR_DOC_NO", FA_CNTR_DOC_NO);

var FA_AGM_VAL_DT = stp.getXMLNodeValue("FA_AGM_VAL_DT");
stp.writeLog("--------------FA_AGM_VAL_DT=" + FA_AGM_VAL_DT);
stp.updateFieldValue("FA_AGM_VAL_DT", FA_AGM_VAL_DT);

var FA_ORG_DUE_DT = stp.getXMLNodeValue("FA_ORG_DUE_DT");
stp.writeLog("--------------FA_ORG_DUE_DT=" + FA_ORG_DUE_DT);
stp.updateFieldValue("FA_ORG_DUE_DT", FA_ORG_DUE_DT);

var FA_END_REASON = stp.getXMLNodeValue("FA_END_REASON");
stp.writeLog("--------------FA_END_REASON=" + FA_END_REASON);
stp.updateFieldValue("FA_END_REASON", FA_END_REASON);

var FA_APPL_LMT_AMT = stp.getXMLNodeValue("FA_APPL_LMT_AMT");
var FA_APPL_LMT_CCY = stp.getXMLNodeValue("FA_APPL_LMT_CCY");
var FA_BUYER_ID = stp.getXMLNodeValue("FA_BUYER_ID");
var FA_BUYER_NM = stp.getXMLNodeValue("FA_BUYER_NM");
var FA_LMT_TYPE = stp.getXMLNodeValue("FA_LMT_TYPE");
var FA_SEL_ID = stp.getXMLNodeValue("FA_SEL_ID");
var FA_SEL_NM = stp.getXMLNodeValue("FA_SEL_NM");
var FA_SERVICE_REQ = stp.getXMLNodeValue("FA_SERVICE_REQ");

var doRecords = stp.getRecords("DFAgreement");
for (var i = 0; i < doRecords.length; i++) {
    stp.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    stp.setDOValue(doRec, "FA_APPL_LMT_AMT", FA_APPL_LMT_AMT);
    stp.setDOValue(doRec, "FA_APPL_LMT_CCY", FA_APPL_LMT_CCY);
    stp.setDOValue(doRec, "FA_BUYER_ID", FA_BUYER_ID);
    stp.setDOValue(doRec, "FA_BUYER_NM", FA_BUYER_NM);
    stp.setDOValue(doRec, "FA_LMT_TYPE", FA_LMT_TYPE);
    stp.setDOValue(doRec, "FA_SEL_ID", FA_SEL_ID);
    stp.setDOValue(doRec, "FA_SEL_NM", FA_SEL_NM);
    stp.setDOValue(doRec, "FA_SERVICE_REQ", FA_SERVICE_REQ);
    stp.writeLog("---------------DO end----");
}

var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.writeLog("UnitCode=" + UnitCode);
stp.writeLog("date=" + date);
var pre = stp.getXMLNodeValue("FA_BUSI_TYPE");
var year = date.substr(2, 2);
var month = date.substr(5, 2);
var doRecords = stp.getRecords("DFAgreement");
for (var i = 0; i < doRecords.length; i++) {
    stp.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    stp.writeLog("DOyear=" + year);
    stp.writeLog("DOmonth=" + month);
    var ref = stp.SYS_getRefNo("FADA_BUY_REF");
    var trxRef = pre + UnitCode + year + month + ref;
    stp.setDOValue(doRec, "FA_PCA_REF", trxRef);
    stp.writeLog("---------------FA_PCA_REF=" + trxRef);
    stp.writeLog("---------------DO end----");
}

stp.writeLog("============ReceiveAmendAgreementfromCE====END============");