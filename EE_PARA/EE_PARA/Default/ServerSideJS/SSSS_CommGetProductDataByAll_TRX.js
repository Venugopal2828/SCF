var sSqlCond = DV.addSQLCondition(null, "C_LOCKED_FLAG", "F");

var sFldList = DV.addFieldList(null, "C_PRODUCT_CODE");
sFldList = DV.addFieldList(sFldList, "C_PRODUCT_DESC");

var sOrderBy = "ORDER BY C_PRODUCT_CODE ASC";
DV.writeLog("sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("STD_PRODUCT", sFldList, sSqlCond, sOrderBy);