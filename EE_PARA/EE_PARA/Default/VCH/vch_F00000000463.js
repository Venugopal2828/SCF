var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}
var vTEMP_VOUCHER_FLG = DV.getFieldValue("TEMP_VOUCHER_FLG");
if (vTEMP_VOUCHER_FLG == 'TRUE') {
    DV.appendField("SSSS_Liability_Voucher");
}