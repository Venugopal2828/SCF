var sMark = stp.getSWIFTTagValue("12");
if (sMark == '770') {
    stp.setFunc("IPLC_ReceiveMT700");
}