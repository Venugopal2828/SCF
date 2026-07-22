stp.setAutoProcess(true);

var SelEDIId = stp.getXMLNodeValue("SellerNr", "MSG14.Seller", ".");
var buyId = stp.getXMLNodeValue("BuyerNr", "MSG14.Buyer", ".");
var impFactor = stp.getXMLNodeValue("FactorCode", "MSG14.IF", ".");
var empFactor = stp.getXMLNodeValue("FactorCode", "MSG14.EF", ".");
var invNO = stp.getXMLNodeValue("DocNr", "MSG14.DisputeDetails", ".");
stp.writeLog("document number:" + invNO);
var dspno = stp.getXMLNodeValue("DisputeNr", "MSG14", ".");
stp.updateFieldValue("FA_SEL_EDI_ID", SelEDIId);
stp.updateFieldValue("FA_BUYER_EDI_ID", buyId);
SelEDIId = SelEDIId.toUpperCase();
buyId = buyId.toUpperCase();
stp.updateFieldValue("FA_IF_ID", impFactor);
stp.updateFieldValue("FA_EF_ID", empFactor);
stp.writeLog("################seller:" + SelEDIId);
stp.writeLog("##############buyer:" + buyId);
/*ANGEL*/
var recevCode = stp.getXMLNodeValue("ReceiverCode", "MSG14.MsgInfo", ".");
stp.writeLog("################recevCode:" + recevCode);
var effactorCode = stp.getXMLNodeValue("FactorCode", "MSG14.EF", ".");
stp.writeLog("################effactorCode:" + effactorCode);
var iffactorCode = stp.getXMLNodeValue("FactorCode", "MSG14.IF", ".");
stp.writeLog("################iffactorCode:" + iffactorCode);
stp.writeLog("################recevCode==effactorCode:" + (recevCode.compareToIgnoreCase(effactorCode)));
stp.writeLog("################recevCode:" + (typeof recevCode));
if (recevCode.compareTo(effactorCode) == 0) {
    stp.setEdiRule("DisputeReg_In");
    var pre = 'EF';
    stp.updateFieldValue("FA_BUSI_TYPE", pre);
    var fld_list = stp.addFieldList(null, "FSBC_REF");
    var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", SelEDIId);
    stp.writeLog("###############SelEDIId:" + SelEDIId);
    var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", buyId);
    stp.writeLog("###############buyId:" + buyId);
    //var sql_condition = stp.addSQLCondition(sql_condition, "FA_IF_ID", impFactor);
    stp.writeLog("###############impFactor:" + impFactor);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_NO", invNO);
    stp.writeLog("###############invNO:" + invNO);
    //var sql_condition = stp.addSQLCondition(sql_condition,"FA_BUSI_TYPE",pre);
    var result = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list, sql_condition);
    var mainRef = stp.getDBFieldValue(result, "FSBC_REF");
    stp.updateFieldValue("FA_SBR_REF", mainRef);
    stp.writeLog("###############Reference:" + mainRef);
    //stp.updateFieldValue("C_TRX_REF",invNO);
} else if (recevCode.compareTo(iffactorCode) == 0) {
    stp.setEdiRule("IFEDI14");
    var pre = 'IF';
    stp.updateFieldValue("FA_BUSI_TYPE", pre);
    var fld_list = stp.addFieldList(null, "FSBC_REF");
    var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", SelEDIId);
    stp.writeLog("###############SelEDIId:" + SelEDIId);
    var sql_condition = stp.addSQLCondition(sql_condition, "upper(FA_BUYER_EDI_ID)", buyId);
    stp.writeLog("###############buyId:" + buyId);
    //var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", empFactor);
    stp.writeLog("###############empFactor:" + empFactor);
    var sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_NO", invNO);
    //var sql_condition = stp.addSQLCondition(sql_condition,"FA_BUSI_TYPE",pre);
    stp.writeLog("###############invNO:" + invNO);
    var result = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list, sql_condition);
    var mainRef = stp.getDBFieldValue(result, "FSBC_REF");
    stp.updateFieldValue("FA_SBR_REF", mainRef);
    stp.writeLog("###############Reference:" + mainRef);
    //stp.updateFieldValue("C_TRX_REF",invNO);
}
/*ANGEL*/


stp.setEventTimes("0");

//var pre = 'EF';
//stp.updateFieldValue("FA_BUSI_TYPE",pre);
var UnitCode = stp.getBusiUnit();
UnitCode = UnitCode.substr(0, 5);
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
var year = date.substr(2, 2);
var month = date.substr(5, 2);
var sub = 'DSP';
var ref = stp.SYS_getRefNo("FAEF_DSP_REF");
var prf = pre + UnitCode + year + month + ref + sub;
stp.writeLog("###########dispute reference" + prf);
stp.updateFieldValue("FA_DSP_REF", prf);
stp.updateFieldValue("C_MAIN_REF", prf);
stp.updateFieldValue("FA_BUSI_STATUS", "DSP");
stp.updateFieldValue("FA_SEND_MSG_FLG", "2");
stp.updateFieldValue("FA_MSG_TEXT", "");
stp.updateFieldValue("FA_DSP_NO", dspno);

