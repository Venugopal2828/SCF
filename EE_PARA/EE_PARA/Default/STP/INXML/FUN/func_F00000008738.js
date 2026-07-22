stp.writeLog("************Begin:R2ReceivePOResponse**************");
stp.setAutoProcess(true);

var C_REF = stp.getXMLNodeValue("C_MAIN_REF");
var PRE_FIN = stp.getXMLNodeValue("TSU_PRE_FIN");
var RES_FLAG = stp.getXMLNodeValue("TSU_RES_FLAG");
var CUST_ID = stp.getXMLNodeValue("TSU_CUST_ID");
var CUST_REF = stp.getXMLNodeValue("TSU_CUST_REF");
stp.writeLog("C_MAIN_REF=" + C_REF);
stp.writeLog("TSU_PRE_FIN=" + PRE_FIN);
stp.writeLog("TSU_RES_FLAG=" + RES_FLAG);
stp.writeLog("TSU_CUST_ID=" + CUST_ID);
stp.writeLog("TSU_CUST_REF=" + CUST_REF);

stp.updateFieldValue("C_MAIN_REF", C_REF);
stp.updateFieldValue("TSU_PRE_FIN", PRE_FIN);
stp.updateFieldValue("TSU_RES_FLAG", RES_FLAG);
stp.updateFieldValue("TSU_CUST_ID", CUST_ID);
stp.updateFieldValue("TSU_CUST_REF", CUST_REF);

var bu = stp.getTSUUnitCode();
var fld_list = stp.addFieldList(null, "TSU_PO_ID");
fld_list = stp.addFieldList(fld_list, "TSU_BUYER_NM");
fld_list = stp.addFieldList(fld_list, "TSU_SEL_NM");
fld_list = stp.addFieldList(fld_list, "TSU_TID");
var sql_condition = stp.addSQLCondition(null, "C_MAIN_REF", C_REF);
sql_condition = stp.addSQLCondition(sql_condition, "C_UNIT_CODE", bu);
var result = stp.executeQuery("TSUM_MASTER", fld_list, sql_condition);
var poid = stp.getDBFieldValue(result, "TSU_PO_ID");
var buname = stp.getDBFieldValue(result, "TSU_BUYER_NM");
var selname = stp.getDBFieldValue(result, "TSU_SEL_NM");
var tsutid = stp.getDBFieldValue(result, "TSU_TID");
stp.writeLog("TSU_PO_ID=" + poid);
stp.writeLog("TSU_BUYER_NM=" + buname);
stp.writeLog("TSU_SEL_NM=" + selname);
stp.writeLog("TSU_TID=" + tsutid);

stp.updateFieldValue("TSU_PO_ID", poid);
stp.updateFieldValue("TSU_BUYER_NM", buname);
stp.updateFieldValue("TSU_SEL_NM", selname);
stp.updateFieldValue("TSU_TID", tsutid);

stp.writeLog("************End:R2ReceivePOResponse**************");