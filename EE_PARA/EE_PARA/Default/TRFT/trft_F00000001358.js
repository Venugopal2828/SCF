/*For BPOM Module
var Type=DV.getFieldValue("FA_BUSI_TYPE");
if(Type=='BPO'){
DV.appendField("FAEF_TO_BPOM");
}
*/
var FinType = DV.getFieldValue("FA_FIN_TYPE");
if (FinType == 'PO') {
    DV.appendField("FAEF_Update_TTL_PO_LOAN_AMT");
}
if (FinType == 'INV') {
    DV.appendField("FAEF_Update_TTL_INV_LOAN_AMT");
}