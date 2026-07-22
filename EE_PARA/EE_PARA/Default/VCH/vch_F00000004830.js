var cancel = DV.getFieldValue("CANCEL_FLG");
if (cancel != "Yes") {
    var acc = DV.getFieldValue('CHG_FLD_LOCAL_CUST_AC_NO');
    DV.appendField("PYMT_Complete_OTT");
    DV.appendField("SSSS_Dummy_Chgs");
}