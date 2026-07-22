stp.writeLog("********************start");
stp.setGapiRule("TSU_006_PayInstr");
stp.setAutoProcess(true);
stp.writeLog("Receiveapay");

//var pre = 'POF';
//stp.updateFieldValue("FA_BUSI_TYPE",pre);
var UnitCode = stp.getBusiUnit();
var year = stp.getSysBusiDate();
var month = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", year);
year = year.substr(2, 2);
month = month.substr(5, 2);
var sub = 'PMT';
var ref = stp.SYS_getRefNo("FAEF_PMT_BURER");

var docRef = stp.getXMLNodeValue("FA_DOC_REF");
var selId = stp.getXMLNodeValue("FA_SEL_ID");
var fld_list1 = stp.addFieldList(null, "FSBC_REF");
var sql_condition1 = stp.addSQLCondition(null, "FA_DOC_REF", docRef);
var result1 = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list1, sql_condition1);
var fsbcRef = stp.getDBFieldValue(result1, "FSBC_REF");
stp.writeLog("---------------fsbcRef-------------" + fsbcRef);
var fld_list2 = stp.addFieldList(null, "FA_BUSI_TYPE");
var sql_condition2 = stp.addSQLCondition(null, "FSBC_REF", fsbcRef);
var sql_condition2 = stp.addSQLCondition(sql_condition2, "FA_SEL_ID", selId);
var sql_condition2 = stp.addSQLCondition(sql_condition2, "C_UNIT_CODE", UnitCode);
var result2 = stp.executeQuery("EXIMTRX.INVC_MASTER", fld_list2, sql_condition2);
var busiType = stp.getDBFieldValue(result2, "FA_BUSI_TYPE");
stp.writeLog("---------------busiType-------------" + busiType);
stp.updateFieldValue("FA_BUSI_TYPE", busiType);

var prf = busiType + UnitCode + year + month + ref + sub;
stp.writeLog("FA_PMT_REF=" + prf);
stp.updateFieldValue("FA_PMT_REF", prf);
stp.updateFieldValue("C_MAIN_REF", prf);
stp.updateFieldValue("FA_BUSI_STATUS", "PAYINSTR");

var doRecords = stp.getRecords("BuyPayment");
stp.writeLog("--------------doRecords.length----" + doRecords.length);
for (var i = 0; i < doRecords.length; i++) {
    stp.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    stp.setDOValue(doRec, "FA_DOC_STATUS", "PAYINSTR");
    stp.setDOValue(doRec, "FA_BUSI_STATUS", "PAYINSTR");
    stp.writeLog("---------------DO end----");
}


stp.writeLog("================END============");