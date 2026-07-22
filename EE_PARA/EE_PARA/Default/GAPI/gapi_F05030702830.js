DV.writeLog("SBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
/*var SBR_Amt = DV.getFieldValue("FA_LMT_AMT");
var Clm_disc_tp = DV.getFieldValue("FA_CLM_DISC_TYPE");*/
DV.writeLog("Business Type=" + busi_type);
var CUST_TYPE = DV.getFieldValue("CUST_TYPE");
if(CUST_TYPE=='T1'){
DV.appendField("FADA_SBR_TO_CE");
}  
/*DV.writeLog("SBR Amt=" + SBR_Amt);
DV.writeLog("CLAIM DISCOUNT TYPE=" + Clm_disc_tp);

if ((busi_type == 'RF' || busi_type == 'DD' || (busi_type == 'CD' && Clm_disc_tp == 'INSURCO')) && SBR_Amt > 0) {
    DV.appendField("FADA_SBR_Limits_Create");
}

if (busi_type == 'RD' || (busi_type == 'CD' && Clm_disc_tp == 'MEDPRD') && SBR_Amt > 0) {
    DV.appendField("FADA_SBR_Limits_Create_RD");
}

if (busi_type == 'POF' && SBR_Amt > 0) {
    DV.appendField("FADA_PO_Limits_Create");
}*/
DV.writeLog("SBR GAPI END******");