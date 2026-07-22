stp.writeLog("==========InEDI12 START==========");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI12");

var pre = 'IF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'INP';
stp.updateFieldValue("FA_BUSI_STATUS", sub);
stp.updateFieldValue("FA_PMT_TYPE", sub);
var ref = stp.SYS_getRefNo("InEDI12_REF");
var mainref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_PMT_REF", mainref);
stp.updateFieldValue("C_MAIN_REF", mainref);
stp.writeLog("---------------FA_PMT_REF=" + mainref);

var SelEDIId = stp.getXMLNodeValue("SellerNr", "MSG12.Seller", ".");
var BuyEDIId = stp.getXMLNodeValue("BuyerNr", "MSG12.PmtDetails", ".");
var EFFactor = stp.getXMLNodeValue("FactorCode", "MSG12.EF", ".");
var invNO = stp.getXMLNodeValue("InvCreditNoteNr", "MSG12.PmtDetails", ".");
stp.writeLog("---------------SelEDIId=" + SelEDIId);
stp.writeLog("---------------BuyEDIId=" + BuyEDIId);
stp.writeLog("---------------EFFactor=" + EFFactor);
stp.writeLog("---------------invNO=" + invNO);
stp.updateFieldValue("FA_SEL_EDI_ID", SelEDIId);
stp.updateFieldValue("FA_BUYER_EDI_ID", BuyEDIId);
SelEDIId = SelEDIId.toUpperCase();
BuyEDIId = BuyEDIId.toUpperCase();
stp.updateFieldValue("FA_EF_ID", EFFactor);
stp.updateFieldValue("C_TRX_REF", invNO);


var fld_list = stp.addFieldList(null, "C_MAIN_REF");
fld_list = stp.addFieldList(fld_list, "FA_BA_FLG");
fld_list = stp.addFieldList(fld_list, "FA_LMT_CCY");
fld_list = stp.addFieldList(fld_list, "FA_LMT_AMT");
fld_list = stp.addFieldList(fld_list, "FA_LMT_TYPE");
var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", SelEDIId);
var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", BuyEDIId);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", EFFactor);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", 'IF');
var sql_condition = stp.addSQLCondition(sql_condition, "CURRNT_STATUS", 'CCA');
var result = stp.executeQuery("EXIMTRX.FADA_MASTER", fld_list, sql_condition);
var mainRef = stp.getDBFieldValue(result, "C_MAIN_REF");
stp.writeLog("---------------C_MAIN_REF=" + mainRef);
stp.updateFieldValue("FA_SBR_REF", mainRef);
var BAFlg = stp.getDBFieldValue(result, "FA_BA_FLG");
stp.updateFieldValue("FA_BA_FLG", BAFlg);
stp.writeLog("---------------FA_BA_FLG=" + BAFlg);
var LmtCCY = stp.getDBFieldValue(result, "FA_LMT_CCY");
stp.updateFieldValue("FA_LMT_CCY", LmtCCY);
stp.writeLog("---------------FA_LMT_CCY=" + LmtCCY);
var LmtAmt = stp.getDBFieldValue(result, "FA_LMT_AMT");
stp.updateFieldValue("FA_LMT_AMT", LmtAmt);
stp.writeLog("---------------FA_LMT_AMT=" + LmtAmt);
var LmtType = stp.getDBFieldValue(result, "FA_LMT_TYPE");
stp.updateFieldValue("FA_LMT_TYPE", LmtType);
stp.writeLog("---------------FA_LMT_TYPE=" + LmtType);


stp.setEventTimes("0");

