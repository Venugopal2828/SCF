stp.setAutoProcess(true);

stp.updateFieldValue("CURRNT_STATUS", "Receive MT422");
var tag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", tag21);
stp.setEventTimesFromTable("EXCO_MASTER");