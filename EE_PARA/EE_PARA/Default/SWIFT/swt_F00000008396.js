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

var MESG_TYPE_BANK;
var records = DV.getRecords("AdviceForBankCust");
for (var i = 0; i < records.length; i++) {
    MESG_TYPE_BANK = DV.getDOValue(records[i], "MESG_TYPE_BANK");
    type = DV.getNodeAttr(records[i], "Type");
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2 = DV.getDOValue(records[i], "SEND_TO_BK_SW_ADD");
    var sMT = MESG_TYPE_BANK.substr(2, 3);
    if (MESG_TYPE_BANK.substr(0, 2) == 'MT' && type != 'D') {
        var sResult = DV.checkRMA(sB1, sB2, sMT);
        if (sResult == "TRUE" || sMT == "999") {
            DV.appendDOSWIFT('SSSS_sendtobank_sw_mt' + MESG_TYPE_BANK.substr(2, 3), i, "AdviceForBankCust");
        } else {
            var arr_para = new Array(sB1, sB2, sMT);
            DV.throwException('1847', arr_para);
        }
    }
}

var MT798_FLG = DV.getFieldValue("APPLY_FLG");
if (MT798_FLG == "YES") {
    DV.appendSWIFT("IPLC_OUT_MT754_MT753");
}
var ACPT_MSG = DV.getFieldValue("ACPT_MSG");
if (ACPT_MSG == 'MT752') {
    DV.appendSWIFT("IPLC_OUT_MT752");
}