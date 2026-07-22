/*var acc = DV.getFieldValue("ACCEPT_INV_AMT");
if (acc == 'Reject All') {
    DV.appendField("FA_InvVerify_ME", "VerifyInv", "FA_DOC_VERIFIED=='Rejected'");
}*/


DV.appendField("SSSS_EE_Counterparty");

//Added by kambamvenu
DV.writeLog("Appending Notification GAPI");
DV.appendField("FAEF_TRX_GenerateNotification");
DV.writeLog("Notification GAPI appended");