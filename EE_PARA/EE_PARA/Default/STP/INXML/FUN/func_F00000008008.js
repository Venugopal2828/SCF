stp.setAutoProcess(true);
stp.writeLog("============ReceiveCCAfromCE====start============");
stp.setGapiRule("BKTS_FAEF_001_CCA");

var pre = 'EF';
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'CCA';
var ref = stp.SYS_getRefNo("FAEF_MAIN_REF");
var ccamainref = pre + UnitCode + year + month + ref;
var CCAref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("C_MAIN_REF", ccamainref);
stp.updateFieldValue("FA_CCA_REF", CCAref);
stp.writeLog("---------------FA_CCA_MAIN_REF=" + ccamainref);
stp.writeLog("---------------FA_CCA_REF=" + CCAref);

stp.writeLog("============ReceiveCCAfromCE====END============");