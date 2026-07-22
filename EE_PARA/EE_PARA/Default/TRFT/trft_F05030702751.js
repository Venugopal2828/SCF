/*
DV.appendField("FADA_DF_BUYER_LMT","DFAgreement","FA_SERVICE_APPRVD='1'");
*/
var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
if (FA_BUSI_TYPE == 'EF') {

    DV.appendField("FADA_FADA_SEL_INFO");
}
if (FA_BUSI_TYPE == 'DISC') {
    DV.appendField("FADA_FADA_PRE_CREDIT");
}