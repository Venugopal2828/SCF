//DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email' && SEND_TO_CUST_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST= 'Fax' && SEND_TO_CUST_LANG = 'English'");
//if (DV.getFieldValue("DISCNT_FLG") == "YES") {
//    DV.appendField("EPLC_EPLC_DiscountAdvice");
//}

// DV.appendField("EPLC_EPLC_CreditAdvice_Nego");
var AVAL_BY = DV.getFieldValue("AVAL_BY");
if (AVAL_BY == "BY ACCEPTANCE") {
  DV.appendField("EPLC_AdviceAccept");
  var CHG_FLD_ALL_CHARGE_AT = DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT");
  if (CHG_FLD_ALL_CHARGE_AT == '0') {
   DV.appendField("EPLC_EPLC_DebitAdviceAccept"); 
  }
}
