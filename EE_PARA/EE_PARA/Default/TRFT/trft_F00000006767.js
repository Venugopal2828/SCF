DV.writeLog("MODULE_SELECT=======" + DV.getFieldValue("MODULE_SELECT"));
if (DV.getFieldValue("MODULE_SELECT") == "EPLC") {
    DV.appendField("SYND_SYND_TO_EPLC");
}
if (DV.getFieldValue("MODULE_SELECT") == "GTEE") {
    DV.appendField("SYND_SYND_TO_GTEE");
}
if (DV.getFieldValue("MODULE_SELECT") == "IPLC") {
    DV.appendField("SYND_SYND_TO_IPLC");
}