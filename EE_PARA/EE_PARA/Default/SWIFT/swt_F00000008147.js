if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var sB2_430 = DV.getFieldValue("SEND_AMD_BY");
    if (DV.getFieldValue("OUR_ROLE") == 'First Collecting Bank' && sB2_430 == 'MT999') {

        DV.appendSWIFT("IMCO_Advice_MT999");
    }


    var sB2_4301 = DV.getFieldValue("SEND_AMD_BY");
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_430 = DV.getFieldValue("PRES_BK_SW_ADD");
    var FLG = DV.getFieldValue("OUR_ROLE");
    if (FLG == 'First Collecting Bank' && sB2_4301 == 'MT430') {
        var sResult_430 = DV.checkRMA(sB1, sB2_430, "430");
        if (sResult_430 == 'TRUE') {
            DV.appendSWIFT("IMCO_MT_430");
        } else {
            var arr_para = new Array(sB1, sB2_430, "430");
            DV.throwException("1847", arr_para);
        }
    }
    var sB2_4301 = DV.getFieldValue("SEND_AMD_BY");
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_499 = DV.getFieldValue("PRES_BK_SW_ADD");
    if (sB2_4301 == 'MT499') {
        var sResult_499 = DV.checkRMA(sB1, sB2_499, "499");
        if (sResult_499 == 'TRUE') {
            DV.appendSWIFT("IMCO_MT499_Amd");
        } else {
            var arr_para = new Array(sB1, sB2_499, "499");
            DV.throwException("1847", arr_para);
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

}