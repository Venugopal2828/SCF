stp.writeLog("==========InEDI10 START==========");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI10");

var doctype = stp.getXMLNodeValue("DocType", "MSG10", ".");
stp.writeLog("FA_DOC_TYPE=" + doctype);
var msgfunc = stp.getXMLNodeValue("MsgFunction", "MSG10", ".");
stp.writeLog("FA_MSG_FUNC=" + msgfunc);
var pre = 'IF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = '';
stp.updateFieldValue("FA_BUSI_STATUS", sub);
var ref = stp.SYS_getRefNo("EF_CAA_RESPONSE");
if (doctype == '1') {
    if (msgfunc == '10') {
        stp.updateFieldValue("FA_BUSI_STATUS", "ADJ");
        sub = 'ADJ';
    } else {
        stp.updateFieldValue("FA_BUSI_STATUS", "IVC");
        sub = 'IVC';
    }
} else {
    stp.updateFieldValue("FA_BUSI_STATUS", "CNC");
    sub = 'CNC';
}
var mainref = pre + UnitCode + year + month + ref + sub;
stp.writeLog("@@@@@@@@@@@@@@@@@@mainref=" + mainref);
var selId = stp.getXMLNodeValue("SellerNr", "MSG10.Seller", ".");
var buyId = stp.getXMLNodeValue("BuyerNr", "MSG10.Buyer", ".");
var empFactor = stp.getXMLNodeValue("FactorCode", "MSG10.EF", ".");
var invNO = stp.getXMLNodeValue("OrigDocNr", "MSG10", ".");
stp.writeLog("@@@@@@@@@@@@@@@@@@invNO=" + invNO);
stp.updateFieldValue("FA_SEL_EDI_ID", selId);
stp.updateFieldValue("FA_BUYER_EDI_ID", buyId);
stp.updateFieldValue("FA_EF_ID", empFactor);
stp.writeLog("FA_SEL_EDI_ID=" + selId);
stp.writeLog("FA_BUYER_EDI_ID=" + buyId);
stp.writeLog("FA_EF_ID=" + empFactor);
selId = selId.toUpperCase();
buyId = buyId.toUpperCase();


var fld_list = stp.addFieldList(null, "FSBC_REF");
var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", selId);
var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", buyId);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", empFactor);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_NO", invNO);
var result = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list, sql_condition);
var FSBC_REF = stp.getDBFieldValue(result, "FSBC_REF");
stp.writeLog("result=" + result);
stp.writeLog("FSBC_REF=" + FSBC_REF);
stp.updateFieldValue("C_MAIN_REF", mainref);
stp.updateFieldValue("FA_SBR_REF", FSBC_REF);
stp.setEventTimes("0");


var plginVar = 'var invNO=stp.getDomDataNodeValue("FA_DOC_NO");' +
    'var fld_list = stp.addFieldList(null,"FA_DOC_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_AMT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_CCY");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_STATUS");' +
    'fld_list = stp.addFieldList(fld_list,"FA_BA_FLG");' +
    'fld_list = stp.addFieldList(fld_list,"FA_CRN_INV_LINK_NO");' +
    'fld_list = stp.addFieldList(fld_list,"FA_INV_LINK_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_BAL");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_TYPE");' +
    'var sql_condition =stp.addSQLCondition(null,"FA_DOC_NO",invNO);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_SEL_EDI_ID",selId);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_BUSI_TYPE","IF");' +
    'var result = stp.executeQuery("EXIMTRX.INVC_MASTER",fld_list,sql_condition);' +
    'var invRef = stp.getDBFieldValue(result,"FA_DOC_REF");' +
    'var invAmt=stp.getDBFieldValue(result,"FA_DOC_AMT");' +
    'stp.updateFieldValue("FA_DOC_AMT",invAmt);' +
    'stp.updateFieldValue("FA_DOC_REF",invRef);' +
    'var invccy=stp.getDBFieldValue(result,"FA_DOC_CCY");' +
    'stp.updateFieldValue("FA_DOC_CCY",invccy);' +
    'var invStatus=stp.getDBFieldValue(result,"FA_DOC_STATUS");' +
    'stp.updateFieldValue("FA_DOC_STATUS",invStatus);' +
    'var baflg=stp.getDBFieldValue(result,"FA_BA_FLG");' +
    'stp.updateFieldValue("FA_BA_FLG",baflg);' +
    'var invBal=stp.getDBFieldValue(result,"FA_DOC_BAL");' +
    'stp.updateFieldValue("FA_DOC_BAL",invBal);' +
    'var invCrnLinkNo=stp.getDBFieldValue(result,"FA_CRN_INV_LINK_NO");' +
    'stp.updateFieldValue("FA_CRN_INV_LINK_NO",invCrnLinkNo);' +
    'var invLinkNo=stp.getDBFieldValue(result,"FA_INV_LINK_REF");' +
    'stp.updateFieldValue("FA_INV_LINK_REF",invLinkNo);' +
    'var DocType=stp.getDBFieldValue(result,"FA_DOC_TYPE");' +
    'stp.updateFieldValue("FA_DOC_TYPE",DocType);' +
    'if(baflg == "1"){' +
    'if(DocType == "1"){' +
    'stp.clearDOVar();' +
    'stp.appendDOVar("LM_ID",invRef,"","");' +
    'stp.appendDOVar("LM_DRCR_MRK","C","","");' +
    'stp.appendDOVar("LM_CRED_LMT",invBal,"","");' +
    'stp.invLimitProcess("invpayment","","");' +
    '}else if(DocType == "2"){' +
    'stp.clearDOVar();' +
    'stp.appendDOVar("LM_ID",invRef,"","");' +
    'stp.appendDOVar("LM_DRCR_MRK","D","","");' +
    'stp.appendDOVar("LM_CRED_LMT",invBal,"","");' +
    'stp.invLimitProcess("invpayment","","");' +
    '}' +
    '}' +
    'var invnocal=invNO+"CAL";' +
    'if(doctype=="1"){' +
    'if(msgfunc=="9"){' +
    'stp.updateFieldValue("FA_DOC_BAL","0");' +
    'stp.updateFieldValue("FA_DOC_STATUS","CANCEL");' +
    'stp.updateFieldValue("FA_DOC_NO",invnocal);' +
    '}else{' +
    'stp.updateFieldValue("FA_DOC_BAL",invBal);' +
    'stp.updateFieldValue("FA_DOC_STATUS","ADJ");' +
    'stp.updateFieldValue("FA_DOC_NO",invNO);' +
    '}' +
    '}else{' +
    'stp.updateFieldValue("FA_DOC_BAL","0");' +
    'stp.updateFieldValue("FA_DOC_STATUS","ADJ");' +
    'stp.updateFieldValue("FA_DOC_NO",invNO);' +
    '}';
stp.setDOVar('selID', selId);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('EFIncAjustCancel', "");

stp.writeLog("result=" + result);
stp.writeLog("FA_DOC_REF=" + invRef);
stp.writeLog("FA_DOC_AMT=" + invAmt);
stp.writeLog("FA_DOC_CCY=" + invccy);
stp.writeLog("FA_BA_FLG=" + baflg);
stp.writeLog("FA_DOC_BAL=" + invBal);
stp.writeLog("FA_CRN_INV_LINK_NO=" + invCrnLinkNo);
stp.writeLog("FA_INV_LINK_REF=" + invLinkNo);
stp.writeLog("FA_DOC_STATUS=" + invStatus);
stp.writeLog("FA_DOC_TYPE=" + DocType);

stp.writeLog("==========InEDI10 END==========");