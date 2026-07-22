var sTRF_TYPE = DV.getFieldValue("TRF_TYPE");
if (sTRF_TYPE == '1') {
    DV.appendField("FFIT_GongKaiTRFADV");
}
if (sTRF_TYPE == '2') {
    DV.appendField("FFIT_FinanceTRFADV");
}
if (sTRF_TYPE == '3') {
    DV.appendField("FFIT_URPTRFADV");
}