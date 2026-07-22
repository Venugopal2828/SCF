stp.writeLog("==========InEDI09 START==========");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI09");
stp.updateFieldValue("FA_BUSI_STATUS", "IVT");
stp.updateFieldValue("FA_BUSI_TYPE", "IF");
stp.updateFieldValue("CLERK_ID", "SYS_STP_USER");

var FA_DOC_CCY = stp.getXMLNodeValue("InvBatchCurrency", "MSG09", ".");
stp.updateFieldValue("FINC_CCY1", FA_DOC_CCY);
stp.updateFieldValue("FINC_CCY2", FA_DOC_CCY);
stp.updateFieldValue("FA_CB_FEE_CCY", 'USD');
stp.updateFieldValue("FA_IF_CHG_PAID_FLG", 'N');
stp.updateFieldValue("FA_INSU_PAID_FLG", 'N');
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
stp.writeLog("---------------FA_DOC_CCY=" + FA_DOC_CCY);

var pre = 'IF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'IVT';
var ref = stp.SYS_getRefNo("FAEF_INV_TRF");
var mainref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_TRF_REF", mainref);
/*20141208 BY ECHO FOR SCF*/
stp.updateFieldValue("C_MAIN_REF", mainref);
stp.writeLog("TRFref===============" + mainref);
stp.setEventTimesFromTable("EXIMTRX.FAEF_MASTER");


fld_list = stp.addFieldList(null, "C_MAIN_REF");
fld_list = stp.addFieldList(fld_list, "FA_SEL_ID");
fld_list = stp.addFieldList(fld_list, "FA_BUYER_ID");
fld_list = stp.addFieldList(fld_list, "FA_BA_FLG");
fld_list = stp.addFieldList(fld_list, "FA_PMT_TERMS");
fld_list = stp.addFieldList(fld_list, "FA_LMT_CCY");
fld_list = stp.addFieldList(fld_list, "FA_LMT_AMT");
fld_list = stp.addFieldList(fld_list, "FA_INCO_ID");
fld_list = stp.addFieldList(fld_list, "FA_INCO_NM");
fld_list = stp.addFieldList(fld_list, "FA_SERVICE_REQ");
fld_list = stp.addFieldList(fld_list, "FA_SERVICE_APPRVD");
fld_list = stp.addFieldList(fld_list, "FA_LMT_VAL_DT");
var FA_SEL_EDI_ID = stp.getXMLNodeValue("SellerNr", "MSG09.Seller", ".");
var FA_BUYER_EDI_ID = stp.getXMLNodeValue("BuyerNr", "MSG09.InvCreditNoteDetails", ".");
var FA_IF_ID = stp.getXMLNodeValue("FactorCode", "MSG09.IF", ".");
var sql_condition = stp.addSQLCondition(null, "FA_SEL_EDI_ID", FA_SEL_EDI_ID);
sql_condition = stp.addSQLCondition(sql_condition, "FA_BUYER_EDI_ID", FA_BUYER_EDI_ID);
sql_condition = stp.addSQLCondition(sql_condition, "FA_IF_ID", FA_IF_ID);
sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", 'IF');
sql_condition = stp.addSQLCondition(sql_condition, "CURRNT_STATUS", 'CCA');
stp.writeLog("FA_SEL_EDI_ID======================" + FA_SEL_EDI_ID);
stp.writeLog("FA_BUYER_EDI_ID======================" + FA_BUYER_EDI_ID);
stp.writeLog("FA_IF_ID======================" + FA_IF_ID);
var result = stp.executeQuery("FADA_MASTER", fld_list, sql_condition);
/*var C_MAIN_REF = stp.getDBFieldValue(result,"C_MAIN_REF");*/
/*20141208 BY ECHO FOR SCF*/
var FA_SBR_REF = stp.getDBFieldValue(result, "C_MAIN_REF");
var FA_BA_FLG = stp.getDBFieldValue(result, "FA_BA_FLG");
var FA_LMT_CCY = stp.getDBFieldValue(result, "FA_LMT_CCY");
var FA_SEL_ID = stp.getDBFieldValue(result, "FA_SEL_ID");
var FA_BUYER_ID = stp.getDBFieldValue(result, "FA_BUYER_ID");
var FA_PMT_TERMS = stp.getDBFieldValue(result, "FA_PMT_TERMS")
var FA_LMT_AMT = stp.getDBFieldValue(result, "FA_LMT_AMT");
var FA_INCO_ID = stp.getDBFieldValue(result, "FA_INCO_ID");
var FA_INCO_NM = stp.getDBFieldValue(result, "FA_INCO_NM");
var FA_SERVICE_REQ = stp.getDBFieldValue(result, "FA_SERVICE_REQ");
var FA_SERVICE_APPRVD = stp.getDBFieldValue(result, "FA_SERVICE_APPRVD");
var FA_LMT_VAL_DT = stp.getDBFieldValue(result, "FA_LMT_VAL_DT");

