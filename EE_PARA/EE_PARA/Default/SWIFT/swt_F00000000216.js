if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var PRE_FLG = DV.getFieldValue("PRES_BK_CORR_MED");
    if (DV.getFieldValue("MESG_TYPE") == 'MT999' && PRE_FLG == "SWIFT")

    {
        DV.appendSWIFT("IMCO_Tracer_MT999");
    }

    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_499 = DV.getFieldValue("PRES_BK_SW_ADD");
    var FLG = DV.getFieldValue("MESG_TYPE");
    var PRE_FLG = DV.getFieldValue("PRES_BK_CORR_MED");
    if (FLG == 'MT499' && PRE_FLG == "SWIFT") {
        var sResult_499 = DV.checkRMA(sB1, sB2_499, "499");
        if (sResult_499 == 'TRUE') {
            DV.appendSWIFT("IMCO_MT_499");
        } else {
            var arr_para = new Array(sB1, sB2_499, "499");
            DV.throwException("1847", arr_para);
        }
    }
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_420 = DV.getFieldValue("PRES_BK_SW_ADD");
    var FLG = DV.getFieldValue("MESG_TYPE");
    var PRE_FLG = DV.getFieldValue("PRES_BK_CORR_MED");
    if (FLG == 'MT420' && PRE_FLG == "SWIFT") {
        var sResult_420 = DV.checkRMA(sB1, sB2_420, "420");
        if (sResult_420 == 'TRUE') {
            DV.appendSWIFT("IMCO_MT_420");
        } else {
            var arr_para = new Array(sB1, sB2_420, "420");
            DV.throwException("1847", arr_para);
        }
    }
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_422 = DV.getFieldValue("REMIT_BK_SW_ADD");
    var PRE_FLG = DV.getFieldValue("REMIT_BK_COR_MED");
    if (PRE_FLG == "SWIFT") {
        var sResult_422 = DV.checkRMA(sB1, sB2_422, "422");
        if (sResult_422 == 'TRUE') {
            DV.appendSWIFT("IMCO_MT422");
        } else {
            var arr_para = new Array(sB1, sB2_422, "422");
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