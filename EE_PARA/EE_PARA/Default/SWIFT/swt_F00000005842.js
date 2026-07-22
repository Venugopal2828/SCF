var Pyt_103 = DV.getFieldValue("CPYT_PAY_ADV_MSG");
var Cov_Pyt = DV.getFieldValue("CPYT_PAY_COV_MSG");
var Distribution = DV.getFieldValue("MT103_DISTRBN");
var merge_flag_103 = DV.getFieldValue("MERGE_FLAG_103");
var merge_flag_202 = DV.getFieldValue("MERGE_FLAG_202");
if (Distribution == "Forward Funds") {
    if (Pyt_103 == "MT103" && merge_flag_103 == "NO") {
        if (Cov_Pyt == "MT202COV" && merge_flag_202 == "NO") {
            DV.appendSWIFT("PYMT_PYTMT103");
            DV.appendSWIFT("PYMT_PYTMT202COV");
        } else {
            DV.appendSWIFT("PYMT_PYTMT103");
        }
    }
}
if (Distribution == "Return of Funds") {
    if (Cov_Pyt == "MT202") {
        DV.appendSWIFT("PYMT_PYTMT202");
    }
}

DV.appendSWIFT("PYMT_MT299_toTracker");