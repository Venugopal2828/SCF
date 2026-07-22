/*Eloan Gapi*/
DV.writeLog("===========Eloan GAPI Start============");
var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_BORROWER_ID = DV.getFieldValue("E_BORROWER_ID");
var E_ACCOUNT_TYPE = DV.getFieldValue("E_ACCOUNT_TYPE");
var E_FUNCTION_ID = DV.getFieldValue("E_FUNCTION_ID");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
var E_UNPAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_CCY");
var E_UNPAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_AMT");
var COMM_TYPE = DV.getFieldValue("COMM_TYPE");
var AVAL_BY = DV.getFieldValue("AVAL_BY");
var PMT_FLG = DV.getFieldValue("PMT_FLG");
var CHG_FLD_ALL_CHARGE_FOR = DV.getFieldValue("CHG_FLD_ALL_CHARGE_FOR");
var CONFIRM_COMM_TO_ACC_AMT = DV.getFieldValue("CONFIRM_COMM_TO_ACC_AMT");

if (E_UNPAID_CONFIRM_COMM_AMT > 0 && ((AVAL_BY == "BY NEGOTIATION" && CONFIRM_COMM_TO_ACC_AMT == 0) || (AVAL_BY != "BY PAYMENT" && AVAL_BY != "BY NEGOTIATION"))) {
    DV.writeLog("======eLOAN GAPI=====SendDocument_TakeDwn_Con_eLoan===Start===");
    DV.appendField("EPLC_SendDocument_TakeDwn_Con_eLoan");
}

var E_BORROWER_ID_ACCEPT = DV.getFieldValue("E_BORROWER_ID_ACCEPT");
var ISSUE_BK_ID = DV.getFieldValue("ISSUE_BK_ID");
var E_BORROWER_ID_ACCEPT = DV.getFieldValue("E_BORROWER_ID_ACCEPT");
var E_ACCOUNT_TYPE_ACCEPT = DV.getFieldValue("E_ACCOUNT_TYPE_ACCEPT");
var E_UNPAID_ACCEPT_COMM_AMT = DV.getFieldValue("E_UNPAID_ACCEPT_COMM_AMT");
var E_UNPAID_ACCEPT_COMM_CCY = DV.getFieldValue("E_UNPAID_ACCEPT_COMM_CCY");
var E_PAID_ACCEPT_COMM_AMT = DV.getFieldValue("E_PAID_ACCEPT_COMM_AMT");
var E_PAID_ACCEPT_COMM_CCY = DV.getFieldValue("E_PAID_ACCEPT_COMM_CCY");

DV.writeLog("E_UNPAID_ACCEPT_COMM_AMT======" + E_UNPAID_ACCEPT_COMM_AMT);
if (E_UNPAID_ACCEPT_COMM_AMT > 0) {
    DV.writeLog("======eLOAN GAPI=====SendDocument_TakeDwn_Accep_eLoan===Start===");
    DV.appendField("EPLC_SendDocument_TakeDwn_Accep_eLoan");
}

DV.writeLog("===========Eloan GAPI End============");