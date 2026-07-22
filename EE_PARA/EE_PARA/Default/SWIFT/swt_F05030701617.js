var MT798_FLG = DV.getFieldValue("APPLY_FLG");
DV.writeLog("MT798_FLG===" + MT798_FLG);
if (MT798_FLG == "YES") {
    DV.appendSWIFT("GTEE_OUT_MT765_779");
}