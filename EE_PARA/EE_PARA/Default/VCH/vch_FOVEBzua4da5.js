var DEAL_TP = DV.getFieldValue("DEAL_TP");
var sIntera = DV.getFieldValue("CNPT_SWADD").substr(1,8);
if(DEAL_TP == "IP"){
   // if(sIntera != "PTSABMAA"){
      DV.writeLog("IP---");
        DV.appendField("TRMM_IPSettlement");
   // }else{
   //   DV.writeLog("IPINTER---");
     //   DV.appendField("TRMM_IPInterBankSettlement");
   // }
}else{
    //if(sIntera != "PTSABMAA"){
          DV.writeLog("IT---");
        DV.appendField("TRMM_ITSettlement");
   // }else{
   //   DV.writeLog("ITINTER---");
   //     DV.appendField("TRMM_ITInterBankSettlement");
  //  }
}