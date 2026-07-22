DV.writeLog("SBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
var SBR_Amt = DV.getFieldValue("FA_LMT_AMT");
DV.writeLog("Business Type=" + busi_type);
DV.writeLog("SBR Amt=" + SBR_Amt);
if (busi_type == 'RF' && SBR_Amt > 0) {
    DV.appendField("FADA_SBR_Limits_Create");
}
DV.writeLog("SBR GAPI END******");