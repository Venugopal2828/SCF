DV.appendField("PYMT_Complete_Draft");
if (!DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT").equals("3")) {
    DV.appendField("SSSS_Charges");
}