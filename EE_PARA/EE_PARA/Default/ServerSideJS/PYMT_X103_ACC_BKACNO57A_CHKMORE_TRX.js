DV.writeLog("Begin Search for 103 Acct With Inst Acc Num");
var BANK_ID = DV.getParamFieldValue("X103_ACC_BKID_57A");
var CHIP_FED = DV.getParamFieldValue("CHIPFED");

var sql_condition = DV.addSQLCondition(null, "C_MAIN_REF", BANK_ID);
var fld_list = DV.addFieldList(null, "CNTY_CODE");
var result = DV.executeQuery("BANK_MASTER", fld_list, sql_condition);
var CNTY_CODE = DV.getDBFieldValue(result, "CNTY_CODE");
if (CNTY_CODE.equals("US") && CHIP_FED.equals("CHIPS")) {
    DV.addFieldList(fld_list, "CHIPS_UID");
    var result = DV.executeQuery("BANK_MASTER", fld_list, sql_condition);
    var VAR3 = DV.getDBFieldValue(result, "CHIPS_UID");
} else {
    DV.addFieldList(fld_list, "NAT_ID");
    var result = DV.executeQuery("BANK_MASTER", fld_list, sql_condition);
    var VAR3 = DV.getDBFieldValue(result, "NAT_ID");
}
var sql = DV.addSQLCondition(null, "C_CNTY_CODE", CNTY_CODE);
var fld = DV.addFieldList(null, "C_CNTY_CODE2");
var res = DV.executeQuery("STD_COUNTRY", fld, sql);
var VAR2 = DV.getDBFieldValue(res, "C_CNTY_CODE2");
var VAR1 = "//";
if (VAR3 == "") {
    var return_val = ""
} else {
    var return_val = VAR1 + VAR2 + VAR3
}
DV.updateTrxFieldValue("X103_ACC_BKACNO57A", return_val);
DV.writeLog("End Search for 103 Acct With Inst Acc Num");