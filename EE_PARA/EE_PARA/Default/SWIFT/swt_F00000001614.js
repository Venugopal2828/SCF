/* for RMA Check Start */
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_707 = DV.getFieldValue("TRM_TO_BK_SW_ADD");
var sB2_730 = DV.getFieldValue("ISSUE_BK_SW_ADD");
var ADV_THU = DV.getFieldValue("ADV_THU_BK_SW_ADD");
var OUR_ROLE = DV.getFieldValue("OUR_ROLE");
var sResult_707 = DV.checkRMA(sB1, sB2_707, "707");
var sResult_730 = DV.checkRMA(sB1, sB2_730, "730");
/* for RMA Check End */

var ADV_LC_BY = DV.getFieldValue("ADV_LC_BY");
if (ADV_LC_BY == "SWIFT to Beneficiary's Bank") {
    if (sResult_707 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT707");
    } else {
        var arr_para = new Array(sB1, sB2_707, "707");
        DV.throwException('1847', arr_para);

    }
}
if (DV.getFieldValue("SENT_MT730_FLG") == "YES" && ((ADV_THU == '' && OUR_ROLE == 'Advising Bank') || OUR_ROLE == 'Advise Through Bank')) {
    if (sResult_730 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT730");
    } else {
        var arr_para = new Array(sB1, sB2_730, "730");
        DV.throwException('1847', arr_para);
    }
}

if (DV.getFieldValue("SENT_MT730_FLG") == "YES" && ADV_THU != "" && ADV_THU != null && OUR_ROLE == 'Advising Bank') {
    if (sResult_730 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT730ADV");
    } else {
        var arr_para = new Array(sB1, sB2_730, "730");
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

if (DV.getFieldValue("APPLY_FLG") == "YES" && DV.getFieldValue("SUB_MESS_TYPE") == "776") {
    DV.appendSWIFT("EPLC_OUT_MT707_MT776");
}