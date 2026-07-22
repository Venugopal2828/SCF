var SHIPCO_ID = "";
var SHIPCO_ORDER_POST = "";
var sFieldList = "POSTAL_FMT_ADD";
var sMappingList = "SHIPCO_MAIL_ADD";
var sSQLWhere = "ORDER_NO = " + SHIPCO_ORDER_POST + " AND C_MAIN_REF = '" + SHIPCO_ID + "'";
var sTableName = "POST_ADD_DO";
var sql = "1=1";
var sys_dt = SYS_BUSI_DATE;