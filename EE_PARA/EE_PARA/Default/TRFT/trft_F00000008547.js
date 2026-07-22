if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var ACPT_REJ = DV.getFieldValue("ACPT_REJ");
    if (ACPT_REJ == "Apply") {
        DV.appendField("GTEE_GTEE_AmdtoMaster");
    }

}