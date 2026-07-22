var busitype = DV.getFieldValue("FA_BUSI_TYPE");
var prinamt = DV.getFieldValue("FA_PAID_PRIN_SUM");
DV.writeLog("***********" + busitype);
if (prinamt > 0) {
DV.appendField("FAEF_Settlement_AnchorLimit_Auto");
}
DV.writeLog("INVOICE PAY LOAN STATR********************");

DV.appendField("FAEF_Acc_Payment_8036", "Settle_New.Settle_loan", "FA_INT_CHG_TYPE='2'");
DV.appendField("FAEF_Amz_Payment_8063", "Settle_New.Settle_loan", "FA_INT_CHG_TYPE='1'");
DV.writeLog("INVOICE PAY LOAN END###############");