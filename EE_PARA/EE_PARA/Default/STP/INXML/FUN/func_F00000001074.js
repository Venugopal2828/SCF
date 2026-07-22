stp.writeLog("===============InEDI08 start===============");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI08");

stp.updateFieldValue("CLERK_ID", 'CSBANKOP');

var pre = 'EF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'CAR';
stp.updateFieldValue("FA_BUSI_STATUS", sub);
var ref = stp.SYS_getRefNo("EF_CAA_RESPONSE");
var mainref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_CAR_REF", mainref);
stp.writeLog("---------------FA_CAR_REF=" + mainref);

var REQ_NO = stp.getXMLNodeValue("OrigReqNr", "MSG08", ".");
if (REQ_NO == '' || REQ_NO == 0) {
    stp.updateFieldValue("FA_TEMP_IF_MSG", '2');
} else {
    stp.updateFieldValue("FA_TEMP_IF_MSG", '1');
}

var fld_list = stp.addFieldList(null, "C_MAIN_REF");
fld_list = stp.addFieldList(fld_list, "FA_BA_FLG");
fld_list = stp.addFieldList(fld_list, "FA_AGM_DUE_DT");
fld_list = stp.addFieldList(fld_list, "FA_CNTR_DOC_NO");
var FA_SEL_EDI_ID = stp.getXMLNodeValue("SellerNr", "MSG08.Seller", ".");
var FA_BUYER_EDI_ID = stp.getXMLNodeValue("BuyerNr", "MSG08.Buyer", ".");
var FA_IF_ID = stp.getXMLNodeValue("FactorCode", "MSG08.IF", ".");
var FA_LMT_CCY = stp.getXMLNodeValue("Currency", "MSG08.CurrentCreditCoverDetails", ".");
stp.updateFieldValue("FA_LMT_CCY", FA_LMT_CCY);
var sql_condition = stp.addSQLCondition(null, "FA_SEL_EDI_ID", FA_SEL_EDI_ID);
sql_condition = stp.addSQLCondition(sql_condition, "FA_BUYER_EDI_ID", FA_BUYER_EDI_ID);
sql_condition = stp.addSQLCondition(sql_condition, "FA_IF_ID", FA_IF_ID);
sql_condition = stp.addSQLCondition(sql_condition, "FA_LMT_CCY", FA_LMT_CCY);
sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", 'EF');
sql_condition = stp.addSQLCondition(sql_condition, "CURRNT_STATUS", 'CCA');
var result = stp.executeQuery("FADA_MASTER", fld_list, sql_condition);
var C_MAIN_REF = stp.getDBFieldValue(result, "C_MAIN_REF");
var FA_BA_FLG = stp.getDBFieldValue(result, "FA_BA_FLG");
var FA_AGM_DUE_DT = stp.getDBFieldValue(result, "FA_AGM_DUE_DT");
var FA_CNTR_DOC_NO = stp.getDBFieldValue(result, "FA_CNTR_DOC_NO");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
stp.updateFieldValue("FA_BA_FLG", FA_BA_FLG);
stp.updateFieldValue("FA_AGM_DUE_DT", FA_AGM_DUE_DT);
stp.updateFieldValue("FA_CNTR_DOC_NO", FA_CNTR_DOC_NO);
stp.writeLog("---------------C_MAIN_REF=" + C_MAIN_REF);
stp.writeLog("---------------FA_BA_FLG=" + FA_BA_FLG);
stp.writeLog("---------------FA_AGM_DUE_DT=" + FA_AGM_DUE_DT);
stp.writeLog("---------------FA_CNTR_DOC_NO=" + FA_CNTR_DOC_NO);

var fld_list = stp.addFieldList(null, "FA_APPL_LMT_CCY");
fld_list = stp.addFieldList(fld_list, "FA_APPL_LMT_AMT");
var sql_condition = stp.addSQLCondition(null, "FA_CAA_REF", REQ_NO);
sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_STATUS", 'CAA');
var result = stp.executeQuery("FADA_SBR_EVENT", fld_list, sql_condition);
var FA_APPL_LMT_CCY = stp.getDBFieldValue(result, "FA_APPL_LMT_CCY");
var FA_APPL_LMT_AMT1 = stp.getDBFieldValue(result, "FA_APPL_LMT_AMT");
var FA_APPL_LMT_AMT = stp.toDouble(FA_APPL_LMT_AMT1);
if (REQ_NO != '' && REQ_NO != '0') {
    stp.updateFieldValue("FA_APPL_LMT_CCY", FA_APPL_LMT_CCY);
    stp.updateFieldValue("FA_APPL_LMT_AMT", FA_APPL_LMT_AMT);
}
stp.writeLog("---------------FA_APPL_LMT_CCY=" + FA_APPL_LMT_CCY);
stp.writeLog("---------------FA_APPL_LMT_AMT=" + FA_APPL_LMT_AMT);

