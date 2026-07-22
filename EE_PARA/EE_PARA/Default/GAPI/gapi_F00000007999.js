/*
DV.appendField("FADA_BuyerTakeDown");
*/

var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
DV.writeLog("FA_BUSI_TYPE=" + FA_BUSI_TYPE);
if (FA_BUSI_TYPE == 'DF') {

    DV.appendField("FADA_BuyerTakeDown", "DFAgreement", "FA_SERVICE_REQ='1'");
}

/*else if(FA_BUSI_TYPE=='DF'){

DV.appendField("FADA_InsuranceTakeDown","DFAgreement","FA_SERVICE_REQ='1' && FA_INSU_COMP_FLAG='1'");
}*/

var CE_REF = DV.getFieldValue("FA_CE_MAIN_REF");
DV.writeLog("CE_REF=" + CE_REF);
if (CE_REF != " " && CE_REF != null && CE_REF != "") {
    if (FA_BUSI_TYPE == 'DF' || FA_BUSI_TYPE == 'POF') {
        DV.writeLog("gapi111111111111111");
        DV.appendField("FADA_BKTS_FADA_005_CNTR");
        DV.writeLog("gapi222222222222222");
    } else if (FA_BUSI_TYPE == 'RF') {
        DV.writeLog("gapiRF");
        DV.appendField("FADA_BKTS_FADA_005_CNTR_RF");
        DV.writeLog("gapiRFEND");
    } else if (FA_BUSI_TYPE == 'EF' || FA_BUSI_TYPE == 'DISC' || FA_BUSI_TYPE == 'BPO') {
        DV.writeLog("gapi33333");
        DV.appendField("FADA_BKTS_FADA_005_CNTR", true);
        DV.writeLog("gapi4444444");
    }
}