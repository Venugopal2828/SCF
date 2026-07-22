//DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email' && SEND_TO_CUST_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST= 'Fax' && SEND_TO_CUST_LANG = 'English'");

/*var DISC_DET = DV.getFieldValue("DISC_DET");
if (DISC_DET != '') {
    DV.appendField("EPLC_EPLC_DiscrepancyAdvice");
}*/

//DV.appendField("EPLC_EPLC_Docs_Presentation");
var DOC_STAT = DV.getFieldValue("DOC_STAT");
if (DOC_STAT == "Compliant") {
  DV.appendField("EPLC_EPLC_DocsPresentation");
}
if (DOC_STAT == "Discrepancy Found") {
  DV.appendField("EPLC_EPLC_DocsPresentationDiscrepant");
}
