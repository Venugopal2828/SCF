stp.setAutoProcess(true);
stp.writeLog("============EPLC_GeneralCorrespondenceIn====start============");
stp.setGapiRule("Bolero_EPLC_GeneralCorrIn");
var C_MAIN_REF = stp.getXMLNodeValue("C_MAIN_REF");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);

stp.writeLog("============EPLC_GeneralCorrespondenceIn====END============");