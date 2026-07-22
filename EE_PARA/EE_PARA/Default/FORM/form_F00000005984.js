DV.appendField("SSSS_ALL_Blank_Advice_Bank_E", "AdviceForBankCust", "MESG_TYPE_BANK = 'Mail'&&SEND_TO_BANK_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Fax'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Email'&&SEND_TO_CUST_LANG = 'English'");
DV.appendField("SSSS_ALL_Blank_Advice_Customer_E", "AdviceForBankCust", "MESG_TYPE_CUST = 'Mail'&&SEND_TO_CUST_LANG = 'English'");

var CHG_FLD_ALL_CHARGE_AT = DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT");
if (CHG_FLD_ALL_CHARGE_AT == '0') {
  var AVAL_BY = DV.getFieldValue("AVAL_BY");
  if (AVAL_BY == 'BY ACCEPTANCE') {
    DV.appendField("IPLC_Advice_Accept_Dr_Customer");
    
    var DOC_STAT = DV.getFieldValue("DOC_STAT");
    if (DOC_STAT == 'Compliant') {
      DV.appendField("IPLC_Notice_of_Accept_EN");
    }
  }
  var DISCNT_FLG = DV.getFieldValue("DISCNT_FLG");
  if (DISCNT_FLG == 'YES') {
    DV.appendField("IPLC_PayFinance_Dr_Adv_Customer");
  }
}