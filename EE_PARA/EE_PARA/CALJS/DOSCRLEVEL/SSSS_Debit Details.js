"path:SCRN/DO/Debit Details.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AmtFormatAmtTrxccy = function() {
    try {
        ccy = SYS_getCurrNodeParentValue('PaymentDebitHeader', 'CPYT_DR_TTL_CCY');
        amt = document.MAINFORM.CPYT_DR_AMT_TXCCY.value;
        document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.AmtFromatAmtDrccy = function() {
    try {
        amt = document.MAINFORM.CPYT_DR_AMT_DRCCY.value;
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat('CPYT_DR_CCY', amt);
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY = function() {
    try {
        if (document.MAINFORM.CPYT_BUY_RATE.value != "" && document.MAINFORM.CPYT_BUY_RATE.value != null) {
            amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) * SYS_BeFloat(document.MAINFORM.CPYT_BUY_RATE.value);
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat('document.MAINFORM.CPYT_DR_CCY', amt);
        } else {
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY_DRRATE = function() {
    try {
        amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) * SYS_BeFloat(document.MAINFORM.CPYT_DR_RATE.value);
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat('document.MAINFORM.CPYT_DR_CCY', amt);
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCY = function() {
    try {
        var amt = SYS_getCurrNodeParentValue('PaymentDebitHeader', 'CPYT_DR_TTL_AMT_TTLCCY');
        amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value) * SYS_BeFloat(amt) / 100;
        ccy = SYS_getCurrNodeParentValue('PaymentDebitHeader', 'CPYT_DR_TTL_CCY');
        document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCYfromDrccy = function() {
    try {
        if (document.MAINFORM.CPYT_BUY_RATE.value != "" && document.MAINFORM.CPYT_BUY_RATE.value != null) {
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value) / SYS_BeFloat(document.MAINFORM.CPYT_BUY_RATE.value);
            AmtFormatAmtTrxccy();
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_PER = function() {
    try {
        var amt = SYS_getCurrNodeParentValue('PaymentDebitHeader', 'CPYT_DR_TTL_AMT_TTLCCY');
        if (amt != "" && SYS_BeFloat(amt) != 0) {
            document.MAINFORM.CPYT_DR_PER.value = SYS_BeInt(SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) / SYS_BeFloat(amt) * 100);
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        if (SYS_MODULE_NAME.substr(0, 2) == "EX") {
            var oCUST_AC_CCY = SYS_getMainObj("CUST_AC_CCY");
            if (oCUST_AC_CCY != null) {
                oCUST_AC_CCY.value = document.MAINFORM.CPYT_DR_CCY.value;
                EEHtml.fireEvent(oCUST_AC_CCY, "onchange");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!chk_Total_Pct()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.ExchangingRate = function() {
    try {
        var fromccy = SYS_getCurrNodeParentValue('PaymentDebitHeader', 'CPYT_DR_TTL_CCY');
        var toccy = document.MAINFORM.CPYT_DR_CCY.value;
        if (fromccy != "" && toccy != "") {
            SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_BUY_RATE');
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.Get_CPYT_DR_AC = function() {
    try {
        SYS_GetCUBK('CPYT_DR_AC', document.MAINFORM.CPYT_DR_AC.name);
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        /*if(SYS_MODULE_NAME=="IMLC" ||SYS_ORG_FUNCTION_SHORT_NAME=="OutwardSett"){
document.MAINFORM.CPYT_DR_ID.value=SYS_getValueFromMain('APPL_ID');
}
else if(SYS_MODULE_NAME=="EXLC"||SYS_ORG_FUNCTION_SHORT_NAME=="InSett"){
document.MAINFORM.CPYT_DR_ID.value=SYS_getValueFromMain('BENE_ID');
}*/
        var fromccy = SYS_getCurrNodeParentValue('PaymentDebitHeader', 'CPYT_DR_TTL_CCY');
        document.MAINFORM.CPYT_DR_CCY.value = fromccy;
        ExchangingRate();
        //SYS_GetCUBK('CPYT_DR_ID','CPYT_DR_ID');
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        InitValues();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AMT_DRCCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_BUY_RATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, 'M');

        if (SYS_MODULE_NAME == "EXLC" || SYS_MODULE_NAME == "EXCO") {
            document.all.CPYT_SETTLE_METHOD.style.visibility = 'hidden';
        }

    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.chk_Total_Pct = function() {
    try {
        var sum = SYS_getFieldSumByDoName('CPYT_DR_PER', 'PaymentDebit');
        var sumScren = SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value);
        var record = SYS_getEditedRecordForCurrentDo();
        var oldvalue = 0;
        if (record != null) {
            oldvalue = SYS_BeFloat(record["CPYT_DR_PER"]);
        }
        sum = SYS_BeFloat(sum) + sumScren - oldvalue;
        if (sum > 100) {
            alert("The total percent is more than 100%");
            document.MAINFORM.CPYT_DR_PER.value = 0;
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_BUY_RATE_onchange = function(event) {
    try {
        CPYT_DR_AMT_DRCCY();
        AmtFromatAmtDrccy();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_onchange = function(event) {
    try {
        Get_CPYT_DR_AC();
        ExchangingRate();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY_onchange = function(event) {
    try {
        AmtFromatAmtDrccy();
        CPYT_DR_AMT_TXCCYfromDrccy();
        CPYT_DR_PER();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCY_onchange = function(event) {
    try {
        CPYT_DR_PER();
        CPYT_DR_AMT_DRCCY();
        AmtFormatAmtTrxccy();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_CCY_onchange = function(event) {
    try {
        ExchangingRate();
        CPYT_DR_AMT_TXCCY();
        CPYT_DR_AMT_DRCCY();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_PER_onchange = function(event) {
    try {
        ExchangingRate();
        CPYT_DR_AMT_TXCCY();
        CPYT_DR_AMT_DRCCY();
        chk_Total_Pct();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}

csDOScreenProto.CPYT_DR_RATE_onchange = function(event) {
    try {
        CPYT_DR_AMT_DRCCY_DRRATE();
    } catch (e) {
        DisExcpt("SSSS_Debit Details.js", e);
    }
}