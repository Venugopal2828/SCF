var INTtype = DV.getFieldValue("FA_OLD_INT_CHG_TYPE");
var AMD_DT = DV.getFieldValue("FA_AMD_FIN_DT");
var old_due_dt = DV.getFieldValue("FA_OLD_LOAN_DUE_DT");
var days = DV.getFieldValue("FA_TEMP2");

var newint_tp = DV.getFieldValue("FA_INT_CHG_TYPE");
DV.writeLog("newint_tp====" + newint_tp);
var new_loan_id = DV.getFieldValue("FA_INV_LOAN_ID");
DV.writeLog("new_loan_id====" + new_loan_id);
var old_loan_id = DV.getFieldValue("FA_OLD_LOAN_ID");
DV.writeLog("old_loan_id====" + old_loan_id);
DV.writeLog("INTtype====" + INTtype);
DV.writeLog("days====" + days);
DV.writeLog(newint_tp.equals(INTtype));
DV.writeLog(!(DV.toInteger(newint_tp)==DV.toInteger(INTtype)));
//if(newint_tp =="2" && new_loan_id equals DV.toInteger(String)old_loan_id)
if(newint_tp =="2" && !(DV.toInteger(newint_tp)==DV.toInteger(INTtype)))
{
  DV.appendField("FAEF_AMD_ACC_TAKEDOWN_4_NEWLOAN"); // for upfront switch to settlement new loan;
  DV.writeLog("==for upfront switch to settlement new loan==");
}
if(days <= 0 && INTtype =="1" ){
  
  DV.appendField("FAEF_AMD_Amz_Payment"); // for before overdue upfront;
    DV.writeLog("==for before overdue upfront payment==");
}

if(INTtype =="2" || (days > 0 && INTtype =="1" ) ){
      DV.appendField("FAEF_AMD_ACC_EXTAMD"); // for  overdue settlement;
            DV.writeLog("==for overdue extend==");
  
}
