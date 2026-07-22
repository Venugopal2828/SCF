if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var DETRMNTL_FLG = DV.getFieldValue("DETRMNTL_FLG");
    if (DETRMNTL_FLG == 'No') {
        DV.appendField("IPLC_IssueLCAmd_toMaster");
    }
    /*DV.appendField("IPLC_IPLC_SYND_AMD");*/

}