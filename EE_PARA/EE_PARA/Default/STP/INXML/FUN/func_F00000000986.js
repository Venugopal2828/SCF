stp.writeLog("==========start==========");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI03");
stp.updateFieldValue("FA_BUSI_STATUS", 'PCR');
stp.updateFieldValue("CLERK_ID", "SYS_STP_USER");

var ReqRef = stp.getXMLNodeValue("OrigReqNr", "MSG03", ".");
stp.writeLog("---------------ReqRef=" + ReqRef);

stp.updateFieldValue("C_MAIN_REF", ReqRef);
stp.updateFieldValue("C_TRX_REF", ReqRef);
stp.setEventTimesFromTable("FADA_MASTER");

var pre = 'EF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
stp.writeLog("---------------UnitCode=" + UnitCode);
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'PCR';
var ref = stp.SYS_getRefNo("EF_PRE_RESPONSE");
var crf = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_PCR_REF", crf);
stp.writeLog("---------------FA_PCR_REF=" + crf);


var AmtCreditAssessReq = stp.getXMLNodeValue("AmtCreditAssessReq", "MSG03.PrelCreditAssessDetails", ".");
var Currency = stp.getXMLNodeValue("Currency", "MSG03.PrelCreditAssessDetails", ".");
stp.updateFieldValue("FA_APPL_LMT_AMT", AmtCreditAssessReq);
stp.updateFieldValue("FA_APPL_LMT_CCY", Currency);
stp.writeLog("---------------AmtCreditAssessReq=" + AmtCreditAssessReq);
stp.writeLog("---------------Currency=" + Currency);

var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var BuyerName = stp.getXMLNodeValue("BuyerName", "MSG03.Buyer", ".");
var sql_condition = stp.addSQLCondition(null, "PARTY_NM", BuyerName);
var FA_BUYER_NM = stp.executeQuery("STAT_MASTER", fld_list, sql_condition);
var mainRef = stp.getDBFieldValue(FA_BUYER_NM, "C_MAIN_REF");
stp.updateFieldValue("FA_BUYER_ID", mainRef);
stp.writeLog("---------------FA_BUYER_ID=" + mainRef);

stp.setEventTimesFromTable("FADA_MASTER");
stp.writeLog("==========end==========");