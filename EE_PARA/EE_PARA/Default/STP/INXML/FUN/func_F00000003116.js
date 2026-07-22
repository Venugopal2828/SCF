stp.setAutoProcess(true);
stp.writeLog("============EPLC_ReceivePmtIns====start============");
stp.setGapiRule("EPLC_EEIN");
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
var ceRef = stp.getXMLNodeValue("CEMainRef");
/*var noofDraw = ceRef.split("-")[1];
if(noofDraw<10)
{
noofDraw='0'+noofDraw;
}
var DrawingRef=C_MAIN_REF+'-'+noofDraw;
stp.updateFieldValue("DRAWING_REF",DrawingRef);*/
stp.updateFieldValue("CURRNT_STATUS", "EPLC_ReceivePmtIns");
stp.updateFieldValue("NXT_STATUS", "EPLC_PayAccept");

stp.writeLog("============EPLC_ReceivePmtIns====END============");