var plginVar = 'var invNO=stp.getDomDataNodeValue("FA_DOC_NO");stp.writeLog("###########docno"+invNO);var fld_list = stp.addFieldList(null,"FA_DOC_REF");fld_list = stp.addFieldList(fld_list,"FSBC_REF");fld_list = stp.addFieldList(fld_list,"FA_DOC_AMT");fld_list = stp.addFieldList(fld_list,"FA_DOC_CCY");fld_list = stp.addFieldList(fld_list,"FA_DOC_DUE_DT");fld_list = stp.addFieldList(fld_list,"FA_INV_LOAN_BAL");fld_list = stp.addFieldList(fld_list,"FA_DOC_VAL_DT");var sql_condition =stp.addSQLCondition(null,"FA_DOC_NO",invNO);sql_condition=stp.addSQLCondition(sql_condition,"FA_SEL_EDI_ID",SelEDIId);var result = stp.executeQuery("INVC_MASTER",fld_list,sql_condition);var invRef = stp.getDBFieldValue(result,"FA_DOC_REF");stp.writeLog("###########docref"+invRef); var invAmt=stp.getDBFieldValue(result,"FA_DOC_AMT");stp.updateFieldValue("FA_DOC_AMT",invAmt);var fsbcRef=stp.getDBFieldValue(result,"FSBC_REF");stp.writeLog("###########fsbcRef"+fsbcRef);stp.updateFieldValue("FSBC_REF",fsbcRef);var invValDt=stp.getDBFieldValue(result,"FA_DOC_VAL_DT");stp.updateFieldValue("FA_DOC_VAL_DT",invValDt);stp.updateFieldValue("FA_DOC_REF",invRef);invDueDt=stp.getDBFieldValue(result,"FA_DOC_DUE_DT");stp.updateFieldValue("FA_DOC_DUE_DT",invDueDt);invLoanBal=stp.getDBFieldValue(result,"FA_INV_LOAN_BAL");stp.updateFieldValue("FA_INV_LOAN_BAL",invLoanBal);var invccy=stp.getDBFieldValue(result,"FA_DOC_CCY");stp.writeLog("&&&&&&&&&&&&&&"+invccy);stp.updateFieldValue("FA_DOC_CCY",invccy);';
stp.setDOVar('SelEDIId', SelEDIId);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('DisputeReg', "");
var disputereg = stp.getRecords("DisputeReg");
//var dspno=stp.getXMLNodeValue("DisputeNr","MSG14",".");
stp.writeLog("################dspno:" + dspno);
for (var i = 0; i < disputereg.length; i++) {
    //var dspno= stp.setDOValueByJs(disputereg[i],prf);
    //stp.writeLog("###########dspno:"+dspno);
    //stp.updateFieldValue("FA_DSP_NO",dspno);
    var _disputeRec = disputereg[i];
    stp.setDOValue(_disputeRec, "FA_DSP_NO", dspno);
    stp.setDOValue(_disputeRec, "FA_BUSI_TYPE", pre);
    stp.setDOValue(_disputeRec, "FA_DOC_STATUS", "DSP");
    var dspno1 = stp.getDOValue(_disputeRec, 'FA_DSP_NO');
    stp.writeLog("###########dispute number:" + dspno1);
}
/*stp.writeLog("%%%%%%%%%%%%%%%%%%DO start%%%%%%%%%%%%%%%");
var plginVar='var invNO=stp.getDomDataNodeValue("FA_DOC_NO");'+
'var SelEDIId=stp.getDomDataNodeValue("FA_SEL_EDI_ID");'+
'var buyId=stp.getDomDataNodeValue("FA_BUYER_EDI_ID");'+
'fld_list = stp.addFieldList(null, "FSBC_REF");'+
'var sql_condition = stp.addSQLCondition(null, "FA_SEL_EDI_ID", "EDI000565");'+
'sql_condition = stp.addSQLCondition(sql_condition, "FA_BUYER_EDI_ID", "EDI000566");'+
'sql_condition = stp.addSQLCondition(sql_condition, "FA_DOC_NO", "M12");'+
'var result = stp.executeQuery("EXIMTRX.INVC_MASTER",fld_list,sql_condition);'+
'var mainRef = stp.getDBFieldValue(result,"FSBC_REF");'+
'stp.writeLog("mainRef="+mainRef);'+
'stp.updateFieldValue("FSBC_REF",mainRef);';
stp.setDOVar('mainRef',mainRef);
stp.setDOVar('SelEDIId',SelEDIId);
stp.setDOVar('buyId',buyId);
stp.setDOExecJs(plginVar);
stp.setDOValueByJs('DisputeReg',"");
stp.writeLog("%%%%%%%%%%%%%%%%%%DO end%%%%%%%%%%%%%%%");*/

stp.writeLog("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%end");