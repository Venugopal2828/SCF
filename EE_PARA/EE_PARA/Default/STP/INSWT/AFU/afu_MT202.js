var sMark = stp.getSWIFTTagValue("21").substr(0, 4);
stp.writeLog("sMark====================" + sMark);
if (sMark == "FADA") {
    stp.setFunc("InMT202");
} else {
    stp.setFunc("Incoming_MT202COV");
}