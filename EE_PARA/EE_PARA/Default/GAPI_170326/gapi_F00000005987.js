/*var WEB_REF=DV.getFieldValue("WEB_REF");
DV.appendField("IPLC_IMLC_EEOUT");*/

var CFNC_C_TYPE = "";
var CFNC_C_RELT_REF = "";
var CFNC_N_MARGIN_RT = "";
var CFNC_D_DT = "";
var CFNC_I_BASIC_DAYS = "";
var CFNC_C_CCY = "";
var CFNC_N_AMT_LCCCY = "";
var CFNC_D_DUE_DT = "";
var CFNC_N_LIBOR_RT = "";
var interestPayableAt = "";
var DISCNT_FLG = DV.getFieldValue("DISCNT_FLG");
var records = DV.getRecords("FinanceEstablishment");

for (var i = 0; i < records.length; i++) {
    CFNC_C_TYPE = DV.getDOValue(records[i], "CFNC_C_TYPE");
    CFNC_C_RELT_REF = DV.getDOValue(records[i], "CFNC_C_RELT_REF");
    CFNC_N_MARGIN_RT = DV.getDOValue(records[i], "CFNC_N_MARGIN_RT");
    interestPayableAt = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
    CFNC_D_DT = DV.getDOValue(records[i], "CFNC_D_DT");
    CFNC_I_BASIC_DAYS = DV.getDOValue(records[i], "CFNC_I_BASIC_DAYS");
    CFNC_C_CCY = DV.getDOValue(records[i], "CFNC_C_CCY");
    CFNC_N_AMT_LCCCY = DV.getDOValue(records[i], "CFNC_N_AMT_LCCCY");
    CFNC_D_DUE_DT = DV.getDOValue(records[i], "CFNC_D_DUE_DT");
    CFNC_N_LIBOR_RT = DV.getDOValue(records[i], "CFNC_N_LIBOR_RT");
    CFNC_N_MARGIN_RT = DV.getDOValue(records[i], "CFNC_N_MARGIN_RT");
}
DV.writeLog("CFNC_C_TYPE=====" + CFNC_C_TYPE);
DV.writeLog("DISCNT_FLG=====" + DISCNT_FLG);
DV.writeLog("CFNC_D_DUE_DT=====" + CFNC_D_DUE_DT);
DV.writeLog("CFNC_C_RELT_REF=====" + CFNC_C_RELT_REF);

var E_CFNC_D_DUE_DT = DV.getFieldValue("E_CFNC_D_DUE_DT");
var E_C_REF_NO_C_IN = DV.getFieldValue("E_C_REF_NO_C_IN");
DV.writeLog("CFNC_C_RELT_REF=====" + CFNC_C_RELT_REF);
DV.writeLog("E_CFNC_D_DUE_DT=====DUE DATE==" + E_CFNC_D_DUE_DT);
DV.writeLog("CFNC_D_DT=====TRX DT==" + CFNC_D_DT);

if (interestPayableAt == "In Arrears") {
if (CFNC_C_TYPE == "Discount" && DISCNT_FLG == "YES") {
    DV.writeLog("===1===PayAccept_Int_AccTakeDown_eLoan========STRT======");
    DV.appendField("IPLC_PayAccept_Int_AccTakeDown_eLoan");
    if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
        DV.writeLog("===2====PayAccpt_CosInt_AccTakDown_eLoan==========START======");
        DV.appendField("IPLC_PayAccpt_CosInt_AccTakDown_eLoan");
    }
}
  } else {
    if (CFNC_C_TYPE == "Discount" && DISCNT_FLG == "YES") {
        DV.appendField("IPLC_PayAccept_Int_AmzTakeDown_eLoan");
        if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
            DV.appendField("IPLC_PayAccept_CosInt_AmzTakeDown_eLoan");
        }
    }
  }    
var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_BORROWER_ID = DV.getFieldValue("E_BORROWER_ID");
var E_ACCOUNT_TYPE = DV.getFieldValue("E_ACCOUNT_TYPE");
var E_FUNCTION_ID = DV.getFieldValue("E_FUNCTION_ID");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");
var E_UNPAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_CCY");
var E_UNPAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_UNPAID_CONFIRM_COMM_AMT");
var AVAL_BY = DV.getFieldValue("AVAL_BY");
var PMT_FLG = DV.getFieldValue("PMT_FLG");

DV.writeLog("E_PAID_CONFIRM_COMM_AMT====" + E_PAID_CONFIRM_COMM_AMT);
if (E_PAID_CONFIRM_COMM_AMT > 0) {
    DV.writeLog("===3===PayAccept_Payment_OPEN_eLoan==========");
    //DV.appendField("IPLC_PayAccept_Payment_OPEN_eLoan");   marked for takedown change
}




/*LC_REFINANCE_TRX_AMT = DV.getFieldValue("LC_REFINANCE_TRX_AMT");
DV.writeLog("LC_REFINANCE_TRX_AMT == " + LC_REFINANCE_TRX_AMT);
if (LC_REFINANCE_TRX_AMT > 0) {
    DV.writeLog("===4===Pay_Refinance_Takedown==========");
    DV.appendField("IPLC_Pay_Refinance_Takedown");
}*/