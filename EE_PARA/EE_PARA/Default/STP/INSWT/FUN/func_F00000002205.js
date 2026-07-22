stp.writeLog("Incoming SWIFT MT772 JS Start");

stp.setAutoProcess(true);

var cRef = stp.getSWIFTTagValue("21A");
stp.writeLog("Customer Reference Number is " + cRef);

var ref = stp.getFieldValue("C_MAIN_REF");
stp.updateFieldValue("AMD_REF", ref);
stp.writeLog("Transaction Reference Number is " + ref);

var csta = "ReceiveMT772";
stp.updateFieldValue("CURRNT_STATUS", csta);
stp.writeLog("Current Status is " + csta);

var nsta = "ProcessMT773";
stp.updateFieldValue("NXT_STATUS", nsta);
stp.writeLog("Next Status is " + nsta);

var cflag = "No";
stp.updateFieldValue("CLS_FLG", cflag);
stp.writeLog("Close Flag is " + cflag);

//stp.setEventTimes(1);
stp.setEventTimesFromTable("IPLC_MASTER");

stp.writeLog("Incoming SWIFT MT772 JS Stop");