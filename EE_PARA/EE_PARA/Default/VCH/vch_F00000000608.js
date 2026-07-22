if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var DEC_AMT = DV.toFloat(DV.getFieldValue("DEC_AMT"));
    var INC_AMT = DV.toFloat(DV.getFieldValue("INC_AMT"));
    var ACPT_REJ = DV.getFieldValue("ACPT_REJ");

    if ((DEC_AMT > 0 || INC_AMT > 0) && ACPT_REJ == 'Apply') {
        DV.appendField("SSSS_Liability_Voucher");
    }

    var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

    if (nCHG_CUST_AMT > 0) {
        DV.appendField("SSSS_ChgVoucher");
    }
}