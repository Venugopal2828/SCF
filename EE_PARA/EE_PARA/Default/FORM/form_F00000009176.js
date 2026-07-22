var service = DV.getFieldValue("FA_SERVICE_APPRVD");
if (service == '1') {
    DV.appendField("FADA_SBR-withoutRecourse_ME");
}
if (service == '2') {
    DV.appendField("FADA_SBR-withRecourse_ME");
}