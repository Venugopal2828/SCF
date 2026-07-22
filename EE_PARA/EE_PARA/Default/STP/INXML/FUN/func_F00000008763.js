stp.setAutoProcess(true);
stp.writeLog("============EPLC_ProcessBoleroEBLIn====start============");
stp.setGapiRule("Bolero_EPLC_RecRegDoc");

var MSG_TYPE = stp.getXMLNodeValue("MSG_TYPE");

stp.updateFieldValue("MSG_TYPE", MSG_TYPE);


var ref = stp.getXMLNodeValue("C_MAIN_REF");

stp.updateFieldValue("C_MAIN_REFE_ID", ref);

stp.updateFieldValue("CURRNT_STATUS", "EPLC_ProcessBoleroEBLIn");

stp.writeLog("============EPLC_ProcessBoleroEBLIn====END============");