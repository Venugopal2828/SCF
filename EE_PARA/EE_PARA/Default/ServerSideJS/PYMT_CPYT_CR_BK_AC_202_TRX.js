DV.writeLog("Begin Get 202 Beneficiary Account Number");

var sBankId = DV.getParamFieldValue("BANK_FOR_ACCT");
var sCcy = DV.getParamFieldValue("X202_CCY_32A");
var sCntyCode = DV.getParamFieldValue("CNTY_CODE");

var sql = DV.addSQLCondition(null, "C_ACCT_WITH_ID", sBankId);
DV.addSQLCondition(sql, "C_ACCT_CCY", sCcy);
DV.addSQLCondition(sql, "C_CNTY_CODE", sCntyCode);
DV.addSQLCondition(sql, "C_CLEAR_TYPE", "NOSTRO");
DV.addSQLCondition(sql, "C_CLEAR_DEF", "T");

var fields = DV.addFieldList(null, "C_ACCT_NR");

var sResult = DV.executeQuery("STD_CLEARING", fields, sql);

var sBenAcctnum = DV.getDBFieldValue(sResult, "C_ACCT_NR");

DV.updateTrxFieldValue("CPYT_CR_BK_AC", sBenAcctnum);