var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}
var nOLD_CONF_BAL = DV.toFloat(DV.getFieldValue("OLD_CONF_BAL"));
var nNEW_CONF_BAL = DV.toFloat(DV.getFieldValue("NEW_CONF_BAL"));
var cDETRMNTL_FLG = DV.getFieldValue("DETRMNTL_FLG");
var cADD_CONFIRM = DV.getFieldValue("CONF_ADDED")
var CONF_INSTR = DV.getFieldValue("CONF_INSTR")
if (cDETRMNTL_FLG == 'NO' &&  nNEW_CONF_BAL > 0 && nOLD_CONF_BAL != nNEW_CONF_BAL && CONF_INSTR != 'WITHOUT') {
    DV.appendField("SSSS_Liability_Voucher");
}
/*if (cDETRMNTL_FLG == 'NO' && nOLD_CONF_BAL > 0 && (CONF_INSTR == 'MAY ADD' || CONF_INSTR == 'WITHOUT')) {
    DV.appendField("EPLC_Liability_Voucher_2");
}*/

DV.appendField("EPLC_IncreaseAmount");
DV.appendField("EPLC_DecreaseAmount");