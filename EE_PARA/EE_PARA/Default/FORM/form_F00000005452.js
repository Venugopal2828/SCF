var sA = DV.getFieldValue("TTL_CUST_CHG_AMT");
if (sA > 0) {
    DV.appendField("FFIT_DebitAdvice_charge");
}