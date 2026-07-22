DV.appendField("SSSS_Liability_Voucher");
var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}