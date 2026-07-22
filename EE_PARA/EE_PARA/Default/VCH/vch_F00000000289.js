var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}
DV.appendField("REIM_REIM_CONFIRMATION_CREATION");
DV.appendField("REIM_REIM_CASH_COVER_CREATION");