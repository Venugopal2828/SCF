stp.setAutoProcess(true);
var recevCode = stp.getXMLNodeValue("ReceiverCode", "MSG15.MsgInfo", ".");
stp.writeLog("*****************************recevCode:" + recevCode);
var effactorCode = stp.getXMLNodeValue("FactorCode", "MSG15.EF", ".");
stp.writeLog("*****************************effactorCode:" + effactorCode);
var iffactorCode = stp.getXMLNodeValue("FactorCode", "MSG15.IF", ".");
stp.writeLog("*****************************iffactorCode:" + iffactorCode);
if (recevCode.compareToIgnoreCase(effactorCode) == 0) {
    stp.setEdiRule("DisputeSettl_In");
    var pre = 'EF';
    stp.updateFieldValue("FA_BUSI_TYPE", pre);
}
if (recevCode.compareToIgnoreCase(iffactorCode) == 0) {
    stp.setEdiRule("IFEDI15");
    var pre = 'IF';
    stp.updateFieldValue("FA_BUSI_TYPE", pre);
}
var selId = stp.getXMLNodeValue("SellerNr", "MSG15.Seller", ".");
var buyId = stp.getXMLNodeValue("BuyerNr", "MSG15.Buyer", ".");
var selNm = stp.getXMLNodeValue("SellerName", "MSG15.Seller", ".");
var buyNm = stp.getXMLNodeValue("BuyerName", "MSG15.Buyer", ".");
var impFactor = stp.getXMLNodeValue("FactorCode", "MSG15.IF", ".");
var expFactor = stp.getXMLNodeValue("FactorCode", "MSG15.EF", ".");
var invNO = stp.getXMLNodeValue("DocNr", "MSG15.DisputeDetails", ".");
var DisNr = stp.getXMLNodeValue("DisputeNr", "MSG15", ".");
var dipStatus = stp.getXMLNodeValue("DisputeStatus", "MSG15", ".");
var CCY = stp.getXMLNodeValue("DisputeCurrency", "MSG15", ".");
stp.writeLog("selId:" + selId);
stp.writeLog("buyId:" + buyId);
stp.writeLog("impFactor:" + impFactor);
stp.writeLog("expFactor:" + expFactor);
stp.writeLog("invNO:" + invNO);
stp.updateFieldValue("FA_SEL_EDI_ID", selId);
stp.updateFieldValue("FA_BUYER_EDI_ID", buyId);
selId = selId.toUpperCase();
buyId = buyId.toUpperCase();
stp.updateFieldValue("FA_IF_ID", impFactor);
stp.updateFieldValue("FA_DSP_STATUS", dipStatus);
stp.updateFieldValue("FA_SEND_MSG_FLG", '2');
stp.updateFieldValue("FA_MSG_TEXT", '');

if (dipStatus = '3') {
    stp.updateFieldValue("FA_BUSI_STATUS", 'DPS');
} else {
    stp.updateFieldValue("FA_BUSI_STATUS", 'DSP');
}

var busitype = pre;
stp.writeLog("busitype:" + busitype);
if (recevCode.compareToIgnoreCase(effactorCode) == 0) {
    var fld_list = stp.addFieldList(null, "FSBC_REF");
    var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", selId);
    var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", buyId);
    //var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", busitype);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_IF_ID", impFactor);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_NO", invNO);
    var result = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list, sql_condition);
    var mainRef = stp.getDBFieldValue(result, "FSBC_REF");
} else if (recevCode.compareToIgnoreCase(iffactorCode) == 0) {
    var fld_list = stp.addFieldList(null, "FSBC_REF");
    var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", selId);
    var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", buyId);
    //var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", busitype);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", expFactor);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_NO", invNO);
    var result = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list, sql_condition);
    var mainRef = stp.getDBFieldValue(result, "FSBC_REF");
}
stp.writeLog("mainref:" + mainRef);
stp.updateFieldValue("FA_SBR_REF", mainRef);

