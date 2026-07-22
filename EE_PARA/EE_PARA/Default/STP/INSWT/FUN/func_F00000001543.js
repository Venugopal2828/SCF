stp.writeLog("Receive 420 begin");
stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);
stp.updateFieldValue("CURRNT_STATUS", "ReceiveMT420");
stp.updateFieldValue("NXT_STATUS", "ProcessMT420");

stp.writeLog("Receive 420 end");