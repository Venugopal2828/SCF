stp.writeLog("********************start");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI05");


var REQ = stp.getXMLNodeValue("Request", "MSG05.CreditCoverDetails", ".");
if (REQ == '2') {
    stp.updateFieldValue("FA_BUSI_STATUS", 'CCA');
} else {
    stp.updateFieldValue("FA_BUSI_STATUS", 'CCE');
}
stp.writeLog("CreditReq===========" + REQ);

var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var FA_BUYER_NM = stp.getXMLNodeValue("BuyerName", "MSG05.Buyer", ".");
var FA_SEL_NM = stp.getXMLNodeValue("SellerName", "MSG05.Seller", ".");
var sql_condition = stp.addSQLCondition(null, "PARTY_NM", FA_BUYER_NM);
var sql_condition2 = stp.addSQLCondition(null, "PARTY_NM", FA_SEL_NM);
var result = stp.executeQuery("STAT_MASTER", fld_list, sql_condition);
var result2 = stp.executeQuery("STAT_MASTER", fld_list, sql_condition2);
var mainRef = stp.getDBFieldValue(result, "C_MAIN_REF");
var mainRef2 = stp.getDBFieldValue(result2, "C_MAIN_REF");
stp.updateFieldValue("FA_BUYER_ID", mainRef);
stp.updateFieldValue("FA_SEL_ID", mainRef2);


var FA_SERVICE_REQ = stp.getXMLNodeValue("RequestNr", "MSG05", ".");
if (FA_SERVICE_REQ == '1') {
    stp.updateFieldValue("FA_BA_FLG", '1');
} else {
    stp.updateFieldValue("FA_BA_FLG", '2');
}
stp.writeLog("RequestNr===========" + FA_SERVICE_REQ);


var selId = stp.getXMLNodeValue("SellerNr", "MSG05.Seller", ".");
var buyId = stp.getXMLNodeValue("BuyerNr", "MSG05.Buyer", ".");
var expFactor = stp.getXMLNodeValue("FactorCode", "MSG05.EF", ".");
var lmtccy = stp.getXMLNodeValue("Currency", "MSG05.CreditCoverDetails", ".");
stp.updateFieldValue("FA_SEL_EDI_ID", selId);
stp.updateFieldValue("FA_BUYER_EDI_ID", buyId);
selId = selId.toUpperCase();
buyId = buyId.toUpperCase();
stp.updateFieldValue("FA_EF_ID", expFactor);
var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var fld_list = stp.addFieldList(fld_list, "FA_CCA_REF");
var fld_list = stp.addFieldList(fld_list, "FA_INV_CCY1");
var fld_list = stp.addFieldList(fld_list, "FA_INV_CCY2");
var fld_list = stp.addFieldList(fld_list, "FA_INV_CCY3");
var fld_list = stp.addFieldList(fld_list, "FA_INV_CCY4");
var fld_list = stp.addFieldList(fld_list, "FA_INV_CCY5");
var FA_CCA_THEIR_REF = stp.getXMLNodeValue("RequestNr", "MSG05", ".");
var sql_condition = stp.addSQLCondition(null, "FA_CCA_THEIR_REF", FA_CCA_THEIR_REF);
var result = stp.executeQuery("FADA_MASTER", fld_list, sql_condition);
var mainRef = stp.getDBFieldValue(result, "C_MAIN_REF");
var ccaref = stp.getDBFieldValue(result, "FA_CCA_REF");
var FA_INV_CCY1 = stp.getDBFieldValue(result, "FA_INV_CCY1");
var FA_INV_CCY2 = stp.getDBFieldValue(result, "FA_INV_CCY2");
var FA_INV_CCY3 = stp.getDBFieldValue(result, "FA_INV_CCY3");
var FA_INV_CCY4 = stp.getDBFieldValue(result, "FA_INV_CCY4");
var FA_INV_CCY5 = stp.getDBFieldValue(result, "FA_INV_CCY5");
stp.updateFieldValue("C_MAIN_REF", mainRef);
stp.updateFieldValue("FA_CCA_REF", ccaref);
stp.writeLog("ref===============" + mainRef);
stp.writeLog("ccaref===============" + ccaref);
stp.updateFieldValue("FA_INV_CCY1", FA_INV_CCY1);
stp.updateFieldValue("FA_INV_CCY2", FA_INV_CCY2);
stp.updateFieldValue("FA_INV_CCY3", FA_INV_CCY3);
stp.updateFieldValue("FA_INV_CCY4", FA_INV_CCY4);
stp.updateFieldValue("FA_INV_CCY5", FA_INV_CCY5);
var FA_CREDIT_REQ = stp.getXMLNodeValue("Request", "MSG05.CreditCoverDetails", ".");
if (FA_CREDIT_REQ == '3') {
    if (FA_INV_CCY2 == '' && FA_INV_CCY1 != lmtccy) {
        stp.updateFieldValue("FA_APPL_LMT_CCY", FA_INV_CCY2);
    } else if (FA_INV_CCY3 == '' && FA_INV_CCY1 != lmtccy && FA_INV_CCY2 != lmtccy) {
        stp.updateFieldValue("FA_APPL_LMT_CCY", FA_INV_CCY3);
    } else if (FA_INV_CCY4 == '' && FA_INV_CCY1 != lmtccy && FA_INV_CCY2 != lmtccy && FA_INV_CCY3 != lmtccy) {
        stp.updateFieldValue("FA_APPL_LMT_CCY", FA_INV_CCY4);
    } else if (FA_INV_CCY5 == '' && FA_INV_CCY1 != lmtccy && FA_INV_CCY2 != lmtccy && FA_INV_CCY3 != lmtccy && FA_INV_CCY4 != lmtccy) {
        stp.updateFieldValue("FA_APPL_LMT_CCY", FA_INV_CCY5);
    }
}
stp.setEventTimesFromTable("FADA_MASTER");
stp.updateFieldValue("CURRNT_STATUS", 'CCA');
stp.writeLog("********************End");