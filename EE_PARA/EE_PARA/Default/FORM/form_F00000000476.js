DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail'&&SEND_TO_BANK_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Fax'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail'&&SEND_TO_CUST_LANG = 'English'");
//DV.appendField("IPLC_Issue_Amd");
var CHG_FLD_ALL_CHARGE_AT = DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT");
var CHG_FLD_ALL_CHARGE_FOR = DV.getFieldValue("CHG_FLD_ALL_CHARGE_FOR");
if(CHG_FLD_ALL_CHARGE_AT == '0' && CHG_FLD_ALL_CHARGE_FOR == 'L') {
  DV.appendField("IPLC_Advice_Amend_Debit_Customer");
}