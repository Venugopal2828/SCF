var newamt = DV.toFloat(DV.getFieldValue("FA_ANCHOR_AMT"));
DV.writeLog(newamt+"newamt");
var oldamt = DV.toFloat(DV.getFieldValue("FA_ANCHOR_AMT_OLD"));
DV.writeLog(oldamt+"oldamt");
var FA_BUSI_FUNC = DV.getFieldValue("FA_BUSI_FUNC");
DV.writeLog("======Add for extend===========");
if (newamt!=oldamt || FA_BUSI_FUNC==1){
 DV.appendField("FADA_CSSCF_AmendAgreement");
}