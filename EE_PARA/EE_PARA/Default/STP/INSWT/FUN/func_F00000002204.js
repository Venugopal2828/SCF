stp.writeLog("Incoming SWIFT MT770 JS Start");

stp.setAutoProcess(true);

var cRef = stp.getSWIFTTagValue("21A");
stp.updateFieldValue("X798_CUST_REF", cRef);
stp.writeLog("Customer Reference Number is " + cRef);

var sRef = stp.getSWIFTTagValue("20");
stp.writeLog("Documentary Credit Number is " + sRef);

var ref = stp.SYS_getRefNo('IPLC');
//var ref= stp.getFieldValue("C_MAIN_REF");
stp.setMainRef(ref);
stp.writeLog("Transaction Reference Number is " + ref);

var csta = "ReceiveMT770";
stp.updateFieldValue("CURRNT_STATUS", csta);
stp.writeLog("Current Status is " + csta);

var nsta = "ProcessMT771";
stp.updateFieldValue("NXT_STATUS", nsta);
stp.writeLog("Next Status is " + nsta);

var cflag = "No";
stp.updateFieldValue("CLS_FLG", cflag);
stp.writeLog("Close Flag is " + cflag);

/* tag13E */
/*
stp.writeLog("tag13E----------START-----------");
var Tag13E= stp.getSWIFTTagValue("13E");
var s13EDATE = Tag13E.substr(0,8);
var s13ETIME = Tag13E.substr(8,4);
stp.updateFieldValue("X798_CRE_DATE",s13EDATE);
stp.updateFieldValue("X798_CRE_TIME",s13ETIME);
stp.writeLog("tag13E------------END----------");
*/
stp.setEventTimes(0);

stp.writeLog("Incoming SWIFT MT770 JS Stop");