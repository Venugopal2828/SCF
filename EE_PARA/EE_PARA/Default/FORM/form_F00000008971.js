DV.writeLog("=============Form Start============");
TEMP_FLG1 = DV.getFieldValue("TEMP_FLG1");
TEMP_FLG2 = DV.getFieldValue("TEMP_FLG2");
TEMP_FLG3 = DV.getFieldValue("TEMP_FLG3");
if (TEMP_FLG1 == 'TRUE') {
    DV.appendField("FAEF_Dunning_5Days");
}
if (TEMP_FLG2 == 'TRUE') {
    DV.appendField("FAEF_Dunning_15Days");
}
if (TEMP_FLG3 == 'TRUE') {
    DV.appendField("FAEF_Dunning_30Days");
}
DV.writeLog("=============Form End============");