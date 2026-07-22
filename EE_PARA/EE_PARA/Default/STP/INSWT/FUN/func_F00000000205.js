stp.writeLog("MT410 start");
stp.setAutoProcess(true);

stp.updateFieldValue("CURRNT_STATUS", "Receive MT410");

var tag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", tag21);

stp.setEventTimesFromTable("EXCO_MASTER");
stp.writeLog("MT410 finish");