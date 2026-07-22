var s21Tag = stp.getSWIFTTagValue("21");
stp.writeLog("s21Tag:" + s21Tag);

var s21 = stp.getSWIFTTagValue("21").substr(0, 2);
stp.writeLog("s21Tag:" + s21);
var sendBankInfo = stp.getSWIFTTagValue("B6");
stp.writeLog("sB6:" + sendBankInfo);
var tag111 = stp.getSWIFTTagValue("111");
stp.writeLog("tag111:" + tag111);
if (sendBankInfo.indexOf("TRCKCHZ") > 0) {
    if (tag111 == '002') {
        stp.writeLog("Receive_StRc");
        stp.setFunc("Receive_StRc");
    }
} else {


    stp.setFunc("Incoming_MT192");

}