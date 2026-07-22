DV.writeLog("-------Gapi Start-------");
var baFlg = DV.getFieldValue("FA_BA_FLG");
var IFIncrAmt = DV.getFieldValue("FA_IF_INCR_AMT");
if (baFlg == '1' && DV.toFloat(IFIncrAmt) > 0) {
    DV.appendField("FADA_LMTS_For_IF");
}
DV.writeLog("-------Gapi End-------");
var CE_REF = DV.getFieldValue("FA_CE_MAIN_REF");
DV.writeLog("CE_REF=" + CE_REF);
if (CE_REF != " " && CE_REF != null && CE_REF != "")
    DV.writeLog("MICHAEL1------------"); {
    DV.appendField("FADA_BKTS_FAEF_004_CCRR");
}
DV.writeLog("MICHAEL2-------------");