stp.updateFieldValue("FA_SERVICE_APPRVD", FA_SERVICE_APPRVD);
stp.updateFieldValue("FA_SERVICE_REQ", FA_SERVICE_REQ);
stp.updateFieldValue("FA_INCO_NM", FA_INCO_NM);
stp.updateFieldValue("FA_INCO_ID", FA_INCO_ID);
stp.updateFieldValue("FA_LMT_AMT", FA_LMT_AMT);
stp.updateFieldValue("FA_LMT_CCY", FA_LMT_CCY);
stp.updateFieldValue("FA_BA_FLG", FA_BA_FLG);
/*stp.updateFieldValue("C_MAIN_REF",C_MAIN_REF);*/
/*20141208 BY ECHO FOR SCF*/
stp.updateFieldValue("FA_SBR_REF", FA_SBR_REF);
stp.updateFieldValue("FA_SEL_ID", FA_SEL_ID);
stp.updateFieldValue("FA_BUYER_ID", FA_BUYER_ID);
stp.updateFieldValue("FA_PMT_TERMS", FA_PMT_TERMS);
stp.updateFieldValue("FA_LMT_VAL_DT", FA_LMT_VAL_DT);
stp.setEventTimesFromTable("EXIMTRX.FAEF_MASTER");


var fld_list1 = stp.addFieldList(null, "LM_CRED_LMT");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTC_APL");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTC_APV");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTD_APL");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTD_APV");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTD_APLO");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTD_APVO");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTC_APLO");
fld_list1 = stp.addFieldList(fld_list1, "LM_OUTC_APVO");

/*var sql_condition1 = stp.addSQLCondition(null,"LM_ID",C_MAIN_REF);*/
/*20141208 BY ECHO FOR SCF*/
stp.writeLog(FA_SBR_REF);
var sql_condition1 = stp.addSQLCondition(null, "LM_ID", FA_SBR_REF);
var result1 = stp.executeQuery("STDS_PAGE", fld_list1, sql_condition1);
var LM_CRED_LMT = stp.getDBFieldValue(result1, "LM_CRED_LMT");
var LM_OUTC_APL = stp.getDBFieldValue(result1, "LM_OUTC_APL");
var LM_OUTC_APV = stp.getDBFieldValue(result1, "LM_OUTC_APV");
var LM_OUTD_APL = stp.getDBFieldValue(result1, "LM_OUTD_APL");
var LM_OUTD_APV = stp.getDBFieldValue(result1, "LM_OUTD_APV");
var LM_OUTD_APLO = stp.getDBFieldValue(result1, "LM_OUTD_APLO");
var LM_OUTD_APVO = stp.getDBFieldValue(result1, "LM_OUTD_APVO");
var LM_OUTC_APLO = stp.getDBFieldValue(result1, "LM_OUTC_APLO");
var LM_OUTC_APVO = stp.getDBFieldValue(result1, "LM_OUTC_APVO");
var LMT_BAL = stp.toFloat(LM_CRED_LMT) + stp.toFloat(LM_OUTC_APL) + stp.toFloat(LM_OUTC_APV) - stp.toFloat(LM_OUTD_APL) - stp.toFloat(LM_OUTD_APV);
var LMT_EXTRA = stp.toFloat(LM_OUTD_APLO) + stp.toFloat(LM_OUTD_APVO) - stp.toFloat(LM_OUTC_APLO) - stp.toFloat(LM_OUTC_APVO);
stp.updateFieldValue("FA_LMT_BAL", LMT_BAL);
stp.updateFieldValue("FA_LMT_EXTRA", LMT_EXTRA);
stp.updateFieldValue("FA_LMT_APPRV", LM_CRED_LMT);
stp.writeLog("---------------FA_LMT_BAL=" + LMT_BAL);
stp.writeLog("---------------FA_LMT_EXTRA=" + LMT_EXTRA);
stp.writeLog("---------------FA_LMT_APPRV=" + LM_CRED_LMT);


