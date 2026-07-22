if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var nCPYT_DR_AMT_DRCCY = DV.toFloat(DV.getFieldValue("CPYT_DR_AMT_DRCCY"));
    var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

    if (nCPYT_DR_AMT_DRCCY > 0) {
        DV.appendField("SSSS_CleanPayment");
    }
    if (nCHG_CUST_AMT > 0) {
        DV.appendField("SSSS_ChgVoucher");
    }

}