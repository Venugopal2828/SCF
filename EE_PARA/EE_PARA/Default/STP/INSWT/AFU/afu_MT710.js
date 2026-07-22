var sMARK = stp.getSWIFTTagValue("23").substr(0, 6);
if (sMARK == "PREADV") {
    stp.setFunc("EPLC_ReceiveMT700AfterMT705");
} else {
    stp.setFunc("EPLC_ReceiveMT710");
}