DV.writeLog("===========Eloan GAPI Start============");

var E_BORROWER_ID_ACCEPT = DV.getFieldValue("E_BORROWER_ID_ACCEPT");
var E_BORROWER_ID_ACCEPT = DV.getFieldValue("E_BORROWER_ID_ACCEPT");
var E_ACCOUNT_TYPE_ACCEPT = DV.getFieldValue("E_ACCOUNT_TYPE_ACCEPT");
var E_UNPAID_ACCEPT_COMM_AMT = DV.getFieldValue("E_UNPAID_ACCEPT_COMM_AMT");
var E_UNPAID_ACCEPT_COMM_CCY = DV.getFieldValue("E_UNPAID_ACCEPT_COMM_CCY");
var E_PAID_ACCEPT_COMM_AMT = DV.getFieldValue("E_PAID_ACCEPT_COMM_AMT");
var E_PAID_ACCEPT_COMM_CCY = DV.getFieldValue("E_PAID_ACCEPT_COMM_CCY");
var COMM_TYPE = DV.getFieldValue("COMM_TYPE");

DV.writeLog("E_PAID_ACCEPT_COMM_AMT========" + E_PAID_ACCEPT_COMM_AMT);

if (E_PAID_ACCEPT_COMM_AMT > 0) {
    DV.writeLog("============eLoan GAPI SetlParPaymt_Paymt_Accept_eLoan====START====");
    DV.appendField("EPLC_SetlParPaymt_Paymt_Accept_eLoan");
}

DV.writeLog("E_UNPAID_ACCEPT_COMM_AMT========" + E_UNPAID_ACCEPT_COMM_AMT);
if (E_UNPAID_ACCEPT_COMM_AMT > 0) {
    DV.writeLog("============eLoan GAPI SetlParPaymt_RTkDwn_Accept_eLoan====START====");
    DV.appendField("EPLC_SetlParPaymt_RTkDwn_Accept_eLoan");
}

DV.writeLog("===========Eloan GAPI End============");