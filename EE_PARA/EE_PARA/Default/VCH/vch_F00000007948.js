DV.appendField("SSSS_MultiDebitCredit");
DV.appendField("SSSS_ChgVoucher");
var conf_bal = DV.getFieldValue("CONF_BAL");
var new_conf_bal = DV.getFieldValue("NEW_CONF_BAL");
DV.writeLog("conf_bal=" + conf_bal);
DV.writeLog("new_conf_bal=" + new_conf_bal);
var amt = DV.toFloat("conf_bal") - DV.toFloat("new_conf_bal")
DV.writeLog("amt=" + amt);
if (amt > 0 || amt < 0) {
    DV.appendField("BPOM_AdviceBPOAmend");
}