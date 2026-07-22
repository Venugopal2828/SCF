stp.writeLog("Receive 730 begin");
stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);
stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT730");
stp.updateFieldValue("NXT_STATUS", "ProcessMT730");
stp.writeLog("Receive 730 end");