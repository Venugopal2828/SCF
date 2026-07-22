var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
var FA_BUSI_FUNC = DV.getFieldValue("FA_BUSI_FUNC");
if (FA_BUSI_TYPE == 'EF' && FA_BUSI_FUNC == '2') {

    DV.appendField("AgreementTerminate", "EndCtr");
}