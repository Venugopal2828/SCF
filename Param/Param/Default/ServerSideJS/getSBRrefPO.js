/**
 * $Id$
 *
 * Get SBR ref and pmt term for select a record from faef_em_sbr table for sbr
 */
DV.writeLog("Start Server Side Script: getSBRref");

var sBuyNm = DV.getParamFieldValue("TSU_BUYER_NM");
var sSellerNm = DV.getParamFieldValue("TSU_SEL_NM");
var sbusinesTye = DV.getParamFieldValue("INV_BUSI_TYPE");

var sCompId = DV.getSysUnit();
var sBankGrpId= DV.getBankGroupID();
var sSQLCond = null;
var sFlds =null;
var RS = null;

var sSrcTb = "FADA_EM_BSR";
sFlds =DV.addFieldList(sFlds, "FA_SBR_REF,FA_ANCHOR_ID,FA_COUNTER_ID,FA_ANCHOR_ROLE");

sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sCompId);
sSQLCond = DV.addSQLCondition(sSQLCond, "C_BK_GROUP_ID",sBankGrpId);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE",sbusinesTye);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUYER_NM",sBuyNm);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_SEL_NM",sSellerNm);


RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);

var count = DV.getRecordCount(RS);//Find the record count 

for(var i=0 ; i < count ; i++){
//Set the value to a select field then we can get the multi record from DB. If the record have //no special string we also //can set the multi record to a text field,the value can be split by some separator. 
	var record = DV.getRecord(RS,i);
	var SBRref = String(DV.getDBFieldValue(record,"FA_SBR_REF"));
	DV.setTrxFieldValue("FA_SBR_REF1", SBRref, SBRref,1);
 }
 var sAnchorid = String(DV.getDBFieldValue(RS, "FA_ANCHOR_ID"));
var sCounterid = String(DV.getDBFieldValue(RS, "FA_COUNTER_ID"));
var sAnchorrole = String(DV.getDBFieldValue(RS, "FA_ANCHOR_ROLE"));
DV.writeLog("============sAnchorid: "+sAnchorid);
DV.writeLog("============sCounterid: "+sCounterid);
DV.writeLog("============sAnchorrole: "+sAnchorrole);
DV.updateTrxFieldValue("FA_ANCHOR_ID", sAnchorid);
DV.updateTrxFieldValue("FA_COUNTER_ID", sCounterid);
DV.updateTrxFieldValue("FA_ANCHOR_ROLE", sAnchorrole);

DV.writeLog("End Server Side Script: getSBRref");