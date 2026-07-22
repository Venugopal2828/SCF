var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

var nInterest = DV.toFloat(DV.getFieldValue("CFNC_DISCOUNT_AMT"));

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}

if (nInterest > 0) {
    DV.appendField("SSSS_FinanceInterest");
}

DV.appendField("EPLC_PaymentDeduction_Cr");