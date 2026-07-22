DV.writeLog("vas------------->IN TRANSFER TO");
var tDETRMNTL_FLG = DV.getFieldValue("DETRMNTL_FLG");

if (tDETRMNTL_FLG == 'NO') {
    DV.appendField("SBLC_SBLC_insertinto_MASTER");
    DV.writeLog("vas--------------->IN IF BLOCK");
}
//DV.appendField("SBLC_SBLC_SYND_AMD");