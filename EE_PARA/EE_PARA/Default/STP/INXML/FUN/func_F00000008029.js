stp.setAutoProcess(true);
stp.writeLog("============ReceiveSignAgreementfromCE====start============");
stp.setGapiRule("BKTS_FADA_004_RSA");
stp.writeLog("============SetGapiRule==start============");
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.writeLog("UnitCode=" + UnitCode);
stp.writeLog("date=" + date);
var pre = stp.getXMLNodeValue("FA_BUSI_TYPE");
var sub = 'FCS';
var year = date.substr(2, 2);
var month = date.substr(5, 2);
stp.writeLog("year=" + year);
stp.writeLog("month=" + month);
var ref = stp.SYS_getRefNo("DF_CNTR_SIGN");
var pcaref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("C_MAIN_REF", pcaref);
stp.updateFieldValue("FA_CNTR_REF", pcaref);
stp.writeLog("---------------C_MAIN_REF=" + pcaref);

var doRecords = stp.getRecords("SelReq");
for (var i = 0; i < doRecords.length; i++) {
    stp.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    stp.writeLog("DOyear=" + year);
    stp.writeLog("DOmonth=" + month);
    var ref = stp.SYS_getRefNo("FADA_BUY_REF");
    var trxRef = pre + UnitCode + year + month + ref;
    stp.setDOValue(doRec, "FA_PCA_REF", trxRef);
    stp.writeLog("---------------FA_PCA_REF=" + trxRef);
    stp.writeLog("---------------DO end----");
}
stp.writeLog("============ReceiveSignAgreementfromCE====END============");