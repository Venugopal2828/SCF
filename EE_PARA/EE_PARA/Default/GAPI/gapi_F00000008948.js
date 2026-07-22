DV.writeLog("SBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
var SBR_Amt = DV.getFieldValue("FA_LMT_AMT");
var recourse = DV.getFieldValue("FA_SERVICE_REQ");
DV.writeLog("Business Type=" + busi_type);
DV.writeLog("SBR Amt=" + SBR_Amt);

if(busi_type == 'DD'){
DV.appendField("FADA_SBR_EE2CE_Buyer_ME");
DV.appendField("FADA_SBR_EE2CE_Seller_ME");
}
