stp.setAutoProcess(true);
stp.writeLog("============ReceiveCollateralDischargeRequestfromCE====start============");
stp.setGapiRule("BKTS_ABLF_002_ReqCollDischg");
stp.writeLog("============SetGapiRule==start============");
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.writeLog("UnitCode=" + UnitCode);
stp.writeLog("date=" + date);

var RegNo = stp.getXMLNodeValue("REG_NO");
stp.writeLog("REG_NO=" + RegNo);
//stp.updateFieldValue("REG_NO", RegNo);
var vFieldList = stp.addFieldList(null, "C_MAIN_REF");
var vCondition = stp.addSQLCondition(null, "REG_NO", RegNo);
stp.writeLog("vCondition=" + vCondition);
var vResult = stp.executeQuery("EXIMTRX.ABLF_EM_REG", vFieldList, vCondition);
var MainRef = stp.getDBFieldValue(vResult, "C_MAIN_REF");
stp.updateFieldValue("C_MAIN_REF", MainRef);
stp.writeLog("C_MAIN_REF=" + MainRef);
stp.updateFieldValue("REG_NO", RegNo);

var doRecords = stp.getRecords("CollateralAdjustment");
stp.writeLog("doRecords=" + doRecords);
stp.writeLog("doRecords length================" + doRecords.length);
for (var i = 0; i < doRecords.length; i++) {
    stp.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    var out_date = stp.getDOValue(doRec, 'OUT_DATE');
    var out_qty = stp.getDOValue(doRec, 'COLLAT_OUT_QTY');
    stp.writeLog("out_date=" + out_date);
    stp.writeLog("out_qty=" + out_qty);
    stp.writeLog("---------------DO end----");
}
stp.updateFieldValue("CURRNT_STATUS", "RecvCollDiFromCE");
stp.writeLog("============ReceiveCollateralDischargeRequestfromCE====END============");