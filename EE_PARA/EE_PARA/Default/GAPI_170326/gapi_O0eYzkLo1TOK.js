var FinType = DV.getFieldValue("FA_FIN_TYPE");
if (FinType == 'PO') {
    DV.writeLog("Smiletest*******" + DV.getValue("FA_INT_CHG_TYPE", "Settle_loan_po", "")); 
    DV.appendField("FAEF_FAEF_ReturnFin_Return_POF", "Settle_loan_po", "FA_INT_CHG_TYPE='2' or (FA_INT_CHG_TYPE='1' and FA_PMT_DT > FA_LOAN_DUE_DT)");
    //DV.appendField("FAEF_FAEF_AMZ_Return_POF", "Settle_loan_po", "FA_INT_CHG_TYPE='1' and (POReturnFin.FA_PMT_VAL_DT < FA_LOAN_DUE_DT or POReturnFin.FA_PMT_VAL_DT = FA_LOAN_DUE_DT)");

}
var Type = DV.getFieldValue("FA_BUSI_TYPE");
var prinamt = DV.getFieldValue("FA_PAID_PRIN_SUM");
var tempamt = DV.getFieldValue("TEMP_BP_AMT9");
var flag = DV.getFieldValue("FA_SETTLE_FLG");
if (prinamt > 0 && tempamt > 0) {
  DV.appendField("FAEF_Settle_AnchorLimit_PO_Temp");
}
/*else{
  DV.appendField("FAEF_Settlement_AnchorLimit");
}*/
