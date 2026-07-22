var sMark = stp.getSWIFTTagValue("21").substr(0, 4);
if (sMark == "EXCO") {
    stp.setFunc("EXCO_ReceiveMT410");
} else {
    stp.setFunc("Receive_MT410");
}