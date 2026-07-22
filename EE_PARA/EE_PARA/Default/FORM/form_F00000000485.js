var string = DV.getFieldValue("R_LMT_DECISION_FLG");
DV.writeLog("string=======" + string);


if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email' && SEND_TO_CUST_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST= 'Fax' && SEND_TO_CUST_LANG = 'English'");
}

var TEMP_DELVR_DOC_AGST = DV.getFieldValue("TEMP_DELVR_DOC_AGST");
if (TEMP_DELVR_DOC_AGST == 'D/P') {
  DV.appendField("IMCO_IMCO_Amendment_DP");
}
if (TEMP_DELVR_DOC_AGST == 'D/A' || TEMP_DELVR_DOC_AGST == 'D/A and Aval') {
  DV.appendField("IMCO_IMCO_Amendment_DA");
}