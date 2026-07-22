var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}
var vTEMP_VOUCHER_FLG = DV.getFieldValue("TEMP_VOUCHER_FLG");
if (vTEMP_VOUCHER_FLG == 'TRUE') {
    DV.appendField("SSSS_Liability_Voucher");
}
var discountflg = DV.getFieldValue("DISCNT_FLG");
var CFNC_C_PAY_BY = "";
var records = DV.getRecords("FinanceEstablishment");

for (var i = 0; i < records.length; i++) {
    CFNC_C_PAY_BY = DV.getDOValue(records[i], "CFNC_C_PAY_BY");
}
if (discountflg == "YES" && CFNC_C_PAY_BY == "Beneficiary") {
    DV.appendField("SSSS_FinanceInterest");
}
/*var AVAL_BY = DV.getFieldValue("AVAL_BY");
if (AVAL_BY == 'BY PAYMENT' || AVAL_BY == 'BY MIXED PYMT' || discountflg == "YES") {
    DV.appendField("IPLC_CHARGES");
}*/