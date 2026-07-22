DV.writeLog("-----------DOC1 START--------");
DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail'&&SEND_TO_BANK_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Fax'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail'&&SEND_TO_CUST_LANG = 'English'");
DV.writeLog("-----------DOC1 END--------");
DV.writeLog("-----------DOC2 START--------");
if (DV.getFieldValue("DRAFT_GTEE") == 'Yes') {
    DV.appendField("GTEE_DRAFT_NO_WATER");
}
DV.writeLog("-----------DOC2 END--------");
DV.writeLog("-----------DOC3 START--------");
if (DV.getFieldValue("GTEE_TYPE") == 'advance payment guarantee') {
    DV.appendField("GTEE_GTEE_AdvancePayment");
}
DV.writeLog("-----------DOC3 END--------");