stp.setEventTimes("0");
if (recevCode.compareToIgnoreCase(effactorCode) == 0) {
    var fld_list = stp.addFieldList(null, "FA_DSP_REF");
    var sql_condition = stp.addSQLCondition(null, "FA_SEL_NM", selNm);
    stp.writeLog("*****************************selNm:" + selNm);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUYER_NM", buyNm);
    stp.writeLog("*****************************buyNm:" + buyNm);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", busitype);
    stp.writeLog("*****************************busitype:" + busitype);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_IF_ID", impFactor);
    stp.writeLog("*****************************impFactor:" + impFactor);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DSP_NO", DisNr);
    stp.writeLog("*****************************DisNr:" + DisNr);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_CCY", CCY);
    stp.writeLog("*****************************CCY:" + CCY);
    var result = stp.executeQuery("EXIMTRX.FAEF_DSP", fld_list, sql_condition);
    var disRef = stp.getDBFieldValue(result, "FA_DSP_REF");
} else if (recevCode.compareToIgnoreCase(iffactorCode) == 0) {
    var fld_list = stp.addFieldList(null, "FA_DSP_REF");
    var sql_condition = stp.addSQLCondition(null, "FA_SEL_NM", selNm);
    stp.writeLog("*****************************selId:" + selNm);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUYER_NM", buyNm);
    stp.writeLog("*****************************buyId:" + buyNm);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", busitype);
    stp.writeLog("*****************************busitype:" + busitype);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", expFactor);
    stp.writeLog("*****************************expFactor:" + expFactor);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DSP_NO", DisNr);
    stp.writeLog("*****************************DisNr:" + DisNr);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_CCY", CCY);
    stp.writeLog("*****************************CCY:" + CCY);
    var result = stp.executeQuery("EXIMTRX.FAEF_DSP", fld_list, sql_condition);
    var disRef = stp.getDBFieldValue(result, "FA_DSP_REF");
}
stp.writeLog("*****************************Reference:" + disRef);
stp.updateFieldValue("FA_DSP_REF", disRef);
stp.updateFieldValue("C_MAIN_REF", disRef);

/*var pre = 'EF';
stp.updateFieldValue("FA_BUSI_TYPE",pre);
var UnitCode = stp.getBusiUnit();
UnitCode = UnitCode.substr(0,5);
stp.updateFieldValue("GTS_BR_ID",UnitCode);
var year = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT",year);
year = year.substr(2,2);
var sub = 'DSP';
var prf = pre + UnitCode + year + ref + sub;
stp.updateFieldValue("FA_DSP_REF",prf);
stp.updateFieldValue("FA_BUSI_STATUS","DSP");*/


var plginVar = 'var invNO=stp.getDomDataNodeValue("FA_DOC_NO");' +
    'var fld_list = stp.addFieldList(null,"FA_DOC_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_AMT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_DUE_DT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_TRF_DT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_CCY");' +
    'fld_list = stp.addFieldList(fld_list,"FA_INV_LOAN_BAL");' +
    'var sql_condition =stp.addSQLCondition(null,"FA_DOC_NO",invNO);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_SEL_EDI_ID",selID);' +
    'var result = stp.executeQuery("INVC_MASTER",fld_list,sql_condition);' +
    'var invRef = stp.getDBFieldValue(result,"FA_DOC_REF");' +
    'stp.writeLog("docref"+invRef);' +
    'var invAmt=stp.getDBFieldValue(result,"FA_DOC_AMT");' +
    'stp.updateFieldValue("FA_DOC_AMT",invAmt);' +
    'stp.updateFieldValue("FA_DOC_REF",invRef);' +
    'invLoanBal=stp.getDBFieldValue(result,"FA_INV_LOAN_BAL");' +
    'stp.updateFieldValue("FA_INV_LOAN_BAL",invLoanBal);' +
    'invTrxDt=stp.getDBFieldValue(result,"FA_TRF_DT");' +
    'stp.updateFieldValue("FA_TRF_DT",invTrxDt);' +
    'invDueDt=stp.getDBFieldValue(result,"FA_DOC_DUE_DT");' +
    'stp.updateFieldValue("FA_DOC_DUE_DT",invDueDt);';
stp.setDOVar('selID', selId);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('DisputeSettl', "");