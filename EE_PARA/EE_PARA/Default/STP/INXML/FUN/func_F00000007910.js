stp.writeLog("********************");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI01");

stp.updateFieldValue("FA_BUSI_STATUS", 'SELINFO');
stp.writeLog("1111111111111");
var selId = stp.getXMLNodeValue("SellerNr", "MSG01.Seller", ".");
stp.writeLog("2222222222222" + selId);
var expFactor = stp.getXMLNodeValue("FactorCode", "MSG01.EF", ".");
stp.writeLog("3333333333333" + expFactor);
stp.updateFieldValue("FA_SEL_EDI_ID", selId);
selId = selId.toUpperCase();
stp.updateFieldValue("FA_EF_ID", expFactor);
stp.writeLog("44444444444444444");

var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var sql_condition = stp.addSQLCondition(null, "upper(FA_SEL_EDI_ID)", selId);
var sql_condition = stp.addSQLCondition(sql_condition, "FA_EF_ID", expFactor);
var result = stp.executeQuery("FADA_SEL_INFO", fld_list, sql_condition);
stp.writeLog("result=" + result);
var mainRef = stp.getDBFieldValue(result, "C_MAIN_REF");

stp.writeLog("9999999999999999999999" + mainRef);
stp.updateFieldValue("C_MAIN_REF", mainRef);
stp.setEventTimesFromTable("FADA_MASTER");
stp.updateFieldValue("FA_BUSI_TYPE", 'IF');
stp.updateFieldValue("CLERK_ID", "SYS_STP_USER");
var year = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", year);


stp.writeLog("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$end");