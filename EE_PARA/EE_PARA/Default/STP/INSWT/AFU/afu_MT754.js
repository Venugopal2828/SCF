var sMark = stp.getSWIFTTagValue("21").substr(0, 2);

if (sMark == "EP") {
    stp.setFunc("EPLC_ReceiveMT754");
} else {
    stp.setFunc("IPLC_ReceiveMT754");
}