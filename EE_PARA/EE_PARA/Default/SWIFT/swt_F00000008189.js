var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_700 = DV.getFieldValue("ADV_BK_SW_ADD");
var sB2_740 = DV.getFieldValue("REIM_BK_SW_ADD");
var ADV_BK_CORR_MED = DV.getFieldValue("ADV_BK_CORR_MED");
var REIM_BK_AUTH_REQ = DV.getFieldValue("REIM_BK_AUTH_REQ");
var REIM_BK_CORR_MED = DV.getFieldValue("REIM_BK_CORR_MED");
DV.writeLog("11111111111111111");
if (ADV_BK_CORR_MED == 'SWIFT') {
    DV.writeLog("222222222222222");
    var sResult_700 = DV.checkRMA(sB1, sB2_700, "700");
    if (sResult_700 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT700_ISSUE");
        DV.writeLog("Output MT700_ISSUE");
    } else {
        var arr_para = new Array(sB1, sB2_700, "700");
        DV.throwException("1847", arr_para);
    }
}

/* DV.appendSWIFT("IPLC_MT999_ISSUE"); */
if (REIM_BK_AUTH_REQ == 'Yes' && REIM_BK_CORR_MED == 'SWIFT') {
    DV.writeLog("1111111111111111111111111111");
    var sResult_740 = DV.checkRMA(sB1, sB2_740, "740");
    if (sResult_740 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT740_IssLC");
        DV.writeLog("Output MT740_IssLC");
    } else {
        var arr_para = new Array(sB1, sB2_740, "740");
        DV.throwException("1847", arr_para);

    }
}



var MESG_TYPE_BANK;
var records = DV.getRecords("AdviceForBankCust");
for (var i = 0; i < records.length; i++) {
    MESG_TYPE_BANK = DV.getDOValue(records[i], "MESG_TYPE_BANK");
    type = DV.getNodeAttr(records[i], "Type");

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