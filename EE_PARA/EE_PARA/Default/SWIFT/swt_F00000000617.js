/* for RMA Check Start */
var sB1 = DV.getFieldValue("LOGIN_BIC");

/* var sB2_742=DV.getFieldValue("X742_ADV_BK_SW_ADD");*/
var sB2_754 = DV.getFieldValue("X754_ADV_BK_SW_ADD");
/* var sResult_742 =DV.checkRMA(sB1,sB2_742,"742");*/
var sResult_754 = DV.checkRMA(sB1, sB2_754, "754");
/* for RMA Check End */
/* 
var SEND_MT742_FLG = DV.getFieldValue("SEND_MT742_FLG");
if(SEND_MT742_FLG == 'YES'){
	if(sResult_742== "TRUE"){	
	DV.appendSWIFT("EPLC_EPLC_SWIFT_MT742_PAYACCPT");
	}else{
		var arr_para=new Array(sB1,sB2_742,"742");
		DV.throwException('1847',arr_para);
	}
}
*/
var SEND_MT754_FLG = DV.getFieldValue("SEND_MT754_FLG");
if (SEND_MT754_FLG == 'YES') {
    if (sResult_754 == "TRUE") {
        DV.appendSWIFT("EPLC_EPLC_SWIFT_MT754");
    } else {
        var arr_para = new Array(sB1, sB2_754, "754");
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


if (DV.getFieldValue("APPLY_FLG") == "YES") {
    if (DV.getFieldValue("SUB_MESS_TYPE") == "755") {
        DV.appendSWIFT("EPLC_OUT_MT755");
    } else {
        DV.appendSWIFT("EPLC_OUT_MT758");
    }
}