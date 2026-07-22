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

var sB1 = DV.getFieldValue("LOGIN_BIC");
var ADV_PRES_BY = DV.getFieldValue("ADV_PRES_BY");
var ADV_APPL_GLG = DV.getFieldValue("ADV_APPL_FLG");

if (ADV_PRES_BY == 'MT734') {
    var sB2_734 = DV.getFieldValue("PRES_BK_SW_ADD");
    var sResult_734 = DV.checkRMA(sB1, sB2_734, "734");
    if (sResult_734 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT734_RegisterDiscrepancies");
    } else {
        var arr_para = new Array(sB1, sB2_734, "734");
        DV.throwException("1847", arr_para);
    }
} else if (ADV_PRES_BY == 'MT999') {
    DV.appendSWIFT("IPLC_MT999_RegisterDiscrepancies");
}

var MT798_FLG = DV.getFieldValue("APPLY_FLG");
if (MT798_FLG == "YES") {
    DV.appendSWIFT("IPLC_OUT_MT750_MT748");
}