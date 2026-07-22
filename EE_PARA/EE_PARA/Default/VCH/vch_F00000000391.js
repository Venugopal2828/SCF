if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var nCHG_FLD_LOCAL_CUST_CCY = DV.getFieldValue("CHG_FLD_LOCAL_CUST_CCY");
    var nGTEE_CCY = DV.getFieldValue("GTEE_CCY");
    DV.appendField("SSSS_Liability_Voucher");
    var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
    if (nCHG_CUST_AMT > 0) {
        DV.appendField("SSSS_ChgVoucher");
    }
}