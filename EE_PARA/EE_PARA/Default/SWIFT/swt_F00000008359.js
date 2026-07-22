var sB1 = DV.getFieldValue("LOGIN_BIC");
var MESG_TYPE = DV.getFieldValue("MESG_TYPE");

if (MESG_TYPE == 'MT799') {
    var sB2_799 = DV.getFieldValue("PRES_BK_SW_ADD");
    var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");
    if (sResult_799 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT799_RefuseDocuments");
    } else {
        var arr_para = new Array(sB1, sB2_799, "799");
        DV.throwException("1847", arr_para);
    }
}

if (MESG_TYPE == 'MT734') {
    var sB2_734 = DV.getFieldValue("PRES_BK_SW_ADD");
    var sResult_734 = DV.checkRMA(sB1, sB2_734, "734");
    if (sResult_734 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT734_RefuseDocuments");
    } else {
        var arr_para = new Array(sB1, sB2_734, "734");
        DV.throwException("1847", arr_para);
    }
}
var sB2_999 = DV.getFieldValue("PRES_BK_SW_ADD");
if (sB2_999 != '' && MESG_TYPE == 'MT999') {
    DV.appendSWIFT("IPLC_MT999_RefuseDocuments");
}