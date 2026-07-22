DV.writeLog("----------CAR Gapi Start---------");
var FA_BA_FLG = DV.getFieldValue("FA_BA_FLG");
if (FA_BA_FLG == "1") {
    DV.appendField("FADA_CAR_LMTS");
}
DV.writeLog("----------CAR Gapi End---------");