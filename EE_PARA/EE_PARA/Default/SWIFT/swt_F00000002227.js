/* for RMA Check Start */
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_420 = DV.getFieldValue("COLL_BK_SW_ADD");
var sB2_499 = DV.getFieldValue("COLL_BK_SW_ADD");
var sResult_420 = DV.checkRMA(sB1, sB2_420, "420");
var sResult_499 = DV.checkRMA(sB1, sB2_499, "499");
/* for RMA Check End */

var MESG_TYPE = DV.getFieldValue("MESG_TYPE");

if (MESG_TYPE == 'MT499') {
    if (sResult_499 == "TRUE") {
        DV.appendSWIFT("EXCO_SWIFT_MT499");
    } else {
        var arr_para = new Array(sB1, sB2_499, "499");
        DV.throwException('1847', arr_para);
    }
}
if (MESG_TYPE == 'MT999') {
    DV.appendSWIFT("EXCO_SWIFT_MT999");
}
if (MESG_TYPE == 'MT420') {
    if (sResult_420 == "TRUE") {
        DV.appendSWIFT("EXCO_SWIFT_MT420");
    } else {
        var arr_para = new Array(sB1, sB2_420, "420");
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