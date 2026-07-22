/*
DV.appendField("FADA_DF_BUYER_LMT","DFAgreement","FA_SERVICE_APPRVD='1'");
*/

//DV.appendField("FADA_FA_AGM_SIGN_FLG");
DV.writeLog("=================transfer start==================");
var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
//var FA_TEMP7 = DV.getFieldValue("FA_TEMP7");
/*if (FA_BUSI_TYPE != 'RF' && FA_TEMP7 > 0) {
    DV.writeLog("--------transfer RF----------");
    DV.appendField("FADA_FA_AGM_SIGN_FLG");
}*/
if (FA_BUSI_TYPE == 'EF') {
    DV.writeLog("--------transfer EF----------");
    DV.appendField("FADA_FADA_SEL_INFO");
}
DV.writeLog("=================transfer end==================");