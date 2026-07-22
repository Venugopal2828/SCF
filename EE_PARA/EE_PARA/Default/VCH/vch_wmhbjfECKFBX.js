/*var TADE_DT = DV.getFieldValue("TADE_DT");
var VAL_DT  = DV.getFieldValue("VAL_DT");
var DEAL_TP = DV.getFieldValue("DEAL_TP");
var CNPT_SWADD = DV.getFieldValue("CNPT_SWADD");
var sIntera = DV.getPartValue(CNPT_SWADD,1,8);
var SETL_ACTION = DV.getFieldValue("SETL_ACTION");
var SEND_VOU_VDT = DV.getFieldValue("SEND_VOU_VDT");
if(SEND_VOU_VDT != "" && SEND_VOU_VDT != null){
  if(SETL_ACTION == "NewConf" || SETL_ACTION == "AmendConf" || SETL_ACTION == "RevertConf"){
    if(DEAL_TP == "IP"){
      DV.writeLog("IP");
        if(sIntera != "PTSABMAA"){
          DV.writeLog("IP---");
            DV.appendField("TRMM_IP");
        }else{
            DV.appendField("TRMM_IPInterBank");
        }
    }else{
      DV.writeLog("IT");
        if(sIntera != "PTSABMAA"){
          DV.writeLog("IT---");
            DV.appendField("TRMM_IT");
        }else{
            DV.appendField("TRMM_ITInterBank");
        }
    }
  }
}*/