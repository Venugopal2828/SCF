DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email' && SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST= 'Fax' && SEND_TO_CUST_LANG = 'English'");

DV.appendField("EPLC_EPLC_BeneAdvice");

var CHG_FLD_ALL_CHARGE_AT = DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT");
var OUR_ENG = DV.getFieldValue("OUR_ENG");
if (CHG_FLD_ALL_CHARGE_AT == '0') {
  if (OUR_ENG == 'CONFIRMATION') {
    DV.appendField("EPLC_EPLC_AdviceLCConfirm");
  }
}

if (OUR_ENG == 'ADVICE') {
  DV.appendField("EPLC_EPLC_AdviceLetterOfCredit");
}


  var CHG = DV.getFieldValue("CHG_CUST_AMT");
  if (CHG >0) {
    DV.appendField("EPLC_EPLC_DebitAdviceConfirm");
  }


