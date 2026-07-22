if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_767 = DV.getFieldValue("SEND_TO_SW_ADD");


    var sResult_767 = DV.checkRMA(sB1, sB2_767, "767");

    var sSW_FORM = DV.getFieldValue("SW_FORM");


    if (sSW_FORM == "MT767") {
        if (sResult_767 == "TRUE") {
            DV.appendSWIFT("GTEE_MT767_Out");
        } else {
            var arr_para = new Array(sB1, sB2_767, "767");
            DV.throwException('1847', arr_para);
        }
    }

    if (sSW_FORM == "MT999") {

        DV.appendSWIFT("GTEE_GTEE_SendToBank_SWIFT999");


    }

    var MT798_FLG = DV.getFieldValue("APPLY_FLG");
    var SUB_MESS_TYPE = DV.getFieldValue("SUB_MESS_TYPE");
    if (MT798_FLG == "YES") {
        if (SUB_MESS_TYPE == "764") {
            DV.appendSWIFT("GTEE_OUT_MT767_764");
        }
        if (SUB_MESS_TYPE == "743") {
            DV.appendSWIFT("GTEE_OUT_MT767_743");
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
}