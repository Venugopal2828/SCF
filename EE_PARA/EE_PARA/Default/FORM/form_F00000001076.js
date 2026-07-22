var busitype = DV.getFieldValue("FA_BUSI_TYPE");
if (busitype == "EF") {
    DV.appendField('FAEF_DisputeAdvice');
}
if (busitype == "IF") {
    DV.appendField('FAEF_IF_Dispute');
}