var sSqlCond = DV.addSQLCondition(null, "C_UNIT_CODE", DV.SYS_BUSI_UNIT);

var sFldList = DV.addFieldList(null,"TADR_ID");
sFldList = DV.addFieldList(sFldList,"TADR_EN_NM");

var sOrderBy = "ORDER BY TADR_ID ASC";
DV.writeLog("sOrderBy = " + sOrderBy);
 
var result1 = DV.getTableMultiDataToArray("KD_FOLDER_DO",sFldList,sSqlCond,sOrderBy);