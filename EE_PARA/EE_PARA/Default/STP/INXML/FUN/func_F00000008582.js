stp.writeLog("===================START===============");
stp.setAutoProcess(true);
stp.setGapiRule("OWGT_012_ClmRsponSttlmInstr");
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);

stp.updateFieldValue("CURRNT_STATUS", "OWGT_RecClmRsponSttlmInstrFrCE");
stp.updateFieldValue("NXT_STATUS", "OutwardSett(CE)");
stp.writeLog("===================END===============");