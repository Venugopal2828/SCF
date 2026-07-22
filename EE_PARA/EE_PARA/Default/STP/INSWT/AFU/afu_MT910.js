var sMark = stp.getSWIFTTagValue("21").substr(0, 2);
stp.writeLog("910 21 tag=" + sMark);
if (sMark == "IT") {
    stp.setFunc("Incoming_MT910");
} else {
    stp.setFunc("IncomingMT910");
}