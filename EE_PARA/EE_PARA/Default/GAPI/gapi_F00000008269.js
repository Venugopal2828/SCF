var DOC_STAT = DV.getFieldValue("DOC_STAT");
if (DOC_STAT == 'Discrepancy Found') {
    DV.appendField("IPLC_IMLC_012_DiscrpcsNtfctn");
} else {
    DV.appendField("IPLC_IMLC_015_PmtAdv");
}