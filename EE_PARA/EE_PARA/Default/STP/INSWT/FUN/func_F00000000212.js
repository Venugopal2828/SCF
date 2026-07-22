stp.writeLog("MT400 start");
stp.setAutoProcess(true);

stp.updateFieldValue("CURRNT_STATUS", "Receive MT400");

var tag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", tag21);

var tag20 = stp.getSWIFTTagValue("20");
stp.updateFieldValue("SENDER_REF", tag20);

stp.setEventTimesFromTable("EXCO_MASTER");
stp.writeLog("MT400 finish");