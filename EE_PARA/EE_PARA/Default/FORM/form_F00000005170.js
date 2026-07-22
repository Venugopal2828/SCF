  var SettFld = DV.getFieldValue("MT103_DISTRBN");
  if (SettFld == "Single Settlement") {
      DV.appendField("PYMT_ITT_PAYMENT_ADVICE");
  }

  /*
var chgDet = DV.getFieldValue("INW_X103_DET_CHG_71A");
var inv = DV.getFieldValue("SEND_TO_FLAG");
var cash_ind=DV.getFieldValue("TEMP_CASH_IND")
DV.writeLog("cash_ind===============================" +cash_ind)
if(inv != "Send to Investigation Queue"){
  var SettFld=DV.getFieldValue("MT103_DISTRBN");
  if(SettFld=="Single Settlement"){
		if(chgDet == 'OUR'){
			if(cash_ind=="Yes"){
				DV.appendField("PYMT_ITT_PAYMENT_ADVICE_SBA_OUR");
				DV.appendField("PYMT_ITT_PYMT_CASH_VOUH");
			}else{
				DV.appendField("PYMT_ITT_PAYMENT_ADVICE_SBA_OUR");
			}
		}else{
			if(cash_ind=="Yes"){
				DV.appendField("PYMT_ITT_PAYMENT_ADVICE_SBA");
				DV.appendField("PYMT_ITT_PYMT_CASH_VOUH");
			}else{
			   DV.appendField("PYMT_ITT_PAYMENT_ADVICE_SBA");
			}
}
  }
}

var chg_cas_ind=DV.getFieldValue("CHG_CASH_IND");
var chg_tot_amt=DV.getFieldValue("CHG_FLD_LOCAL_TOTAL_AMT");
if((chg_cas_ind=="Yes") && (chg_tot_amt > 0)){
DV.appendField("PYMT_ITT_CHG_CASH_VOUH");
}
*/