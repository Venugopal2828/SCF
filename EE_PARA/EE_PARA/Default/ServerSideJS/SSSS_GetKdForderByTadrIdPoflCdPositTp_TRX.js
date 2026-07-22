var TADR_ID = DV.getParamFieldValue("TADR_ID");
var TEMP_PORTFL_CD = DV.getParamFieldValue("TEMP_PORTFL_CD");
var POSIT_TP = DV.getParamFieldValue("POSIT_TP");
DV.writeLog("*****TADR_ID = " + TADR_ID);
DV.writeLog("*****TEMP_PORTFL_CD = " + TEMP_PORTFL_CD);
DV.writeLog("*****POSIT_TP = " + POSIT_TP);

var sSqlCond = DV.addSQLCondition(null, "TADR_ID", TADR_ID);
sSqlCond = DV.addSQLCondition(sSqlCond, "PORTFL_CD", TEMP_PORTFL_CD);
sSqlCond = DV.addSQLCondition(sSqlCond, "POSIT_TP", POSIT_TP);

var sFldList = DV.addFieldList(null,"SHORT_NM");
sFldList = DV.addFieldList(sFldList,"STOP_DT");

var sOrderBy = "ORDER BY SHORT_NM ASC";
DV.writeLog("*****sOrderBy = " + sOrderBy);
 
var result1 = DV.getTableMultiDataToArray("KD_FOLDER_DO",sFldList,sSqlCond,sOrderBy);