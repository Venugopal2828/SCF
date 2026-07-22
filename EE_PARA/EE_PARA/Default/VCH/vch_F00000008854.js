if (DV.getFieldValue("PART_TYPE") == "Funded") {
    DV.appendField("RPFM_PARTReversalContLiab");
    DV.appendField("RPFM_FinanceEstablishment");
    DV.appendField("SSSS_ChgVoucher");
} else if (DV.getFieldValue("PART_TYPE") == "Unfunded") {
    DV.appendField("SSSS_ChgVoucher");
}