/**
 * $Id$
 *
 * Get SBR ref and pmt term for select a record from FADA_EM_CONTRACT table for sbr
 */
DV.writeLog("Start Server Side Script: getsbrinfor");

DV.writeLog("Start Server Side Script: getExchangeRate.js");
var sSbrno = DV.getParamFieldValue("FA_SBR_REF1");
var sBusinessType = DV.getParamFieldValue("INV_BUSI_TYPE");

//var sCntyCode= DV.getCountryCode();
var sCompId = DV.getSysUnit();
var sBankGrpId= DV.getBankGroupID();
var sSQLCond = null;
var sFlds =null;
var RS = null;

var sSrcTb = "FADA_EM_BSR";
sFlds =DV.addFieldList(sFlds, "DISTINCT(FA_COUNTER_REG_NO)");



sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE",sBusinessType);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_SBR_REF",sSbrno);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_ANCHOR_ID",sCompId);


RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
var sSBRref = String(DV.getDBFieldValue(RS, "FA_COUNTER_REG_NO"));
DV.writeLog("============FA_COUNTER_REG_NO: "+sSBRref);
DV.updateTrxFieldValue("FA_COUNTER_REG_NO", sSBRref);


