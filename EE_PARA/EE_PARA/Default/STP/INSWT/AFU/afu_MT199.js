var s21Tag = stp.getSWIFTTagValue("21");

var s21 = stp.getSWIFTTagValue("21").substr(0, 2);

stp.writeLog("s21Tag:" + s21Tag);
var sendBankInfo = stp.getSWIFTTagValue("B6");
var tag111 = stp.getSWIFTTagValue("111");
if (sendBankInfo.indexOf("TRCKCHZ") > 0) {
    if (tag111 == '002') {
      //stp.setFunc("Receive_Stat");
      stp.setFunc("Receive_StRc");
    }
    if (tag111 == '001') {
      stp.writeLog("receive mt199");
      stp.setFunc("Incoming_MT199");
    }
} else {
    stp.writeLog("receive mt199");
    stp.setFunc("Incoming_MT199");
}