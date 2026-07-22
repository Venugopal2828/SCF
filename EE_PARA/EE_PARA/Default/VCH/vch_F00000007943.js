DV.writeLog("voucher start***");
DV.appendField("SSSS_MultiDebitCredit");
DV.appendField("SSSS_ChgVoucher");
var conf_flg = DV.getFieldValue("CONF_ADDED");
DV.writeLog("CONF_ADDED=" + conf_flg);
if (conf_flg == "Yes") {
    DV.appendField("BPOM_AdviceBPO");
}
DV.writeLog("end***");