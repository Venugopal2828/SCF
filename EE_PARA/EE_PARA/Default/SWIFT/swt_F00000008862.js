var fSEND_VIA = DV.getFieldValue("MSG_TYPE");

DV.writeLog("SEND_VIA===" + fSEND_VIA);
if (fSEND_VIA == "1") {
    DV.appendField("PYMT_MT192_InitiateStopRecall");
}
if (fSEND_VIA == "2") {
    DV.appendField("PYMT_MT199_InitiateStopRecall")
}