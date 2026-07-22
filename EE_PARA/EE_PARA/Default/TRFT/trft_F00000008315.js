var FLG = DV.getFieldValue("DISCNT_FLG");
if (FLG == 'YES') {
    DV.appendField("EPLC_FinanceAmount");
    DV.appendField("EPLC_EPLC_FOR_BENE_CHARGES");
}
var nAVAL_BY = DV.getFieldValue("AVAL_BY");
var nSDA_FLAG = DV.getFieldValue("MIX_PAYMENT_SDA_FLAG");
var nPMT_FLG = DV.getFieldValue("PMT_FLG");
if (nAVAL_BY == 'BY MIXED PYMT' && nSDA_FLAG == 'Sight') {
    DV.appendField("EPLC_EPLC_FOR_APPL_CHARGES");
    DV.appendField("EPLC_EPLC_FOR_BENE_CHARGES");
}
if (nAVAL_BY == 'BY PAYMENT' || (nAVAL_BY == 'BY NEGOTIATION' && nPMT_FLG == 'SIGHT') || (nAVAL_BY == 'BY MIXED PYMT' && nSDA_FLAG == 'Sight')) {
    //DV.appendField("EPLC_EPLC_LCBAL_toMaster");
}