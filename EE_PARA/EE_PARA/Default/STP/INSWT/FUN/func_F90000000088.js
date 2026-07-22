stp.writeLog("Incoming MT787_728 Begin");
stp.setAutoProcess(true);
stp.setEventTimes(0);

var T21S = stp.getSWIFTTagValue("21S");
T21S = T21S.trim();
stp.updateFieldValue("C_MAIN_REF", T21S);
stp.writeLog("21STAG:" + T21S);

stp.updateFieldValue("CURR_STATUS", 'IncomingMT787_728');

var T21P = stp.getSWIFTTagValue("21P");
T21P = T21P.trim();
stp.updateFieldValue("AMD_REF", T21P);
stp.writeLog("21PTAG:" + T21P);

stp.setEventTimesFromTable('IWGT_MASTER');
stp.writeLog("Incoming MT787_728 End");