DV.appendField("SSSS_MultiDebitCredit");
DV.appendField("SSSS_ChgVoucher");
var BUSI_ROLE = DV.getFieldValue("BUSI_ROLE");
var CONF_ADDED = DV.getFieldValue("CONF_ADDED");
DV.writeLog("BUSI_ROLE=" + BUSI_ROLE);
DV.writeLog("CONF_ADDED=" + CONF_ADDED);
if (BUSI_ROLE == 'IMPORT') {
    DV.appendField("BPOM_R_ClosePO_IMPORT");
} else if (BUSI_ROLE == 'EXPORT' && CONF_ADDED == 'Yes') {
    DV.appendField("BPOM_R_ClosePO_EXPORT");
}