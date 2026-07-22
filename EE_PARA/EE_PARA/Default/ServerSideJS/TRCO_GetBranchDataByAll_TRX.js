var sSqlCond = DV.addSQLCondition(null, "C_TRX_STATUS", "M");
DV.writeLog("sSqlCond = " + sSqlCond);

var sFldList = DV.addFieldList(null,"BR_ID");
DV.writeLog("sFldList = " + sFldList);
 
var sOrderBy = "ORDER BY BR_ID ASC";
DV.writeLog("sOrderBy = " + sOrderBy);
 
var result1 = DV.getTableMultiDataToArray("TRCO_BR_DATA",sFldList,sSqlCond,sOrderBy);
DV.writeLog("result1 = " + result1);