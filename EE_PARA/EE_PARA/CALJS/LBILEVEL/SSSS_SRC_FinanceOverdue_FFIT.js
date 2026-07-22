"path:SCRN/Library/FFIT/FinanceOverdue_FFIT.lbi";

var csLbiCompProto = {};

csLbiCompProto.FINC_PAY_INT_OLD = function() {
    try {
        var days1 = SYS_GetSubDays('FINC_OVERDUE_DT', 'FINC_DUE_DT');
        var days2 = SYS_GetSubDays('FINC_PMT_DT_ORG', 'FINC_OVERDUE_DT');
        var days3 = SYS_GetSubDays('FINC_PMT_DT_ORG', 'FINC_DUE_DT');
        if (document.MAINFORM.INT_MTHD.value == '1' && days1 >= 0) {
            document.MAINFORM.FINC_PAY_INT_OLD.value = 0;
            document.MAINFORM.FINC_PAY_INT_PNLT.value = 0;
            FINC_PAY_INT_OLD_back();
        } else if (document.MAINFORM.INT_MTHD.value == '1' && days1 < 0) {
            document.MAINFORM.FINC_PAY_INT_OLD.value = 0;
            document.MAINFORM.FINC_PAY_INT_PNLT.value = days2 * SYS_BeFloat(document.MAINFORM.FINC_BAL.value) * SYS_BeFloat(document.MAINFORM.FINC_PNLT_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAYS.value) / 100;
            FINC_PAY_INT_OLD_back();
        } else if (document.MAINFORM.INT_MTHD.value == '2' && days1 >= 0) {
            document.MAINFORM.FINC_PAY_INT_OLD.value = SYS_BeFloat(document.MAINFORM.FINC_UNPAY_INT_ORG.value) + days2 * SYS_BeFloat(document.MAINFORM.FINC_BAL.value) * SYS_BeFloat(document.MAINFORM.FINC_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAYS.value) / 100;
            document.MAINFORM.FINC_PAY_INT_PNLT.value = 0;
            FINC_PAY_INT_OLD_back();
        } else if (document.MAINFORM.INT_MTHD.value == '2' && days1 < 0) {
            if (days3 >= 0) {
                document.MAINFORM.FINC_PAY_INT_OLD.value = SYS_BeFloat(document.MAINFORM.FINC_UNPAY_INT_ORG.value) + days3 * SYS_BeFloat(document.MAINFORM.FINC_BAL.value) * SYS_BeFloat(document.MAINFORM.FINC_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAYS.value) / 100;
                document.MAINFORM.FINC_PAY_INT_PNLT.value = (-1) * days1 * SYS_BeFloat(document.MAINFORM.FINC_BAL.value) * SYS_BeFloat(document.MAINFORM.FINC_PNLT_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAYS.value) / 100;
                FINC_PAY_INT_OLD_back();
            } else {
                document.MAINFORM.FINC_PAY_INT_OLD.value = 0;
                document.MAINFORM.FINC_PAY_INT_PNLT.value = days2 * SYS_BeFloat(document.MAINFORM.FINC_BAL.value) * SYS_BeFloat(document.MAINFORM.FINC_PNLT_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAYS.value) / 100;
                FINC_PAY_INT_OLD_back();
            }
        }
        document.MAINFORM.FINC_PAY_INT_OLD.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_PAY_INT_OLD.value);
        document.MAINFORM.FINC_PAY_INT_PNLT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_PAY_INT_PNLT.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_FinanceOverdue_FFIT.js", e);
    }
}

