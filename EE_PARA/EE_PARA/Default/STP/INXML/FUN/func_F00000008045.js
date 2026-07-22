stp.setAutoProcess(true);
stp.writeLog("============ReceiveCreNoteTransferionfromCE====start============");
var pre = stp.getXMLNodeValue("FA_BUSI_TYPE");
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
year = date.substr(2, 2);
month = date.substr(5, 2);
var seqRef = stp.SYS_getRefNo("FAEF_MAIN_REF");
var sub = 'CRN';
var C_MAIN_REF = pre + UnitCode + year + month + seqRef + sub;
stp.writeLog("---------------C_MAIN_REF=" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
var FA_SBR_REF = stp.getXMLNodeValue("EE_C_MAIN_REF");
stp.updateFieldValue("FA_SBR_REF", FA_SBR_REF);
stp.writeLog("---------------FA_SBR_REF=" + FA_SBR_REF);
var FA_CE_MAIN_REF = stp.getXMLNodeValue("FA_CE_MAIN_REF");
var FSBC_REF = stp.getXMLNodeValue("EE_C_MAIN_REF");

stp.setGapiRule("BKTS_FAEF_015_CNT");
var FA_BUYER_NM = stp.getXMLNodeValue("FA_BUYER_NM");
var FA_SEL_NM = stp.getXMLNodeValue("FA_SEL_NM");
var FA_DOC_CCY = stp.getXMLNodeValue("FA_DOC_CCY");

var doRecords = stp.getRecords("CreNote");
stp.writeLog("--------------doRecords.length----" + doRecords.length);
for (var i = 0; i < doRecords.length; i++) {
    stp.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    stp.writeLog("DOyear=" + year);
    stp.writeLog("DOmonth=" + month);
    var ref = stp.SYS_getRefNo("DF_DOC_REF");
    var FA_DOC_REF = pre + UnitCode + year + month + ref + sub;
    stp.setDOValue(doRec, "FA_DOC_REF", FA_DOC_REF);
    //stp.setDOValue(doRec, "FA_DOC_CCY", docccy);
    stp.setDOValue(doRec, "C_MAIN_REF", FA_DOC_REF);
    stp.setDOValue(doRec, "FA_DOC_STATUS", "TRF");
    stp.setDOValue(doRec, "FA_BUSI_STATUS", "TRF");
    stp.setDOValue(doRec, "FA_CE_MAIN_REF", FA_CE_MAIN_REF);
    /*MICHAEL 20150729-------S*/
    stp.writeLog("FSBC_REF=" + FSBC_REF);
    stp.setDOValue(doRec, "FSBC_REF", FSBC_REF);
    /*MICHAEL 20150729-------E*/
    stp.writeLog("FA_DOC_REF=" + FA_DOC_REF);
    stp.writeLog("---start to get inv ref by inv no----");
    var FA_CRN_INV_LINK_NO = stp.getDOValue(doRec, "FA_CRN_INV_LINK_NO");
    stp.writeLog("FA_CRN_INV_LINK_NO***************seq:" + i + "****value:" + FA_CRN_INV_LINK_NO);

    var vFieldList = stp.addFieldList(null, "FA_DOC_REF");
    var vCondition = stp.addSQLCondition(null, "FA_DOC_NO", FA_CRN_INV_LINK_NO);
    vCondition = stp.addSQLCondition(vCondition, "FA_BUYER_NM", FA_BUYER_NM);
    vCondition = stp.addSQLCondition(vCondition, "FA_SEL_NM", FA_SEL_NM);
    vCondition = stp.addSQLCondition(vCondition, "FA_DOC_CCY", FA_DOC_CCY);
    var vResult = stp.executeQuery("EXIMTRX.INVC_MASTER", vFieldList, vCondition);
    var FA_INV_LINK_REF = stp.getDBFieldValue(vResult, "FA_DOC_REF");
    stp.writeLog("FA_INV_LINK_REF*************:" + FA_INV_LINK_REF);
    stp.setDOValue(doRec, "FA_INV_LINK_REF", FA_INV_LINK_REF)
    stp.writeLog("---------------DO end----");
}


stp.writeLog("============ReceiveCreNoteTransferionfromCE====END============");