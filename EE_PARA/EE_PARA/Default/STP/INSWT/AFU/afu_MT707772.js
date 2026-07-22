var sMark = stp.getSWIFTTagValue("12");
if (sMark == '772') {
    stp.setFunc("IPLC_ReceiveMT707");
}