var FA_EF_ID = stp.getXMLNodeValue("FactorCode", "MSG09.EF", ".");
var fld_list = stp.addFieldList(null, "MAX(FA_PRICING_VAL_DT) AS FA_PRICING_VAL_DT");
var sql_condition = stp.addSQLCondition(null, "FA_SEL_ID", FA_SEL_ID);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUYER_ID", FA_BUYER_ID);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", FA_EF_ID);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_STATUS", 'PCI');
var sql_condition = stp.addSQLCondition(sql_condition, "FA_BUSI_TYPE", 'IF');
var sql_condition1 = stp.addSQLCondition(sql_condition, "FA_PRICING_VAL_DT", date, "<=", "AND");
var result = stp.executeQuery("FADA_PRICING", fld_list, sql_condition1);
var FA_PRICING_VAL_DT = stp.getDBFieldValue(result, "FA_PRICING_VAL_DT");
stp.writeLog("---------------FA_PRICING_VAL_DT=" + FA_PRICING_VAL_DT);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_PRICING_VAL_DT", FA_PRICING_VAL_DT);
var fld_list = stp.addFieldList(null, "FA_IF_COMM_RT");
var fld_list = stp.addFieldList(fld_list, "FA_IF_HAN_CHG_CCY");
var fld_list = stp.addFieldList(fld_list, "FA_IF_HAN_CHG_AMT");
var result = stp.executeQuery("FADA_PRICING", fld_list, sql_condition);
var FA_IF_COMM_RT = stp.getDBFieldValue(result, "FA_IF_COMM_RT");
var FA_IF_HAN_CHG_CCY = stp.getDBFieldValue(result, "FA_IF_HAN_CHG_CCY");
var FA_IF_HAN_CHG_AMT = stp.getDBFieldValue(result, "FA_IF_HAN_CHG_AMT");
stp.updateFieldValue("FA_IF_COMM_RT", FA_IF_COMM_RT);
stp.updateFieldValue("FA_IF_HAN_CHG_CCY", FA_IF_HAN_CHG_CCY);
stp.updateFieldValue("FA_IF_HAN_CHG_AMT", FA_IF_HAN_CHG_AMT);
stp.updateFieldValue("FA_IF_HAN_CHG_PAMT", FA_IF_HAN_CHG_AMT);
stp.writeLog("---------------FA_IF_COMM_RT=" + FA_IF_COMM_RT);
stp.writeLog("---------------FA_IF_HAN_CHG_CCY=" + FA_IF_HAN_CHG_CCY);
stp.writeLog("---------------FA_IF_HAN_CHG_AMT=" + FA_IF_HAN_CHG_AMT);

