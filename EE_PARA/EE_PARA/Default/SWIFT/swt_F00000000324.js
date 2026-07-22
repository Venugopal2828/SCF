/* for RMA Check Start */
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_430 = DV.getFieldValue("COLL_BK_SW_ADD");

var sResult_430 = DV.checkRMA(sB1, sB2_430, "430");
/* for RMA Check End */

var MESG_Type = DV.getFieldValue("SEND_AMD_BY");

var AMD_TYPE = DV.getFieldValue("AMD_TYPE");
if (AMD_TYPE != 'Release Free of Payment') {
    if (MESG_Type == 'MT430') {
        if (sResult_430 == "TRUE") {
            DV.appendSWIFT("EXCO_SWIFT_MT430");
        } else {
            var arr_para = new Array(sB1, sB2_430, "430");
            DV.throwException('1847', arr_para);
        }
    }
}
if (MESG_Type == 'MT999') {
    DV.appendSWIFT("EXCO_SWIFT_MT999");
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