stp.writeLog("-----------------DO STRAT----------------");
var plginVar = 'var invNO=stp.getDomDataNodeValue("FA_DOC_NO");' +
    'var PmtType=stp.getDomDataNodeValue("FA_PMT_CLEAR_TYPE");' +
    'var DocType=stp.getDomDataNodeValue("FA_DOC_TYPE");' +
    'var PmtAmt=stp.getDomDataNodeValue("FA_PMT_AMT");' +
    'var BKChgAmt=stp.getDomDataNodeValue("FA_BK_CHG_AMT");' +
    'var DecAmt=stp.getDomDataNodeValue("FA_DEDUCT_AMT");' +
    'var fld_list = stp.addFieldList(null,"FA_DOC_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_AMT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_CCY");' +
    'fld_list = stp.addFieldList(fld_list,"FA_TRF_DT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_CRN_INV_LINK_NO");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_STATUS");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_BAL");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_DUE_DT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_BA_FLG");' +
    'fld_list = stp.addFieldList(fld_list,"FA_INV_LINK_REF");' +
    'var sql_condition =stp.addSQLCondition(null,"FA_DOC_NO",invNO);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_SEL_EDI_ID",SelEDIId);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_BUYER_EDI_ID",BuyEDIId);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_BUSI_TYPE",pre);' +
    'var result = stp.executeQuery("EXIMTRX.INVC_MASTER",fld_list,sql_condition);' +
    'stp.writeLog("----123result----");' +
    'var invRef = stp.getDBFieldValue(result,"FA_DOC_REF");' +
    'var invAmt=stp.getDBFieldValue(result,"FA_DOC_AMT");' +
    'stp.updateFieldValue("FA_DOC_AMT",invAmt);' +
    'stp.updateFieldValue("FA_DOC_REF",invRef);' +
    'var invccy=stp.getDBFieldValue(result,"FA_DOC_CCY");' +
    'stp.updateFieldValue("FA_DOC_CCY",invccy);' +
    'var invStatus=stp.getDBFieldValue(result,"FA_DOC_STATUS");' +
    'stp.updateFieldValue("FA_DOC_STATUS",invStatus);' +
    'var invBal=stp.getDBFieldValue(result,"FA_DOC_BAL");' +
    'stp.updateFieldValue("FA_TEMP_AMT8",invBal);' +
    'stp.updateFieldValue("FA_DOC_BAL",invBal);' +
    'var invDueDt=stp.getDBFieldValue(result,"FA_DOC_DUE_DT");' +
    'stp.updateFieldValue("FA_DOC_DUE_DT",invDueDt);' +
    'var invTrfDt=stp.getDBFieldValue(result,"FA_TRF_DT");' +
    'stp.updateFieldValue("FA_TRF_DT",invTrfDt);' +
    'var invCrnLinkNo=stp.getDBFieldValue(result,"FA_CRN_INV_LINK_NO");' +
    'stp.updateFieldValue("FA_CRN_INV_LINK_NO",invCrnLinkNo);' +
    'var invBAFlg=stp.getDBFieldValue(result,"FA_BA_FLG");' +
    'stp.updateFieldValue("FA_BA_FLG",invBAFlg);' +
    'var invLinkRef=stp.getDBFieldValue(result,"FA_INV_LINK_REF");' +
    'stp.updateFieldValue("FA_INV_LINK_REF",invLinkRef);' +
    'stp.writeLog("FA_INV_LINK_REF=========="+invLinkRef);' +
    'if(PmtType == "2" && DocType == "2"){' +
    'var DocClearAmt = 0-stp.toFloat(PmtAmt);' +
    'var BAInvAmt = 0;' +
    'var BACrnAmt = 0-stp.toFloat(DocClearAmt);' +
    '}else if(PmtType == "2" && DocType == "1"){' +
    'var DocClearAmt = stp.toFloat(PmtAmt)+stp.toFloat(BKChgAmt)+stp.toFloat(DecAmt);' +
    'var BAInvAmt = stp.toFloat(DocClearAmt);' +
    'var BACrnAmt = 0;' +
    '}else if(PmtType == "1" && DocType == "2"){' +
    'var DocClearAmt = 0-stp.toFloat(invBal);' +
    'var BAInvAmt = 0;' +
    'var BACrnAmt = 0-stp.toFloat(DocClearAmt);' +
    '}else if(PmtType == "1" && DocType == "1"){' +
    'var DocClearAmt = stp.toFloat(invBal);' +
    'var BAInvAmt = stp.toFloat(DocClearAmt);' +
    'var BACrnAmt = 0;' +
    '}' +
    'stp.writeLog("BAInvAmt=========="+BAInvAmt);' +
    'if(BAFlg == "1" && LmtType == "1"){' +
    'if(DocType == "1"){' +
    'stp.clearDOVar();' +
    'stp.writeLog("$$$$$$$$$$$$$$$$$$$$$");' +
    'stp.appendDOVar("LM_ID",invLinkRef,"","");' +
    'stp.appendDOVar("LM_DRCR_MRK","C","","");' +
    'stp.appendDOVar("LM_CRED_LMT",BAInvAmt,"","");' +
    'stp.invLimitProcess("invpayment","","");' +
    '}else if(DocType == "2"){' +
    'stp.clearDOVar();' +
    'stp.writeLog("####################");' +
    'stp.appendDOVar("LM_ID",invLinkRef,"","");' +
    'stp.appendDOVar("LM_DRCR_MRK","D","","");' +
    'stp.appendDOVar("LM_CRED_LMT",BACrnAmt,"","");' +
    'stp.invLimitProcess("invpayment","","");' +
    '}' +
    '}';
stp.setDOVar('SelEDIId', SelEDIId);
stp.setDOVar('BuyEDIId', BuyEDIId);
stp.setDOVar('pre', pre);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('PaymentReg', "");
stp.writeLog("-----------------DO END----------------");

stp.writeLog("==========InEDI12 END==========");