var FA_INCO_COMM_RT = "";
if (FA_INCO_ID.trim() != '' && FA_INCO_ID != null) {
    stp.writeLog("---------------FA_INCO_COMM_RT times1=" + FA_INCO_COMM_RT);
    var fld_list = stp.addFieldList(null, "FA_IF_COMM_RT");
    var sql_condition = stp.addSQLCondition(null, "FA_FACTOR_ID", FA_INCO_ID);
    var result = stp.executeQuery("FADA_FACTOR", fld_list, sql_condition);
    var FA_INCO_COMM_RT = stp.getDBFieldValue(result, "FA_IF_COMM_RT");
    stp.updateFieldValue("FA_INCO_COMM_RT", FA_INCO_COMM_RT);
}
stp.writeLog("---------------FA_INCO_COMM_RT times2=" + FA_INCO_COMM_RT);


stp.writeLog("FA_LMT_CCY===============" + FA_LMT_CCY);
//var EXCH_RT4=1;
//var EXCH_RT6=1;
if (FA_DOC_CCY != FA_LMT_CCY) {
    stp.SYS_GetExchangeRate(FA_DOC_CCY, FA_LMT_CCY, "Booking Rate", "EXCH_RT6");
}
if (FA_DOC_CCY != FA_IF_HAN_CHG_CCY) {
    stp.SYS_GetExchangeRate(FA_DOC_CCY, FA_IF_HAN_CHG_CCY, "Booking Rate", "EXCH_RT4");
}
var EXCH_RT4 = stp.getFieldValue("EXCH_RT4");
var EXCH_RT6 = stp.getFieldValue("EXCH_RT6");
stp.writeLog("EXCH_RT4123===============" + EXCH_RT4);
stp.writeLog("EXCH_RT6123===============" + EXCH_RT6);
if (EXCH_RT4 == null || EXCH_RT4 == ''||EXCH_RT4 ==0.0) {
    EXCH_RT4 = '1';
    stp.writeLog("EXCH_RT4EXCH_RT4EXCH_RT4EXCH_RT4===============" + EXCH_RT4);
}
if (EXCH_RT6 == null || EXCH_RT6 == ''||EXCH_RT6 ==0.0) {
    EXCH_RT6 = '1';
    stp.writeLog("EXCH_RT6EXCH_RT6EXCH_RT6EXCH_RT6===============" + EXCH_RT4);
}
stp.writeLog("EXCH_RT4===============" + EXCH_RT4);
stp.writeLog("EXCH_RT6===============" + EXCH_RT6);
stp.updateFieldValue("EXCH_RT4", EXCH_RT4);
stp.updateFieldValue("EXCH_RT6", EXCH_RT6);


var ifccy = stp.getFieldValue("FA_IF_HAN_CHG_CCY");
var docccy = stp.getFieldValue("FA_DOC_CCY");
if (EXCH_RT4 != null && EXCH_RT4 != '') {
    var FA_IF_HAN_CHG_PAMT = stp.getFieldValue("FA_IF_HAN_CHG_PAMT");
    stp.updateFieldValue("FA_IF_HAN_CHG_PAMT", stp.toFloat(FA_IF_HAN_CHG_PAMT) / EXCH_RT4);
    stp.writeLog("FA_IF_HAN_CHG_PAMT===============" + stp.toFloat(FA_IF_HAN_CHG_PAMT) / EXCH_RT4);
}



var TRF_DT = stp.getXMLNodeValue("InvBatchDate", "MSG09", ".");
var FA_IF_HAN_CHG_PAMT = stp.getFieldValue("FA_IF_HAN_CHG_PAMT");
var flg = stp.getFieldValue("FA_SERVICE_REQ");

