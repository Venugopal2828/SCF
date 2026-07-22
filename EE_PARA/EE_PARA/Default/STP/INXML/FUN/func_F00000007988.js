stp.setAutoProcess(true);
stp.writeLog("============ReceivePCAfromCE====start============");
stp.setGapiRule("BKTS_FADA_001_PCA");
var pre = 'EF';
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'PCA';
var ref = stp.SYS_getRefNo("FAEF_PRE_REQUEST");
var pcaref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("C_MAIN_REF", pcaref);
stp.updateFieldValue("FA_PCA_REF", pcaref);
stp.writeLog("---------------FA_PCR_REF=" + pcaref);

stp.writeLog("============ReceivePCAfromCE====END============");