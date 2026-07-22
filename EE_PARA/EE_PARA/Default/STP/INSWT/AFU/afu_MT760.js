var s12 = stp.getSWIFTTagValue("12");
if (s12 == "761") {
    stp.setFunc("GTEE_ReceiveMT760CE");
} else {
    stp.setFunc("InwardMT760");
}