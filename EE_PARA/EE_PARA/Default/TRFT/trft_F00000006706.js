var tDocum_status = DV.getFieldValue("DOC_STATUS");

if (tDocum_status == 'CANCEL') {
    DV.appendField("SBLC_SBLC_DRAW_CLS");
}
if (tDocum_status == 'SETTLE') {
    DV.appendField("SBLC_SBLC_DRAW_CLS");
    DV.appendField("SBLC_SBLC_CLS_FLG");
    DV.appendField("SBLC_SBLC_PROCESS_CLAIM");
}
if (tDocum_status == 'FINAL') {
    DV.appendField("SBLC_SBLC_DRAW_CLS");
    DV.appendField("SBLC_SBLC_CLS_FLG");
    DV.appendField("SBLC_SBLC_PROCESS_CLAIM");
}