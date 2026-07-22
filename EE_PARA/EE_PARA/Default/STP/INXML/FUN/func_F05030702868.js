stp.writeLog("********************start");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI06");

stp.updateFieldValue("FA_BUSI_STATUS", 'CCR');
stp.updateFieldValue("CLERK_ID", 'CSBANK');




var selId = stp.getXMLNodeValue("SellerNr", "MSG06.Seller", ".");
var buyId = stp.getXMLNodeValue("BuyerNr", "MSG06.Buyer", ".");
var impFactor = stp.getXMLNodeValue("FactorCode", "MSG06.IF", ".");
var reqNO = stp.getXMLNodeValue("", "MSG06.OrigReqNr", ".");
var CurrntStatus = "CCA";
stp.updateFieldValue("FA_SEL_EDI_ID", selId);
stp.updateFieldValue("FA_BUYER_EDI_ID", buyId);
selId = selId.toUpperCase();
buyId = buyId.toUpperCase();
stp.updateFieldValue("FA_IF_ID", impFactor);
var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", selId);
var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", buyId);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_IF_ID", impFactor);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_CCA_REF", reqNO);
var sql_condition = stp.addSQLCondition(sql_condition, "CURRNT_STATUS", CurrntStatus);
var result = stp.executeQuery("EXIMTRX.FADA_MASTER", fld_list, sql_condition);
var mainRef = stp.getDBFieldValue(result, "C_MAIN_REF");
stp.writeLog("mainRef===============" + mainRef);
stp.updateFieldValue("C_MAIN_REF", mainRef);
stp.updateFieldValue("FA_SBR_REF", mainRef);
stp.setEventTimesFromTable("EXIMTRX.FADA_MASTER");



var pre = 'EF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'CCR';
var ref = stp.SYS_getRefNo("FAEF_CCR_REF");
var ccrref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_CCR_REF", ccrref);
stp.writeLog("CCRref===============" + ccrref);




var appldAmt = stp.getXMLNodeValue("CreditCoverAmt", "MSG06.CreditCoverDetails", ".");
stp.updateFieldValue("FA_LMT_AMT", appldAmt);
stp.writeLog("FA_LMT_AMT===============" + appldAmt);
var sql_condition = stp.addSQLCondition(null, "C_MAIN_REF", mainRef);
fld_list = stp.addFieldList(fld_list, "FA_APPL_LMT_AMT");
var result = stp.executeQuery("FADA_MASTER", fld_list, sql_condition);
var FA_APPL_LMT_AMT = stp.getDBFieldValue(result, "FA_APPL_LMT_AMT");
stp.updateFieldValue("FA_APPL_LMT_AMT", FA_APPL_LMT_AMT);
stp.writeLog("FA_APPL_LMT_AMT===============" + FA_APPL_LMT_AMT);
if (stp.toDouble(appldAmt) > stp.toDouble(FA_APPL_LMT_AMT)) {
    var FA_INCR_AMT = stp.toDouble(appldAmt) - stp.toDouble(FA_APPL_LMT_AMT);
    stp.updateFieldValue("FA_INCR_AMT", FA_INCR_AMT);
    stp.updateFieldValue("FA_DECR_AMT", 0);
    stp.writeLog("FA_INCR_AMT===============" + FA_INCR_AMT);
} else {
    var FA_DECR_AMT = stp.toDouble(FA_APPL_LMT_AMT) - stp.toDouble(appldAmt);
    stp.updateFieldValue("FA_DECR_AMT", FA_DECR_AMT);
    stp.updateFieldValue("FA_INCR_AMT", 0);
    stp.writeLog("FA_DECR_AMT===============" + FA_DECR_AMT);

}




var dueDate = stp.getXMLNodeValue("ExpiryDate", "MSG06.CreditCoverDetails", ".");
var valDate = stp.getXMLNodeValue("ValidFrom", "MSG06.CreditCoverDetails", ".");
var ccy = stp.getXMLNodeValue("Currency", "MSG06.CreditCoverDetails", ".");
var sql_condition = stp.addSQLCondition(null, "C_MAIN_REF", mainRef);
fld_list = stp.addFieldList(fld_list, "FA_BA_FLG");
var result = stp.executeQuery("FADA_MASTER", fld_list, sql_condition);
var FA_BA_FLG = stp.getDBFieldValue(result, "FA_BA_FLG");
stp.updateFieldValue("FA_BA_FLG", FA_BA_FLG);
stp.writeLog("FA_BA_FLG===============" + FA_BA_FLG);
stp.writeLog("appldAmt1===============" + appldAmt);
stp.writeLog("appldAmt1===============" + stp.toDouble(appldAmt));
if (FA_BA_FLG == '1' && stp.toDouble(appldAmt) > 0) {
    stp.clearDOVar();
    stp.appendDOVar("LM_ID", mainRef, "", "");
    stp.appendDOVar("LM_NM", ccrref, "", "");
    stp.appendDOVar("LM_CRED_LMT", appldAmt, "", "");
    stp.appendDOVar("LM_BASE_CCY", ccy, "", "");
    stp.appendDOVar("LM_REVOLVING", "Y", "", "");
    stp.appendDOVar("LM_REALLO", "Y", "", "");
    stp.appendDOVar("LM_DUE_DAY", dueDate, "", "");
    stp.appendDOVar("LM_STR_DAY", valDate, "", "");
    stp.invLimitProcess("CREATEfsbc", "", "");
    stp.writeLog("mainRef===============" + mainRef);
    stp.writeLog("ccrref===============" + ccrref);
    stp.writeLog("appldAmt===============" + appldAmt);
    stp.writeLog("dueDate===============" + dueDate);
    stp.writeLog("valDate===============" + valDate);
    stp.writeLog("ccy===============" + ccy);
}

stp.writeLog("********************End");