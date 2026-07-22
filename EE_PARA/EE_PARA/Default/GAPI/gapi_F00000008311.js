var CFNC_C_TYPE = "";
var CFNC_N_MARGIN_RT = "";
var DISCNT_FLG = DV.getFieldValue("DISCNT_FLG");
var records = DV.getRecords("FinanceEstablishment");
for (var i = 0; i < records.length; i++) {
    CFNC_C_TYPE = DV.getDOValue(records[i], "CFNC_C_TYPE");
    CFNC_N_MARGIN_RT = DV.getDOValue(records[i], "CFNC_N_MARGIN_RT");
}
if (CFNC_C_TYPE == "Discount" && DISCNT_FLG == "YES") {
    DV.appendField("EPLC_PayAccept_Int_AccTakeDown_eLoan");
    if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
        //DV.appendField("EPLC_PayAccp_CosInt_AccTakeDown_eLoan");
    }
}
var AVAL_BY = DV.getFieldValue("AVAL_BY");
var CONF_INSTR = DV.getFieldValue("CONF_INSTR");
var PAID_CONF_COMM = DV.getFieldValue("PAID_CONF_COMM");
var nPMT_FLG = DV.getFieldValue("PMT_FLG");
if ((AVAL_BY == 'BY PAYMENT' || (AVAL_BY == 'BY NEGOTIATION' && nPMT_FLG == 'SIGHT')) && CONF_INSTR == 'CONFIRM' && PAID_CONF_COMM > 0) {
    DV.appendField("EPLC_PayAtMaturity_AmzPayment_A_eLoan");
}
if (AVAL_BY == 'BY PAYMENT') {
    DV.appendField("EPLC_EXLC_008_Stl");
}