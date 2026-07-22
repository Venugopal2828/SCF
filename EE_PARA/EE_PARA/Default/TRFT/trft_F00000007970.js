var BUSI_STATUS = DV.getFieldValue("BUSI_STATUS");
if (BUSI_STATUS == 'Export Accept') {
    DV.appendField("BPOM_CLS_FLG");
}