var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_768 = DV.getFieldValue("RCV_FM_BK_SW_ADD");
var RcvFrbkcorr = DV.getFieldValue("RCV_FM_BK_CORR_MED");
var send768 = DV.getFieldValue("SEND_MT768_FLG");
if (RcvFrbkcorr == 'SWIFT' && send768 == 'Y') {
    var sResult_768 = DV.checkRMA(sB1, sB2_768, "768");
    if (sResult_768 == 'TRUE') {
        DV.appendSWIFT("IWGT_Adv_GTEE_MT768Ack");
    } else {
        var arr_para = new Array(sB1, sB2_768, "768");
        DV.throwException("1847", arr_para);
    }
}

 var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_760 = DV.getFieldValue("SEND_TO_SW_ADD");
var Sendtobkcorr = DV.getFieldValue("SEND_TO_CORR_MED");
var Further = DV.getFieldValue("FURTHER_IDENTITY");
var issueby = DV.getFieldValue("ISSUE_BY");
if (Sendtobkcorr == 'SWIFT'&&issueby == 'MT760'){
	var sResult_760 = DV.checkRMA(sB1,sB2_760,"760");	
	if(sResult_760 =='TRUE'){
		DV.appendSWIFT("IWGT_Issue_GTEE_MT760");
	}else{
		var arr_para = new Array(sB1,sB2_760,"760");
		DV.throwException("1847",arr_para);
	}
}

var MT798_FLG = DV.getFieldValue("APPLY_FLG");
var SUB_MESS_TYPE = DV.getFieldValue("SUB_MESS_TYPE");
if (MT798_FLG == "YES") {
    if (SUB_MESS_TYPE == "745") {
        DV.appendSWIFT("IWGT_OUT760_745");
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