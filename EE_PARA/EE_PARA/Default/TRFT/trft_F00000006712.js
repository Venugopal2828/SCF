var CLS_FLG = DV.getFieldValue("CLS_FLG");

if (CLS_FLG == 'YES') {
    DV.appendField("SBLC_SBLC_UPDATE");
    DV.writeLog("INSERTING -------> MASTER");
}