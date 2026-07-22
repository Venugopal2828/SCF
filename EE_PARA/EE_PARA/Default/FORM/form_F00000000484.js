if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email' && SEND_TO_CUST_LANG = 'English'");
    DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST= 'Fax' && SEND_TO_CUST_LANG = 'English'");

}

var CHG_FLD_ALL_CHARGE_AT = DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT");
if (CHG_FLD_ALL_CHARGE_AT == '0') {
  DV.appendField("IMCO_IMCO_Debit_Advice_For_Settle_DP");
}