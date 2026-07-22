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
var CFNC_N_MARGIN_AMT = "";
var CFNC_N_LIBOR_AMT = "";
var CFNC_C_INT_PAYABLE = "";
var TEMP_MODULE_NAME = DV.getFieldValue("TEMP_MODULE_NAME");
var records = DV.getRecords("FincSinglePayment");
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
    CFNC_N_MARGIN_AMT = DV.getDOValue(records[i], "CFNC_N_MARGIN_AMT");
    CFNC_N_LIBOR_AMT = DV.getDOValue(records[i], "CFNC_N_LIBOR_AMT");
    CFNC_C_INT_PAYABLE = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
}


var E_C_REF_NO_C_IN = DV.getFieldValue("E_C_REF_NO_C_IN");
var E_TRX_DT = DV.getFieldValue("E_TRX_DT");
DV.writeLog("E_C_REF_NO_C_IN===========" + E_C_REF_NO_C_IN);
DV.writeLog("CFNC_N_MARGIN_AMT===========" + CFNC_N_MARGIN_AMT);
DV.writeLog("CFNC_N_LIBOR_AMT===========" + CFNC_N_LIBOR_AMT);
DV.writeLog("CFNC_C_RELT_REF===========" + CFNC_C_RELT_REF);
DV.writeLog("E_TRX_DT===========" + E_TRX_DT);
DV.writeLog("TEMP_MODULE_NAME===========" + TEMP_MODULE_NAME);




if (CFNC_C_INT_PAYABLE == 'In Arrears') {
    if (E_CFNC_D_DUE_DT != "") {
        if (TEMP_MODULE_NAME == 'CFNC') {
            DV.writeLog("===Begin===Settle_Int_AccPayment_eLoan_CFNC===========");
            DV.appendField("EXCO_Settle_Int_AccPayment_eLoan_CFNC");
            DV.writeLog("===End===Settle_Int_AccPayment_eLoan_CFNC===========");
        } else {
            DV.writeLog("E_CFNC_D_DUE_DT=" + E_CFNC_D_DUE_DT);
            DV.writeLog("E_CFNC_I_BASIC_DAYS=" + E_CFNC_I_BASIC_DAYS);
            DV.writeLog("===1===eLoan GAPI EXCO_Settle_Int_AccPayment_eLoan===========");
            DV.appendField("EXCO_Settle_Int_AccPayment_eLoan");
            DV.writeLog("===2===eLoan GAPI EXCO_Settle_Int_AccPayment_eLoan===========");
            if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
                DV.writeLog("===2===eLoan GAPI EXCO_Settle_CosInt_AccPayment_eLoan==========");
                DV.appendField("EXCO_Settle_CosInt_AccPayment_eLoan");
            }
        }
    }
} else if (CFNC_C_INT_PAYABLE == 'Up Front') {
    if (E_CFNC_D_DUE_DT != "") {
        if (TEMP_MODULE_NAME == 'CFNC') {
            DV.writeLog("===Begin===Settle_Int_AmzPayment_eLoan_CFNC===========");
            DV.appendField("EXCO_Settle_Int_AmzPayment_eLoan_CFNC");
            DV.writeLog("===End===Settle_Int_AmzPayment_eLoan_CFNC===========");
        } else {
            DV.writeLog("E_CFNC_D_DUE_DT=" + E_CFNC_D_DUE_DT);
            DV.writeLog("E_CFNC_I_BASIC_DAYS=" + E_CFNC_I_BASIC_DAYS);
            DV.writeLog("===1===eLoan GAPI EXCO_Settle_Int_AmzPayment_eLoan===========");
            DV.appendField("EXCO_Settle_Int_AmzPayment_eLoan");
            if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
                DV.writeLog("===2===eLoan GAPI EXCO_Settle_CosInt_AmzPayment_eLoan==========");
                DV.appendField("EXCO_Settle_CosInt_AmzPayment_eLoan");
            }
        }
    }

}