if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

    if (nCHG_CUST_AMT > 0) {
        DV.appendField("SSSS_ChgVoucher");
    }
}