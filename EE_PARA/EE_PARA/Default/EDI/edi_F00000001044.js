DV.writeLog("****EDI start***");
var busitype = DV.getFieldValue("FA_BUSI_TYPE");
DV.writeLog("FA_BUSI_TYPE=" + busitype);
if (busitype == 'EF') {
    DV.appendField("CreditNotesCancel", "EFIncAjustCancel");
}
DV.writeLog("****EDI end***");