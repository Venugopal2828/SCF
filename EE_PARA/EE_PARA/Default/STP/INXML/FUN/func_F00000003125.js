stp.setAutoProcess(true);
stp.writeLog("============IMCO_ReceivePmtIns====start============");
stp.setGapiRule("IMCO_004_PmtInstr");
/*stp.SYS_getCUBK("DEL_OF_DRAW","DRAWING_REF");*/
stp.updateFieldValue("CURRNT_STATUS", "IMCO_ReceivePmtIns");
stp.updateFieldValue("NXT_STATUS", "PaymentDP");
stp.writeLog("============IMCO_ReceivePmtIns====END============");