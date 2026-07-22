"path:SCRN/DO/PaymentSchedule.jsp";

function CHK_CPYT_C_PAY_PER() {
    try {
        var sdoName = "PaymentSchedule";
        var sFldName = "CPYT_C_PAY_PER";
        var nOld = 0;
        var oDo = SYS_GetCurrentEditDo(sdoName);
        nSum = SYS_BeFloat(SYS_GetFldSumByDoName(sdoName, sFldName));

        if (oDo != null) {
            nOld = SYS_BeFloat(SYS_GetFldValueByDo(oDo, sFldName));
        }
        var nCurrent = SYS_BeFloat(document.MAINFORM.elements[sFldName].value);
        var nResult = nSum + nCurrent - nOld;

        if (nResult > 100) {
            alert("The total percent [" + nResult + "%] is more than 100%");
            EEHtml.getElementById("CPYT_C_PAY_PER").value = 0;
            EEHtml.getElementById("CPYT_N_PAY_AMT").value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CHK_CPYT_D_MAT_DATE() {
    try {
        if (document.MAINFORM.CPYT_D_MAT_DATE.value.length > 0 && document.MAINFORM.TRX_DT.value.length > 0) {
            var nDays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.CPYT_D_MAT_DATE.name);
            if (nDays <= 0) {
                SYS_CheckError(document.MAINFORM.CPYT_D_MAT_DATE, "Maturity Date should be later than Today!");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_C_SDA_FLAG_ONCHANGE() {
    try {
        if (document.MAINFORM.CPYT_C_SDA_FLAG.value == 'Sight') {
            SYT_ChangeFldClass_New('CPYT_D_TENOR_START_DATE', 'B');
            SYT_ChangeFldClass_New('CPYT_I_TENOR_DAYS', 'B');
            SYT_ChangeFldClass_New('CPYT_C_TENOR_TYPE', 'B');
            SYT_ChangeFldClass_New('CPYT_D_MAT_DATE', 'B');
            SYT_ChangeFldClass_New('CPYT_C_TENOR_DESC', 'H');
            document.MAINFORM.CPYT_C_TENOR_DESC.value = "";
        } else {
            if ('OTHER' != document.MAINFORM.CPYT_C_TENOR_TYPE.value) {
                SYT_ChangeFldClass(document.MAINFORM.CPYT_D_TENOR_START_DATE, "O");
                SYT_ChangeFldClass(document.MAINFORM.CPYT_I_TENOR_DAYS, "O");
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, "O");
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, 'H');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_D_MAT_DATE, 'M');
                document.MAINFORM.CPYT_C_TENOR_DESC.value = "";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CPYT_D_TENOR_START_DATE, 'O');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_I_TENOR_DAYS, 'O');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_D_MAT_DATE, 'M');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, 'O');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_D_MAT_DATE(matdt) {
    try {
        document.MAINFORM.CPYT_D_MAT_DATE.value = matdt;
        CHK_CPYT_D_MAT_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_I_TENOR_DAYS() {
    try {
        if (document.MAINFORM.CPYT_D_TENOR_START_DATE.value != "" && document.MAINFORM.CPYT_I_TENOR_DAYS.value != 0) {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CPYT_D_TENOR_START_DATE.value, document.MAINFORM.CPYT_I_TENOR_DAYS.value, 'CPYT_D_MAT_DATE()', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_N_PAY_AMT_1() {
    try {
        var sCcy = EEHtml.getElementById("CPYT_C_TRX_CCY").value;
        var nAmt = SYS_BeFloat(EEHtml.getElementById("CPYT_N_PAY_TTL_AMT_TXCCY").value);
        var nPercent = SYS_BeFloat(document.MAINFORM.CPYT_C_PAY_PER.value);

        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(sCcy, nAmt * nPercent / 100);
        CHK_CPYT_C_PAY_PER();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_PAY_PER() {
    try {
        var nTTL_AMT = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value);
        var nAMT = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_AMT.value);

        if (nTTL_AMT > 0) {
            document.MAINFORM.CPYT_C_PAY_PER.value = SYS_BeInt(nAMT / nTTL_AMT * 100);
            CHK_CPYT_C_PAY_PER();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_ConfirmBusinessCall() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_ConfirmBusinessCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_InitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_PostconditionOnInit() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_SDA_FLAG, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_D_TENOR_START_DATE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_PAY_PER, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_I_TENOR_DAYS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_N_PAY_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_D_MAT_DATE, 'O');
        CPYT_C_SDA_FLAG_ONCHANGE();

    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function PaymentSchedule_initFieldEvent() {
    try {
        document.MAINFORM.CPYT_C_PAY_PER.onchange = CPYT_C_PAY_PER_onchange;
        document.MAINFORM.CPYT_C_SDA_FLAG.onchange = CPYT_C_SDA_FLAG_onchange;
        document.MAINFORM.CPYT_C_TENOR_TYPE.onchange = CPYT_C_TENOR_TYPE_onchange;
        document.MAINFORM.CPYT_D_MAT_DATE.onchange = CPYT_D_MAT_DATE_onchange;
        document.MAINFORM.CPYT_D_TENOR_START_DATE.onchange = CPYT_D_TENOR_START_DATE_onchange;
        document.MAINFORM.CPYT_I_TENOR_DAYS.onchange = CPYT_I_TENOR_DAYS_onchange;
        document.MAINFORM.CPYT_N_PAY_AMT.onchange = CPYT_N_PAY_AMT_onchange;
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_C_PAY_PER_onchange() {
    try {
        CPYT_N_PAY_AMT_1();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_C_SDA_FLAG_onchange() {
    try {
        CPYT_C_SDA_FLAG_ONCHANGE();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_C_TENOR_TYPE_onchange() {
    try {
        CPYT_C_SDA_FLAG_ONCHANGE();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_D_MAT_DATE_onchange() {
    try {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CPYT_D_MAT_DATE');
        CHK_CPYT_D_MAT_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_D_TENOR_START_DATE_onchange() {
    try {
        CPYT_I_TENOR_DAYS();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_I_TENOR_DAYS_onchange() {
    try {
        CPYT_I_TENOR_DAYS();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}

function CPYT_N_PAY_AMT_onchange() {
    try {
        CPYT_PAY_PER();
    } catch (e) {
        DisExcpt("SSSS_PaymentSchedule.js", e);
    }
}