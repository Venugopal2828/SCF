DV.writeLog("Begin Get Default Nostro Account for 200 Rec Bank");

var sCcy = DV.getParamFieldValue("X200_CCY_32A");
var sCntyCode = DV.getParamFieldValue("SYS_BANK_COUNTRY");

var sql_condition = DV.addSQLCondition(null, "C_ACCT_CCY", sCcy);
DV.addSQLCondition(sql_condition, "C_CNTY_CODE", sCntyCode);
DV.addSQLCondition(sql, "C_CLEAR_TYPE", "NOSTRO");
DV.addSQLCondition(sql, "C_CLEAR_DEF", "T");

var fld_list = DV.addFieldList(null, "C_ACCT_NR");
var fld_list = DV.addFieldList(fld_list, "C_ACCT_WITH_ID");
var fld_list = DV.addFieldList(fld_list, "C_MIRROR_ACCT");

var result = DV.executeQuery("STD_CLEARING", fld_list, sql_condition);

var nNosAcct = DV.getDBFieldValue(result, "C_ACCT_NR");
var sRecId = DV.getDBFieldValue(result, "C_ACCT_WITH_ID");
var nSendCorrAcct = DV.getDBFieldValue(result, "C_MIRROR_ACCT");


DV.updateTrxFieldValue("CPYT_CR_BK_AC", nNosAcct);
DV.updateTrxFieldValue("X200_ADV_BKID_B2", sRecId);
DV.updateTrxFieldValue("X200SENDCORACNO53A", nSendCorrAcct);