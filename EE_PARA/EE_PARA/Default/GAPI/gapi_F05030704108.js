var busitype = DV.getFieldValue("FA_BUSI_TYPE");
var prinamt = DV.getFieldValue("FA_PAID_PRIN_SUM");
var flag = DV.getFieldValue("FA_SETTLE_FLG");
var FA_SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");

DV.writeLog("***********" + busitype);

if (prinamt > 0 && (flag=='Loan' || flag=='All')) 
{
	if(busitype == 'RD' && FA_SERVICE_REQ == '1' )
	{
		DV.appendField("FAEF_Settlement_CounterLimit");
	}
	else
	{
		DV.appendField("FAEF_Settlement_AnchorLimit");
	}
}

DV.writeLog("INVOICE PAY LOAN START********************");
DV.writeLog("INVOICE PAY LOAN INT=2 ACC********************");
DV.appendField("FAEF_Acc_Payment_8036_SCF","Settle_New.Settle_loan","FA_INT_CHG_TYPE='2'");
DV.writeLog("INVOICE PAY LOAN INT=1 AMZ ********************");
//var overdue = DV.getDOValue("Settle_New.Settle_loan","FA_TEMP_RT_TYPE1");
//DV.writeLog("overdue******"+overdue );
DV.appendField("FAEF_Amz_Payment_8063_SCF","Settle_New.Settle_loan","FA_INT_CHG_TYPE='1' && FA_TEMP_RT_TYPE1='No'");
DV.writeLog("INVOICE PAY LOAN INT=1  OVERDUE ACC********************");
DV.appendField("FAEF_Acc_Payment_8036_SCF","Settle_New.Settle_loan","FA_INT_CHG_TYPE='1' && FA_TEMP_RT_TYPE1='Yes'");



DV.writeLog("INVOICE PAY LOAN END###############");

//Added by kambamvenu
DV.writeLog("Appending Notification GAPI");
DV.appendField("FAEF_TRX_GenerateNotification");
DV.writeLog("Notification GAPI appended");