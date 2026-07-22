if (DV.getFieldValue("R_LMT_DECISION_FLG") != "Failed") {
    var sB1 = DV.getFieldValue("LOGIN_BIC");
    var sB2_103 = DV.getFieldValue("X103_ADV_BKSW_B2");
    var sB2_202 = DV.getFieldValue("X202_ADV_BKSW_B2");

    var sResult_103 = DV.checkRMA(sB1, sB2_103, "103");
    var sResult_202 = DV.checkRMA(sB1, sB2_202, "202");

    CPYT_PAY_ADV_MSG = DV.getFieldValue("CPYT_PAY_ADV_MSG");

    if (CPYT_PAY_ADV_MSG == 'MT103') {
        if (sResult_103 == "TRUE") {
            DV.appendSWIFT("SSSS_CPYTMT103");
        } else {
            var arr_para = new Array(sB1, sB2_103, "103");
            DV.throwException('1847', arr_para);
        }
    } else if (CPYT_PAY_ADV_MSG == 'MT202') {
        if (sResult_202 == "TRUE") {
            DV.appendSWIFT("SSSS_MT202");
        } else {
            var arr_para = new Array(sB1, sB2_202, "202");
            DV.throwException('1847', arr_para);
        }
    } else if (CPYT_PAY_ADV_MSG == 'MT202COV') {
        if (sResult_202 == "TRUE") {
            DV.appendSWIFT("SSSS_CPYTMT103");
            DV.appendSWIFT("SSSS_CPYTMT202COV");
        } else {
            var arr_para = new Array(sB1, sB2_202, "202COV");
            DV.throwException('1847', arr_para);
        }
    }
}