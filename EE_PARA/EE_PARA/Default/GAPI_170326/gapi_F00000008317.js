var CFNC_C_TYPE = DV.getFieldValue("CFNC_C_TYPE");
var DISCNT_FLG = DV.getFieldValue("DISCNT_FLG");
var CFNC_N_MARGIN_RT = DV.getFieldValue("CFNC_N_MARGIN_RT");
if (CFNC_C_TYPE == "Discount" && DISCNT_FLG == "YES") {
    DV.appendField("EPLC_PayAtMatur_Int_AccPayment_eLoan");
    if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
        DV.appendField("EPLC_PayAtMatur_CosInt_AccPaymt_eLoan");
    }
}
var PAID_CONF_COMM = DV.getFieldValue("PAID_CONF_COMM");
var CONF_INSTR = DV.getFieldValue("CONF_INSTR");
var AVAL_BY = DV.getFieldValue("AVAL_BY");

if (PAID_CONF_COMM > 0 && CONF_INSTR == 'CONFIRM' && (AVAL_BY == 'BY ACCEPTANCE' || AVAL_BY == 'BY DEF PAYMENT' || AVAL_BY == 'BY NEGOTIATION')) {
    DV.appendField("EPLC_PayAtMaturity_AmzPayment_A_eLoan");
}
DV.appendField("EPLC_EXLC_008_Stl");