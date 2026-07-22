var sBANE_CONST_REQ = DV.getFieldValue("BENE_CONST_REQ");
var nINC_AMT = DV.toFloat(DV.getFieldValue("INC_AMT"));
var nDEC_AMT = DV.toFloat(DV.getFieldValue("DEC_AMT"));

if (sBANE_CONST_REQ == 'NO' && (nINC_AMT > 0 || nDEC_AMT > 0)) {
    DV.appendField("SSSS_Liability_Voucher");
}

var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}