/*stp.setFunc("EPLC_ReceiveMT707");*/
var sMark = stp.getSWIFTTagValue("12");
if (sMark != '') {
    stp.setFunc("IPLC_ReceiveMT707");
} else {
    stp.setFunc("EPLC_ReceiveMT707");

}