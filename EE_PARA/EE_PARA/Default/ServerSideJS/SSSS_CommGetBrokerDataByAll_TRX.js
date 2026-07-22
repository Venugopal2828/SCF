var sSqlCond = DV.addSQLCondition(null, "C_TRX_STATUS", "M");

var sFldList = DV.addFieldList(null, "BROKER_ID");

var sOrderBy = "ORDER BY BROKER_ID ASC";
DV.writeLog("sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("TRCO_BROKER_DATA", sFldList, sSqlCond, sOrderBy);