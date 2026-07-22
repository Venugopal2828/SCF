var TSU_BK_BPO_FLG = DV.getFieldValue("TSU_BK_BPO_FLG");
DV.appendField("SSSS_MultiDebitCredit");
DV.appendField("SSSS_ChgVoucher");

if (TSU_BK_BPO_FLG == 'true') {
    DV.appendField("FAEF_BankConLiabilityINV");
    DV.appendField("FAEF_BankConLiabilityINV2");
} else {
    DV.appendField("FAEF_FAEF_InvoiceTransfer");
}