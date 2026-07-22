DV.appendField("SSSS_ChgVoucher");
if (DV.getFieldValue("TEMP_FLG1") == "2") {
    DV.appendField("FFIT_Financing2_DF_C202");
}
if (DV.getFieldValue("TEMP_FLG1") == "1") {
    DV.appendField("FFIT_Cash_inhand");
}
if (DV.getFieldValue("TEMP_FLG1") == "3") {
    DV.appendField("FFIT_Manual_msg");
}