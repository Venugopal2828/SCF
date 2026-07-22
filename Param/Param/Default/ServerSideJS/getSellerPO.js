var sBUYER_NM = DV.getParamFieldValue("TSU_BUYER_NM");//Get the variable value from the screen data
var sUnitCode = DV.getParamFieldValue("SYS_CHILD_UNIT");
var sBusinessType = DV.getParamFieldValue("INV_BUSI_TYPE");

//var sSQLCond = DV.addSQLCondition(null, "FA_SEL_NM",sBUYER_NM);
var sSQLCond = DV.addSQLCondition(null, "FA_SEL_ID",sUnitCode);
var sSQLCond = DV.addSQLCondition(sSQLCond, "FA_BUSI_TYPE",sBusinessType);
//var sSQLCond = DV.addSQLCondition(sSQLCond, "FA_AGM_SIGN_FLG","Active");

//Append the Sql Clause ,the field type is default to char, and the op is default to ¡®=¡¯

var sFlds = DV.addFieldList(null, "DISTINCT(FA_BUYER_NM)");//Add the query List
//DV.setSecuModule(); FOR SECURITY TABBLE

var sSrcTb = "FADA_EM_BSR";

var RS = DV.executeQuery(sSrcTb, sFlds, sSQLCond);//Execute Query the fields

var count = DV.getRecordCount(RS);//Find the record count 

for(var i=0 ; i < count ; i++){
//Set the value to a select field then we can get the multi record from DB. If the record have //no special string we also //can set the multi record to a text field,the value can be split by some separator. 
	var record = DV.getRecord(RS,i);
	var sellNm = String(DV.getDBFieldValue(record,"FA_BUYER_NM"));
	DV.writeLog("============sellNm: "+sellNm);
//	var unitNameC = String(DV.getDBFieldValue(record,"UNIT_NAME_C"));
	DV. setTrxFieldValue ("TSU_BUYER_NM", sellNm, sellNm,1);
 }
