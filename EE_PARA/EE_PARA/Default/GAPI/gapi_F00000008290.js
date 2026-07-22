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
var NEW_EXPIRY_DT = DV.getFieldValue("NEW_EXPIRY_DT");
var TRX_DT = DV.getFieldValue("TRX_DT");
var E_TRX_DT = DV.getFieldValue("E_TRX_DT");
var E_ORG_OUR_ENG_ADV_LC = DV.getFieldValue("E_ORG_OUR_ENG_ADV_LC");
var E_INT_COMM_AMT = DV.getFieldValue("E_INT_COMM_AMT");
var E_DEC_COMM_AMT = DV.getFieldValue("E_DEC_COMM_AMT");


DV.writeLog("E_UNPAID_CONFIRM_COMM_AMT============" + E_UNPAID_CONFIRM_COMM_AMT);

DV.writeLog("NEW_EXPIRY_DT============" + NEW_EXPIRY_DT);

DV.writeLog("E_TRX_DT============" + E_TRX_DT);

DV.writeLog("E_ORG_OUR_ENG_ADV_LC============" + E_ORG_OUR_ENG_ADV_LC);
/*
if((E_UNPAID_CONFIRM_COMM_AMT > 0 || E_PAID_CONFIRM_COMM_AMT > 0) && E_ORG_OUR_ENG_ADV_LC!= "CONFIRMATION"){
DV.writeLog("====Eloan Gapi AdviseLc_TakeDown_Confirm_eLoan========START====");
DV.writeLog("E_UNPAID_CONFIRM_COMM_AMT = "+ E_UNPAID_CONFIRM_COMM_AMT );
DV.writeLog("E_PAID_CONFIRM_COMM_AMT = "+ E_PAID_CONFIRM_COMM_AMT);
DV.writeLog("E_ORG_OUR_ENG_ADV_LC = " + E_ORG_OUR_ENG_ADV_LC);
DV.appendField("EPLC_AdviseLc_TakeDown_Confirm_eLoan");
}
*/
/*
if((E_INT_COMM_AMT > 0 || E_DEC_COMM_AMT >0) && E_ORG_OUR_ENG_ADV_LC== "CONFIRMATION"){
DV.writeLog("E_UNIT_CODE,E_BORROWER_ID,E_ACCOUNT_TYPE,E_FUNCTION_ID,E_UNPAID_CONFIRM_COMM_CCY,E_UNPAID_CONFIRM_COMM_AMT======"+E_UNIT_CODE+","+E_BORROWER_ID+","+E_ACCOUNT_TYPE+","+E_FUNCTION_ID+","+E_UNPAID_CONFIRM_COMM_CCY+","+E_UNPAID_CONFIRM_COMM_AMT);
DV.writeLog("E_UNIT_CODE,E_BORROWER_ID,E_ACCOUNT_TYPE,E_FUNCTION_ID,E_PAID_CONFIRM_COMM_CCY,E_PAID_CONFIRM_COMM_AMT==="+E_UNIT_CODE+","+E_BORROWER_ID+","+E_ACCOUNT_TYPE+","+E_FUNCTION_ID+","+E_PAID_CONFIRM_COMM_CCY+","+E_PAID_CONFIRM_COMM_AMT);
DV.writeLog("E_INT_COMM_AMT,E_DEC_COMM_AMT==="+E_INT_COMM_AMT+","+E_DEC_COMM_AMT);
DV.writeLog("====Eloan Gapi AdviseAmd_AmzAmd_Confirm_eLoan========START====");
DV.appendField("EPLC_AdviseAmd_AmzAmd_Confirm_eLoan");
}
 */
DV.writeLog("===========Eloan GAPI End============");


DV.appendField("EPLC_EXLC_002_Amdmnt");