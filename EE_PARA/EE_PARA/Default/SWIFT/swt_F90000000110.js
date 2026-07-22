DV.appendField("IWGT_OUT_MT785");

var MT798_FLG = DV.getFieldValue("APPLY_FLG");
if (MT798_FLG == "YES") {
    DV.appendSWIFT(" IWGT_OUT_MT785_MT727");
}