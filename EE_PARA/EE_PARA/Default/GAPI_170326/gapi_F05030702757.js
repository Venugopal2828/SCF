var FA_BUSI_TYPE = DV.getFieldValue("FA_BUSI_TYPE");
if (FA_BUSI_TYPE == 'DF') {

    DV.appendField("FADA_AmdTakeDown", "DFAgreement", "FA_SERVICE_REQ='1'");
}
/*
if(FA_BUSI_TYPE=='DF'){
DV.writeLog("11111111");
DV.appendField("FADA_AmdInsuranceTakeDown","DFAgreement","FA_SERVICE_REQ='1' && FA_INSU_COMP_FLAG='1'");
}

var CE_REF=DV.getFieldValue("FA_CE_MAIN_REF");
if(CE_REF!=" " && CE_REF != null && CE_REF != "")
{
DV.appendField("FADA_BKTS_FADA_007_ACNTR");

}
*/
var CE_REF = DV.getFieldValue("FA_CE_MAIN_REF");
DV.writeLog("CE_REF=" + CE_REF);
if (CE_REF != " " && CE_REF != null && CE_REF != "") {
    if (FA_BUSI_TYPE == 'DF' || FA_BUSI_TYPE == 'POF') {
        DV.writeLog("gapi111111111111111");
        DV.appendField("FADA_BKTS_FADA_007_ACNTR");
        DV.writeLog("gapi222222222222222");
    } else if (FA_BUSI_TYPE == 'RF') {
        DV.writeLog("gapRF");
        DV.appendField("FADA_BKTS_FADA_007_ACNTR_RF");
        DV.writeLog("gapiRFEND");
    } else if (FA_BUSI_TYPE == 'EF' || FA_BUSI_TYPE == 'DISC' || FA_BUSI_TYPE == 'BPO') {
        DV.writeLog("gapi33333");
        DV.appendField("FADA_BKTS_FADA_007_ACNTR", true);
        DV.writeLog("gapi4444444");
    }
}