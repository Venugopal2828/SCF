stp.setAutoProcess(true);
stp.writeLog("-----------START-----------");
stp.setEventTimes(0);
/* tag21P */
stp.writeLog("tag21P---------START----------");
var Tag21P = stp.getSWIFTTagValue("21P");
stp.updateFieldValue("C_MAIN_REF", Tag21P);
stp.writeLog("tag21P---------END------------");

/*tag12 */
stp.writeLog("tag12--------START--------");
var Tag12 = stp.getSWIFTTagValue("12");
stp.updateFieldValue("SUB_MESS_TYPE", Tag12);
stp.writeLog("tag12---------END----------");

/* tag13E */
stp.writeLog("tag13E----------START-----------");
var Tag13E = stp.getSWIFTTagValue("13E");
var s13EDATE = Tag13E.substr(0, 7);
var s13ETIME = Tag13E.substr(8, 11);
stp.updateFieldValue("X798_CRE_DATE", s13EDATE);
stp.updateFieldValue("X798_CRE_TIME", s13ETIME);
stp.writeLog("tag13E------------END----------");

/* tag31C */
stp.writeLog("tag31C-----------START-----------");
var tag31C = stp.getSWIFTTagValue("31C");
stp.updateFieldValue("X798_31C_ISSUE_DATE", tag31C);
stp.writeLog("tag31C------------END------------");