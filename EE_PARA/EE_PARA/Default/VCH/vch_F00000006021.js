var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));
var cCONF_INSTR = DV.getFieldValue("CONF_INSTR");
var cCASH_COV_HELD = DV.getFieldValue("CASH_COV_HELD");

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}
if (cCONF_INSTR == 'Confirmed') {
    DV.appendField("REIM_REIM_CONFIRMATION_CREATION");
}
if (cCASH_COV_HELD == 'Yes') {
    DV.appendField("REIM_REIM_CASH_COVER_CREATION");
}