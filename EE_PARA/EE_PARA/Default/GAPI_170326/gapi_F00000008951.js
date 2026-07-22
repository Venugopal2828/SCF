DV.appendField(" FADA_AmdSBR_EE2CE_Buyer_ME");
DV.appendField("FADA_AmdSBR_EE2CE_Seller_ME ");
DV.writeLog("EE2CE============");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
var SBR_Amt = DV.getFieldValue("FA_LMT_AMT");
var recourse = DV.getFieldValue("FA_SERVICE_REQ");
if ((busi_type == 'SFP' || busi_type == 'DDP' || busi_type == 'ICD' || (busi_type == 'RFP' && recourse == '1')) && SBR_Amt > 0) {
    DV.appendField("FADA_EMAIL_SELBUYAMD_SF");
}

if (((busi_type == 'RFP' && recourse == '2') || busi_type == 'MCD') && SBR_Amt > 0) {
    DV.appendField("FADA_EMAIL_SELBUYAMD_RF");
}
var origCounterType = DV.getFieldValue("ORIG_FA_COUNTER_TYPE");
var counterType = DV.getFieldValue("FA_COUNTER_TYPE");
if(origCounterType != 'T1'&& counterType == 'T1'){
DV.appendField("FADA_OutEDI076");
}