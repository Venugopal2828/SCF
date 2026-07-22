var nAVAL_BY = DV.getFieldValue("AVAL_BY");
var nSDA_FLAG = DV.getFieldValue("MIX_PAYMENT_SDA_FLAG");
var nPMT_FLG = DV.getFieldValue("PMT_FLG");
DV.appendField("IPLC_IPLC_PRES_BAL_toMaster");
if (nAVAL_BY == 'BY MIXED PYMT' && nSDA_FLAG == 'Sight') {
    DV.appendField("IPLC_IPLC_FOR_ADDITIONAL_CHANGES");
}
if (nSDA_FLAG == 'Sight') {
    DV.appendField("IPLC_IPLC_LCBAL_toMaster");
    DV.appendField("IPLC_Pay_PRES_BAL_toMaster");
}