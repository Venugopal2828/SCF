var autoCreated = "No";

autoCreated = DV.getFieldValue("AUTO_CREATED");

if (autoCreated != "Yes") {
    //DV.appendField("PYMT_Internal_Transfer");
    DV.appendField("PYMT_GenPurp_Acct");
    DV.appendField("SSSS_Charges");
}