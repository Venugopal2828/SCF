/* for RMA Check outwar MT752 */
var sB1 = DV.getFieldValue("LOGIN_BIC");

/* for RMA Check End */

if (DV.getFieldValue("SEND_MT752_FLG") == "Yes") {
    var sB2_752 = DV.getFieldValue("X752_B2_ADV_BK_SW_ADD").substr(0, 8);
    var sResult_752 = DV.checkRMA(sB1, sB2_752, "752");
    if (sResult_752 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT752");
    } else {
        var arr_para = new Array(sB1, sB2_752, "752");
        DV.throwException('1847', arr_para);
    }
}

var MESG_TYPE_BANK;
var records = DV.getRecords("AdviceForBankCust");
for (var i = 0; i < records.length; i++) {
    MESG_TYPE_BANK = DV.getDOValue(records[i], "MESG_TYPE_BANK");
    type = DV.getNodeAttr(records[i], "Type");
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sMT = MESG_TYPE_BANK.substr(2, 3);

    if (MESG_TYPE_BANK.substr(0, 2) == 'MT' && type != 'D') {
        var sB2 = DV.getDOValue(records[i], "SEND_TO_BK_SW_ADD").substr(0, 8);
        var sResult = DV.checkRMA(sB1, sB2, sMT);
        if (sResult == "TRUE" || sMT == "999") {
            DV.appendDOSWIFT('SSSS_sendtobank_sw_mt' + MESG_TYPE_BANK.substr(2, 3), i, "AdviceForBankCust");
        } else {
            var arr_para = new Array(sB1, sB2, sMT);
            DV.throwException('1847', arr_para);
        }
    }
}