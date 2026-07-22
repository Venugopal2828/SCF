var nCHG_CUST_AMT = DV.toFloat(DV.getFieldValue("CHG_CUST_AMT"));

if (nCHG_CUST_AMT > 0) {
    DV.appendField("SSSS_ChgVoucher");
}

var nOLD_CONF_BAL = DV.toFloat(DV.getFieldValue("OLD_CONF_BAL"));
var nNEW_CONF_BAL = DV.toFloat(DV.getFieldValue("NEW_CONF_BAL"));
var cBENE_CONS_FLG = DV.getFieldValue("BENE_CONS_FLG");
var CONF_INSTR = DV.getFieldValue("CONF_INSTR");

if (cBENE_CONS_FLG == 'ACCEPTED' && (nOLD_CONF_BAL > 0 || nNEW_CONF_BAL > 0) && nOLD_CONF_BAL != nNEW_CONF_BAL && CONF_INSTR == 'CONFIRM') {
    DV.appendField("SSSS_Liability_Voucher");
}

if (cBENE_CONS_FLG == 'ACCEPTED' && nOLD_CONF_BAL > 0 && (CONF_INSTR == 'MAY ADD' || CONF_INSTR == 'WITHOUT')) {

    DV.appendField("EPLC_Liability_Voucher_2");
}