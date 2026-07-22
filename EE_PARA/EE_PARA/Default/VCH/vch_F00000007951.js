DV.appendField("SSSS_MultiDebitCredit");
DV.appendField("SSSS_ChgVoucher");
var conf_flg = DV.getFieldValue("CONF_ADDED");
var records = DV.getRecords("TBPO_PAY_OBLIG");
for (var i = 0; i < records.length; i++) {
    TSU_BPOOBLGR_AMT = DV.getDOValue(records[i], "TSU_BPOOBLGR_AMT");
    DV.writeLog("TSU_BPOOBLGR_AMT=" + TSU_BPOOBLGR_AMT);
}

DV.writeLog("CONF_ADDED=" + conf_flg);
if (conf_flg == "Yes") {
    DV.appendField("BPOM_BPOSettlement");
}