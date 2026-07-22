/*Eloan Gapi*/
DV.writeLog("===========IPLC1STEP_TakeDown_OPEN_eLoan Eloan GAPI Start============");
var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_BORROWER_ID = DV.getFieldValue("E_BORROWER_ID");
var E_ACCOUNT_TYPE = DV.getFieldValue("E_ACCOUNT_TYPE");
var E_FUNCTION_ID = DV.getFieldValue("E_FUNCTION_ID");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
var E_UNPAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_CCY");
var E_UNPAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_AMT");


DV.writeLog("E_UNPAID_CONFIRM_COMM_AMT====" + E_UNPAID_CONFIRM_COMM_AMT + ";" + "E_PAID_CONFIRM_COMM_AMT====" + E_PAID_CONFIRM_COMM_AMT);


if (E_UNPAID_CONFIRM_COMM_AMT > 0 || E_PAID_CONFIRM_COMM_AMT > 0){
DV.writeLog("=======Eloan Gapi   IPLC1STEP_TakeDown_OPEN_eLoan=======START=====");
DV.appendField("IPLC_IPLC1STEP_TakeDown_OPEN_eLoan");
DV.writeLog("=======Eloan Gapi   IPLC1STEP_TakeDown_OPEN_eLoan=======END=====");
}

DV.writeLog("===========IPLC1STEP_TakeDown_OPEN_eLoan Eloan GAPI End============");