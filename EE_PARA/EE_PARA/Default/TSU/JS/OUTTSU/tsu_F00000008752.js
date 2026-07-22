var ACTION_FLG = DV.getFieldValue("TSU_ACCEPT_MISMATCH");
if (ACTION_FLG == "Y") {
    DV.appendInternalTSU("tsmt.020.001.02", "R2");
} else if (ACTION_FLG == "N") {
    DV.appendInternalTSU("tsmt.022.001.02", "R2");
}