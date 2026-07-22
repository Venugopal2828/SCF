stp.writeLog("==========InEDI16 START==========");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI16");

var expFactor = stp.getXMLNodeValue("FactorCode", "MSG16.EF", ".");
stp.writeLog("---------------expFactor=" + expFactor);
var ReceiverCode = stp.getXMLNodeValue("ReceiverCode", "MSG16.MsgInfo", ".");
stp.writeLog("---------------ReceiverCode=" + ReceiverCode);

if (expFactor.equalsIgnoreCase(ReceiverCode)) {
    stp.updateFieldValue("FA_BUSI_TYPE", 'EF');
} else {
    stp.updateFieldValue("FA_BUSI_TYPE", 'IF');
}

var BusiType = stp.getFieldValue("FA_BUSI_TYPE");
stp.writeLog("---------------FA_BUSI_TYPE=" + BusiType);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'CBK';
stp.updateFieldValue("FA_BUSI_STATUS", sub);
var ref = stp.SYS_getRefNo("FAEF_CBK_REF");
var mainref = BusiType + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_CBK_REF", mainref);
stp.updateFieldValue("C_MAIN_REF", mainref);
stp.writeLog("---------------FA_CBK_REF=" + mainref);
stp.writeLog("---------------C_MAIN_REF=" + mainref);

stp.updateFieldValue("FA_MSG_TEXT", "");
stp.updateFieldValue("CLERK_ID", 'CSBANKOP');

var selId = stp.getXMLNodeValue("SellerNr", "MSG16.Seller", ".");
var buyId = stp.getXMLNodeValue("BuyerNr", "MSG16.ChargeBackReassDetails", ".");
var impFactor = stp.getXMLNodeValue("FactorCode", "MSG16.IF", ".");
var invNO = stp.getXMLNodeValue("DocNr", "MSG16.ChargeBackReassDetails", ".");
stp.writeLog("---------------SelEDIId=" + selId);
stp.writeLog("---------------BuyEDIId=" + buyId);
stp.writeLog("---------------EFFactor=" + impFactor);
stp.writeLog("---------------FA_DOC_NO=" + invNO);
stp.updateFieldValue("FA_SEL_EDI_ID", selId);
stp.updateFieldValue("FA_BUYER_EDI_ID", buyId);
selId = selId.toUpperCase();
buyId = buyId.toUpperCase();
stp.updateFieldValue("FA_IF_ID", impFactor);

var fld_list = stp.addFieldList(null, "FSBC_REF");
var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", selId);
var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", buyId);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_IF_ID", impFactor);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_NO", invNO);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", 'EF');
var result = stp.executeQuery("INVC_MASTER", fld_list, sql_condition);
var fsbcRef = stp.getDBFieldValue(result, "FSBC_REF");
stp.updateFieldValue("FA_SBR_REF", fsbcRef);
//stp.updateFieldValue("C_TRX_REF",invNO);
stp.writeLog("---------------FA_SBR_REF=" + fsbcRef);

var fld_list1 = stp.addFieldList(null, "FA_LMT_TYPE");
var sql_condition1 = stp.addSQLCondition(null, "C_MAIN_REF", fsbcRef);
var result = stp.executeQuery("FADA_MASTER", fld_list1, sql_condition1);
var lmttype = stp.getDBFieldValue(result, "FA_LMT_TYPE");
stp.updateFieldValue("FA_LMT_TYPE", lmttype);
stp.writeLog("---------------FA_LMT_TYPE=" + lmttype);

stp.setEventTimes("0");

