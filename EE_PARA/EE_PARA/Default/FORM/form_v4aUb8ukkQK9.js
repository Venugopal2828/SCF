var DEAL_ACTION = DV.getFieldValue("DEAL_ACTION");
var SEND_MT320_FLG = DV.getFieldValue("SEND_MT320_FLG");
if(DEAL_ACTION == "New" || DEAL_ACTION == "Amend" || (DEAL_ACTION == "Cancel" && SEND_MT320_FLG == "Yes")){
  DV.appendField(" TRMM_DealTicket");
}