//DV.appendField("FAEF_CRN_BAL_settlement_ME", "Settle_New", "FA_DOC_TYPE='2'");
var mode = DV.getFieldValue("INV_FIN_MODE");
DV.writeLog("INV_FIN_MODE========="+mode);
DV.appendField("FAEF_Update_LONA_EBAL","Settle_New", "FA_INV_LOAN_TIMES=1");
if(mode == 'POOL'){
DV.appendField("FAEF_PoolPayToSBRAuto");
}else{
DV.appendField("FAEF_Update_TTL_INV_BAL_Auto");
}