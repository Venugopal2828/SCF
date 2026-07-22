/**
 * $Id$
 *
 * Get SBR ref and pmt term for select a record from FADA_EM_BSR table for sbr
 */
DV.writeLog("Start Server Side Script: getsbrinfor");

DV.writeLog("Start Server Side Script: getExchangeRate.js");
var sBuyNm = DV.getParamFieldValue("TSU_BUYER_NM");
var sSellerNm = DV.getParamFieldValue("TSU_SEL_NM");
var sInvCcy = DV.getParamFieldValue("TSU_CCY");
var sBusinessType = DV.getParamFieldValue("INV_BUSI_TYPE");

//var sCntyCode= DV.getCountryCode();
var sCompId = DV.getSysUnit();
var sBankGrpId= DV.getBankGroupID();
var sSQLCond = null;
var sFlds =null;
var RS = null;

var sSrcTb = "FADA_EM_BSR";
sFlds =DV.addFieldList(sFlds, "FA_SBR_REF,FA_ANCHOR_ID,FA_COUNTER_ID,FA_ANCHOR_ROLE");


sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sCompId);
sSQLCond = DV.addSQLCondition(sSQLCond, "C_BK_GROUP_ID",sBankGrpId);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE",sBusinessType);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUYER_NM",sBuyNm);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_SEL_NM",sSellerNm);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_SBR_CCY",sInvCcy);
//sSQLCond = DV.addSQLCondition(sSQLCond, "FA_AGM_SIGN_FLG","Active");

RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);
var sSBRref = String(DV.getDBFieldValue(RS, "FA_SBR_REF"));
var sAnchorid = String(DV.getDBFieldValue(RS, "FA_ANCHOR_ID"));
var sCounterid = String(DV.getDBFieldValue(RS, "FA_COUNTER_ID"));
var sAnchorrole = String(DV.getDBFieldValue(RS, "FA_ANCHOR_ROLE"));
DV.writeLog("============sSBRref: "+sSBRref);
DV.writeLog("============sAnchorid: "+sAnchorid);
DV.writeLog("============sCounterid: "+sCounterid);
DV.writeLog("============sAnchorrole: "+sAnchorrole);
DV. setTrxFieldValue ("FA_SBR_REF", sSBRref, sSBRref,1);
DV.updateTrxFieldValue("FA_ANCHOR_ID", sAnchorid);
DV.updateTrxFieldValue("FA_COUNTER_ID", sCounterid);
DV.updateTrxFieldValue("FA_ANCHOR_ROLE", sAnchorrole);
