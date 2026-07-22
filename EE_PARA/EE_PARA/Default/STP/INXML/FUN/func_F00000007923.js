stp.writeLog("********************Stat");
stp.setAutoProcess(true);
stp.setEdiRule("InEDI04");

stp.updateFieldValue("FA_BUSI_STATUS", 'EDI4');
stp.updateFieldValue("CLERK_ID", 'CSBANK');




var pre = 'EF';
stp.updateFieldValue("FA_BUSI_TYPE", pre);
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
stp.updateFieldValue("TRX_DT", date);
year = date.substr(2, 2);
month = date.substr(5, 2);
var sub = 'PCI';
var ref = stp.SYS_getRefNo("IF_PCI");
var PCIref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("C_MAIN_REF", PCIref);
stp.updateFieldValue("FA_PRICING_REF", PCIref);
stp.writeLog("PCIref===============" + PCIref);



var selId = stp.getXMLNodeValue("SellerNr", "MSG04.Seller", ".");
stp.writeLog("Sel_EDI_ID" + selId);
var fld_list = stp.addFieldList(null, "C_MAIN_REF");
var sql_condition = stp.addSQLCondition(null, "upper(FA_EDI_MSG_ID)", selId);
var result = stp.executeQuery("STAT_MASTER", fld_list, sql_condition);
var Sel_ID = stp.getDBFieldValue(result, "C_MAIN_REF");
stp.writeLog("Sel_ID" + Sel_ID);
stp.updateFieldValue("FA_SEL_ID", Sel_ID);



stp.writeLog("6666666666End");