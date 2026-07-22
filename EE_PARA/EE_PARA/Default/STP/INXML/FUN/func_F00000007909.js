stp.writeLog("********************");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI01");

stp.updateFieldValue("FA_BUSI_STATUS", 'SELINFO');
stp.writeLog("@@@@@@@@@@@");
stp.setEventTimes(1);
stp.writeLog("%%%%%%%%%%%%");

var pre = 'IF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var year = stp.getSysBusiDate();
var month = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", year);
year = year.substr(2, 2);
month = month.substr(5, 2);
var sub = 'SIF';
var ref = stp.SYS_getRefNo("IF_SEL_ID");
var selref = pre + UnitCode + year + month + ref + sub;
stp.writeLog("ref no$$$$$$$$$$$$" + selref);
//stp.updateFieldValue("FA_SELINFO_ID",selref);
stp.updateFieldValue("C_MAIN_REF", selref);
stp.updateFieldValue("CLERK_ID", "SYS_STP_USER");

var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var sellnm = stp.getXMLNodeValue("SellerName", "MSG01.Seller", ".");
var sql_condition = stp.addSQLCondition(null, "PARTY_NM", sellnm);
var result = stp.executeQuery("STAT_MASTER", fld_list, sql_condition);
stp.writeLog("&&&&&result=" + result);
var mainRef = stp.getDBFieldValue(result, "C_MAIN_REF");
stp.updateFieldValue("FA_SEL_ID", mainRef);
stp.writeLog("&&&&&FA_SEL_ID=" + mainRef);

stp.writeLog("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$end");