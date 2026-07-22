DV.writeLog("SBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
var SBR_Amt = DV.getFieldValue("FA_LMT_AMT");
var SERVICE_TP = DV.getFieldValue("FA_SERVICE_APPRVD");
DV.writeLog("Business Type=" + busi_type);
DV.writeLog("SBR Amt=" + SBR_Amt);
DV.writeLog("SERVICE_TP=" + SERVICE_TP);
if (busi_type == 'SF' && SBR_Amt > 0) { //Change from RF to SF for SCF change
    DV.appendField("FADA_SBR_Limits_Create_ME");
}

if (busi_type == 'RD' && SERVICE_TP == '2' && SBR_Amt > 0) { //with recourse create c-buyer+rc-sell;
    DV.appendField("FADA_SBR_Limits_Create_RD_ME");
}
if (busi_type == 'RD' && SERVICE_TP == '1' && SBR_Amt > 0) { //without recourse create c-seller+rc-buyer;
    DV.appendField("FADA_SBR_Limits_Create_RDNR_ME");
}


if (busi_type == 'POF' && SBR_Amt > 0) {
    DV.appendField("FADA_PO_Limits_Create_ME");
}

DV.appendField("FADA_SBR_EE2CE_Buyer_ME");
DV.appendField("FADA_SBR_EE2CE_Seller_ME");
DV.writeLog("SBR GAPI END******");