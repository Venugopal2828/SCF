DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail'&&SEND_TO_BANK_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Fax'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail'&&SEND_TO_CUST_LANG = 'English'");
var DISCNT_FLG = DV.getFieldValue("DISCNT_FLG");
if (DISCNT_FLG == 'YES') {
    DV.appendField("EXCO_EXCO_DebitAdvice_SettleFinDA");
  }
DV.appendField("EXCO_EXCO_CreditAdvice_SettleDA");