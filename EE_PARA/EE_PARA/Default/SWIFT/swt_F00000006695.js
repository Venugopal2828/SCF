var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_707 = DV.getFieldValue("ADV_BK_SW_ADD");
var sB5_767 = DV.getFieldValue("ADV_BK_SW_ADD");
var sB6_767 = DV.getFieldValue("DRWE_SW_ADD");
var sB7_767 = DV.getFieldValue("AVAL_WT_BK_SW_ADD");
var msgType = DV.getFieldValue("MESG_TYPE");
if (msgType == 'MT707') {
    var s_Adv_Result_707 = DV.checkRMA(sB1, sB2_707, "707");
    if (s_Adv_Result_707 == 'TRUE') {
        DV.appendSWIFT("SBLC_SBLC_AMEND_MT707");
    } else {
        var arr_para = new Array(sB1, sB2_707, "707");
        DV.throwException("1847", arr_para);
    }
} else if (msgType == 'MT767') {
    var s_Adv_Result_767 = DV.checkRMA(sB1, sB5_767, "707");
    var s_DRWE_Result_767 = DV.checkRMA(sB1, sB6_767, "707");
    var s_Aval_Result_767 = DV.checkRMA(sB1, sB7_767, "707");
    if (sB5_767 != '' || sB6_767 != '' || sB7_767 != '') {
        if (s_Adv_Result_767 == 'TRUE' || s_DRWE_Result_767 == 'TRUE' || s_Aval_Result_767 == 'TRUE') {
            DV.appendSWIFT("SBLC_SBLC_AMENDMENT_MT767");
        } else {
            var arr_para_new = new Array(sB1, sB5_767, sB6_767, sB7_767, "767");
            DV.throwException("1847", arr_para_new);
        }
    }
}

var MESG_TYPE_BANK;
var Records = DV.getRecords("AdviceForBankCust");
for (var i = 0; i < Records.length; i++) {
    MESG_TYPE_BANK = DV.getDOValue(Records[i], "MESG_TYPE_BANK");
    type = DV.getNodeAttr(Records[i], "Type");
    var sB2 = DV.getDOValue(Records[i], "SEND_TO_BK_SW_ADD");
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