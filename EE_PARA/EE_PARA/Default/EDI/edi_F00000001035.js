var SERVICE_REQ = DV.getFieldValue("FA_SERVICE_REQ");
DV.writeLog("SERVICE_REQ===============" + SERVICE_REQ);
if (SERVICE_REQ == '1' || SERVICE_REQ == '2') {
    DV.appendField("CreditCoverReq");
}
var msg01Flg = DV.getFieldValue("TEMP_FLG1");
DV.writeLog("msg01Flg===============" + msg01Flg);
if (msg01Flg == "1") {
    DV.appendField("SellerInformation");
}
var FA_INV_CCY1 = DV.getFieldValue("FA_INV_CCY1");
var FA_INV_CCY2 = DV.getFieldValue("FA_INV_CCY2");
var FA_INV_CCY3 = DV.getFieldValue("FA_INV_CCY3");
var FA_INV_CCY = DV.getFieldValue("FA_APPL_LMT_CCY");
DV.writeLog("FA_INV_CCY1===============" + FA_INV_CCY1);
DV.writeLog("FA_INV_CCY2===============" + FA_INV_CCY2);
DV.writeLog("FA_INV_CCY3===============" + FA_INV_CCY3);
DV.writeLog("FA_INV_CCY===============" + FA_INV_CCY);
if (!FA_INV_CCY1.equalsIgnoreCase('') && !FA_INV_CCY1.equalsIgnoreCase(FA_INV_CCY)) {
    DV.appendField("CreditCoverReq51");
}
if (!FA_INV_CCY2.equalsIgnoreCase('') && !FA_INV_CCY2.equalsIgnoreCase(FA_INV_CCY)) {
    DV.appendField("CreditCoverReq52");
}
if (!FA_INV_CCY3.equalsIgnoreCase('') && !FA_INV_CCY3.equalsIgnoreCase(FA_INV_CCY)) {
    DV.appendField("CreditCoverReq53");
}