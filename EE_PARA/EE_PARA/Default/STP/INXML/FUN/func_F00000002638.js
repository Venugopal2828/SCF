stp.writeLog("===================START===============");
stp.setAutoProcess(true);
stp.updateFieldValue("CLS_FLG", "No");
stp.setGapiRule("IMLC_EEIN");
stp.updateFieldValue("NXT_STATUS", "ReviewLCFromCE");
stp.updateFieldValue("CURRNT_STATUS", "ResubmitLCFromCE");
stp.writeLog("===================END===============");