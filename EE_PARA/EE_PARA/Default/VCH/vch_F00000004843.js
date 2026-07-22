var cancel = DV.getFieldValue("CANCEL_FLG");
if (cancel != "Yes") {
    var acc = DV.getFieldValue('CHG_FLD_LOCAL_CUST_AC_NO');
    DV.appendField("PYMT_Complete_OTT");
    /** // commented by omkar for our chgs testing
if (DV.getFieldValue("X103_DET_CHG_71A").equals("OUR") && (acc.length() != 0 || DV.getFieldValue("CHG_CASH_IND").equals("Yes"))){
	DV.appendField("SSSS_Charges_OTT_OUR");
}
if (!DV.getFieldValue("CHG_FLD_ALL_CHARGE_AT").equals("3")){
	DV.appendField("SSSS_Charges");
}
*/
    // added by omkar starts
    DV.appendField("SSSS_Dummy_Chgs");
    /**
DV.appendField("SSSS_Charges_OTT_OUR");
*/
    // added by omkar starts
}