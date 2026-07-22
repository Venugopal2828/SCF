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

/*
var ADV_BK_CORR_MED = DV.getFieldValue("ADV_BK_CORR_MED");
var BENE_CONS_FLG = DV.getFieldValue("BENE_CONS_FLG");
var REIM_BK_AUTH_REQ = DV.getFieldValue("REIM_BK_AUTH_REQ");
var REIM_BK_CORR_MED = DV.getFieldValue("REIM_BK_CORR_MED");
if(ADV_BK_CORR_MED=='SWIFT' && BENE_CONS_FLG =='Accepted')
{
	DV.appendSWIFT("IPLC_MT707_AmdLC");
}

if(REIM_BK_AUTH_REQ=='Yes' && REIM_BK_CORR_MED=='SWIFT' && BENE_CONS_FLG=='Accepted')
{
 	DV.appendSWIFT("IPLC_MT747_AmdLC");
}
*/

var MT798_FLG = DV.getFieldValue("APPLY_FLG");
if (MT798_FLG == "YES") {
    DV.appendSWIFT("IPLC_OUT_MT736");
}