stp.writeLog("DOSTART**********");
var plginVar = 'var DocType=stp.getDomDataNodeValue("FA_DOC_TYPE");' +
    'var ref = stp.SYS_getRefNo("FAEF_INV_REF");' +
    'if(DocType == "1"){' +
    'var sub = "INV";' +
    '}else if(DocType == "2"){' +
    'var sub = "CRN";' +
    '}' +
    'var docref = pre + UnitCode + year + month + ref + sub;' +
    'stp.writeLog("docref=========="+docref);' +
    'stp.updateFieldValue("FA_DOC_REF",docref);' +
    'stp.updateFieldValue("C_MAIN_REF",docref);' +
    'stp.updateFieldValue("C_TRX_REF",docref);' +
    'stp.updateFieldValue("FSBC_REF",FA_SBR_REF);' +
    'stp.updateFieldValue("FA_DOC_STATUS","TRF");' +
    'stp.updateFieldValue("FA_TRF_DT",TRF_DT);' +
    'stp.updateFieldValue("FA_BUSI_TYPE","IF");' +
    'stp.updateFieldValue("FA_IF_HAN_CHG_CCY",FA_IF_HAN_CHG_CCY);' +
    'stp.updateFieldValue("FA_IF_HAN_CHG_AMT",FA_IF_HAN_CHG_AMT);' +
    'stp.updateFieldValue("FA_IF_HAN_CHG_PAMT",FA_IF_HAN_CHG_PAMT);' +
    'stp.writeLog("FA_IF_HAN_CHG_PAMT==============="+FA_IF_HAN_CHG_PAMT);' +
    'stp.updateFieldValue("FA_IF_CHG_PAID_FLG","N");' +
    'stp.updateFieldValue("FA_INSU_PAID_FLG","N");' +
    'if(DocType == "1"){' +
    'stp.updateFieldValue("FA_INV_LINK_REF",docref);' +
    '}else if(DocType == "2"){' +
    'var fld_list = stp.addFieldList(null,"FA_INV_LINK_REF");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_AMT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_DOC_BAL");' +
    'fld_list = stp.addFieldList(fld_list,"FA_PRM_DISC_DAYS");' +
    'fld_list = stp.addFieldList(fld_list,"FA_LATEST_SHIP_DT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_PRM_DISC_RT");' +
    'fld_list = stp.addFieldList(fld_list,"FA_SND_DISC_DAYS");' +
    'fld_list = stp.addFieldList(fld_list,"FA_LATEST_SHIP_DT");' +
    'var FA_CRN_INV_LINK_NO= stp.getFieldValue("FA_CRN_INV_LINK_NO");' +
    'stp.writeLog("FA_CRN_INV_LINK_NO==============="+FA_CRN_INV_LINK_NO);' +
    'stp.writeLog("UnitCode==============="+UnitCode);' +
    'stp.writeLog("C_MAIN_REF==============="+C_MAIN_REF);' +
    'var sql_condition =stp.addSQLCondition(null,"C_UNIT_CODE",UnitCode);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FA_DOC_NO",FA_CRN_INV_LINK_NO);' +
    'sql_condition=stp.addSQLCondition(sql_condition,"FSBC_REF",FA_SBR_REF);' +
    'var result = stp.executeQuery("EXIMTRX.INVC_MASTER",fld_list,sql_condition);' +
    'var FA_INV_LINK_REF=stp.getDBFieldValue(result,"FA_INV_LINK_REF");' +
    'stp.writeLog("FA_INV_LINK_REF==============="+FA_INV_LINK_REF);' +
    'stp.updateFieldValue("FA_INV_LINK_REF",FA_INV_LINK_REF);' +
    'var FA_TEMP_AMT12=stp.getDBFieldValue(result,"FA_DOC_AMT");' +
    'stp.updateFieldValue("FA_TEMP_AMT12",FA_TEMP_AMT12);' +
    'var FA_TEMP_AMT11=stp.getDBFieldValue(result,"FA_DOC_BAL");' +
    'stp.updateFieldValue("FA_TEMP_AMT11",FA_TEMP_AMT11);' +
    'var FA_LATEST_SHIP_DT=stp.getDBFieldValue(result,"FA_LATEST_SHIP_DT");' +
    'stp.updateFieldValue("FA_LATEST_SHIP_DT",FA_LATEST_SHIP_DT);' +
    'var FA_PRM_DISC_DAYS=stp.getDBFieldValue(result,"FA_PRM_DISC_DAYS");' +
    'stp.updateFieldValue("FA_PRM_DISC_DAYS",FA_PRM_DISC_DAYS);' +
    'var FA_PRM_DISC_RT=stp.getDBFieldValue(result,"FA_PRM_DISC_RT");' +
    'stp.updateFieldValue("FA_PRM_DISC_RT",FA_PRM_DISC_RT);' +
    'var FA_SND_DISC_DAYS=stp.getDBFieldValue(result,"FA_SND_DISC_DAYS");' +
    'stp.updateFieldValue("FA_SND_DISC_DAYS",FA_SND_DISC_DAYS);' +
    'var FA_SND_DISC_RT=stp.getDBFieldValue(result,"FA_SND_DISC_RT");' +
    'stp.updateFieldValue("FA_SND_DISC_RT",FA_SND_DISC_RT);' +
    '}' +
    'var docamt= stp.getFieldValue("FA_DOC_AMT");' +
    'var FA_IF_COMM_AMT=stp.toFloat(docamt)*stp.toFloat(FA_IF_COMM_RT)/100;' +
    'stp.updateFieldValue("FA_IF_COMM_AMT",FA_IF_COMM_AMT);' +
    'stp.writeLog("FA_IF_COMM_AMT==============="+FA_IF_COMM_AMT);' +
    'stp.updateFieldValue("FA_DOC_BAL",docamt);' +
    'var duedate=stp.getDomDataNodeValue("FA_DOC_DUE_DT");' +
    'var trfdate=stp.getDomDataNodeValue("FA_TRF_DT");' +
    'var valdate=stp.getDomDataNodeValue("FA_DOC_VAL_DT");' +
    'stp.writeLog("duedate=========="+duedate);' +
    'stp.writeLog("trfdate=========="+trfdate);' +
    'stp.writeLog("valdate=========="+valdate);' +
    'stp.writeLog("FA_LMT_VAL_DT=========="+FA_LMT_VAL_DT);' +
    'if(FA_LMT_AMT == 0||duedate < trfdate||valdate < FA_LMT_VAL_DT||FA_BA_FLG=="2"){' +
    'stp.updateFieldValue("FA_BA_FLG","2");' +
    'stp.updateFieldValue("FA_INVAMT_IN_LMT",0);' +
    '}else{' +
    'stp.updateFieldValue("FA_BA_FLG","1");' +
    'if(DocType == "1"){' +
    'stp.updateFieldValue("FA_INVAMT_IN_LMT",docamt);' +
    '}else if(DocType == "2"){' +
    'stp.updateFieldValue("FA_INVAMT_IN_LMT",0-stp.toFloat(docamt));' +
    '}' +
    '}' +
    'if (flg=="1"){' +
    'var FA_INCO_COMM_AMT=stp.toFloat(docamt)*stp.toFloat(FA_INCO_COMM_RT)/100;' +
    'stp.updateFieldValue("FA_INCO_COMM_AMT",FA_INCO_COMM_AMT);' +
    '}else{' +
    'stp.updateFieldValue("FA_INCO_COMM_AMT",0);' +
    '}' +
    'if(FA_BA_FLG == "1"){' +
    'stp.writeLog("*****LIMITS START**********");' +
    'var DocNo=stp.getDomDataNodeValue("FA_DOC_NO");' +
    'stp.writeLog("****docref=*********"+docref);' +
    'stp.writeLog("****docamt=*********"+docamt);' +
    'stp.writeLog("****DocNo=*********"+DocNo);' +
    'stp.writeLog("****FA_SBR_REF=*********"+FA_SBR_REF);' +
    'stp.writeLog("****FA_DOC_CCY=*********"+FA_DOC_CCY);' +
    'stp.writeLog("****EXCH_RT6=*********"+EXCH_RT6);' +
    'stp.clearDOVar();' +
    'stp.appendDOVar("LM_ID",docref,"","");' +
    'stp.appendDOVar("LM_NM",DocNo,"","");' +
    'stp.appendDOVar("LM_DEBT_LMT",docamt,"","");' +
    'stp.appendDOVar("LM_PARENT_ID",FA_SBR_REF,"","");' +
    'stp.appendDOVar("LM_BASE_CCY",FA_DOC_CCY,"","");' +
    'stp.appendDOVar("LM_ERATE",EXCH_RT6,"","");' +
    'stp.appendDOVar("LM_DUE_DAY",duedate,"","");' +
    'stp.invLimitProcess("Invallocation","","");' +
    'stp.writeLog("*****LIMITS END**********");' +
    '}';
