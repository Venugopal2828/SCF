/*var WEB_REF=DV.getFieldValue("WEB_REF");
DV.appendField("IPLC_IMLC_EEOUT");*/



DV.writeLog("===========IPLC_PayAccept Eloan GAPI Start============");
var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");

DV.writeLog("E_PAID_CONFIRM_COMM_AMT====" + E_PAID_CONFIRM_COMM_AMT);
if (E_PAID_CONFIRM_COMM_AMT > 0) {
    DV.writeLog("====1=======Eloan GAPI IPLC_PayAccept_Payment_OPEN_eLoan========Start============");
    //DV.appendField("IPLC_PayAccept_Payment_OPEN_eLoan"); marked for takedown change
}
DV.writeLog("===========IPLC_PayAccept Eloan GAPI End============");