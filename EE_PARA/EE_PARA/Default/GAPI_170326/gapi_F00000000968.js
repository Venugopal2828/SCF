var WEB_REF = DV.getFieldValue("WEB_REF");
//DV.appendField("IPLC_IMLC_EEOUT");

var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
var E_UNPAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_AMT");

DV.writeLog("E_UNPAID_CONFIRM_COMM_AMT====" + E_UNPAID_CONFIRM_COMM_AMT + ";" + "E_PAID_CONFIRM_COMM_AMT====" + E_PAID_CONFIRM_COMM_AMT);


if (E_UNPAID_CONFIRM_COMM_AMT > 0 || E_PAID_CONFIRM_COMM_AMT > 0){
DV.writeLog("=======Eloan Gapi   IPLC1STEP_TakeDown_OPEN_eLoan=======START=====");
DV.appendField("IPLC_IPLC1STEP_TakeDown_OPEN_eLoan");
DV.writeLog("=======Eloan Gapi   IPLC1STEP_TakeDown_OPEN_eLoan=======END=====");
}