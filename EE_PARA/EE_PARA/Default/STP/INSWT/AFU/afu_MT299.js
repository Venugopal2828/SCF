var sendBankInfo = stp.getSWIFTTagValue("B6");
var tag111 = stp.getSWIFTTagValue("111");
if (sendBankInfo.indexOf("TRCKCHZ") > 0) {
    if (tag111 == '001') {
        stp.writeLog("receive mt299");
        stp.setFunc("Incoming_MT299");
    }
} else {
    stp.writeLog("receive mt299");
    stp.setFunc("Incoming_MT299");
}