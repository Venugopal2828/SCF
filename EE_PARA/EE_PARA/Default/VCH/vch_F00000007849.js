if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var DEC_AMT = DV.toFloat(DV.getFieldValue("DEC_AMT"));
    var INC_AMT = DV.toFloat(DV.getFieldValue("INC_AMT"));
    var BENE_CONST_REQ = DV.getFieldValue("BENE_CONST_REQ");
    if ((DEC_AMT > 0 || INC_AMT > 0) && BENE_CONST_REQ == 'NO') {
        DV.appendField("SSSS_Liability_Voucher");
    }
    DV.appendField("SSSS_ChgVoucher");
}