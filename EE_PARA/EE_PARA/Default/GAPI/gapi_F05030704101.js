
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var FA_SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");


if(Type == 'RD' && FA_SERVICE_REQ == '1' )
{
	DV.appendField("FAEF_Settlement_CounterLimit_Auto");	
}
else 
{
	DV.appendField("FAEF_Settlement_AnchorLimit_Auto");
}
DV.writeLog("INVOICE PAY LOAN STATR********************");

var FA_INT_CHG_TYPE=DV.getFieldValue("FA_INT_CHG_TYPE");
DV.writeLog("FA_INT_CHG_TYPE========="+FA_INT_CHG_TYPE);

/*if(FA_INT_CHG_TYPE=='2'){
  DV.appendField("FAEF_Acc_Payment_8036_SCF");
}else{
  DV.appendField("FAEF_Amz_Payment_8063_SCF");
}*/
DV.appendField("FAEF_Acc_Payment_8036_SCF", "Settle_New.Settle_loan", "typeof(FA_INT_CHG_TYPE) != 'undefined' && FA_INT_CHG_TYPE='2'");
DV.appendField("FAEF_Amz_Payment_8063_SCF", "Settle_New", "typeof(FA_INT_CHG_TYPE) != 'undefined' && FA_INT_CHG_TYPE='1'");
//DV.appendField("FAEF_Acc_Payment_8036", "Settle_New.Settle_loan", "FA_INT_CHG_TYPE='2'");
//DV.appendField("FAEF_Amz_Payment_8063_SCF");
DV.writeLog("INVOICE PAY LOAN END###############");