stp.writeLog("Receive 400 begin");
stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);
stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT400");
stp.updateFieldValue("NXT_STATUS", "ProcessMT400");
stp.writeLog("Receive 400 end");