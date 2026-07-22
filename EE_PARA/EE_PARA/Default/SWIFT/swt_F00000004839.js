var Pyt_103 = DV.getFieldValue("CPYT_PAY_ADV_MSG");
var Cov_Pyt = DV.getFieldValue("CPYT_PAY_COV_MSG");
var CR_AMT = DV.getFieldValue("CR_CALC_AMT");
var DR_AMT = DV.getFieldValue("DB_CALC_AMT");
var merge_flag_103 = DV.getFieldValue("MERGE_FLAG_103");
var merge_flag_202 = DV.getFieldValue("MERGE_FLAG_202");
if ((Pyt_103 == "MT103" || Pyt_103 == "MT103+") && merge_flag_103 == "NO") {
    DV.appendSWIFT("PYMT_PYTMT103");
}
if (Cov_Pyt == "MT202COV" && merge_flag_202 == "NO") {
    DV.appendSWIFT("PYMT_PYTMT202COV");
}
if (Cov_Pyt == "MT202" && merge_flag_202 == "NO") {
    DV.appendSWIFT("PYMT_PYTMT202");
}
if (CR_AMT > 0 && Cov_Pyt == '' && merge_flag_103 == "NO") {
    DV.appendSWIFT("PYMT_PYMT910");
}
var merge_flag_110 = DV.getFieldValue("MT110_FLAG");
if (merge_flag_110 == "Yes") {
    DV.appendSWIFT("PYMT_DraftMT110");
}