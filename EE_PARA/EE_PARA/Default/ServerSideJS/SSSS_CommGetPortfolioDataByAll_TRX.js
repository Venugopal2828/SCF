var sFldList = DV.addFieldList(null, "PORTFL_CD");

var sOrderBy = "ORDER BY PORTFL_CD ASC";
DV.writeLog("*****sOrderBy = " + sOrderBy);

var result1 = DV.getTableMultiDataToArray("TEAM_PORTFL_DO", sFldList, null, sOrderBy);