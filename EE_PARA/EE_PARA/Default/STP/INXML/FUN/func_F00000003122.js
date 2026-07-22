stp.setAutoProcess(true);
/* for AMD_REF && NO_OF_AMD */
stp.writeLog("============IWGT_APPLY_REJECT_STP====start============");
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
var WEB_REF = stp.getXMLNodeValue("CEMainRef");
stp.writeLog("WEB_REF_REF=====" + WEB_REF);

/*
stp.SYS_getCUBK("NO_OF_AMD","C_MAIN_REF");

var NO_OF_AMD=stp.toInteger(stp.getFieldValue("NO_OF_AMD"))+1;
if(NO_OF_AMD<10)
{
NO_OF_AMD='0'+NO_OF_AMD;
}

var ref =C_MAIN_REF + "/" + NO_OF_AMD;
stp.updateFieldValue("AMD_REF",ref);
stp.updateFieldValue("NO_OF_AMD",NO_OF_AMD);
*/
stp.updateFieldValue("WEB_REF", WEB_REF);

stp.updateFieldValue("BENE_CONST_REQ", "YES");

stp.setGapiRule("IWGT_EEIN");

stp.updateFieldValue("CURRNT_STATUS", "IWGT_APPLY_REJECT_STP");
stp.updateFieldValue("NXT_STATUS", "ApplyRejectInwardAmend");

stp.writeLog("============IWGT_APPLY_REJECT_STP====END============");