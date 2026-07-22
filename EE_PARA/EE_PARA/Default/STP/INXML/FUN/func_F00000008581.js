stp.writeLog("===================START===============");
stp.setAutoProcess(true);
stp.updateFieldValue("CLS_FLG", "NO");
stp.setGapiRule("OWGT_007_ResmtAmdApplctn");
stp.updateFieldValue("NXT_STATUS", "ReviewGTEEAmtFrCE");
stp.updateFieldValue("CURRNT_STATUS", "RecResubmitGTAmtFromCE");
stp.writeLog("===================END===============");