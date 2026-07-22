DV.appendField("CreditCoverR5_Out");
var msg01Flg = DV.getFieldValue("TEMP_FLG1");
if (msg01Flg == '1') {
    DV.appendField("CreditCoverR_Out");
}