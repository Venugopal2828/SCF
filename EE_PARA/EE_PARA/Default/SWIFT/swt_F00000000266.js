/* for RMA Check Start */
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_705 = DV.getFieldValue("TRM_TO_BK_SW_ADD");
var sB2_730 = DV.getFieldValue("ISSUE_BK_SW_ADD");
var sB2_799 = DV.getFieldValue("ISSUE_BK_SW_ADD");

var sResult_705 = DV.checkRMA(sB1, sB2_705, "705");
var sResult_730 = DV.checkRMA(sB1, sB2_730, "730");
var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");
/* for RMA Check End */

var ADV_LC_BY = DV.getFieldValue("ADV_LC_BY");
if (ADV_LC_BY == "SWIFT to Beneficiary's Bank") {
    if (sResult_705 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT705");
    } else {
        var arr_para = new Array(sB1, sB2_705, "705");
        DV.throwException('1847', arr_para);
    }
}
var ACK_MTHD = DV.getFieldValue("ACK_MTHD");
if (ACK_MTHD == 'MT730') {
    if (sResult_730 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT730");
    } else {
        var arr_para = new Array(sB1, sB2_730, "730");
        DV.throwException('1847', arr_para);
    }
}
if (ACK_MTHD == 'MT799') {
    if (sResult_799 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT799");
    } else {
        var arr_para = new Array(sB1, sB2_799, "799");
        DV.throwException('1847', arr_para);
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