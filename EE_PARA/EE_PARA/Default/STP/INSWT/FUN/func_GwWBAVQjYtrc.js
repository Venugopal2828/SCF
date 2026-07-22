var sUUID = java.util.UUID.randomUUID().toString();
stp.updateFieldValue("C_MAIN_REF", sUUID);

/* create C_MAIN_REF 
var ref = stp.SYS_getRefNo("TRMM_IP_REF");
stp.setMainRef(ref);
stp.writeLog("C_MAIN_REF=====" + ref);*/

stp.setAutoProcess(true);
stp.setEventTimes(0);
stp.match("MT320",";%EXIMTRX%.TRMM_MASTER;MT320_MATCH_STATUS");