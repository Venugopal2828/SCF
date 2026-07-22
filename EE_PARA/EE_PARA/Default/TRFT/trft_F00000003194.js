if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var DOC_STAT = DV.getFieldValue("DOC_STAT");
    if (DOC_STAT == 'YES') {
        DV.appendField("IMCO_IMCO_SHGT");
    }
}