var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_705 = DV.getFieldValue("ADV_BK_SW_ADD");
var FLG = DV.getFieldValue("SEND_MT705_FLG");
if (FLG == 'Yes') {
    var sResult_705 = DV.checkRMA(sB1, sB2_705, "705");
    if (sResult_705 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT705_RegisterLC");
    } else {
        var arr_para = new Array(sB1, sB2_705, "705");
        DV.throwException("1847", arr_para);
    }
}