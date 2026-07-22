var INTtype = DV.getFieldValue("FA_OLD_INT_CHG_TYPE");
var newint_tp = DV.getFieldValue("FA_INT_CHG_TYPE");
if(newint_tp =="2" && !(DV.toInteger(newint_tp)==DV.toInteger(INTtype)))
{
DV.writeLog("==for insert loan  start==");
DV.appendField("FAEF_InsertAMDtoNewLoan");
DV.appendField("FAEF_UpdateAMDOldLoanTo0");
         DV.writeLog("==for insert loan end==");
}
else{
  DV.writeLog("==for transfer to update loan start==");
 DV.appendField("FAEF_UpdateAMDtoOldloan"); 
       DV.writeLog("==for transfer to update loan  end==");
}
 DV.writeLog("==for transfer to update inv  start==");
 DV.appendField("FAEF_UpdateAMDtoINV"); 
 DV.writeLog("==for transfer to update inv  end==");