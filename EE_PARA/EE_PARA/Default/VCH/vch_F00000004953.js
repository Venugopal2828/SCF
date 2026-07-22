DV.appendField("PYMT_Reverse_Charges_Principal");
if (!DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT").equals("3")) {
    DV.appendField("SSSS_Reverse_Charges");
}