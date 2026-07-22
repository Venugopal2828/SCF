var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_744 = DV.getFieldValue("CLM_BK_SW_ADD");
var sB2_730 = DV.getFieldValue("ISSUE_BK_SW_ADD");
var sB2_799 = DV.getFieldValue("ISSUE_BK_SW_ADD");
var sB2_999 = DV.getFieldValue("ISSUE_BK_SW_ADD");

var sResult_744 = DV.checkRMA(sB1, sB2_744, "744");
var sResult_730 = DV.checkRMA(sB1, sB2_730, "730");
var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");
var sResult_999 = DV.checkRMA(sB1, sB2_999, "999");

if (sResult_744 == "TRUE") {
    DV.appendSWIFT("REIM_OUT_MT744");
} else {
    var arr_para = new Array(sB1, sB2_744, "744");
    DV.throwException('1847', arr_para);
}

var SEND_TYPE = DV.getFieldValue("SEND_TO");
var SEND_TO = DV.getFieldValue("MESG_TYPE");

if (SEND_TYPE == 'MT730') {
    if (sResult_730 == "TRUE") {
        DV.appendSWIFT("REIM_IssueBank_SWIFT730");
    } else {
        var arr_para = new Array(sB1, sB2_730, "730");
        DV.throwException('1847', arr_para);
    }
}
if (SEND_TYPE == 'MT799') {
    if (sResult_799 == "TRUE") {
        DV.appendSWIFT("REIM_IssueBank_SWIFT799");
    } else {
        var arr_para = new Array(sB1, sB2_799, "799");
        DV.throwException('1847', arr_para);
    }
}
if (SEND_TYPE == 'MT999') {
    if (sResult_999 == "TRUE") {
        DV.appendSWIFT("REIM_IssueBank_SWIFT999");
    } else {
        var arr_para = new Array(sB1, sB2_999, "999");
        DV.throwException('1847', arr_para);
    }
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