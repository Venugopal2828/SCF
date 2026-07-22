var service = DV.getFieldValue("FA_SERVICE_APPRVD");
if (service == '1') {
    DV.appendField("FAEF_SBR_withoutRecourse_ME");
}
if (service == '2') {
    DV.appendField("FAEF_SBR_withRecourse_ME");
}
if (service == '3') {
    DV.appendField("FAEF_SBR_Coll_ME");
}