stp.writeLog("-----------------DO STRAT----------------");
var plginVar = 'var invNO=stp.getDomDataNodeValue("FA_DOC_NO");' +
    'var cbkAmt=stp.getDomDataNodeValue("FA_CBK_AMT");' +
    'var docType=stp.getDomDataNodeValue("FA_DOC_TYPE");' +
    'var fld_list = stp.addFieldList(null,"FA_DOC_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_AMT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_INV_LINK_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_CCY");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_BAL");' +
    'fld_list = stp.addFieldList(fld_list,"FA_INV_LOAN_BAL");' +
    'fld_list = stp.addFieldList(fld_list,"FA_BA_FLG");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_DUE_DT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_FIN_RET_BAL");' +
    'fld_list = stp.addFieldList(fld_list,"FA_CRN_INV_LINK_NO");' +
    'fld_list = stp.addFieldList(fld_list,"FA_TRF_FX_RT");' +
    'fld_list = stp.addFieldList(fld_list,"C_MAIN_REF");' +
    'var sql_condition =stp.addSQLCondition(null,"FA_DOC_NO",invNO);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_SEL_EDI_ID",selID);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_BUSI_TYPE",BusiType);' +
    'var result = stp.executeQuery("INVC_MASTER",fld_list,sql_condition);' +
    'var invRef = stp.getDBFieldValue(result,"FA_DOC_REF");' +
    'var invAmt = stp.getDBFieldValue(result,"FA_DOC_AMT");' +
    'stp.updateFieldValue("FA_DOC_AMT",invAmt);' +
    'stp.updateFieldValue("FA_DOC_REF",invRef);' +
    'var invlinkRef=stp.getDBFieldValue(result,"FA_INV_LINK_REF");' +
    'stp.updateFieldValue("FA_INV_LINK_REF",invlinkRef);' +
    'var docCcy=stp.getDBFieldValue(result,"FA_DOC_CCY");' +
    'stp.updateFieldValue("FA_DOC_CCY",docCcy);' +
    'var loanbal=stp.getDBFieldValue(result,"FA_INV_LOAN_BAL");' +
    'stp.updateFieldValue("FA_INV_LOAN_BAL",loanbal);' +
    'var docBal=stp.getDBFieldValue(result,"FA_DOC_BAL");' +
    'stp.updateFieldValue("FA_DOC_BAL",docBal);' +
    'stp.updateFieldValue("FA_TEMP_AMT10",docBal);' +
    'var baflg=stp.getDBFieldValue(result,"FA_BA_FLG");' +
    'stp.updateFieldValue("FA_BA_FLG",baflg);' +
    'var trxFxRate=stp.getDBFieldValue(result,"FA_TRF_FX_RT");' +
    'stp.updateFieldValue("FA_TRF_FX_RT",trxFxRate);' +
    'var crnLinkNO=stp.getDBFieldValue(result,"FA_CRN_INV_LINK_NO");' +
    'stp.updateFieldValue("FA_CRN_INV_LINK_NO",crnLinkNO);' +
    'var finReBal=stp.getDBFieldValue(result,"FA_FIN_RET_BAL");' +
    'stp.updateFieldValue("FA_FIN_RET_BAL",finReBal);' +
    'stp.updateFieldValue("TEMP_AMT13",finReBal);' +
    'var docDueDT=stp.getDBFieldValue(result,"FA_DOC_DUE_DT");' +
    'stp.updateFieldValue("FA_DOC_DUE_DT",docDueDT);' +
    'stp.updateFieldValue("FA_TEMP4",invNO);' +
    'var CMAIN=stp.getDBFieldValue(result,"C_MAIN_REF");' +
    'stp.updateFieldValue("C_MAIN_REF",CMAIN);' +
    'if(stp.toFloat("docBal")<stp.toFloat("loanbal")){' +
    'stp.updateFieldValue("FA_FIN_RETURN_REQ","1");' +
    '}else{' +
    'stp.updateFieldValue("FA_FIN_RETURN_REQ","2");' +
    '}' +
    'if(docType == "1"){' +
    'var INVBa = stp.toFloat(cbkAmt);' +
    'var CRNBa = 0;' +
    '}else if(docType == "2"){' +
    'var INVBa = 0;' +
    'var CRNBa = stp.toFloat(cbkAmt);' +
    '}' +
    'if(baflg == "1" && lmttype == "1"){' +
    'if(docType == "1"){' +
    'stp.clearDOVar();' +
    'stp.appendDOVar("LM_ID",invlinkRef,"","");' +
    'stp.appendDOVar("LM_DRCR_MRK","C","","");' +
    'stp.appendDOVar("LM_CRED_LMT",INVBa,"","");' +
    'stp.invLimitProcess("invpayment","","");' +
    '}else if(docType == "2"){' +
    'stp.clearDOVar();' +
    'stp.appendDOVar("LM_ID",invlinkRef,"","");' +
    'stp.appendDOVar("LM_DRCR_MRK","D","","");' +
    'stp.appendDOVar("LM_CRED_LMT",CRNBa,"","");' +
    'stp.invLimitProcess("invpayment","","");' +
    '}' +
    '}';
stp.setDOVar('selID', selId);
stp.setDOVar('BusiType', BusiType);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('ChgBack', "");
stp.writeLog("-----------------DO END----------------");
stp.writeLog("==========InEDI16 END==========");