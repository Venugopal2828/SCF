DV.writeLog("Begin DisputeRegTask");
DV.setTrxFunction("ReceiveDisputeFromCE");
DV.setAutoProcess(true);
DV.writeLog("============ReceiveDisputefromCE====start============");
var FA_SBR_REF = DV.getFieldValue("EE_C_MAIN_REF");
DV.writeLog("---------------FA_SBR_REF=" + FA_SBR_REF);
DV.updateField("FA_SBR_REF", FA_SBR_REF);
var pre = DV.getFieldValue("FA_BUSI_TYPE");
var UnitCode = DV.getFieldValue("C_UNIT_CODE");
var date = DV.getSysBusiDate();
var year = date.substr(2, 2);
var month = date.substr(5, 2);
var sub = 'DSP';
var ref = DV.SYS_getRefNo("FAEF_DSP_REF");
var dspref = pre + UnitCode + year + month + ref + sub;
DV.updateField("FA_DSP_REF", dspref);
DV.writeLog("---------------dspref=" + dspref);
DV.updateField("C_MAIN_REF", dspref);


var doRecords = DV.getRecords("DisputeReg");

var docccy = DV.getFieldValue("FA_LMT_CCY")
for (var i = 0; i < doRecords.length; i++) {
    DV.writeLog("---------------DO start----");
    var doRec = doRecords[i];
    DV.setDOValue(doRec, "FA_DSP_REF", dspref);
    DV.setDOValue(doRec, "FA_DOC_CCY", docccy);
    DV.setDOValue(doRec, "FSBC_REF", FA_SBR_REF);
    DV.writeLog("---------------docccy=" + docccy);
    DV.writeLog("---------------FA_DSP_REF=" + dspref);
    DV.writeLog("---------------DO end----");
}
DV.writeLog("============ReceiveDisputefromCE====END============");
DV.writeLog("End DisputeRegTask");