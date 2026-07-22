var sSqlCond = DV.addSQLCondition(null, "C_TRX_STATUS", "M");

var sFldList = DV.addFieldList(null, "TEAM_ID");

var sOrderBy = "ORDER BY TEAM_ID";
DV.writeLog("*****sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("TRTD_TEAM_DATA", sFldList, sSqlCond, sOrderBy);