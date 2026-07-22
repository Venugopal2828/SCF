var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
var CE_REF = DV.getFieldValue("FA_CE_MAIN_REF");
DV.writeLog("CE_REF=" + CE_REF);
if (CE_REF != " " && CE_REF != null && CE_REF != "") {
    if (FA_BUSI_TYPE == 'SF' || FA_BUSI_TYPE == 'DD') {
        DV.appendField("FADA_BKTS_FADA_005_CNTR_RF_ME");
    }
    if (FA_BUSI_TYPE == 'RD') {
        DV.appendField("FADA_BKTS_FADA_005_CNTR_ME");
    }
}
/*DV.writeLog("==SignAgreementFromCE_ME GAPI START==");
DV.appendField("FADA_BKTS_FADA_005_CNTR_ME");
DV.writeLog("==SignAgreementFromCE_ME GAPI END==");*/