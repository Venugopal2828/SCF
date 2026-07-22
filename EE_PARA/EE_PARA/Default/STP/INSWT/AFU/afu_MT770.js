stp.writeLog("Incoming SWIFT  MT770 Assign Function Start");

if (stp.getSWIFTTagValue("12") == '770') {
    stp.setFunc("IPLC_ReceiveMT798");
    stp.writeLog("The assigned function is IPLC_ReceiveMT798.");
}

stp.writeLog("Incoming SWIFT MT770 Assign Function Stop");