var TEAM_ID = DV.getParamFieldValue("TEAM_ID");
var sSqlCond = DV.addSQLCondition(null, "C_UNIT_CODE", DV.SYS_BUSI_UNIT);
sSqlCond = DV.addSQLCondition(sSqlCond, "TEAM_ID", TEAM_ID);
DV.writeLog("*****TEAM_ID = " + TEAM_ID);

var sFldList = DV.addFieldList(null, "PORTFL_CD");

var sOrderBy = "ORDER BY PORTFL_CD ASC";
DV.writeLog("*****sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("TEAM_PORTFL_DO", sFldList, sSqlCond, sOrderBy);