var DISCNT_FLG = DV.getFieldValue("DISCNT_FLG");
var interestPayableAt = "";
var CFNC_N_MARGIN_RT = "";
var TEMP_MODULE_NAME = DV.getFieldValue("TEMP_MODULE_NAME");
var records = DV.getRecords("FincSinglePayment");
for (var i = 0; i < records.length; i++) {
    interestPayableAt = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
    CFNC_N_MARGIN_RT = DV.getDOValue(records[i], "CFNC_N_MARGIN_RT");
}
if (DISCNT_FLG == 'YES') {
    if (interestPayableAt == 'In Arrears') {
        if (TEMP_MODULE_NAME == 'EPLC') {
            DV.appendField("EPLC_PayAtMatur_Int_AccPayment_eLoan");
            if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
                DV.appendField("EPLC_PayAtMatur_CosInt_AccPaymt_eLoan");
            }
        } else {
            DV.appendField("EPLC_PayAtMatur_Int_AccPayment_eLoan_forCFNC");
        }
    } else {
        if (TEMP_MODULE_NAME == 'EPLC') {
            DV.appendField("EPLC_PayAtMatur_Int_AmzPayment_eLoan");
            if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
                DV.appendField("EPLC_PayAtMatur_CosInt_AmzPaymt_eLoan");
            }
        } else {
            DV.appendField("EPLC_PayAtMatur_Int_AmzPayment_eLoa_forCFNC");
        }
    }
}
var PAID_CONF_COMM = DV.getFieldValue("PAID_CONF_COMM");
var CONF_INSTR = DV.getFieldValue("CONF_INSTR");
var AVAL_BY = DV.getFieldValue("AVAL_BY");
if (PAID_CONF_COMM > 0 && CONF_INSTR == 'CONFIRM' && (AVAL_BY == 'BY ACCEPTANCE' || AVAL_BY == 'BY DEF PAYMENT' || AVAL_BY == 'BY NEGOTIATION')) {
    //DV.appendField("EPLC_PayAtMaturity_AmzPayment_A_eLoan");After check with Core, commission amortization does not require Payment, should Call Takedown when the commission is collected.
}
//for Suang limit testing  
var PRES_BK_ID = DV.getFieldValue("PRES_BK_ID");
if (DISCNT_FLG == 'YES'&&PRES_BK_ID. substr(-5)==='_LMTS') {
DV.appendField("EPLC_paymentlimit");
}