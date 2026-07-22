var SETL_ACTION = DV.getFieldValue("SETL_ACTION");
var DEAL_ACTION = DV.getFieldValue("DEAL_ACTION");
var OLD_DEAL_NO = DV.getFieldValue("OLD_DEAL_NO");
if(SETL_ACTION != "ReturnDoc"){
  if(OLD_DEAL_NO != "" && OLD_DEAL_NO != null && (DEAL_ACTION == "Extend" || DEAL_ACTION == "New" || DEAL_ACTION == "Amend")){
    DV.appendField("TRMM_UpdateOldDealNostroAmt ");
  }
}