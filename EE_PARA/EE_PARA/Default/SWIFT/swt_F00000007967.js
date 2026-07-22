var MT103 = DV.getFieldValue("TEMP_MESG_TYPE");
var MT202 = DV.getFieldValue("TEMP_FLG1");

if (MT103 == 'YES') {
    DV.appendSWIFT("BPOM_BPOM_103");
}

if (MT202 == 'YES') {
    DV.appendSWIFT("BPOM_BPOM_202");
}