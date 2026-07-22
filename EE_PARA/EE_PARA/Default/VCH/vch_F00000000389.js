var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}
/*
var nADV_BK_CHGS = DV.toFloat(DV.getFieldValue("ADV_BK_CHGS"));
var nTNSFR_DOCS_DEDUCT_AMT =DV.toFloat(DV.getFieldValue("TNSFR_DOCS_DEDUCT_AMT"));
if(nADV_BK_CHGS > 0 || nTNSFR_DOCS_DEDUCT_AMT >0){
	
	DV.appendField("EPLC_PaymentDeduction_Cr");
}
*/

var nSTL_AMT = DV.toFloat(DV.getFieldValue("STL_AMT"));
if (nSTL_AMT > 0) {
    DV.appendField("SSSS_Liability_Voucher");
}