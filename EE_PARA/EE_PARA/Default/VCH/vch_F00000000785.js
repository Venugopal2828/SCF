if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var GTEE_BAL = DV.getFieldValue("GTEE_BAL");
    if (GTEE_BAL > 0) {
        DV.appendField("SSSS_Liability_Voucher");
    }
}