DV.writeLog("Start Server Side Script: getContractInfo.js");
var sCompId = DV.getSysUnit();
DV.writeLog("sCompId=========="+sCompId);
var sFlds = DV.addFieldList(null, "FA_AGM_DUE_DT");
var sSrcTb = "FADA_EM_CONTRACT";
var sSQLCond = null;
sSQLCond = DV.addSQLCondition(sSQLCond,"C_UNIT_CODE",sCompId);

var rs = DV.executeQuery(sSrcTb,sFlds,sSQLCond);
var sAgrDueDt = String(DV.getDBFieldValue(rs, "FA_AGM_DUE_DT"));
DV.writeLog("sAgrDueDt=========="+sAgrDueDt);
DV.updateTrxFieldValue("FA_AGM_DUE_DT", sAgrDueDt);
DV.writeLog("End Server Side Script: getContractInfo.js");