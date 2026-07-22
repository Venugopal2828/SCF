DV.writeLog("AMDSBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
var incramt = DV.getFieldValue("FA_INCR_AMT");
var dectamt = DV.getFieldValue("FA_DECR_AMT");
var ServiceApproved = DV.getFieldValue("FA_SERVICE_APPRVD");
DV.writeLog("Business Type=" + busi_type);
if (busi_type == 'RF') {
    DV.appendField("FAEF_SBR_Limits_Create_ME");
}
if (busi_type == 'POF') {
    DV.appendField("FAEF_PO_Limits_Create_ME");
}
if (busi_type == 'RD' || busi_type == 'CD') {
    DV.appendField("FAEF_SBR_Limits_Create_RD_ME");
}
if (ServiceApproved == '1' && busi_type == 'DF' && (incramt > 0 || dectamt > 0)) {
    DV.appendField("FAEF_CAR_LMTS_ME");
}
DV.writeLog("AMDSBR GAPI END******");