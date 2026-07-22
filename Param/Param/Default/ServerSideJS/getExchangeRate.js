DV.writeLog("Start Server Side Script: getExchangeRate.js");
var sFromCCY = DV.getParamFieldValue("FA_LOAN_CCY");
var sToCCY = DV.getParamFieldValue("FA_LMT_CCY");
DV.writeLog("sFromCCY=========="+sFromCCY);
DV.writeLog("sToCCY=========="+sToCCY);
var sFlds = DV.addFieldList(null, "F_VALUE");
var sSrcTb = "STD_EXCHAN_RATE";
var sSQLCond = null;
sSQLCond = DV.addSQLCondition(sSQLCond,"C_FROM_CCY",sFromCCY);
sSQLCond = DV.addSQLCondition(sSQLCond,"C_TO_CCY",sToCCY);

var rs = DV.executeQuery(sSrcTb,sFlds,sSQLCond);
var sExchRate = String(DV.getDBFieldValue(rs, "F_VALUE"));
DV.writeLog("sExchRate=========="+sExchRate);
DV.updateTrxFieldValue("FA_LOAN_EXCH",sExchRate);
DV.writeLog("End Server Side Script: getExchangeRate.js");