/**
 * $Id$
 *
 * Get SBR ref and pmt term for select a record from FADA_EM_CONTRACT table for sbr
 */
DV.writeLog("Start Server Side Script: getsbrinfor");

DV.writeLog("Start Server Side Script: getExchangeRate.js");
var sBuyNm = DV.getParamFieldValue("TSU_SEL_NM");
var sInvCcy = DV.getParamFieldValue("TSU_CCY");
var sBusinessType = DV.getParamFieldValue("INV_BUSI_TYPE");

//var sCntyCode= DV.getCountryCode();
var sCompId = DV.getSysUnit();
var sBankGrpId= DV.getBankGroupID();
var sSQLCond = null;
var sFlds =null;
var RS = null;

var sSrcTb = "FADA_EM_CONTRACT";
sFlds =DV.addFieldList(sFlds, "FA_CONTRACT_REF,FA_CUST_REG_NO");



sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE",sBusinessType);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_ANCHOR_NM",sBuyNm);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_ANCHOR_CCY",sInvCcy);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_ANCHOR_ROLE","SELLER"); 


RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
var sSBRref = String(DV.getDBFieldValue(RS, "FA_CONTRACT_REF"));
var scutomerregno = String(DV.getDBFieldValue(RS, "FA_CUST_REG_NO"));
DV.writeLog("============FA_CONTRACT_REF: "+sSBRref);
DV.writeLog("============FA_CUST_REG_NO: "+scutomerregno);
DV.updateTrxFieldValue("FA_CONTRACT_REF", sSBRref);
DV.updateTrxFieldValue("FA_CUST_REG_NO", scutomerregno);

