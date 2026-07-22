DV.writeLog("===========IPLC_PayAtMaturity Eloan GAPI Start============");
var E_UNIT_CODE = DV.getFieldValue("E_UNIT_CODE");
var E_PAID_CONFIRM_COMM_CCY = DV.getFieldValue("E_PAID_CONFIRM_COMM_CCY");
var E_PAID_CONFIRM_COMM_AMT = DV.getFieldValue("E_PAID_CONFIRM_COMM_AMT");

DV.writeLog("E_PAID_CONFIRM_COMM_AMT====" + E_PAID_CONFIRM_COMM_AMT);
if (E_PAID_CONFIRM_COMM_AMT > 0) {
    DV.writeLog("====1=======Eloan GAPI PayAccept_Payment_OPEN_eLoan========Start============");
    //DV.appendField("IPLC_PayAccept_Payment_OPEN_eLoan"); marked for takedown change
}
DV.writeLog("===========IPLC_PayAtMaturity Eloan GAPI End============");


var CFNC_C_TYPE= "";
var CFNC_C_RELT_REF= "";
var CFNC_N_MARGIN_RT= "";
var CFNC_D_DT= "";
var CFNC_I_BASIC_DAYS= "";
var CFNC_C_CCY= "";
var CFNC_N_AMT_LCCCY= "";
var CFNC_D_DUE_DT= "";
var CFNC_N_LIBOR_RT= "";
var CFNC_N_LIBOR_AMT = "";
var CFNC_N_MARGIN_AMT = "";
var interestPayableAt = "";
var records = DV.getRecords("FincSinglePayment");
var DISCNT_FLG= DV.getFieldValue("DISCNT_FLG");

for(var i = 0;i < records.length;i++){
	CFNC_C_TYPE= DV.getDOValue(records[i],"CFNC_C_TYPE");
         CFNC_C_RELT_REF= DV.getDOValue(records[i],"CFNC_C_RELT_REF");
         CFNC_N_MARGIN_RT= DV.getDOValue(records[i],"CFNC_N_MARGIN_RT");
	CFNC_D_DT= DV.getDOValue(records[i],"CFNC_D_DT");
         interestPayableAt = DV.getDOValue(records[i], "CFNC_C_INT_PAYABLE");
         CFNC_I_BASIC_DAYS= DV.getDOValue(records[i],"CFNC_I_BASIC_DAYS");
         CFNC_C_CCY= DV.getDOValue(records[i],"CFNC_C_CCY");
         CFNC_N_AMT_LCCCY= DV.getDOValue(records[i],"CFNC_N_AMT_LCCCY");
	CFNC_D_DUE_DT= DV.getDOValue(records[i],"CFNC_D_DUE_DT");
         CFNC_N_LIBOR_RT= DV.getDOValue(records[i],"CFNC_N_LIBOR_RT");
         CFNC_N_MARGIN_RT= DV.getDOValue(records[i],"CFNC_N_MARGIN_RT");
         CFNC_N_LIBOR_AMT = DV.getDOValue(records[i],"CFNC_N_LIBOR_AMT");
         CFNC_N_MARGIN_AMT = DV.getDOValue(records[i],"CFNC_N_MARGIN_AMT");
}
DV.writeLog("CFNC_N_MARGIN_AMT======"+ CFNC_N_MARGIN_AMT);
DV.writeLog("CFNC_N_LIBOR_AMT======"+ CFNC_N_LIBOR_AMT);
var E_C_REF_NO_C_IN= DV.getFieldValue("E_C_REF_NO_C_IN");
DV.writeLog("E_C_REF_NO_C_IN======"+ E_C_REF_NO_C_IN);
DV.writeLog("CFNC_C_RELT_REF======"+ CFNC_C_RELT_REF);
if (interestPayableAt == "In Arrears") {
if(CFNC_C_TYPE== "Discount" && DISCNT_FLG== "YES"){
DV.writeLog("==1==PayAtMatur_Int_AccPayment_eLoan=====START======");
   DV.appendField("IPLC_PayAtM_Int_AccPayment_eLoan");
}
if(CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0){
DV.writeLog("==2==PayAtMatur_CosInt_AccPaymt_eLoan=====START======");
   DV.appendField("IPLC_PayAtM_CosInt_AccPayment_eLoan"); 
 }
} else {
    if (CFNC_C_TYPE == "Discount" && DISCNT_FLG == "YES") {
        DV.appendField("IPLC_PayAtM_Int_AmzTakeDown_eLoan");
        if (CFNC_N_MARGIN_RT != "" && CFNC_N_MARGIN_RT != 0) {
            DV.appendField("IPLC_PayAtM_CosInt_AmzTakeDown_eLoan");
        }
    }
}
/*LC_REFINANCE_TRX_AMT = DV.getFieldValue("LC_REFINANCE_TRX_AMT");
if (LC_REFINANCE_TRX_AMT > 0) {
    DV.appendField("IPLC_Pay_Refinance_Takedown");
}*/