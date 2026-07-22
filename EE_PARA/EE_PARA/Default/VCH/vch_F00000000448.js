DV.setVoucherGapiRule("EPLC_EPLC_EEOUT");

var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
var nSTL_AMT = DV.toFloat(DV.getFieldValue("STL_AMT"));
var nInterest = DV.toFloat(DV.getFieldValue("CFNC_DISCOUNT_AMT"));
var discountflg = DV.getFieldValue("DISCNT_FLG");
var LIAB_ACNO = DV.getFieldValue("LIAB_ACNO");
var ASSET_ACNO = DV.getFieldValue("ASSET_ACNO");
var OUR_ENG = DV.getFieldValue("OUR_ENG");

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}

if (nInterest > 0 && discountflg == "YES") {
  DV.writeLog("FOR CREDIT INTEREST TO TTL");
    DV.appendField("SSSS_FinanceInterest");
}

var nSIGHT_PMT_FLG = DV.getFieldValue("SIGHT_PMT_FLG");
var nADV_BK_CHGS = DV.toFloat(DV.getFieldValue("ADV_BK_CHGS"));
var nTNSFR_DOCS_DEDUCT_AMT = DV.toFloat(DV.getFieldValue("TNSFR_DOCS_DEDUCT_AMT"));
var nAVAL_BY = DV.getFieldValue("AVAL_BY");
var nSDA_FLAG = DV.getFieldValue("MIX_PAYMENT_SDA_FLAG");
var nPMT_FLG = DV.getFieldValue("PMT_FLG");
/*if((nSIGHT_PMT_FLG == 'NO'||discountflg == "YES") && (nADV_BK_CHGS > 0 || nTNSFR_DOCS_DEDUCT_AMT >0)){*/
if ((nAVAL_BY == 'BY PAYMENT' || (nAVAL_BY == 'BY NEGOTIATION' && nPMT_FLG == 'SIGHT') || (nAVAL_BY == 'BY MIXED PYMT' && nSDA_FLAG == 'Sight')) && (nADV_BK_CHGS > 0 || nTNSFR_DOCS_DEDUCT_AMT > 0) && (nAVAL_BY != 'BY ACCEPTANCE')) {
    DV.writeLog("**nAVAL_BY**"+nAVAL_BY);
    DV.appendField("EPLC_PaymentDeduction_Cr");
}

if (nSTL_AMT > 0 && (nAVAL_BY == 'BY PAYMENT'||nAVAL_BY == 'BY MIXED PYMT') && (OUR_ENG == 'CONFIRMATION' || OUR_ENG == 'SILENT CONFIRMATION')) {
      DV.writeLog("**LIABLITY**"+nAVAL_BY);
    DV.appendField("SSSS_Liability_Voucher");
}
var nAVAL_BY = DV.getFieldValue("AVAL_BY");
var nSDA_FLAG = DV.getFieldValue("MIX_PAYMENT_SDA_FLAG");
if (nAVAL_BY == 'BY PAYMENT' || (nAVAL_BY == 'BY NEGOTIATION' && nPMT_FLG == 'SIGHT')|| (nAVAL_BY == 'BY MIXED PYMT' && nSDA_FLAG == 'Sight')) {
      DV.writeLog("**APPLICANT CHARGE**"+nAVAL_BY);
    DV.appendField("EPLC_Appl_Charge");
}

DV.appendField("EPLC_IncreaseAmount");
DV.appendField("EPLC_DecreaseAmount");