/**
 * $Id$
 *
 * Get SBR ref and pmt term for select a record from faef_em_sbr table for sbr
 */
DV.writeLog("Start Server Side Script: getSBRref");

var sBuyerNm = DV.getParamFieldValue("TSU_BUYER_NM");
var sSellerNm = DV.getParamFieldValue("TSU_SEL_NM");
var sbusinesTye = DV.getParamFieldValue("INV_BUSI_TYPE");

var sCompId = DV.getSysUnit();
var sBankGrpId= DV.getBankGroupID();
var sSQLCond = null;
var sFlds =null;
var RS = null;

var sSrcTb = "FADA_EM_BSR";
sFlds =DV.addFieldList(sFlds, "FA_SBR_REF");

sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE",sCompId);
sSQLCond = DV.addSQLCondition(sSQLCond, "C_BK_GROUP_ID",sBankGrpId);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE",sbusinesTye);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUYER_NM",sBuyerNm);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_SEL_NM",sSellerNm);

RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);

var count = DV.getRecordCount(RS);//Find the record count 

for(var i=0 ; i < count ; i++){
//Set the value to a select field then we can get the multi record from DB. If the record have //no special string we also //can set the multi record to a text field,the value can be split by some separator. 
	var record = DV.getRecord(RS,i);
	var SBRref = String(DV.getDBFieldValue(record,"FA_SBR_REF"));
	DV.setTrxFieldValue("FA_SBR_REF", SBRref, SBRref,1);
 }

DV.writeLog("End Server Side Script: getSBRref");