DV.writeLog("Investigations:Correspondence");
var msgType = DV.getFieldValue("CORR_MSG");
var sendToFlg = DV.getFieldValue("SEND_TO_FLAG");
DV.writeLog("Inv Message type is " + msgType);

if (sendToFlg == "Update Status") {
    if (msgType == "MT192") {
        DV.writeLog("Inv Swift Outgoing:MT192");
        DV.appendSWIFT("PYMT_PYT MT192");
    } else if (msgType == "MT195") {
        DV.writeLog("Inv Swift Outgoing:MT195");
        DV.appendSWIFT("PYMT_PYTMT195");
    } else if (msgType == "MT196") {
        DV.writeLog("Inv Swift Outgoing:MT196");
        DV.appendSWIFT("PYMT_PYT MT196");
    } else if (msgType == "MT199") {
        DV.writeLog("Inv Swift Outgoing:MT199");
        DV.appendSWIFT("PYMT_PYT MT199");
    } else if (msgType == "MT292") {
        DV.writeLog("Inv Swift Outgoing:MT292");
        DV.appendSWIFT("PYMT_PYT MT292");
    } else if (msgType == "MT295") {
        DV.writeLog("Inv Swift Outgoing:MT295");
        DV.appendSWIFT("PYMT_PYTMT295");
    } else if (msgType == "MT296") {
        DV.writeLog("Inv Swift Outgoing:MT296");
        DV.appendSWIFT("PYMT_PYT MT296");
    } else if (msgType == "MT299") {
        DV.writeLog("Inv Swift Outgoing:MT299");
        DV.appendSWIFT("PYMT_PYT MT299");
    } else if (msgType == "MT992") {
        DV.writeLog("Inv Swift Outgoing:MT992");
        DV.appendSWIFT("PYMT_PYT MT992");
    } else if (msgType == "MT995") {
        DV.writeLog("Inv Swift Outgoing:MT995");
        DV.appendSWIFT("PYMT_PYT MT995");
    } else if (msgType == "MT996") {
        DV.writeLog("Inv Swift Outgoing:MT996");
        DV.appendSWIFT("PYMT_PYT MT996");
    } else if (msgType == "MT999") {
        DV.writeLog("Inv Swift Outgoing:MT999");
        DV.appendSWIFT("PYMT_PYT MT999");
    }
}