var fld_list1 = stp.addFieldList(null, "LM_CRED_LMT");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTC_APL");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTC_APV");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTD_APL");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTD_APV");
var sql_condition1 = stp.addSQLCondition(null, "LM_ID", C_MAIN_REF);
var result1 = stp.executeQuery("STDS_PAGE", fld_list1, sql_condition1);
var LM_CRED_LMT = stp.getDBFieldValue(result1, "LM_CRED_LMT");
var LM_OUTC_APL = stp.getDBFieldValue(result1, "LM_OUTC_APL");
var LM_OUTC_APV = stp.getDBFieldValue(result1, "LM_OUTC_APV");
var LM_OUTD_APL = stp.getDBFieldValue(result1, "LM_OUTD_APL");
var LM_OUTD_APV = stp.getDBFieldValue(result1, "LM_OUTD_APV");
var BAL_AMT = stp.toDouble(LM_CRED_LMT) + stp.toDouble(LM_OUTC_APL) + stp.toDouble(LM_OUTC_APV) - stp.toDouble(LM_OUTD_APL) - stp.toDouble(LM_OUTD_APV);
stp.updateFieldValue("FA_LMT_BAL", BAL_AMT);
stp.writeLog("---------------FA_LMT_BAL=" + BAL_AMT);


var fld_list2 = stp.addFieldList(null, "LM_DUE_DAY");
fld_list2 = stp.addFieldList(fld_list2, "LM_BASE_CCY");
fld_list2 = stp.addFieldList(fld_list2, "LM_CRED_LMT");
fld_list2 = stp.addFieldList(fld_list2, "LM_OVER_OUT");
fld_list2 = stp.addFieldList(fld_list2, "LM_OUTD_APV");
fld_list2 = stp.addFieldList(fld_list2, "LM_OUTD_APL");
fld_list2 = stp.addFieldList(fld_list2, "LM_OUTC_APV");
var sql_condition2 = stp.addSQLCondition(null, "LM_STATUS", 'A');
sql_condition2 = stp.addSQLCondition(sql_condition2, "LM_CUST_ID", FA_IF_ID);
var result2 = stp.executeQuery("STDS_CCL", fld_list2, sql_condition2);
var TEMP_DATE4 = stp.getDBFieldValue(result2, "LM_DUE_DAY");
var FA_REMI_CCY3 = stp.getDBFieldValue(result2, "LM_BASE_CCY");
var LM_CRED_LMT = stp.getDBFieldValue(result2, "LM_CRED_LMT");
var LM_OVER_OUT = stp.getDBFieldValue(result2, "LM_OVER_OUT");
var LM_OUTD_APV = stp.getDBFieldValue(result2, "LM_OUTD_APV");
var LM_OUTD_APL = stp.getDBFieldValue(result2, "LM_OUTD_APL");
var LM_OUTC_APV = stp.getDBFieldValue(result2, "LM_OUTC_APV");
var IF_LMT_AMT = stp.toDouble(LM_CRED_LMT) - stp.toDouble(LM_OVER_OUT) - stp.toDouble(LM_OUTD_APV) - stp.toDouble(LM_OUTD_APL) + stp.toDouble(LM_OUTC_APV);
stp.updateFieldValue("FA_TEMP_AMT12", IF_LMT_AMT);
stp.updateFieldValue("TEMP_DATE4", TEMP_DATE4);
stp.updateFieldValue("FA_REMI_CCY3", FA_REMI_CCY3);
stp.writeLog("---------------IF_LMT_AMT=" + IF_LMT_AMT);

stp.SYS_GetExchangeRate(FA_LMT_CCY, FA_REMI_CCY3, "Booking Rate", "EXCH_RT3");

var FA_LMT_AMT1 = stp.getXMLNodeValue("NewCreditCoverAmt", "MSG08.NewCreditCoverDetails", ".");
var FA_LMT_AMT = stp.toDouble(FA_LMT_AMT1);
var FA_ORG_LMT_AMT1 = stp.getXMLNodeValue("CurrentCreditCoverAmt", "MSG08.CurrentCreditCoverDetails", ".");
var FA_ORG_LMT_AMT = stp.toDouble(FA_ORG_LMT_AMT1);
if (FA_LMT_AMT > FA_ORG_LMT_AMT) {
    var IncAmt = FA_LMT_AMT - FA_ORG_LMT_AMT;
    var DecAmt = 0;
} else {
    var IncAmt = 0;
    var DecAmt = FA_ORG_LMT_AMT - FA_LMT_AMT;
}
stp.updateFieldValue("FA_INCR_AMT", IncAmt);
stp.updateFieldValue("FA_DECR_AMT", DecAmt);
stp.writeLog("---------------FA_INCR_AMT=" + IncAmt);
stp.writeLog("---------------FA_DECR_AMT=" + DecAmt);


