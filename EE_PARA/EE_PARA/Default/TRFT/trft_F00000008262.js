if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    DV.appendField("IPLC_RegDoc_PRES_BAL_toMaster");
    var DOC_STAT = DV.getFieldValue("DOC_STAT");
    if (DOC_STAT == 'Under Shipping Guarantee') {
        DV.appendField("IPLC_IPLC_SHGT");
    }
}