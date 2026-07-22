stp.writeLog("Receive 430 begin");
stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);
stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT430");
stp.updateFieldValue("NXT_STATUS", "ProcessMT430");

stp.writeLog("Receive 430 end");