stp.setDOVar('EXCH_RT6', EXCH_RT6);
stp.setDOVar('C_MAIN_REF', FA_SBR_REF);
stp.setDOVar('FA_DOC_CCY', FA_DOC_CCY);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('InvTRF', "");
stp.writeLog("DOEND**********");

var recs = stp.getRecords("InvTRF");
var record = null,
    value = null,
    ret = {};
var docType;
ret["FA_IF_HAN_CHG_SUM"] = 0;
ret["FA_TTL_INV_AMT"] = 0;
ret["FA_TTL_CRN_AMT"] = 0;
ret["FA_IF_COMM_SUM"] = 0;
ret["FA_TTL_AMT_BA"] = 0;
ret["FA_TTL_INV_NO"] = 0;
ret["FA_TTL_CRN_NO"] = 0;
stp.writeLog("recs length**********" + recs.length);
for (var i = 0, l = recs.length; i < l; i++) {
    record = recs[i];
    docType = stp.getDOValue(record, "FA_DOC_TYPE");
    value = stp.getDOValue(record, "FA_IF_HAN_CHG_PAMT");
    stp.writeLog("value**********" + value);
    ret["FA_IF_HAN_CHG_SUM"] += stp.toFloat(value);
    if (docType == "1") {
        value = stp.getDOValue(record, "FA_DOC_AMT");
        ret["FA_TTL_INV_AMT"] += stp.toFloat(value);
        ret["FA_TTL_INV_NO"]++;
    } else if (docType == "2") {
        value = stp.getDOValue(record, "FA_DOC_AMT");
        ret["FA_TTL_CRN_AMT"] += stp.toFloat(value);
        ret["FA_TTL_CRN_NO"]++;
    }
    value = stp.getDOValue(record, "FA_IF_COMM_AMT");
    ret["FA_IF_COMM_SUM"] += stp.toFloat(value);

    value = stp.getDOValue(record, "FA_INVAMT_IN_LMT");
    ret["FA_TTL_AMT_BA"] += stp.toFloat(value);
}


