stp.writeLog("********************start");
stp.setAutoProcess(true);
var EdiType = stp.getEdiType("");
stp.writeLog(EdiType);
if (EdiType == 'MSG11') {
    stp.setEdiRule("Payment_In11");
    var selId = stp.getXMLNodeValue("SellerNr", "MSG11.Seller", ".");
    var buyId = stp.getXMLNodeValue("BuyerNr", "MSG11.PmtDetails", ".");
    var impFactor = stp.getXMLNodeValue("FactorCode", "MSG11.IF", ".");
    var invNO = stp.getXMLNodeValue("InvCreditNoteNr", "MSG11.PmtDetails", ".");
    stp.writeLog("@@@@@@@@@@@@@@@@@@invNO=" + invNO);
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
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", "EF");
    var result = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list, sql_condition);
    var mainRef = stp.getDBFieldValue(result, "FSBC_REF");
    stp.writeLog("result=" + result);
    stp.writeLog("FSBC_REF=" + mainRef);
    stp.updateFieldValue("FA_SBR_REF", mainRef);
    stp.updateFieldValue("C_TRX_REF", invNO);
    stp.setEventTimesFromTable("EXIMTRX.FAEF_MASTER");

    var pre = 'EF';
    stp.updateFieldValue("FA_BUSI_TYPE", pre);
    var UnitCode = stp.getBusiUnit();
    var year = stp.getSysBusiDate();
    var month = stp.getSysBusiDate();
    stp.updateFieldValue("TRX_DT", year);

    year = year.substr(2, 2);
    month = month.substr(5, 2);
    var sub = 'PMT';
    var ref = stp.SYS_getRefNo("FAEF_PMT_BURER");
    var prf = pre + UnitCode + year + month + ref + sub;
    stp.writeLog("FA_PMT_REF=" + prf);
    stp.updateFieldValue("FA_PMT_REF", prf);
    stp.updateFieldValue("C_MAIN_REF", prf);
    stp.updateFieldValue("FA_BUSI_STATUS", "PMT");
    stp.updateFieldValue("FA_PMT_TYPE", "PMT");
    stp.writeLog("InEDI11end");
} else if (EdiType == 'MSG13') {
    stp.setEdiRule("Payment_In13");
    var selId = stp.getXMLNodeValue("SellerNr", "MSG13.Seller", ".");
    var buyId = stp.getXMLNodeValue("BuyerNr", "MSG13.PmtDetails", ".");
    var impFactor = stp.getXMLNodeValue("FactorCode", "MSG13.IF", ".");
    var invNO = stp.getXMLNodeValue("InvCreditNoteNr", "MSG13.PmtDetails", ".");
    stp.writeLog("@@@@@@@@@@@@@@@@@@invNO13=" + invNO);
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
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", "EF");
    var result = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list, sql_condition);
    var mainRef = stp.getDBFieldValue(result, "FSBC_REF");
    stp.writeLog("result=" + result);
    stp.writeLog("FSBC_REF=" + mainRef);
    stp.updateFieldValue("FA_SBR_REF", mainRef);
    stp.updateFieldValue("C_TRX_REF", invNO);
    stp.setEventTimesFromTable("EXIMTRX.FAEF_MASTER");

    var pre = 'EF';
    stp.updateFieldValue("FA_BUSI_TYPE", pre);
    var UnitCode = stp.getBusiUnit();
    var year = stp.getSysBusiDate();
    var month = stp.getSysBusiDate();
    //stp.updateFieldValue("FA_TRX_DT",year);
    stp.updateFieldValue("TRX_DT", year);
    stp.writeLog("TRX_DT=" + year);
    //BY MICHAEL
    year = year.substr(2, 2);
    month = month.substr(5, 2);
    var sub = 'PUG';
    var ref = stp.SYS_getRefNo("FAEF_PMT_GUR");
    var prf = pre + UnitCode + year + month + ref + sub;
    stp.writeLog("FA_PMT_REF=" + prf);
    stp.updateFieldValue("FA_PMT_REF", prf);
    stp.updateFieldValue("C_MAIN_REF", prf);
    stp.writeLog("C_MAIN_REF=" + prf);
    stp.updateFieldValue("FA_BUSI_STATUS", "PUG");
    stp.updateFieldValue("FA_PMT_TYPE", "PUG");
    stp.writeLog("InEDI13end");
}

var plginVar = 'var invNO=stp.getDomDataNodeValue("FA_DOC_NO");' +
    'var fld_list = stp.addFieldList(null,"FA_DOC_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_AMT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_CCY");' +
    'fld_list = stp.addFieldList(fld_list,"FA_TRF_DT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_CRN_INV_LINK_NO");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_STATUS");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_BAL");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_DUE_DT");' +
    'var sql_condition =stp.addSQLCondition(null,"FA_DOC_NO",invNO);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_SEL_EDI_ID",selID);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_BUSI_TYPE","EF");' +
    'var result = stp.executeQuery("EXIMTRX.INVC_MASTER",fld_list,sql_condition);' +
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
    'stp.writeLog("mainRef="+mainRef);' +
    'stp.updateFieldValue("FSBC_REF",mainRef);';
stp.setDOVar('selID', selId);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('PaymentReg', "");
stp.writeLog("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%end");