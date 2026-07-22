var sCR_LONG_FLG = DV.getFieldValue("CR_LONG_FLG");
var sTEMP_FLG2 = DV.getFieldValue("TEMP_FLG2");
if (sCR_LONG_FLG == '4' && sTEMP_FLG2 == '2') {
    DV.appendInternalSWIFT("SSSS_CPYTMT202");
}