var sSqlCond = DV.addSQLCondition(null, "C_TRX_STATUS", "M");

var sFldList = DV.addFieldList(null, "BR_ID");

var sOrderBy = "ORDER BY BR_ID ASC";
DV.writeLog("sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("TRCO_BR_DATA", sFldList, sSqlCond, sOrderBy);