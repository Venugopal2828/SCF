stp.setAutoProcess(true);
stp.writeLog("============ReceiveINVfromCE====start============");
stp.setGapiRule("BKTS_FAEF_005_INVTF");

var SBRREF = stp.getXMLNodeValue("FA_SBR_REF");
stp.writeLog("FA_SBR_REF="+SBRREF);

var vFieldList=stp.addFieldList(null,"FA_BUSI_TYPE");
var vFieldList=stp.addFieldList(vFieldList,"FA_MAX_LOAN_PERC");
var vFieldList=stp.addFieldList(vFieldList,"FA_ACK_FLG");
var vCondition=stp.addSQLCondition(null,"C_MAIN_REF",SBRREF);
var vResult = stp.executeQuery("EXIMTRX.FADA_MASTER",vFieldList,vCondition);
var pre=stp.getDBFieldValue(vResult,"FA_BUSI_TYPE"); 
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var FA_MAX_LOAN_PERC=stp.getDBFieldValue(vResult,"FA_MAX_LOAN_PERC");
//stp.updateFieldValue("FA_MAX_LOAN_PERC", FA_MAX_LOAN_PERC);
stp.writeLog("---------------FA_MAX_LOAN_PERC=" + FA_MAX_LOAN_PERC);
var FA_ACK_FLG = stp.getDBFieldValue(vResult, "FA_ACK_FLG");
stp.writeLog("---------------FA_ACK_FLG=" + FA_ACK_FLG);


var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();

stp.updateFieldValue("FA_TRF_DT", date);
stp.updateFieldValue("TRX_DT", date);
stp.writeLog("FA_BUSI_TYPE="+pre);
stp.writeLog("UnitCode="+UnitCode);
stp.writeLog("BusiDate="+date);
year = date.substr(2,2);
month = date.substr(5,2);
var seqRef = stp.SYS_getRefNo("FAEF_INV_REF");
var sub = 'INV';
var C_MAIN_REF = pre + UnitCode + year + month + seqRef + sub;
stp.writeLog("---------------C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
stp.updateFieldValue("FA_DOC_REF", C_MAIN_REF);
stp.updateFieldValue("FA_INV_LINK_REF", C_MAIN_REF);
stp.updateFieldValue("C_UNIT_CODE", UnitCode);

var FA_BUYER_NM = stp.getXMLNodeValue("FA_BUYER_NM");
var FA_SEL_NM = stp.getXMLNodeValue("FA_SEL_NM");
var FA_DOC_CCY = stp.getXMLNodeValue("FA_DOC_CCY");
var FA_DOC_AMT = stp.getXMLNodeValue("FA_DOC_AMT");
var FA_DOC_DT = stp.getXMLNodeValue("FA_DOC_DT");
var FA_DOC_DUE_DT = stp.getXMLNodeValue("FA_DOC_DUE_DT");
var FA_DOC_NO = stp.getXMLNodeValue("FA_DOC_NO");
var FSBC_REF = stp.getXMLNodeValue("FA_SBR_REF");
var FA_CE_MAIN_REF = stp.getXMLNodeValue("FA_CE_MAIN_REF");
//var FA_ACK_FLG = stp.getXMLNodeValue("FA_ACK_FLG");  
//SCF ME TEST 20200826
stp.updateFieldValue("FA_ACK_FLG", FA_ACK_FLG);
stp.updateFieldValue("FA_BUYER_NM", FA_BUYER_NM);
stp.updateFieldValue("FA_SEL_NM", FA_SEL_NM);
stp.updateFieldValue("FA_DOC_CCY", FA_DOC_CCY);
stp.updateFieldValue("FA_DOC_AMT", FA_DOC_AMT);
stp.updateFieldValue("FA_DOC_BAL", FA_DOC_AMT);
stp.updateFieldValue("FA_DOC_DT", FA_DOC_DT);
stp.updateFieldValue("FA_DOC_VAL_DT", FA_DOC_DT);
stp.updateFieldValue("FA_DOC_DUE_DT", FA_DOC_DUE_DT);
stp.updateFieldValue("FA_DOC_NO", FA_DOC_NO);
stp.updateFieldValue("FA_CRN_INV_LINK_NO", FA_DOC_NO);
stp.updateFieldValue("FSBC_REF", FSBC_REF);
stp.updateFieldValue("FA_CE_MAIN_REF", FA_CE_MAIN_REF);
var FA_DOC_STATUS = stp.getXMLNodeValue("FA_DOC_STATUS");
//stp.updateFieldValue("FA_DOC_STATUS", 'UPLOADED');
stp.updateFieldValue("FA_DOC_TYPE", '1');


var sellerNM = stp.getNodeValue("FA_SEL_NM");
var vFieldList=stp.addFieldList(null,"C_MAIN_REF");
var vCondition=stp.addSQLCondition(null,"PARTY_NM",sellerNM);
var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER",vFieldList,vCondition);
var FA_SEL_ID=stp.getDBFieldValue(vResult,"C_MAIN_REF"); 
stp.updateFieldValue("FA_SEL_ID", FA_SEL_ID);

var buyerNM = stp.getNodeValue("FA_BUYER_NM");
var vFieldList=stp.addFieldList(null,"C_MAIN_REF");
var vCondition=stp.addSQLCondition(null,"PARTY_NM",buyerNM);
var vResult = stp.executeQuery("EXIMTRX.STAT_MASTER",vFieldList,vCondition);
var FA_BUYER_ID=stp.getDBFieldValue(vResult,"C_MAIN_REF"); 
stp.updateFieldValue("FA_BUYER_ID", FA_BUYER_ID);


var avalfunding=FA_MAX_LOAN_PERC*FA_DOC_AMT/100;
stp.writeLog("---------------avalfunding=" + avalfunding);


stp.writeLog("---------------FA_DOC_STATUS=" + FA_DOC_STATUS);
stp.updateFieldValue("FA_DOC_STATUS", FA_DOC_STATUS);
if (FA_DOC_STATUS == "Buyer Approved") {
if(FA_ACK_FLG == "Yes"){
    stp.updateFieldValue("FA_DOC_STATUS", "Bank Approved");
stp.updateFieldValue("FA_INVAMT_IN_LMT", avalfunding);
}else{
    stp.updateFieldValue("FA_DOC_STATUS", "Wait for bank approval");
stp.updateFieldValue("FA_INVAMT_IN_LMT", 0);
 }
} 
else if (FA_DOC_STATUS == "Wait for buyer approval"){
	if(FA_ACK_FLG == "Yes"){
stp.updateFieldValue("FA_INVAMT_IN_LMT", avalfunding);
}else{
stp.updateFieldValue("FA_INVAMT_IN_LMT", 0);
 }
}







stp.writeLog("============ReceiveINVromCE====END============");

