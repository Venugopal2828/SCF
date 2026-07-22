var E_CFNC_D_DUE_DT = DV.getFieldValue("E_CFNC_D_DUE_DT");
var E_CFNC_I_BASIC_DAYS = DV.getFieldValue("E_CFNC_I_BASIC_DAYS");
var CFNC_C_TYPE = "";
var CFNC_C_RELT_REF = "";
var CFNC_N_MARGIN_RT = "";
var CFNC_D_DT = "";
var CFNC_I_BASIC_DAYS = "";
var CFNC_C_CCY = "";
var CFNC_N_AMT_LCCCY = "";
var CFNC_D_DUE_DT = "";
var CFNC_N_LIBOR_RT = "";
var CFNC_C_INT_PAYABLE = "";
var records = DV.getRecords("FinanceEstablishment");
for (var i = 0; i < records.length; i++) {
    CFNC_C_TYPE = DV.getDOValue(records[i], "CFNC_C_TYPE");
    CFNC_C_RELT_REF = DV.getDOValue(records[i], "CFNC_C_RELT_REF");
    CFNC_N_MARGIN_RT = DV.getDOValue(records[i], "CFNC_N_MARGIN_RT");
    CFNC_D_DT = DV.getDOValue(records[i], "CFNC_D_DT");
    CFNC_I_BASIC_DAYS = DV.getDOValue(records[i], "CFNC_I_BASIC_DAYS");
    CFNC_C_CCY = DV.getDOValue(records[i], "CFNC_C_CCY");
    CFNC_N_AMT_LCCCY = DV.getDOValue(records[i], "CFNC_N_AMT_LCCCY");
    CFNC_D_DUE_DT = DV.getDOValue(records[i], "CFNC_D_DUE_DT");
    CFNC_N_LIBOR_RT = DV.getDOValue(records[i], "CFNC_N_LIBOR_RT");
    CFNC_N_MARGIN_RT = DV.getDOValue(records[i], "CFNC_N_MARGIN_RT");
    CFNC_C_INT_PAYABLE = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
}
if (CFNC_C_INT_PAYABLE == 'In Arrears') {
    if (E_CFNC_D_DUE_DT != "") {
        DV.writeLog("E_CFNC_D_DUE_DT=" + E_CFNC_D_DUE_DT);
        DV.writeLog("E_CFNC_I_BASIC_DAYS=" + E_CFNC_I_BASIC_DAYS);
        DV.writeLog("======eLoan GAPI EXCO_Discount_Int_AccTakeDown_eLoan===========");
        DV.appendField("EXCO_Discount_Int_AccTakeDown_eLoan");
        if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
            DV.writeLog("======eLoan GAPI EXCO_Discnt_CosInt_AccTakeDown_eLoan==========");
            DV.appendField("EXCO_Discnt_CosInt_AccTakeDown_eLoan");
        }
    }
} else if (CFNC_C_INT_PAYABLE == 'Up Front') {
    if (E_CFNC_D_DUE_DT != "") {
        DV.writeLog("E_CFNC_D_DUE_DT=" + E_CFNC_D_DUE_DT);
        DV.writeLog("E_CFNC_I_BASIC_DAYS=" + E_CFNC_I_BASIC_DAYS);
        DV.writeLog("======eLoan GAPI EXCO_Discount_Int_AmzTakeDown_eLoan===========");
        DV.appendField("EXCO_Discount_Int_AmzTakeDown_eLoan");
        if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
            DV.writeLog("======eLoan GAPI EXCO_Discnt_CosInt_AmzTakeDown_eLoan==========");
            DV.appendField("EXCO_Discnt_CosInt_AmzTakeDown_eLoan");
        }
    }
}