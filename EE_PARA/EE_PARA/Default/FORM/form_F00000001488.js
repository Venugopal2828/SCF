var service = DV.getFieldValue("FA_SERVICE_APPRVD");
if (service == '1') {
    DV.appendField("FADA_SBR-withoutRecourse");
}
if (service == '2') {
    DV.appendField("FADA_SBR-withRecourse");
}
if (service == '3') {
    DV.appendField("FADA_SBR-Coll");
}