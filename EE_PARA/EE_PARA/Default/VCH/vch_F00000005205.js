DV.appendField("PYMT_Complete_OTT");
//DV.appendField("SSSS_Charges_OTT_OUR");
var acc = DV.getFieldValue('CHG_FLD_LOCAL_CUST_AC_NO');
if (DV.getFieldValue("X103_DET_CHG_71A").equals("OUR") && (acc.length() != 0 || DV.getFieldValue("CHG_CASH_IND").equals("Yes"))) {
    DV.appendField("SSSS_Charges_OTT_OUR");
}
if (!DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT").equals("3")) {
    DV.appendField("SSSS_Charges");
}