if (REQ_NO == '' || REQ_NO == 0) {
    var IFIncAmt = IncAmt;
    var IFDecAmt = DecAmt;
} else if (REQ_NO != '' && REQ_NO != 0) {
    if (FA_LMT_AMT > FA_APPL_LMT_AMT) {
        var IFIncAmt = FA_LMT_AMT - FA_APPL_LMT_AMT;
        var IFDecAmt = 0;
    } else {
        var IFIncAmt = 0;
        var IFDecAmt = FA_APPL_LMT_AMT - FA_LMT_AMT;
    }
}
stp.updateFieldValue("FA_IF_INCR_AMT", IFIncAmt);
stp.updateFieldValue("FA_IF_DECR_AMT", IFDecAmt);
stp.writeLog("---------------FA_IF_INCR_AMT2=" + IFIncAmt);
stp.writeLog("---------------FA_IF_DECR_AMT2=" + IFDecAmt);

/*
if(stp.toDouble(IFIncAmt) > 0){
stp.updateFieldValue("FA_TEMP3",IFIncAmt);
stp.updateFieldValue("FA_TEMP2",'C');	
}
if(stp.toDouble(IFDecAmt) > 0){
stp.updateFieldValue("FA_TEMP3",IFDecAmt);
stp.updateFieldValue("FA_TEMP2",'D');	
}
*/

var ValidDT = stp.getXMLNodeValue("ValidFrom", "MSG08.NewCreditCoverDetails", ".");
var DueDT = stp.getXMLNodeValue("NewExpiryDate", "MSG08.NewCreditCoverDetails", ".");
stp.writeLog("---------------ValidDT=" + ValidDT);
stp.writeLog("---------------DueDT=" + DueDT);
if (ValidDT == '') {
    var fld_list = stp.addFieldList(null, "FA_LMT_VAL_DT");
    var sql_condition = stp.addSQLCondition(null, "C_MAIN_REF", C_MAIN_REF);
    var result = stp.executeQuery("FADA_MASTER", fld_list, sql_condition);
    var FA_LMT_VAL_DT = stp.getDBFieldValue(result, "FA_LMT_VAL_DT");
    stp.updateFieldValue("FA_LMT_VAL_DT", FA_LMT_VAL_DT);
    stp.writeLog("---------------FA_LMT_VAL_DT=" + FA_LMT_VAL_DT);
}
if (DueDT == '') {
    var fld_list = stp.addFieldList(null, "FA_LMT_DUE_DT");
    var sql_condition = stp.addSQLCondition(null, "C_MAIN_REF", C_MAIN_REF);
    var result = stp.executeQuery("FADA_MASTER", fld_list, sql_condition);
    var FA_LMT_DUE_DT = stp.getDBFieldValue(result, "FA_LMT_DUE_DT");
    stp.updateFieldValue("FA_LMT_DUE_DT", FA_LMT_DUE_DT);
    stp.writeLog("---------------FA_LMT_DUE_DT=" + FA_LMT_DUE_DT);
}

/*stp.writeLog("------------------DO LMT START----------------");
if (FA_BA_FLG == '1') {
    if (stp.toDouble(IncAmt) > 0) {
        stp.writeLog("------------------increasefsbc IncAmt----------------");
        stp.clearDOVar();
        stp.appendDOVar("LM_ID", C_MAIN_REF, "", "");
        stp.appendDOVar("LM_DRCR_MRK", "C", "", "");
        stp.appendDOVar("LM_CRED_LMT", IncAmt, "", "");
        stp.invLimitProcess("increasefsbc", "", "");
    }
    if (stp.toDouble(DecAmt) > 0) {
        stp.writeLog("------------------increasefsbc DecAmt----------------");
        stp.clearDOVar();
        stp.appendDOVar("LM_ID", C_MAIN_REF, "", "");
        stp.appendDOVar("LM_DRCR_MRK", "D", "", "");
        stp.appendDOVar("LM_CRED_LMT", DecAmt, "", "");
        stp.invLimitProcess("increasefsbc", "", "");
    }
    stp.writeLog("------------------extensionday----------------");
    stp.clearDOVar();
    stp.appendDOVar("LM_ID", C_MAIN_REF, "", "");
    stp.appendDOVar("LM_DUE_DAY", DueDT, "", "");
    stp.invLimitProcess("extensionday", "", "");
}
stp.writeLog("------------------DO LMT END----------------");*/
stp.setEventTimesFromTable("FADA_MASTER");
stp.writeLog("==========end==========");