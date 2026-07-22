var interestPayableAt = "";
var principalInstallment = "";
var interestInstallment = "";
var interestchargetype = "";
var overdueDate = "";
var paymentDate = "";

var records = DV.getRecords("FincSinglePayment");

for (var i = 0; i < records.length; i++) {
    overdueDate = DV.getDOValue(records[i], "CFNC_D_DUE_DT");
    paymentDate = DV.getDOValue(records[i], "CFNC_D_PAY_DT");
    interestPayableAt = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
    principalInstallment = DV.getDOValue(records[i], "CFNC_PRINCIPAL_INSTAL_FLG");
    interestInstallment = DV.getDOValue(records[i], "CFNC_INTEREST_INSTAL_FLG");
    interestchargetype = DV.getDOValue(records[i], "CFNC_C_INT_MODE");
}



DV.writeLog("=======GAPI Parameter Start========");
DV.writeLog(overdueDate);
DV.writeLog(paymentDate);
DV.writeLog(interestPayableAt);
DV.writeLog(principalInstallment);
DV.writeLog(interestInstallment);
DV.writeLog(interestchargetype);
DV.writeLog("=======GAPI Parameter End========");


if (interestPayableAt == 'Up Front' && principalInstallment == 'No' && interestInstallment == 'No' && overdueDate >= paymentDate) {
    DV.writeLog("=======CFNC_Amz Payment_8063 start========");
    DV.appendField("CFNC_CFNC_Amz_Payment_8063");
    DV.writeLog("=======CFNC_Amz Payment_8063 end========");
}
/*
if ((principalInstallment == 'Yes' || interestInstallment == 'Yes') && interestPayableAt == 'Up Front' && overdueDate >= paymentDate) {
    DV.writeLog("=======CFNC_Amz Payment_8063 start========");
    DV.appendField("CFNC_CFNC_Amz_Payment_8063");
    DV.writeLog("=======CFNC_Amz Payment_8063 end========");
}
*/
if (interestPayableAt == 'In Arrears' && principalInstallment == 'No' && interestInstallment == 'No' || (interestchargetype == 'Simple Interest' && overdueDate < paymentDate)) {
    DV.writeLog("=======CFNC_Acc Payment_8036 start========");
    DV.appendField("CFNC_CFNC_Acc_Payment_8036");
    DV.writeLog("=======CFNC_Acc Payment_8036 end========");
}
/*
if (interestPayableAt == 'In Arrears' && (principalInstallment == 'Yes' || interestInstallment ==
    'Yes') || (interestchargetype == 'Simple Interest' && overdueDate < paymentDate)) {
    DV.writeLog("=======FNC_Acc Payment_8036 start========");
    DV.appendField("CFNC_CFNC_Acc_Payment_8036");
    DV.writeLog("=======CFNC_Acc Payment_8036 end========");
}
*/