/* 
var BUSI_TP = DV.getFieldValue("FA_BUSI_TYPE");
var po_loan_bal = DV.getFieldValue("PO_LOAN_BAL");
if(BUSI_TP =="POF" &&  po_loan_bal>0){
	DV.writeLog("==========Transfer to PO start=====");
DV.appendField("FAEF_Up_Temp_AMT2PO");
DV.appendField("FAEF_Up_TTL_INV_LOAN_AMT_POF");
DV.writeLog("==========Transfer to PO end=====");
}
else{   
	DV.appendField("FAEF_Update_TTL_INV_LOAN_AMT_ME");
} */