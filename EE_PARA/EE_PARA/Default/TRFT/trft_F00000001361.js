var FinType = DV.getFieldValue("FA_FIN_TYPE");
if (FinType == 'INV') {
    DV.writeLog("===========Update Fin Return Bal start==========");
    DV.appendField("FAEF_Update_Fin_Return_Bal");
    DV.writeLog("===========Update Fin Return Bal end==========");
}