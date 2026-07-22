//DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail' && SEND_TO_BANK_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail' && SEND_TO_CUST_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email' && SEND_TO_CUST_LANG = 'English'");
//DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST= 'Fax' && SEND_TO_CUST_LANG = 'English'");

//DV.appendField("EPLC_EPLC_AdviseAmd");

var CHG_FLD_ALL_CHARGE_AT = DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT");
if (CHG_FLD_ALL_CHARGE_AT == '0') {
  DV.appendField("EPLC_EPLC_AdviceAmendment");
  var OUR_ENG = DV.getFieldValue("OUR_ENG");
  var CONF_INSTR = DV.getFieldValue("CONF_INSTR");
  if (OUR_ENG == 'CONFIRMATION') {
    DV.appendField("EPLC_EPLC_AdviceAmdConfirm");
    DV.appendField("EPLC_EPLC_DebitAdviceAmdConfirm");
  }

  if (CONF_INSTR == 'CONFIRM' && OUR_ENG == 'ADVICE') {
    DV.appendField("EPLC_EPLC_AdviceAmdNotConfirm");
  }
}
