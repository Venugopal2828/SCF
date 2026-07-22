var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_759 = DV.getFieldValue("X103_ADV_BKSW_B2");
var sResult_759 = DV.checkRMA(sB1, sB2_759, "759");
if (sResult_759 == 'TRUE') {
    DV.appendSWIFT("COMM_OUT_MT759");
} else {
    var arr_para = new Array(sB1, sB2_759, "759");
    DV.throwException("1847", arr_para);
}
//Add for 2018 SWIFT Validation;
var SEND_MT798 = DV.getFieldValue("APPLY_FLG");
if (SEND_MT798 == 'YES') {
    DV.appendSWIFT("COMM_OUT_759725");
}