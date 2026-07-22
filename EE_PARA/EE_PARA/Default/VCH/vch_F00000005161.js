var inv = DV.getFieldValue("SEND_TO_FLAG");
if (inv != "Send to Investigation Queue") {
    var charges = DV.getFieldValue("INW_X103_DET_CHG_71A");
    var dist = DV.getFieldValue("MT103_DISTRBN");
    if (dist.equals('Single Settlement')) {
        var fundsRecv = DV.getFieldValue("FUNDS_RECV");
        if (fundsRecv.equals('Y')) {
            DV.appendField("PYMT_ITT_Single_Settlement");
        }
        if (charges.equals("OUR")) {
            DV.appendField("SSSS_Charges_ITT_OUR_SS");
        } else {
            DV.appendField("SSSS_Charges");
        }
    } else if (dist.equals('Forward Funds')) {
        DV.appendField("PYMT_ITT_Forward_Funds");
        DV.appendField("SSSS_Charges_ITT_OUR_SS");
    } else if (dist.equals('Return of Funds')) {
        DV.appendField("PYMT_ITT_Return_Funds");
        DV.appendField("SSSS_Charges_ITT_OUR_SS");
    }
}