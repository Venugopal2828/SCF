var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_799 = DV.getFieldValue("SEND_TO_SW_ADD");
var MESG_TYPE = DV.getFieldValue("MESG_TYPE");
if (MESG_TYPE == 'MT799') {
    var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");
    if (sResult_799 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT799_PayAccept");
    } else {
        var arr_para = new Array(sB1, sB2_799, "799");
        DV.throwException("1847", arr_para);
    }
}

if (MESG_TYPE == 'MT999') {
    DV.appendSWIFT("IPLC_MT999_PayAccept");
}

var MT798_FLG = DV.getFieldValue("APPLY_FLG");
var SUB_MESS_TYPE = DV.getFieldValue("SUB_MESS_TYPE");
if (MT798_FLG == "YES") {
    if (SUB_MESS_TYPE == '755') {
        DV.appendSWIFT("IPLC_OUT_MT755");
    } else if (SUB_MESS_TYPE == '757') {
        DV.appendSWIFT("IPLC_OUT_MT757");
    }
}