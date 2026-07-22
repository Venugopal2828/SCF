DV.appendField("SSSS_MultiDebitCredit");
DV.appendField("SSSS_ChgVoucher");
var BUSI_STATUS = DV.getFieldValue("BUSI_STATUS");
var CONF_ADDED = DV.getFieldValue("CONF_ADDED");
var BUSI_ROLE = DV.getFieldValue("BUSI_ROLE");
DV.writeLog("BUSI_STATUS=" + BUSI_STATUS);
DV.writeLog("CONF_ADDED=" + CONF_ADDED);
DV.writeLog("BUSI_ROLE=" + BUSI_ROLE);
if (BUSI_STATUS == "Before IM Accept") {
    DV.appendField("BPOM_R_CheckBPO");
} else if (BUSI_STATUS == "Import Accept") {
    DV.appendField("BPOM_R_ImportAcceptance");
}
if (BUSI_ROLE == "EXPORT" && CONF_ADDED == "Yes" && BUSI_STATUS != "Export Settle") {
    DV.appendField("BPOM_R_AdviceBPO");
}