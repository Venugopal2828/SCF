/*104.40*/
var sB1 = DV.getFieldValue("LOGIN_BIC");
var sB2_760 = DV.getFieldValue("SEND_TO_SW_ADD");
var sB2_799 = DV.getFieldValue("SEND_TO_SW_ADD");
var sResult_799 = DV.checkRMA(sB1, sB2_799, "799");
var sSW_FORM = DV.getFieldValue("SW_FORM");
var APPLY_FLG = DV.getFieldValue("APPLY_FLG");
var SUB_MESS_TYPE = DV.getFieldValue("SUB_MESS_TYPE");
if (sSW_FORM == "MT760") {
    if (APPLY_FLG == "YES" && SUB_MESS_TYPE == '762') {
        DV.appendSWIFT("GTEE_MT760_762");
        //DV.appendSWIFT("GTEE_MT760_Out");
    } else if (APPLY_FLG == "YES" && SUB_MESS_TYPE == '745') {
        DV.appendSWIFT("GTEE_OUT_MT760_745");
        //DV.appendSWIFT("GTEE_MT760_Out");
    } else {
		var sResult_760 = DV.checkRMA(sB1, sB2_760, "760");
		if(sResult_760=="TRUE")
		{
        DV.appendSWIFT("GTEE_MT760_Out");
        //For NonRegular
        //DV.appendSWIFT("GTEE_MT760_Out_NonRegular");
		}
		else {
        var arr_para = new Array(sB1, sB2_760, "760");
        DV.throwException("1847", arr_para);
		}
    }
} else if (sSW_FORM == "MT799") {
    if (sResult_799 == "TRUE") {
        DV.appendSWIFT("GTEE_GTEE_SendToBank_SWIFT799");
    } else {
        var arr_para = new Array(sB1, sB2_799, "799");
        DV.throwException('1847', arr_para);
    }
} else if (sSW_FORM == "MT999") {
    DV.appendSWIFT("GTEE_GTEE_SendToBank_SWIFT999");
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