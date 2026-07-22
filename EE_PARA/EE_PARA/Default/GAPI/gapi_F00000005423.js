var DISCNT_FLG = DV.getFieldValue("DISCNT_FLG");
var CFNC_C_TYPE = "";
var interestPayableAt = "";
var CFNC_N_MARGIN_RT = "";
var records = DV.getRecords("FinanceEstablishment");
for (var i = 0; i < records.length; i++) {
    CFNC_C_TYPE = DV.getDOValue(records[i], "CFNC_C_TYPE");
    interestPayableAt = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
    CFNC_N_MARGIN_RT = DV.getDOValue(records[i], "CFNC_N_MARGIN_RT");
}
if (interestPayableAt == "In Arrears") {
    if (CFNC_C_TYPE == "Discount" && DISCNT_FLG == "YES") {
        DV.appendField("EPLC_Discount_Int_AccTakeDown_eLoan");
        if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
            DV.appendField("EPLC_Discnt_CosInt_AccTakeDown_eLoan");
        }
    }
} else {
    if (CFNC_C_TYPE == "Discount" && DISCNT_FLG == "YES") {
        DV.appendField("EPLC_Discount_Int_AmzTakeDown_eLoan");
        if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
            DV.appendField("EPLC_Discnt_CosInt_AmzTakeDown_eLoan");
        }
    }
//for Suang limit testing  
var PRES_BK_ID = DV.getFieldValue("PRES_BK_ID");
if (DISCNT_FLG == 'YES'&&PRES_BK_ID. substr(-5)==='_LMTS') {
DV.appendField("EPLC_takedownlimit");
}  
}