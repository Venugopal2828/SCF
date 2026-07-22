var sPreDeduct = DV.getFieldValue("PRE_DEDUCTED_CHG");
if (sPreDeduct > 0 && sPreDeduct != '') {
    DV.appendField("FFIT_Card842Credit_Financing2");
}
var sTEMP_CHAR11 = DV.getFieldValue("TEMP_CHAR11");
var sTEMP_FLG1 = DV.getFieldValue("TEMP_FLG1");
if (sTEMP_FLG1 == '3' && sTEMP_CHAR11 != '') {
    DV.appendField("FFIT_FFIT_Credit802_Finance2");
}