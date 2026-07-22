/*eLOAN GAPI*/
DV.writeLog("====Eloan Gapi START====");
var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_BORROWER_ID = DV.getFieldValue("E_BORROWER_ID");
var E_ACCOUNT_TYPE = DV.getFieldValue("E_ACCOUNT_TYPE");
var E_FUNCTION_ID = DV.getFieldValue("E_FUNCTION_ID");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
var DEC_AMT = DV.getFieldValue("DEC_AMT");
var INC_AMT = DV.getFieldValue("INC_AMT");
var NEW_EXPIRY_DT = DV.getFieldValue("NEW_EXPIRY_DT");

//DV.writeLog("E_UNPAID_CONFIRM_COMM_AMT===="+E_UNPAID_CONFIRM_COMM_AMT+";"+"E_PAID_CONFIRM_COMM_AMT===="+E_PAID_CONFIRM_COMM_AMT);
DV.writeLog("DEC_AMT====" + DEC_AMT + ";" + "INC_AMT====" + INC_AMT + ";" + "NEW_EXPIRY_DT====" + NEW_EXPIRY_DT);

if (DEC_AMT != 0 || INC_AMT != 0 || NEW_EXPIRY_DT != "") {
    DV.writeLog("====Eloan Gapi SBLC_Amend_ISSUE_eLoan START====");
    DV.appendField("SBLC_SBLC_Amend_AMZAmd_ISSUE_eLoan");
    DV.writeLog("====Eloan Gapi SBLC_Amend_ISSUE_eLoan END====");
}
DV.writeLog("====Eloan Gapi END====");