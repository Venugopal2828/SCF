var FINC_TYPE = DV.getFieldValue("FINC_TYPE");
var CFNC_RELA_MAIN_REF = "";
DV.writeLog(FINC_TYPE);
var records = DV.getRecords("FinanceEstablishment");

for (var i = 0; i < records.length; i++) {
    CFNC_RELA_MAIN_REF = DV.getDOValue(records[i], "CFNC_RELA_MAIN_REF");
}

if (FINC_TYPE == 'EXCO') {
    DV.appendField("CFNC_CFNC_EXCO");
} else if (FINC_TYPE == 'IMCO') {
    DV.writeLog(CFNC_RELA_MAIN_REF);
    DV.appendField("CFNC_CFNC_IMCO");
} else if (FINC_TYPE == 'EPLC') {
    DV.appendField("CFNC_CFNC_EPLC_DRAWING");
    DV.appendField("CFNC_CFNC_EPLC");
} else if (FINC_TYPE == 'IPLC') {
    DV.appendField("CFNC_CFNC_IPLC_DRAWING");
    DV.appendField("CFNC_CFNC_IPLC");
}