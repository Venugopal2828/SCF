stp.setAutoProcess(true);
var sTag21 = stp.getSWIFTTagValue("21");
stp.updateFieldValue("C_MAIN_REF", sTag21);
stp.updateFieldValue("CURRNT_STATUS", "Receive MT412");
stp.updateFieldValue("NXT_STATUS", "Process MT412");