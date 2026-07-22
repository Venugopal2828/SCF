stp.writeLog("111111");
stp.setAutoProcess(true);
stp.writeLog("222222");
stp.updateFieldValue("CURRNT_STATUS", "Receive MT412");
stp.writeLog("333333");
stp.setEventTimesFromTable("EXCO_MASTER");
stp.writeLog("444444");