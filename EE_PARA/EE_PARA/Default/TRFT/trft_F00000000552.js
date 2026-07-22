/*DV.appendField("IWGT_IWGT_SyndAmd");*/
var BENE_CONST_REQ = DV.getFieldValue("BENE_CONST_REQ");
if (BENE_CONST_REQ == "NO") {
    DV.appendField("IWGT_IWGT_AmdtoMaster");
}