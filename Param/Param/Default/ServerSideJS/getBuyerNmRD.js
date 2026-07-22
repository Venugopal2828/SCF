DV.writeLog("Start Server Side Script: getBuyerNm.js");
var sUnitCode = DV.getParamFieldValue("SYS_CHILD_UNIT");
var sBusType = DV.getParamFieldValue("INV_BUSI_TYPE");

DV.writeLog("============sUnitCode: " + sUnitCode);
DV.writeLog("============sBusType: " + sBusType);
var sSQLCond = null;
var sSQLCond2 = null;

sSQLCond = DV.addSQLCondition(sSQLCond, "C_UNIT_CODE", sUnitCode);
sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE", sBusType);

sSQLCond2 = DV.addSQLCondition(sSQLCond2, "FA_SEL_ID", sUnitCode);

var sFlds = DV.addFieldList(null, "DISTINCT(FA_COUNTER_NM)");

var sSrcTb = "FADA_EM_BSR";
var RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond); //Execute Query the fields
var count = DV.getRecordCount(RS);//Find the record count 
for(var i=0 ; i < count ; i++){
var record = DV.getRecord(RS,i);
	var glbCompNm = String(DV.getDBFieldValue(record,"FA_COUNTER_NM"));  
DV.setTrxFieldValue("TSU_BUYER_NM", glbCompNm, glbCompNm, 1);
}
DV.writeLog("Start Server Side Script: getBuyerNm.js End");

