if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_410 = DV.getFieldValue("REMIT_BK_SW_ADD");
    var FLG = DV.getFieldValue("REMIT_BK_SW_ADD");
    var FLG2 = DV.getFieldValue("REMIT_BK_COR_MED");
    if (FLG != "" && FLG != null && FLG2 == "SWIFT") {
        var sResult_410 = DV.checkRMA(sB1, sB2_410, "410");
        if (sResult_410 == 'TRUE') {
            DV.appendSWIFT("IMCO_MT410_2");
        } else {
            var arr_para = new Array(sB1, sB2_410, "410");
            DV.throwException("1847", arr_para);
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