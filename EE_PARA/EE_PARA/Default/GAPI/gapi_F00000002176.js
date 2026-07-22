/*Eloan Gapi*/
DV.writeLog("===========EPLC_AddConfirmation Eloan GAPI Start============");
var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_BORROWER_ID = DV.getFieldValue("E_BORROWER_ID");
var E_ACCOUNT_TYPE = DV.getFieldValue("E_ACCOUNT_TYPE");
var E_FUNCTION_ID = DV.getFieldValue("E_FUNCTION_ID");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
var E_UNPAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_CCY");
var E_UNPAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_AMT");
var E_MAIN_REF = DV.getFieldValue("E_MAIN_REF");
var E_IA_C_DIS_LOCALCCY = DV.getFieldValue("E_IA_C_DIS_LOCALCCY");
var CHG_FLD_LOCAL_CUST_CCY = DV.getFieldValue("CHG_FLD_LOCAL_CUST_CCY");

DV.writeLog("=====E_MAIN_REF=========" + E_MAIN_REF);
DV.writeLog("=====E_IA_C_DIS_LOCALCCY=========" + E_IA_C_DIS_LOCALCCY);
DV.writeLog("=====CHG_FLD_LOCAL_CUST_CCY=========" + CHG_FLD_LOCAL_CUST_CCY);
if (E_UNPAID_CONFIRM_COMM_AMT > 0 || E_PAID_CONFIRM_COMM_AMT > 0) {
    DV.writeLog("=====eLoan Gapi AddConfirmation_TakeDwn_Cf_eLoan========Start=======");
    DV.appendField("EPLC_AddConfirmation_TakeDwn_Cf_eLoan");
}
DV.writeLog("===========EPLC_AddConfirmation Eloan GAPI End============");