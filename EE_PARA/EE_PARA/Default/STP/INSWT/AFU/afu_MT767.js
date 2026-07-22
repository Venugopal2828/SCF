var sMark = stp.getSWIFTTagValue("12");
if (sMark != '') {
    stp.setFunc("GTEE_ReceiveMT767763");
} else {
    stp.setFunc("InwardMT767");
}