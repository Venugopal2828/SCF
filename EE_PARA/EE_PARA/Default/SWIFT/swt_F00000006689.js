var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_700 = DV.getFieldValue("ADV_BK_SW_ADD");
var sB3_700 = DV.getFieldValue("DRWE_SW_ADD");
var sB4_700 = DV.getFieldValue("AVAL_WT_BK_SW_ADD");
var sB2_760 = DV.getFieldValue("ADV_BK_SW_ADD");
var sB3_760 = DV.getFieldValue("DRWE_SW_ADD");
var sB4_760 = DV.getFieldValue("AVAL_WT_BK_SW_ADD");
var msgType = DV.getFieldValue("MESG_TYPE");
if (msgType == 'MT700') {
    var s_ADV_Result_700 = DV.checkRMA(sB1, sB2_700, "700");
    var s_DRWE_Result_700 = DV.checkRMA(sB1, sB3_700, "700");
    var s_AVAL_Result_700 = DV.checkRMA(sB1, sB4_700, "700");
    if (sB2_700 != '' || sB3_700 != '' || sB4_700 != '') {
        DV.writeLog("AMYTEST");
        if (s_ADV_Result_700 == 'TRUE' || s_DRWE_Result_700 == 'TRUE' || s_AVAL_Result_700 == 'TRUE') {
            DV.appendSWIFT("SBLC_SBLC_ISSUE_MT700");
        } else {
            var arr_para = new Array(sB1, sB2_700, sB3_700, sB4_700, "700");
            DV.throwException("1847", arr_para);
        }
    }
} else if (msgType == 'MT760') {
    var s_ADV_Result_760 = DV.checkRMA(sB1, sB2_760, "760");
    var s_DRWE_Result_760 = DV.checkRMA(sB1, sB3_760, "760");
    var s_AVAL_Result_760 = DV.checkRMA(sB1, sB4_760, "760");
    if (sB2_760 != '' || sB3_760 != '' || sB4_760 != '') {
        if (s_ADV_Result_760 == 'TRUE' || s_DRWE_Result_760 == 'TRUE' || s_AVAL_Result_760 == 'TRUE') {
            var STNDBY_TXT1 = DV.getFieldValue("MT760_STNDBY_TEXT1");
            var STNDBY_TXT2 = DV.getFieldValue("MT760_STNDBY_TEXT2");
            var STNDBY_TXT3 = DV.getFieldValue("MT760_STNDBY_TEXT3");
            if (STNDBY_TXT1 != '' && STNDBY_TXT2 == '' && STNDBY_TXT3 == '') {
                DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760");
            }
            if (STNDBY_TXT1 != '' && STNDBY_TXT2 != '' && STNDBY_TXT3 == '') {
                DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760");
                //DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760_1");
            }
            if (STNDBY_TXT1 != '' && STNDBY_TXT2 == '' && STNDBY_TXT3 != '') {
                DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760");
                //DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760_2");
            }
            if (STNDBY_TXT1 != '' && STNDBY_TXT2 != '' && STNDBY_TXT3 != '') {
                DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760");
                //DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760_1");
                //DV.appendSWIFT("SBLC_SBLC_ISSUE_MT760_2");
            }
        } else {
            var arr_para = new Array(sB1, sB2_760, sB3_760, sB4_760, "760");
            DV.throwException("1847", arr_para);
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