stp.setAutoProcess(true);
stp.writeLog("============EPLC_GeneralCorrespondenceInNew====start============");
stp.setGapiRule("Bolero_EPLC_GeneralCorrIn");

/* create C_MAIN_REF */
var ref = stp.SYS_getRefNo("EPLC");
stp.setMainRef(ref);

/*var bene_id=stp.getXMLNodeValue("RECEVER_RID");

stp.updateFieldValue("BENE_ID",bene_id);*/

stp.writeLog("============EPLC_GeneralCorrespondenceInNew====END============");