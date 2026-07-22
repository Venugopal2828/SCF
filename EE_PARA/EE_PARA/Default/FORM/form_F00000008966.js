var AmttoReturn = DV.getFieldValue("FA_AMT_RETURN_TEMP");
if (AmttoReturn > 0) {
    DV.appendField("FAEF_FinancingReturnAdviceCN_ME ");
}