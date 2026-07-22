var sTEMP_CHAR11 = DV.getFieldValue("TEMP_CHAR11");
var sTEMP_FLG1 = DV.getFieldValue("TEMP_FLG1");
if (sTEMP_FLG1 == '3' && sTEMP_CHAR11 != '') {
    DV.appendField("FFIT_FFIT_Credit802_Payment");
}