var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}
//var DETRMNTL_FLG = DV.getFieldValue("DETRMNTL_FLG");
var inc_amt = DV.getFieldValue("INC_AMT");
var dec_amt = DV.getFieldValue("DEC_AMT");
var NEW_POS_TOL = DV.getFieldValue("NEW_POS_TOL");
if (inc_amt > 0 || NEW_POS_TOL> 0 ) {
    DV.appendField("SSSS_Liability_Voucher");
}