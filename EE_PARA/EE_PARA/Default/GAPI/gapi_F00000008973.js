DV.writeLog("SBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
var SBR_Amt = DV.getFieldValue("FA_LMT_AMT");
//var Clm_disc_tp = DV.getFieldValue("FA_CLM_DISC_TYPE");
DV.writeLog("Business Type=" + busi_type);
DV.writeLog("SBR Amt=" + SBR_Amt);
//DV.writeLog("CLAIM DISCOUNT TYPE=" + Clm_disc_tp);
if ((busi_type == 'SF' || busi_type == 'DD') && SBR_Amt > 0) { //Change from RF to SF for SCF change
    DV.appendField("FAEF_SBR_Limits_Create_ME");
}

if (busi_type == 'RD' && SBR_Amt > 0) {
    DV.appendField("FAEF_SBR_Limits_Create_RD_ME");
}

if (busi_type == 'POF' && SBR_Amt > 0) {
    DV.appendField("FAEF_PO_Limits_Create_ME");
}
DV.writeLog("SBR GAPI END******");