if (DV.getFieldValue("CHG_CUST_AMT") > 0) {
    DV.appendField("SSSS_ChgVoucher");
}

//reversal liabilities
if (DV.getFieldValue("FUND_FLAG") == "Unfunded") {
    DV.appendField("RPFM_PARTReversalContLiab");
}

//finc repay credit voucher
if (DV.getFieldValue("RISK_FLAG") == "No") {
    DV.writeLog("RISK NO PART FINC");
    DV.appendField("RPFM_FincSinglePayment");
}