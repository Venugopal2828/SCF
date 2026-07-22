var FinType = DV.getFieldValue("FA_FIN_TYPE");
if (FinType == 'INV') {
    DV.writeLog("===========Update Fin Return Bal start==========");
    DV.appendField("FAEF_Update_Fin_Return_Bal");
    DV.writeLog("===========Update Fin Return Bal end==========");
}
    DV.writeLog("===========Update PO Return Bal start==========");

var set_flg = DV.getFieldValue("FA_SETTLE_FLG");
if(set_flg =='Unfinanced PO'){
DV.appendField("FAEF_Update_Total_PO_Amount"); 
      DV.writeLog("===========Update PO Return Bal end==========");
}
if(set_flg =='Loan'){
DV.appendField("FAEF_Add_POLoan_Ret_Event");
DV.appendField("FAEF_Up_Total_PO4Funding_Amt"); 
DV.appendField("FAEF_Up_POLoan_Bal_Return");

 DV.writeLog("===========Update PO Return funding Bal end=========="); 
}

