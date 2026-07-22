var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
var CE_REF = DV.getFieldValue("FA_CE_MAIN_REF");
DV.writeLog("CE_REF=" + CE_REF);
if (CE_REF != " " && CE_REF != null && CE_REF != "") {
    if (FA_BUSI_TYPE == 'SF' || FA_BUSI_TYPE == 'DD') {
        DV.writeLog("gapRF");
        DV.appendField("FADA_BKTS_FADA_007_ACNTR_RF_ME");
        DV.writeLog("gapiRFEND");
    } else if (FA_BUSI_TYPE == 'RD') {
        DV.writeLog("gapi33333");
        DV.appendField("FADA_BKTS_FADA_007_ACNTR_ME", true);
    }
}

if (FA_BUSI_TYPE == 'SF' || FA_BUSI_TYPE == 'DD') {
    DV.writeLog("SEND SELLER");
    DV.appendField("FADA_AmendAgreement_EE2CE_Seller_ME");
} else if (FA_BUSI_TYPE == 'RD') {
    DV.writeLog("SEND BUYER");
    DV.appendField("FADA_AmendAgreement_EE2CE_Buyer_ME");
}