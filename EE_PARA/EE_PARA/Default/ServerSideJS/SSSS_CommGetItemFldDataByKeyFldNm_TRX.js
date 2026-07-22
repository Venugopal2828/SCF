var ITEM_FLD_NM = DV.getParamFieldValue("ITEM_FLD_NM");
DV.writeLog("*****ITEM_FLD_NM = " + ITEM_FLD_NM);

var sSqlCond = DV.addSQLCondition(null, "FLD_NM", ITEM_FLD_NM);

var sFldList = DV.addFieldList(null, "FLD_VAL");
sFldList = DV.addFieldList(sFldList, "ITEM_LABEL");

var sOrderBy = "ORDER BY FLD_VAL ASC";
DV.writeLog("*****sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("COMM_FLD_OPTN_DO", sFldList, sSqlCond, sOrderBy);