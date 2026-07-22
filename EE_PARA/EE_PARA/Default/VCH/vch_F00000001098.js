/*DV.appendField("FAEF_FAEF_SET_BCR");*/
DV.writeLog("============111==============");
DV.appendField("SSSS_MultiDebitCredit");
DV.writeLog("============222==============");
DV.writeLog("============333==============");
var TSU_BK_BPO_FLG = DV.getFieldValue("TSU_BK_BPO_FLG");
var busitype = DV.getFieldValue("FA_BUSI_TYPE");
if (TSU_BK_BPO_FLG == 'true') {
    DV.appendField("FAEF_BankConLiabilityPMT");
} else {
    DV.appendField("FAEF_FAEF_IFPayment");
}