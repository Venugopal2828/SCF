stp.setAutoProcess(true);
stp.writeLog("============EPLC_RecDiscrepanciesInsFrCE====start============");

stp.setGapiRule("EPLC_EEIN");
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
var DISPOL_INSTR = stp.getXMLNodeValue("DispolInstr");
stp.updateFieldValue("DISPOL_INSTR", DISPOL_INSTR);
var NoOfDrawg = stp.getXMLNodeValue("NoOfDrawg");
if (NoOfDrawg < 10) {
    NoOfDrawg = '0' + NoOfDrawg;
}
var DrawingRef = C_MAIN_REF + '-' + NoOfDrawg;
stp.updateFieldValue("DRAWING_REF", DrawingRef);
/*
stp.SYS_getCUBK("DEL_OF_DRAW","DRAWING_REF");
*/

stp.updateFieldValue("CURRNT_STATUS", "EPLC_ReceiveDiscrepancies_STP");
stp.updateFieldValue("NXT_STATUS", "EPLC_DiscrepancyRespBeneficary");


stp.writeLog("============EPLC_RecDiscrepanciesInsFrCE====END============");