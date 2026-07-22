stp.setAutoProcess(true);
stp.writeLog("============ReceiveDisputefromCE====start============");
var FA_SBR_REF = stp.getXMLNodeValue("EE_C_MAIN_REF");
stp.writeLog("---------------FA_SBR_REF=" + FA_SBR_REF);
stp.updateFieldValue("FA_SBR_REF", FA_SBR_REF);
stp.setGapiRule("BKTS_FAEF_011_DISP");
var pre = stp.getXMLNodeValue("FA_BUSI_TYPE");
var UnitCode = stp.getBusiUnit();
var date = stp.getSysBusiDate();
var year = date.substr(2, 2);
var month = date.substr(5, 2);
var sub = 'DSP';
var ref = stp.SYS_getRefNo("FAEF_DSP_REF");
var dspref = pre + UnitCode + year + month + ref + sub;
stp.updateFieldValue("FA_DSP_REF", dspref);
stp.writeLog("---------------dspref=" + dspref);
stp.updateFieldValue("C_MAIN_REF", dspref);


var doRecords = stp.getRecords("DisputeReg");

var docccy = stp.getXMLNodeValue("FA_DOC_CCY")
for (var i = 0; i < doRecords.length; i++) {
    stp.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    stp.setDOValue(doRec, "FA_DSP_REF", dspref);
    stp.setDOValue(doRec, "FA_DOC_CCY", docccy);
    stp.writeLog("---------------docccy=" + docccy);
    stp.writeLog("---------------FA_DSP_REF=" + dspref);
    stp.writeLog("---------------DO end----");
}
stp.writeLog("============ReceiveDisputefromCE====END============");