DV.writeLog("Creating Outward Correspondence");
var msgType = DV.getFieldValue("CORR_MSG");
var msgType_di = DV.getFieldValue("CORR_MSG_DI");
DV.writeLog("Message type is " + msgType);

if (msgType == "MT192") {
    DV.writeLog("Swift Outgoing:MT192");
    DV.appendSWIFT("PYMT_PYT MT192");
} else if (msgType == "MT195") {
    DV.writeLog("Swift Outgoing:MT195");
    //DV.appendSWIFT("PYMT_PYTMT195");
    DV.appendSWIFT("PYMT_PYTMT195");
} else if (msgType == "MT196") {
    DV.writeLog("Swift Outgoing:MT196");
    DV.appendSWIFT("PYMT_PYT MT196");
} else if (msgType == "MT199") {
    DV.writeLog("Swift Outgoing:MT199");
    DV.appendSWIFT("PYMT_PYT MT199");
} else if (msgType == "MT292") {
    DV.writeLog("Swift Outgoing:MT292");
    DV.appendSWIFT("PYMT_PYT MT292");
} else if (msgType == "MT295") {
    DV.writeLog("Swift Outgoing:MT295");
    //DV.appendSWIFT("PYMT_PYT MT295");
    //DV.appendSWIFT("");
    DV.appendSWIFT("PYMT_PYTMT295");
} else if (msgType == "MT296") {
    DV.writeLog("Swift Outgoing:MT296");
    DV.appendSWIFT("PYMT_PYT MT296");
} else if (msgType == "MT299") {
    DV.writeLog("Swift Outgoing:MT299");
    DV.appendSWIFT("PYMT_PYT MT299");
} else if (msgType_di == "MT111") {
    DV.writeLog("Swift Outgoing:MT111");
    DV.appendSWIFT("PYMT_DraftMT111");
} else if (msgType_di == "MT199") {
    DV.writeLog("Swift Outgoing:MT199");
    DV.appendSWIFT("PYMT_PYT MT199");
} else if (msgType_di == "MT999") {
    DV.writeLog("Swift Outgoing:MT999");
    DV.appendSWIFT("PYMT_PYT MT999");
}