DV.writeLog("=================transfer start==================");
var ACTIVITY = DV.getFieldValue("FA_BUSI_FUNC");
var FA_TEMP7 = DV.getFieldValue("FA_TEMP7");
if (ACTIVITY == '2' && FA_TEMP7 > 0) {
    DV.writeLog("--------END AGR TO UPDATE SBR STATUS----------");
    DV.appendField("FADA_FA_AGM_SIGN_FLG_ME");
}

DV.writeLog("=================transfer end==================");