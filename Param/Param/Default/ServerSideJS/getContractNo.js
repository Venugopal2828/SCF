DV.writeLog("Start Server Side Script:getContractNo.js");
var sCompId = DV.getSysUnit();
DV.writeLog("sCompId=============="+sCompId);
var sFlds = DV.addFieldList(null, "FA_CONTRACT_REF");
var sSrcTb = "FADA_EM_CONTRACT";
var sSQLCond = null;
var sBusiType = DV.getParamFieldValue("FA_BUSI_TYPE");
 
sSQLCond = DV.addSQLCondition(sSQLCond,"C_UNIT_CODE",sCompId);
sSQLCond = DV.addSQLCondition(sSQLCond,"FA_BUSI_TYPE",sBusiType);

var rs = DV.executeQuery(sSrcTb,sFlds,sSQLCond);
var sContractNo = String(DV.getDBFieldValue(rs, "FA_CONTRACT_REF"));
DV.writeLog("sContractNo=========="+sContractNo);
DV.updateTrxFieldValue("FA_CONTRACT_REF", sContractNo);
DV.writeLog("End Server Side Script: getContractNo.js");