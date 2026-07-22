stp.setAutoProcess(true);
/*stp.SYS_getCUBK("CLM_CNTR","C_MAIN_REF");*/
stp.writeLog("============IWGT_RECEIVE_SETTEL_STP====start============");

var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.writeLog("C_MAIN_REF========" + C_MAIN_REF);
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);

stp.setGapiRule("IWGT_EEIN");
stp.updateFieldValue("CURRNT_STATUS", "IWGT_RECEIVE_SETTEL_STP");
stp.updateFieldValue("NXT_STATUS", "SettleInwClaim");

stp.writeLog("============IWGT_RECEIVE_SETTEL_STP====END============");