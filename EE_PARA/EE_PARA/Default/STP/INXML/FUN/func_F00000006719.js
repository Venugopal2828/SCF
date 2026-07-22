stp.writeLog("Demerging function started : EMAIL MESG");
stp.setAutoProcess(true);
stp.setEventTimes(0);

var MainRef = stp.SYS_getRefNo("COMM");
stp.setMainRef(MainRef);

stp.updateFieldValue("C_MAIN_REF", MainRef);
/*stp.updateFieldValue("CURRNT_STATUS","New email message");
stp.updateFieldValue("PRE_MSG_DESC","");
*/
stp.setGapiRule("NewEmailMessage");
stp.writeLog("Demerging function End: EMAIL MESG ");