DV.writeLog("----------Gapi Start---------");
var FA_LMT_AMT = DV.getFieldValue("FA_LMT_AMT");
var IC_LMT_AMT = DV.getFieldValue("IC_LMT_AMT");
var FA_TEMP_FACT_TYPE = DV.getFieldValue("FA_TEMP_FACT_TYPE");
if (FA_LMT_AMT >= 0 && FA_TEMP_FACT_TYPE == "IF") {
    DV.appendField("FADA_Auto_FactorLiability");
} else if (IC_LMT_AMT >= 0 && FA_TEMP_FACT_TYPE == "Insurance") {
    DV.appendField("FADA_Auto_InsuranceLiability");
}
DV.writeLog("----------Gapi End---------");