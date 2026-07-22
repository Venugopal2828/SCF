DV.writeLog("AMDSBR GAPI STATR******");
var busi_type = DV.getFieldValue("FA_BUSI_TYPE");
/*var incramt = DV.getFieldValue("FA_INCR_AMT");
var dectamt = DV.getFieldValue("FA_DECR_AMT");
var ServiceApproved = DV.getFieldValue("FA_SERVICE_APPRVD");*/

var origCounterType = DV.getFieldValue("ORIG_FA_COUNTER_TYPE");
var counterType = DV.getFieldValue("FA_COUNTER_TYPE");
if(origCounterType != 'T1'&& counterType == 'T1'){
DV.appendField("FADA_AmdSBR_TO_CE");
}


DV.writeLog("Business Type=" + busi_type);
/*if (busi_type == 'RF') {
    DV.appendField("FADA_SBR_Limits_Create");
}
if (busi_type == 'POF') {
    DV.appendField("FADA_PO_Limits_Create");
}
if (busi_type == 'RD' || busi_type == 'CD') {
    DV.appendField("FADA_SBR_Limits_Create_RD");
}
if (ServiceApproved == '1' && busi_type == 'DF' && (incramt > 0 || dectamt > 0)) {
    DV.appendField("FADA_CAR_LMTS");
}*/
DV.writeLog("AMDSBR GAPI END******");