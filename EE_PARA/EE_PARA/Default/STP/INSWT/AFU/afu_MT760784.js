var s12 = stp.getSWIFTTagValue("12");
stp.writeLog("s12=======" + s12);
if (s12 == "784") {
    stp.setFunc("GTEE_ReceiveMT760CE");
} else {
    stp.setFunc("InwardMT760");
}