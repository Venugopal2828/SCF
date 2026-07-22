"path:SCRN/DO/FinanceEstablish.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Back_CFNC_D_MAT_DATE = function(enddate) {
    try {
        document.MAINFORM.CFNC_D_DUE_DT.value = enddate;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.DateChange = function() {
    try {
        var nSubDays; // Utility Auto Fix Comments
        document.MAINFORM.CFNC_C_STATUS.value = SYS_DATE;
        nSubDays = SYS_GetSubDays('CFNC_C_STATUS', 'CFNC_D_DT'); // Utility Auto Fix Comments
        if (nSubDays >= 0) {
            FinanceDatechange();
        } else {
            alert("Finance Date cannot before system date!");
            document.MAINFORM.CFNC_D_DT.value = SYS_DATE;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.FinanceBalanceChange = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.CFNC_N_BAL.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.CFNC_N_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.FinanceCCYchange = function() {
    try {
        if (document.MAINFORM.CFNC_C_CCY.value == 'JPY' || document.MAINFORM.CFNC_C_CCY.value == 'HKD') {
            document.MAINFORM.CFNC_I_BASIC_DAYS.value = 365;
        } else {
            document.MAINFORM.CFNC_I_BASIC_DAYS.value = 360;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.FinanceDatechange = function() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_I_DAYS.value > 0) {
            nFinanceDays = document.MAINFORM.CFNC_I_DAYS.value;
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'Back_CFNC_D_MAT_DATE', 'A', 'Y', 'Y');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.FinanceDueDatechange = function() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_DT.value != "") {
            nFinanceDays = SYS_GetSubDays('document.MAINFORM.CFNC_D_DT', 'document.MAINFORM.CFNC_D_DUE_DT');
            if (nFinanceDays > 0) {
                document.MAINFORM.CFNC_I_DAYS.value = nFinanceDays;
            } else {
                alert("Finance Due date should later than Finance Start date !");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.FinanceLiborRate = function() {
    try {
        var nLiborRate; // Utility Auto Fix Comments
        nLiborRate = document.MAINFORM.CFNC_N_LIBOR_RT.value;
        if (nLiborRate > 0) {
            document.MAINFORM.CFNC_N_RT.value = nLiborRate;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.FinancePersent = function() {
    try {
        var nEqAmount; // Utility Auto Fix Comments
        var nFinancePersent; // Utility Auto Fix Comments
        var nTrxAmount; // Utility Auto Fix Comments
        var sTrxCCY; // Utility Auto Fix Comments
        nTrxAmount = SYS_BeFloat(document.MAINFORM.N_TRX_AMT.value);
        nFinancePersent = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        if (nTrxAmount > 0 && nFinancePersent > 0) {
            if (nFinancePersent <= 100) {
                nEqAmount = SYT_AmtFormat(sTrxCCY, nTrxAmount * nFinancePersent / 100);
                document.MAINFORM.CFNC_N_AMT_TXCCY.value = nEqAmount;
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = nEqAmount;
                document.MAINFORM.CFNC_N_BAL.value = nEqAmount;
            } else {
                alert("Finance Persent Cannot more than 100%");
                document.MAINFORM.CFNC_N_PCT.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.InitTrxAmtAMT = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.N_TRX_AMT.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.N_TRX_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.LCAmountChange = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.CFNC_N_AMT_LCCCY.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.CFNC_N_AMT_LCCCY.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.MarginRateChange = function() {
    try {
        var nLiborRate; // Utility Auto Fix Comments
        var nMarginRate; // Utility Auto Fix Comments
        var nMarginRate2; // Utility Auto Fix Comments
        var nRate; // Utility Auto Fix Comments
        nMarginRate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        nLiborRate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        if (nMarginRate > 0) {
            if (nLiborRate > 0) {
                nMarginRate2 = nMarginRate;
                nRate = nLiborRate + nMarginRate2;
                document.MAINFORM.CFNC_N_RT.value = nRate;
            } else {
                alert("Please Input Libor Rate First");
                document.MAINFORM.CFNC_N_MARGIN_RT.value = 0;
            }

        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.TrxAmountChange = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.CFNC_N_AMT_TXCCY.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.CFNC_N_AMT_TXCCY.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_C_CCY_onchange = function(event) {
    try {
        FinanceCCYchange();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_D_DT_onchange = function(event) {
    try {
        DateChange();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_D_DUE_DT_onchange = function(event) {
    try {
        FinanceDueDatechange();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_N_AMT_LCCCY_onchange = function(event) {
    try {
        LCAmountChange();
        if (SYS_MODULE_NAME == 'CFNC') {
            document.MAINFORM.CFNC_N_BAL.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_N_AMT_TXCCY_onchange = function(event) {
    try {
        TrxAmountChange();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_N_BAL_onchange = function(event) {
    try {
        FinanceBalanceChange();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_N_LIBOR_RT_onchange = function(event) {
    try {
        FinanceLiborRate();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_N_MARGIN_RT_onchange = function(event) {
    try {
        MarginRateChange();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.CFNC_N_PCT_onchange = function(event) {
    try {
        FinancePersent();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}

csDOScreenProto.N_TRX_AMT_onchange = function(event) {
    try {
        InitTrxAmtAMT();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablish.js", e);
    }
}