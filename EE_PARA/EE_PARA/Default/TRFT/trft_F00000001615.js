/* DV.appendField("EPLC_EPLC_SyndAmd"); */

var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_BORROWER_ID = DV.getFieldValue("E_BORROWER_ID");
var E_ACCOUNT_TYPE = DV.getFieldValue("E_ACCOUNT_TYPE");
var E_FUNCTION_ID = DV.getFieldValue("E_FUNCTION_ID");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
var E_UNPAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_CCY");
var E_UNPAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_AMT");
var COMM_TYPE = DV.getFieldValue("COMM_TYPE");
var NEW_EXPIRY_DT = DV.getFieldValue("NEW_EXPIRY_DT");
var TRX_DT = DV.getFieldValue("TRX_DT");
var E_TRX_DT = DV.getFieldValue("E_TRX_DT");
var E_ORG_OUR_ENG_ADV_LC = DV.getFieldValue("E_ORG_OUR_ENG_ADV_LC");
DV.writeLog("==========Transfer to start=====");
if ((E_UNPAID_CONFIRM_COMM_AMT > 0 || E_PAID_CONFIRM_COMM_AMT > 0) && E_ORG_OUR_ENG_ADV_LC != "CONFIRMATION") {
    DV.writeLog("==========Transfer to UPDATE_E_ORG_OUR_ENG_ADV_LC=====");
    DV.appendField("EPLC_UPDATE_E_ORG_OUR_ENG_ADV_LC");
}
DV.writeLog("==========Transfer to end=====");

/*Add by amy for SMBC demo in 20120912*/
DV.appendField("EPLC_UPDATE_TTL_CONF_COMM");
DV.appendField("EPLC_UPDATE_UNPAID_CONF_COMM");



/*SYND*/
var vOLD_CONF_BAL = DV.getFieldValue("OLD_CONF_BAL");
var vNEW_CONF_BAL = DV.getFieldValue("NEW_CONF_BAL");
var vSYND_FLG = DV.getFieldValue("SYND_FLG");
if (vOLD_CONF_BAL != vNEW_CONF_BAL && vSYND_FLG == "YES") {
    DV.appendField("SSSS_SYND_ACTION");
}