/*if(DV.getFieldValue("R_LMT_DECISION_FLG")!="Failed"){
var WEB_REF=DV.getFieldValue("WEB_REF");
DV.appendField("IPLC_IMLC_EEOUT");
}*/

var BENE_CONS_FLG = DV.getFieldValue("BENE_CONS_FLG");
DV.writeLog(BENE_CONS_FLG);
if (BENE_CONS_FLG == 'Accepted') {
    DV.appendField("IPLC_IMLC_008_Amd");
}
if (BENE_CONS_FLG == 'Rejected') {
    DV.appendField("IPLC_IMLC_010_BnfcryDesin");
}