stp.updateFieldValue("FA_TTL_CRN_AMT", ret["FA_TTL_CRN_AMT"]);
stp.updateFieldValue("FA_TTL_INV_NO", ret["FA_TTL_INV_NO"]);
stp.updateFieldValue("FA_TTL_CRN_NO", ret["FA_TTL_CRN_NO"]);
stp.updateFieldValue("FA_IF_HAN_CHG_SUM", ret["FA_IF_HAN_CHG_SUM"]);
stp.writeLog("FA_IF_HAN_CHG_SUM**********" + ret["FA_IF_HAN_CHG_SUM"]);
var FA_TTL_INV_AMT = ret["FA_TTL_INV_AMT"];
stp.updateFieldValue("FA_TTL_INV_AMT", ret["FA_TTL_INV_AMT"]);
stp.writeLog("FA_TTL_INV_AMT**********" + ret["FA_TTL_INV_AMT"]);
if (flg == '1') {
    var FA_INCO_COMM_SUM = stp.toFloat(FA_TTL_INV_AMT) * stp.toFloat(FA_INCO_COMM_RT) / 100;
    stp.updateFieldValue("FA_INCO_COMM_SUM", FA_INCO_COMM_SUM);
} else {
    stp.updateFieldValue("FA_INCO_COMM_SUM", 0);
}

