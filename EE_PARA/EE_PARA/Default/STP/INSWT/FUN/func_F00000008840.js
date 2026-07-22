stp.setAutoProcess(true);
stp.writeLog("-----------START-----------");
/* tag20 */
var ref = stp.SYS_getRefNo("COMM");
stp.setMainRef(ref);
stp.writeLog("tag20@@@@@@START@@@@@@");
stp.updateFieldValue("C_MAIN_REF", ref);
stp.updateFieldValue("SUB_MESS_TYPE", 719);
stp.writeLog("tag20---------END------------");