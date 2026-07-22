DV.appendField("FAEF_Update_TTL_INV_LOAN_AMT_ME");
DV.appendField("FAEF_Update_CE_MAIN_REF");
var BUSI_TP = DV.getFieldValue("FA_BUSI_TYPE");
if(BUSI_TP =="POF"){
DV.appendField("FAEF_Up_Temp_AMT2PO");
}