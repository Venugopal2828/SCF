stp.writeLog("Incoming SWIFT MT772 Assign Function Start");

if (stp.getSWIFTTagValue("12") == '772') {
    stp.setFunc("IPLC_ReceiveMT798");
    stp.writeLog("The assigned function is IPLC_ReceiveMT798.");
}

stp.writeLog("Incoming SWIFT  MT772 Assign Function Stop");