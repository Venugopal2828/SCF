if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email' && SEND_TO_CUST_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST= 'Fax' && SEND_TO_CUST_LANG = 'English'");
}

var DELVR_DOC_AGST = DV.getFieldValue("DELVR_DOC_AGST")
if (DELVR_DOC_AGST == 'D/A' || DELVR_DOC_AGST == 'D/A and Aval') {
  DV.appendField("IMCO_IMCO_Incoming_CollectionDA");
}
if (DELVR_DOC_AGST == 'D/P') {
  DV.appendField("IMCO_IMCO_Incoming_CollectionDP");
}
