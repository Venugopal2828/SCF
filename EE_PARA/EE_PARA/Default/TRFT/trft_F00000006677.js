var BENE_REPLY = DV.getFieldValue("BENE_CONS_FLG");

if (BENE_REPLY == 'ACCEPTED') {
    DV.appendField("SBLC_SBLC_insertinto_MASTER");
}
//DV.appendField("SBLC_SBLC_SYND_AMD");