csLbiCompProto.FINC_PAY_INT_OLD_back = function() {
    try {
        document.MAINFORM.FINC_PAY_LIBOR_OLD.value = SYS_BeFloat(document.MAINFORM.FINC_PAY_INT_OLD.value) * SYS_BeFloat(document.MAINFORM.LIBOR_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_RT.value);
        document.MAINFORM.FINC_PAY_LIBOR_OLD.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_PAY_LIBOR_OLD.value);

        document.MAINFORM.FINC_PAY_MARGIN_OLD.value = SYS_BeFloat(document.MAINFORM.FINC_PAY_INT_OLD.value) - SYS_BeFloat(document.MAINFORM.FINC_PAY_LIBOR_OLD.value);
        document.MAINFORM.FINC_PAY_MARGIN_OLD.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_PAY_MARGIN_OLD.value);

        document.MAINFORM.FINC_PAY_LIBOR_PNLT.value = SYS_BeFloat(document.MAINFORM.FINC_PAY_INT_PNLT.value) * SYS_BeFloat(document.MAINFORM.LIBOR_RT.value) / SYS_BeFloat(document.MAINFORM.FINC_RT.value);
        document.MAINFORM.FINC_PAY_LIBOR_PNLT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_PAY_LIBOR_PNLT.value);

        document.MAINFORM.FINC_PAY_MARGIN_PNLT.value = SYS_BeFloat(document.MAINFORM.FINC_PAY_INT_PNLT.value) - SYS_BeFloat(document.MAINFORM.FINC_PAY_LIBOR_PNLT.value);
        document.MAINFORM.FINC_PAY_MARGIN_PNLT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_PAY_MARGIN_PNLT.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_FinanceOverdue_FFIT.js", e);
    }
}

csLbiCompProto.FincOverdueOrgInitValue = function() {
    try {
        document.MAINFORM.FINC_UNPAY_LIBOR_ORG.value = document.MAINFORM.FINC_UNPAY_LIBOR.value;
        document.MAINFORM.FINC_UNPAY_MARGIN_ORG.value = document.MAINFORM.FINC_UNPAY_MARGIN.value;
        document.MAINFORM.FINC_UNPAY_INT_ORG.value = document.MAINFORM.FINC_UNPAY_INT.value;
        document.MAINFORM.FINC_PMT_DT_ORG.value = document.MAINFORM.FINC_PMT_DT.value;
        SYT_ChangeFldClass(EEHtml.getElementById("FINC_OVERDUE_NO"), 'M');
        document.MAINFORM.FINC_OVERDUE_BUSI_TYPE.value = INTERFACE_BANCS_BGLDR_TRX_CODE;
        document.MAINFORM.FINC_PNLT_RT.value = document.MAINFORM.FINC_RT.value;
        document.MAINFORM.FINC_BAL_ORG.value = document.MAINFORM.FINC_BAL.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_FinanceOverdue_FFIT.js", e);
    }
}

csLbiCompProto.FincOverdueOrgPostValue = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }
        document.MAINFORM.FINC_PNLT_RT.onchange = FINC_PAY_INT_OLD;
        document.MAINFORM.FINC_OVERDUE_DT.value = SYS_BUSI_DATE;
        FINC_PAY_INT_OLD();
        document.MAINFORM.FINC_UNPAY_INT.value = SYS_BeFloat(document.MAINFORM.FINC_UNPAY_INT_ORG.value);
        document.MAINFORM.FINC_UNPAY_LIBOR.value = SYS_BeFloat(document.MAINFORM.FINC_UNPAY_LIBOR_ORG.value);
        document.MAINFORM.FINC_UNPAY_MARGIN.value = SYS_BeFloat(document.MAINFORM.FINC_UNPAY_MARGIN_ORG.value);

        document.MAINFORM.FINC_UNPAY_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_UNPAY_INT.value);
        document.MAINFORM.FINC_UNPAY_LIBOR.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_UNPAY_LIBOR.value);
        document.MAINFORM.FINC_UNPAY_MARGIN.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_UNPAY_MARGIN.value);
        SYT_ChangeFldClass(EEHtml.getElementById("FINC_OVERDUE_NO"), 'M');
    } catch (e) {
        DisExcpt("SSSS_SRC_FinanceOverdue_FFIT.js", e);
    }
}