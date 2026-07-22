var BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
DV.writeLog("***********" + BUSI_TYPE);
if (BUSI_TYPE == 'EF') {
    DV.appendField("InvoiceTransferNew");
}