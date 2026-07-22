var TEMP_PORTFL_CD = DV.getParamFieldValue("TEMP_PORTFL_CD");
DV.writeLog("TEMP_PORTFL_CD = " + TEMP_PORTFL_CD);
var sSqlCond = DV.addSQLCondition(null, "PORTFL_CD", TEMP_PORTFL_CD);

var sFldList = DV.addFieldList(null,"TADR_ID");
sFldList = DV.addFieldList(sFldList,"TADR_EN_NM");

var sOrderBy = "ORDER BY TADR_ID ASC";

 
var result1 = DV.getTableMultiDataToArray("KD_FOLDER_DO",sFldList,sSqlCond,sOrderBy);