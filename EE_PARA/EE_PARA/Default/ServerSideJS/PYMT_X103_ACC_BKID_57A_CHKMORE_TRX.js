DV.writeLog("Begin Search for 103 Acct With Ins ID");
var sID = DV.getParamFieldValue("X103_ACC_BKACNO57A");
var sCNTY = DV.getParamFieldValue("AC_WT_INST_CNTY_CODE");
var sCHFED = DV.getParamFieldValue("CHIPFED");

DV.writeLog(sCNTY);
DV.writeLog(sCHFED);

var sql_condition = DV.addSQLCondition(null, "CNTY_CODE", sCNTY);
if (CNTY.equals("US") && CHFED.equals("CHIPS")) {
    DV.addSQLCondition(sql_condition, "CHIPS_UID", ID);
    DV.writeLog("Is US");
} else {
    DV.addSQLCondition(sql_condition, "NAT_ID", ID);
    DV.writeLog("Not US");
}

var cntChkList = DV.addFieldList(null, "COUNT(*) HO_ID");
var cntChkRes = DV.executeQuery("BANK_MASTER", cntChkList, sql_condition);
var cntChkNo = DV.getDBFieldValue(cntChkRes, "HO_ID");


if (cntChkNo == 1) {
    var fld_list = DV.addFieldList(null, "C_MAIN_REF");
    var result = DV.executeQuery("BANK_MASTER", fld_list, sql_condition);
    var res = DV.getDBFieldValue(result, "C_MAIN_REF");
    DV.updateTrxFieldValue("X103_ACC_BKACNO57A", res);
}

DV.updateTrxFieldValue("ACCT103_DUP", cntChkNo);

DV.writeLog("End Search for 103 Acct With Ins ID");