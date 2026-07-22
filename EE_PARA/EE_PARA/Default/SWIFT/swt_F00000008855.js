var MESG_TYPE = DV.getFieldValue('MESG_TYPE');
var TEMP_CATEGORY_FLG = DV.getFieldValue('TEMP_CATEGORY_FLG');
var TEMP_MESG_TYPE = DV.getFieldValue('TEMP_MESG_TYPE');
var SWIFT_RULE = 'SSSS_SYT_';
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_CORR = DV.getFieldValue("CORR_SW_ADD");
var sResult_CORR = 'TRUE';
if (TEMP_MESG_TYPE == '') {
    sResult_CORR = 'FALSE';
} else if (MESG_TYPE.substr(0, 2) == 'MT' && TEMP_CATEGORY_FLG != '') {
    sResult_CORR = DV.checkRMA(sB1, sB2_CORR, TEMP_MESG_TYPE.substr(2, 3));
    if (sResult_CORR == 'TRUE') {
        SWIFT_RULE = SWIFT_RULE + TEMP_MESG_TYPE;
        DV.appendSWIFT(SWIFT_RULE);
    } else {
        var arr_para = new Array(sB1, sB2_CORR, TEMP_MESG_TYPE.substr(2, 3));
        DV.throwException("1847", arr_para);
    }
}