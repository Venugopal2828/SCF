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