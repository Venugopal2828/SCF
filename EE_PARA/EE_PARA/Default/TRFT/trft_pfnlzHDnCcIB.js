var DEAL_ACTION = DV.getFieldValue("DEAL_ACTION");
var OLD_DEAL_NO = DV.getFieldValue("OLD_DEAL_NO");
var TEMP_EXTD_AMT = DV.toFloat(DV.getFieldValue("TEMP_AMT"));
if(OLD_DEAL_NO != "" && OLD_DEAL_NO != null){
    if(DEAL_ACTION == "Extend"){
        DV.appendField(" TRMM_FDUpdOldDealExtendAmt");
    }else if(DEAL_ACTION == "DeleteTicket" && TEMP_EXTD_AMT > 0){
        DV.appendField(" TRMM_FDClsOldDealExtendAmt");
    }
}