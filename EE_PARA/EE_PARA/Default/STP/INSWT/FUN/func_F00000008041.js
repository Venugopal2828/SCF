stp.setAutoProcess(true);
stp.writeLog("-----------START-----------");
stp.setEventTimes(0);
/* tag20 */

stp.writeLog("tag20---------START----------");
var Tag20 = stp.getSWIFTTagValue("20Z");
if (Tag20=="" || Tag20 == null){
	Tag20 = stp.getSWIFTTagValue("20");
}
stp.updateFieldValue("C_MAIN_REF", Tag20);
stp.writeLog("tag20---------END------------");


/* tag20 */
/* var ref =stp.SYS_getRefNo("COMM");
stp.setMainRef(ref);

stp.writeLog("tag20@@@@@@START@@@@@@");
stp.updateFieldValue("C_MAIN_REF",ref);
stp.updateFieldValue("SUB_MESS_TYPE",788);
stp.writeLog("tag20---------END------------");*/

/*tag12 */
stp.writeLog("tag12--------START--------");
var Tag12 = stp.getSWIFTTagValue("12");
stp.updateFieldValue("SUB_MESS_TYPE", Tag12);
stp.writeLog("tag12---------END----------");

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