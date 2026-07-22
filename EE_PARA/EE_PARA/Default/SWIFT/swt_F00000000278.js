var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_700 = DV.getFieldValue("ADV_BK_SW_ADD");
var ADV_BK_CORR_MED = DV.getFieldValue("ADV_BK_CORR_MED");
if (ADV_BK_CORR_MED == 'SWIFT') {
    var sResult_700 = DV.checkRMA(sB1, sB2_700, "700");
    if (sResult_700 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT700_ISSUE");
    } else {
        var arr_para = new Array(sB1, sB2_700, "700");
        DV.throwException("1847", arr_para);
    }
}
/*
var sNARR_TAG_79 = DV.getFieldValue("NARR_TAG_79");
if(sB2_700!='' && sNARR_TAG_79 !='')
{
DV.appendSWIFT("IPLC_MT999_ISSUE");
}
*/
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