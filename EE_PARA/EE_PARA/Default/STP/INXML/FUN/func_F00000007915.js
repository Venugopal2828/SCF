stp.writeLog("********************Stat");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI19");

stp.updateFieldValue("FA_BUSI_STATUS", 'CLOSE');
stp.updateFieldValue("FA_BUSI_FUNC", '2');
stp.writeLog("1111111111111");

var selId = stp.getXMLNodeValue("SellerNr", "MSG19.Seller", ".");
stp.writeLog("2222222222222" + selId);
selId = selId.toUpperCase();
stp.updateFieldValue("FA_SEL_EDI_ID", selId);

var expFactor = stp.getXMLNodeValue("FactorCode", "MSG19.EF", ".");
stp.writeLog("3333333333333" + expFactor);
stp.updateFieldValue("FA_EF_ID", expFactor);
stp.writeLog("4444444444");


var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var fld_list2 = stp.addFieldList(null, "FA_SEL_ID");
var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", selId);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", expFactor);
var result = stp.executeQuery("FADA_SEL_INFO", fld_list, sql_condition);
var result2 = stp.executeQuery("FADA_SEL_INFO", fld_list2, sql_condition);
var mainRef = stp.getDBFieldValue(result, "C_MAIN_REF");
var Sel_ID = stp.getDBFieldValue(result2, "FA_SEL_ID");
stp.writeLog("555555555555" + mainRef);
stp.writeLog("77777777" + Sel_ID);
stp.updateFieldValue("C_MAIN_REF", mainRef);
stp.updateFieldValue("FA_SEL_ID", Sel_ID);

stp.setEventTimesFromTable("FADA_MASTER");

stp.writeLog("6666666666End");