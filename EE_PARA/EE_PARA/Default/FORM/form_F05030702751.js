var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
DV.writeLog("FA_BUSI_TYPE=" + FA_BUSI_TYPE);
if (FA_BUSI_TYPE == 'DF') {
    DV.appendField("FADA_DF_AGREEMENT");
}
/*DV.appendField("FADA_DF_AGREEMENT","DFAgreement","FA_SERVICE_APPRVD='1'");*/