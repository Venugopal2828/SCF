DV.writeLog("Start Server Side Script: getsbrinfor");

DV.writeLog("Start Server Side Script: getExchangeRate.js");
var sSBRNo = DV.getParamFieldValue("FA_SBR_REF1");
var sBusinessType = DV.getParamFieldValue("INV_BUSI_TYPE");

var sCompId = DV.getSysUnit();
var sBankGrpId= DV.getBankGroupID();
var sSQLCond = null;
var sFlds =null;
var RS = null;
var sSrcTb = "FADA_EM_BSR";
sFlds =DV.addFieldList(sFlds, "DISTINCT(FA_PMT_TERMS)");
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE",sBusinessType);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_SBR_REF",sSBRNo);
RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
var sSBRref = String(DV.getDBFieldValue(RS, "FA_PMT_TERMS"));
DV.writeLog("============FA_PMT_TERMS: "+sSBRref);
DV.updateTrxFieldValue("FA_PMT_TERMS", sSBRref);
