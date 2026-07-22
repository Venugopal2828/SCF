var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
var INT_AMT = DV.toFloat(DV.getFieldValue("INT_AMT"));

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}

if (INT_AMT > 0) {
    DV.appendField("SSSS_FinanceInterest");
}