if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var BENE_CONS_FLG = DV.getFieldValue("BENE_CONS_FLG");
    if (BENE_CONS_FLG == 'Accepted') {
        DV.appendField("IPLC_IssueLCAmd_toMaster");
    }
    /*DV.appendField("IPLC_IPLC_SYND_AMD");*/


}