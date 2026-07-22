DV.appendField("CreditCoverReq");
var msg01 = DV.getFieldValue("TEMP_FLG1");
if (msg01 == '1') {
    DV.appendField("SellerInformation");
}