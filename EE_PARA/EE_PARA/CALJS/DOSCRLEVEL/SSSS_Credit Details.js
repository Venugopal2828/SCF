"path:SCRN/DO/Credit Details.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AmtFormatAmtTrxccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = SYS_getCurrNodeParentValue('PaymentCreditHeader', 'CPYT_CR_TTL_CCY');
        amt = document.MAINFORM.CPYT_CR_AMT_TXCCY.value;
        document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.AmtFromatAmtCrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        amt = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat('CPYT_CR_CCY', amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CHK_Total_Pct = function() {
    try {
        var odo; // Utility Auto Fix Comments
        var oldvalue; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        var sumScren; // Utility Auto Fix Comments
        sum = 0;
        //sum=SYS_getFieldSumByDoName('CPYT_CR_PER','PaymentCredit');
        sumScren = SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value);
        record = SYS_getEditedRecordForCurrentDo();
        oldvalue = 0;

        if (SYS_DO_XPATH == "PaymentInstruction.PaymentCreditHeader.PaymentCredit") {
            odo = SYS_getDoByXpath('PaymentInstruction.PaymentCreditHeader.PaymentCredit');
            sum = odo.getFieldSumValue('CPYT_CR_PER');
        } else if (SYS_DO_XPATH == "PaymentDealer.PaymentCreditHeader.PaymentCredit") {
            odo = SYS_getDoByXpath('PaymentDealer.PaymentCreditHeader.PaymentCredit'); // Utility Auto Fix Comments
            sum = odo.getFieldSumValue('CPYT_CR_PER');
        }

        if (record != null) {
            oldvalue = SYS_BeFloat(record["CPYT_CR_PER"]);
        }

        sum = SYS_BeFloat(sum) + sumScren - oldvalue;
        if (sum > 100) {
            alert("The total percent is more than 100%");
            document.MAINFORM.CPYT_CR_PER.value = 0;
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = 0;
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = 0;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_CRCCY = function() {
    try {
        amt = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value) * SYS_BeFloat(document.MAINFORM.CPYT_BUY_RATE.value);
        document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat('CPYT_DR_CCY', amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_CRCCY_CRRATE = function() {
    try {
        var amt; // Utility Auto Fix Comments
        amt = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value) * SYS_BeFloat(document.MAINFORM.CPYT_CR_RATE.value);
        document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat('CPYT_CR_CCY', amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_TXCCY = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        amt = SYS_getCurrNodeParentValue('PaymentCreditHeader', 'CPYT_CR_TTL_AMT_TTLCCY');
        ccy = SYS_getCurrNodeParentValue('PaymentCreditHeader', 'CPYT_CR_TTL_CCY');

        amt = SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value) * SYS_BeFloat(amt) / 100;
        document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_TXCCYfromCrccy = function() {
    try {
        document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value) / SYS_BeFloat(document.MAINFORM.CPYT_BUY_RATE.value);
        AmtFormatAmtTrxccy();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_PER = function() {
    try {
        var amt; // Utility Auto Fix Comments
        amt = SYS_getCurrNodeParentValue('PaymentCreditHeader', 'CPYT_CR_TTL_AMT_TTLCCY');
        if (amt != "" && SYS_BeFloat(amt) != 0) {
            document.MAINFORM.CPYT_CR_PER.value = SYS_BeInt(SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value) / SYS_BeFloat(amt) * 100);
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!CHK_Total_Pct()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.ExchangingRate = function() {
    try {
        var fromccy; // Utility Auto Fix Comments
        var toccy; // Utility Auto Fix Comments
        fromccy = SYS_getCurrNodeParentValue('PaymentCreditHeader', 'CPYT_CR_TTL_CCY');
        //toccy=SYS_getCurrDoScreenValue('CPYT_CR_CCY');
        toccy = document.MAINFORM.CPYT_CR_CCY.value;
        if (fromccy != "" && toccy != "") {
            SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_BUY_RATE');
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.HiddenDO = function() {
    try {
        SubDoFrame.hideDO("PaymentDealer.PaymentCreditHeader.PaymentCredit.SwiftMT103");
        SubDoFrame.hideDO("PaymentDealer.PaymentCreditHeader.PaymentCredit.SwiftMT202");
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var fromccy; // Utility Auto Fix Comments
        fromccy = SYS_getCurrNodeParentValue('PaymentCreditHeader', 'CPYT_CR_TTL_CCY');
        document.MAINFORM.CPYT_CR_CCY.value = fromccy;
        ExchangingRate();
        if (SYS_MODULE_NAME == "IMLC" || SYS_ORG_FUNCTION_SHORT_NAME == "OutwardSett") {
            document.MAINFORM.CPYT_ASSGN_ID.value = SYS_getValueFromMain('BENE_ID');
            document.MAINFORM.CPYT_CR_BK_ID.value = SYS_getValueFromMain('PRES_BK_ID');
        } else if (SYS_MODULE_NAME == "EXLC") {
            document.MAINFORM.CPYT_ASSGN_ID.value = SYS_getValueFromMain('BENE_ID');
            document.MAINFORM.CPYT_CR_BK_ID.value = SYS_getValueFromMain('NOSTRO_BK_ID');
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == "InSett") {
            document.MAINFORM.CPYT_ASSGN_ID.value = SYS_getValueFromMain('APPL_ID');
            document.MAINFORM.CPYT_CR_BK_ID.value = SYS_getValueFromMain('SEND_TO_ID');
        }
        if (document.MAINFORM.CPYT_ASSGN_ID.value != "") {
            SYS_GetCUBK('CPYT_ASSGN_ID', 'CPYT_ASSGN_ID');
        }
        if (document.MAINFORM.CPYT_CR_BK_ID.value != "") {
            SYS_GetCUBK('CPYT_CR_BK_ID', 'CPYT_CR_BK_ID');
        }
        document.MAINFORM.CPYT_PAY_ADV_MSG.value = 'MT756';
        document.MAINFORM.CPYT_PAY_COV_MSG.value = 'MT202';
        Swift();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        Swift();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_BUY_RATE, 'M');

        if (SYS_MODULE_NAME == "IMLC" || SYS_MODULE_NAME == "IMCO") {
            document.all.CPYT_SETTLE_METHOD.style.visibility = 'hidden';
        }

    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.Swift = function() {
    try {
        hideAll();
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT103") {
            if (SYS_DO_ID == "D00000000002") {
                SubDoFrame.showDO("PaymentDealer.PaymentCreditHeader.PaymentCredit.SwiftMT103", "C_div", "SwiftMT103.", true);
            } else if (SYS_DO_ID == "D00000000003") {
                SubDoFrame.showDO("PaymentInstruction.PaymentCreditHeader.PaymentCredit.SwiftMT103", "C_div", "SwiftMT103.", true);
            }
        } else if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202") {
            if (SYS_DO_ID == "D00000000002") {
                SubDoFrame.showDO("PaymentDealer.PaymentCreditHeader.PaymentCredit.SwiftMT202", "C_div", "SwiftMT202.", true);
            } else if (SYS_DO_ID == "D00000000003") {
                SubDoFrame.showDO("PaymentInstruction.PaymentCreditHeader.PaymentCredit.SwiftMT202", "C_div", "SwiftMT202.", true);
            } else if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == "MT103") {
                if (SYS_DO_ID == "D00000000002") {
                    SubDoFrame.showDO("PaymentDealer.PaymentCreditHeader.PaymentCredit.SwiftMT103", "C_div", "SwiftMT202.", true);
                } else if (SYS_DO_ID == "D00000000003") {
                    SubDoFrame.showDO("PaymentInstruction.PaymentCreditHeader.PaymentCredit.SwiftMT103", "C_div", "SwiftMT202.", true);
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.hideAll = function() {
    try {
        //Add by Jack on 20080616 for PCQ's SWIFT onchange
        SubDoFrame.hideDO("PaymentDealer.PaymentCreditHeader.PaymentCredit.SwiftMT103");
        SubDoFrame.hideDO("PaymentInstruction.PaymentCreditHeader.PaymentCredit.SwiftMT103");
        SubDoFrame.hideDO("PaymentDealer.PaymentCreditHeader.PaymentCredit.SwiftMT202");
        SubDoFrame.hideDO("PaymentInstruction.PaymentCreditHeader.PaymentCredit.SwiftMT202");
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_BUY_RATE_onchange = function(event) {
    try {
        CPYT_CR_AMT_CRCCY();
        AmtFromatAmtCrccy();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_CRCCY_onchange = function(event) {
    try {
        AmtFromatAmtCrccy();
        CPYT_CR_AMT_TXCCYfromCrccy();
        CPYT_CR_PER();
        CHK_Total_Pct();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_TXCCY_onchange = function(event) {
    try {
        CPYT_CR_PER();
        CPYT_CR_AMT_CRCCY();
        AmtFormatAmtTrxccy();
        CHK_Total_Pct();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_CCY_onchange = function(event) {
    try {
        ExchangingRate();
        CPYT_CR_AMT_TXCCY();
        CPYT_CR_AMT_CRCCY();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_PER_onchange = function(event) {
    try {
        CPYT_CR_AMT_TXCCY();
        CPYT_CR_AMT_CRCCY();
        CHK_Total_Pct();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_CR_RATE_onchange = function(event) {
    try {
        CPYT_CR_AMT_CRCCY_CRRATE();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}

csDOScreenProto.CPYT_PAY_COV_MSG_onchange = function(event) {
    try {
        Swift();
    } catch (e) {
        DisExcpt("SSSS_Credit Details.js", e);
    }
}