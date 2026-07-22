stp.writeLog("===================START===============");
stp.setAutoProcess(true);
stp.updateFieldValue("CLS_FLG", "NO");
stp.setGapiRule("OWGT_003_ResmtGteeApplctn");
stp.updateFieldValue("NXT_STATUS", "ReviewGTEEFromCE");
stp.updateFieldValue("CURRNT_STATUS", "RecResubmitGTEEFromCE");

stp.writeLog("===================END===============");