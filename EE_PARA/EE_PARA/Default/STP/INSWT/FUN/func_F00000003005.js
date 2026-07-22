stp.setAutoProcess(true);
stp.writeLog("@@@@@@START@@@@@@");
stp.setEventTimes(0);
/* tag20 */

var ref = stp.SYS_getRefNo("EPLC");
stp.setMainRef(ref);

stp.writeLog("tag20@@@@@@START@@@@@@");
var Tag20 = stp.getSWIFTTagValue("20");
stp.updateFieldValue("C_MAIN_REF", ref);
stp.updateFieldValue("LC_NO2", Tag20);
stp.writeLog("tag20@@@@@@END@@@@@@");

/*tag12 */
stp.writeLog("tag12@@@@@@START@@@@@@");
var Tag12 = stp.getSWIFTTagValue("12");
stp.updateFieldValue("SUB_MESS_TYPE", Tag12);
stp.writeLog("tag12@@@@@@END@@@@@@");

/* tag13E */
stp.writeLog("tag13E@@@@@@START@@@@@@");
var Tag13E = stp.getSWIFTTagValue("13E");
var s13EDATE = Tag13E.substr(0, 7);
var s13ETIME = Tag13E.substr(8, 11);
stp.updateFieldValue("X798_CRE_DATE", s13EDATE);
stp.updateFieldValue("X798_CRE_TIME", s13ETIME);
stp.writeLog("tag13E@@@@@@END@@@@@@");

/* tag31C */
stp.writeLog("tag31C@@@@@@START@@@@@@");
var tag31C = stp.getSWIFTTagValue("31C");
stp.updateFieldValue("X798_31C_ISSUE_DATE", tag31C);
stp.writeLog("tag31C@@@@@@END@@@@@@");



/* tag23X */
stp.writeLog("tag23X@@@@@@START@@@@@@");
var tag23X = stp.getSWIFTTagValue("23X");
var s23XCODE = tag23X.substr(0, 3);
var s23XNARR = tag23X.substr(4, 69);
stp.updateFieldValue("X798_23X_CODE", s23XCODE);
stp.updateFieldValue("X798_23X_NARR", s23XNARR);
stp.writeLog("tag23X@@@@@@END@@@@@@");