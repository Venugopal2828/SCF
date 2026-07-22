var dest = DV.getFieldValue("CHG_FLD_ALL_CHARGE_FOR");
if (dest != null && dest.equals('F')) {
    DV.appendField("PYMT_Recover_Charges_ITT");
}
if (!DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT").equals("3")) {
    DV.appendField("SSSS_Charges");
}