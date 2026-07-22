DV.writeLog("--------swift start--------");
var FA_REMI_AMT = DV.getFieldValue("FA_REMI_AMT");
if (FA_REMI_AMT > 0) {
    DV.appendSWIFT("FADA_Commission202");
}
DV.writeLog("--------swift end--------");