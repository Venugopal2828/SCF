var nCONF_BAL = DV.toFloat(DV.getFieldValue("CONF_BAL"));

if (nCONF_BAL > 0) {
    DV.appendField("SSSS_Liability_Voucher");
}