var DEAL_TP = DV.getFieldValue("DEAL_TP");
var OLD_DEAL_NO = DV.getFieldValue("OLD_DEAL_NO");
var CNPT_SWADD = DV.getFieldValue("CNPT_SWADD");
var sIntera = DV.getPartValue(CNPT_SWADD,1,4);
if(DEAL_TP == "IP"){
    //if(sIntera != "ESUN"){
        DV.appendField("TRMM_IP");
   // }else{
   //     DV.appendField("TRMM_IPInterBank");
   // }
}else{
   // if(sIntera != "ESUN"){
        DV.appendField("TRMM_IT");
   // }else{
  //      DV.appendField("TRMM_ITInterBank");
 //   }
}