var FA_IF_COMM_SUM = ret["FA_IF_COMM_SUM"];
stp.updateFieldValue("FA_IF_COMM_SUM", FA_IF_COMM_SUM);
var FA_TTL_IF_CHG_AMT = stp.toFloat(FA_IF_COMM_SUM) + stp.toFloat(ret["FA_IF_HAN_CHG_SUM"]);
stp.updateFieldValue("FA_TTL_IF_CHG_AMT", FA_TTL_IF_CHG_AMT);
stp.writeLog("FA_IF_COMM_SUM**********" + FA_IF_COMM_SUM);

var FA_TTL_AMT_BA = ret["FA_TTL_AMT_BA"];
stp.updateFieldValue("FA_TTL_AMT_BA", FA_TTL_AMT_BA);
stp.writeLog("FA_TTL_AMT_BA**********" + FA_TTL_AMT_BA);
var rate = stp.getFieldValue("EXCH_RT6")
var ttlAmtLmt = stp.toFloat(FA_TTL_AMT_BA) * stp.toFloat(rate);
stp.writeLog("ttlAmtLmt==========" + stp.toFloat(ttlAmtLmt));
if (stp.toFloat(LMT_BAL) > stp.toFloat(ttlAmtLmt) && stp.toFloat(ttlAmtLmt) > 0) {
    stp.updateFieldValue("RPT_OTHER_AMT1", ttlAmtLmt);
    stp.updateFieldValue("RPT_TRX_BAL1", stp.toFloat(LMT_BAL) - stp.toFloat(ttlAmtLmt));
    stp.updateFieldValue("FA_TEMP_AMT11", FA_TTL_AMT_BA);
    stp.updateFieldValue("FA_TEMP_AMT12", 0);
    stp.updateFieldValue("RPT_OTHER_AMT2", 0);
    stp.updateFieldValue("RPT_TRX_BAL2", 0);
} else if (stp.toFloat(LMT_BAL) < stp.toFloat(ttlAmtLmt) && stp.toFloat(ttlAmtLmt) > 0) {
    stp.updateFieldValue("RPT_OTHER_AMT1", LMT_BAL);
    stp.updateFieldValue("RPT_TRX_BAL1", 0);
    stp.updateFieldValue("FA_TEMP_AMT11", stp.toFloat(LMT_BAL) / stp.toFloat(rate));
    stp.updateFieldValue("RPT_OTHER_AMT2", stp.toFloat(ttlAmtLmt) - stp.toFloat(LMT_BAL));
    stp.updateFieldValue("FA_TEMP_AMT12", stp.toFloat(ttlAmtLmt) - stp.toFloat(LMT_BAL) / stp.toFloat(rate));
    stp.updateFieldValue("RPT_TRX_BAL2", stp.toFloat(ttlAmtLmt) - stp.toFloat(LMT_BAL));
} else if (LMT_BAL == 0) {
    stp.updateFieldValue("RPT_OTHER_AMT1", 0);
    stp.updateFieldValue("RPT_TRX_BAL1", 0);
    stp.updateFieldValue("FA_TEMP_AMT11", 0);
    stp.updateFieldValue("RPT_OTHER_AMT2", ttlAmtLmt);
    stp.updateFieldValue("FA_TEMP_AMT12", FA_TTL_AMT_BA);
    stp.updateFieldValue("RPT_TRX_BAL2", stp.toFloat(ttlAmtLmt) + stp.toFloat(LMT_EXTRA));
} else if (stp.toFloat(LMT_BAL) == stp.toFloat(ttlAmtLmt) && LMT_BAL != 0) {
    stp.updateFieldValue("RPT_OTHER_AMT1", 0);
    stp.updateFieldValue("RPT_TRX_BAL1", LMT_BAL);
    stp.updateFieldValue("FA_TEMP_AMT11", FA_TTL_AMT_BA);
    stp.updateFieldValue("RPT_OTHER_AMT2", 0);
    stp.updateFieldValue("FA_TEMP_AMT12", 0);
    stp.updateFieldValue("RPT_TRX_BAL2", 0);
}


stp.writeLog("==========InEDI09 END==========");