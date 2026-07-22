var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_730 = DV.getFieldValue("ISSUE_BK_SW_ADD");
var sB2_799 = DV.getFieldValue("ISSUE_BK_SW_ADD");
var sB2_999 = DV.getFieldValue("ISSUE_BK_SW_ADD");

var sResult_730 = DV.checkRMA(sB1, sB2_730, "730");
var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");
var sResult_999 = DV.checkRMA(sB1, sB2_999, "999");



var Send_Acknowledgement_By = DV.getFieldValue("SEND_TO");

if (Send_Acknowledgement_By == 'MT730') {
    if (sResult_730 == "TRUE") {
        DV.appendSWIFT("REIM_IssueBank_SWIFT730");
    } else {
        var arr_para = new Array(sB1, sB2_730, "730");
        DV.throwException('1847', arr_para);
    }
}
if (Send_Acknowledgement_By == 'MT799') {
    if (sResult_799 == "TRUE") {
        DV.appendSWIFT("REIM_IssueBank_SWIFT799");
    } else {
        var arr_para = new Array(sB1, sB2_799, "799");
        DV.throwException('1847', arr_para);
    }
}
if (Send_Acknowledgement_By == 'MT999') {
    DV.appendSWIFT("REIM_IssueBank_SWIFT999");
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