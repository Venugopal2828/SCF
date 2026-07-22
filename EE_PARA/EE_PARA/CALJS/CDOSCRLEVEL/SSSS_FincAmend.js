"path:SCRN/DO/FincAmend.jsp";

function CAL_FINANCE_DAYS() {
    try {
        if (SYS_FUNCTION_TYPE == "EC") {
            document.MAINFORM.CFNC_I_DAYS_TEMP.value = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value) - SYS_BeInt(document.MAINFORM.CFNC_C_GRACE_DAYS.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_C_GRACE_DAYS_Change() {
    try {
        var nGraceDays; // Utility Auto Fix Comments
        var nfinanceDays; // Utility Auto Fix Comments
        nGraceDays = SYS_BeInt(document.MAINFORM.CFNC_C_GRACE_DAYS.value);
        nfinanceDays = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value);
        if ('' != document.MAINFORM.CFNC_C_GRACE_DAYS.value && '' != document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value) {
            if (nGraceDays < 100) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_GRACE_FLG, 'M');
                if ("Calendar" == document.MAINFORM.CFNC_C_GRACE_FLG.value) {
                    SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value, nGraceDays, 'SYF_CFNC_getendday', 'A', 'N', 'N');
                } else {
                    SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value, nGraceDays, 'SYF_CFNC_getendday', 'A', 'Y', 'Y');
                }
            } else if (nGraceDays > 100) {
                SYS_CheckError(document.MAINFORM.CFNC_C_GRACE_DAYS, "Grace Days must between 0 and 99 days!");
            }
        }
        //SYS_CalEndWorkingDate(strCntyCode, strStartDate, strDays, strJsFuncName, strBeforeOrAfter, strIfCheckHol, strIfJumpHol);
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_D_EXTEN_DUE_DT_Change() {
    try {
        var nSubDays; // Utility Auto Fix Comments
        var period; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value != "") {
            nSubDays = SYS_GetSubDays('CFNC_D_DUE_DT', 'CFNC_D_EXTEN_DUE_DT');
            period = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_EXTEN_DUE_DT');
            if (nSubDays < 0 || nSubDays == 0) {
                SYS_CheckError(document.MAINFORM.CFNC_D_EXTEN_DUE_DT, ' Finance Due date should later than Finance End Date!');
                document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value = '';
            } else {
                document.MAINFORM.CFNC_I_DAYS.value = period;
                document.MAINFORM.CFNC_I_DAYS_TEMP.value = period;
            }
        } else {
            period = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
            document.MAINFORM.CFNC_I_DAYS.value = period;
        }
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_InquireInterest_eLoan() {
    try {
        var IntAmt;
        document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.CFNC_C_CCY.value);
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'Up Front') {
            if (SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value) > 0) {
                SYS_InqGapi_S('eLOAN_Amz_InqInt');
                IntAmt = SYS_BeFloat(document.MAINFORM.IA_Y_REACC_INT.value);
            } else {
                IntAmt = 0;
            }
            document.MAINFORM.CFNC_N_PRE_INT.value = IntAmt;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
        } else {
            document.MAINFORM.CFNC_N_PRE_INT.value = 0;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function Caculate_CFNC_N_NET_AMT() {
    try {
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'In Arrears') {
            document.MAINFORM.CFNC_N_NET_AMT.value = document.MAINFORM.NEW_REFI_AMT.value;
        } else if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'Up Front') {
            document.MAINFORM.CFNC_N_NET_AMT.value = SYS_FloatSub(document.MAINFORM.NEW_REFI_AMT.value, document.MAINFORM.CFNC_N_PRE_INT.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function Cal_Caculate_BaseMarginAmt() {
    try {
        var interest;
        var liborrate;
        var marginrate;
        var rate;
        var liborAmount;
        var marginAmount;
        interest = document.MAINFORM.CFNC_N_PRE_INT.value;
        liborrate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        marginrate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        rate = SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value);
        if (rate > 0) {
            liborAmount = interest / rate * liborrate;
            marginAmount = interest / rate * marginrate;
        }
        document.MAINFORM.CFNC_N_LIBOR_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, liborAmount);
        document.MAINFORM.CFNC_N_MARGIN_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, marginAmount);
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function Cal_Caculate_FincAMT() {
    try {
        var CFNC_N_TRX_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        var CFNC_N_PCT = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        var CFNC_N_TRXCCY_LCY = SYS_BeFloat(document.MAINFORM.CFNC_N_TRXCCY_LCY.value);
        var CFNC_N_AMT_LCCCY;
        CFNC_N_AMT_LCCCY = CFNC_N_TRX_AMT * CFNC_N_PCT * CFNC_N_TRXCCY_LCY / 100;
        document.MAINFORM.CFNC_N_AMT_LCCCY.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, CFNC_N_AMT_LCCCY);
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function Cal_Caculate_IntRT() {
    try {
        var CFNC_N_LIBOR_RT = document.MAINFORM.CFNC_N_LIBOR_RT.value;
        var CFNC_N_MARGIN_RT = document.MAINFORM.CFNC_N_MARGIN_RT.value;
        document.MAINFORM.CFNC_N_RT.value = SYS_BeFloat(SYS_FloatAdd(CFNC_N_LIBOR_RT, CFNC_N_MARGIN_RT));
        document.MAINFORM.IA_N_FIX_BAS_RATE.value = document.MAINFORM.CFNC_N_RT.value;

    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function Cal_Caculate_Percent() {
    try {
        var CFNC_N_TRX_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        var CFNC_N_TRXCCY_LCY = SYS_BeFloat(document.MAINFORM.CFNC_N_TRXCCY_LCY.value);
        var NEW_REFI_AMT = SYS_BeFloat(document.MAINFORM.NEW_REFI_AMT.value);
        var CFNC_N_PCT;
        CFNC_N_PCT = (NEW_REFI_AMT / CFNC_N_TRX_AMT / CFNC_N_TRXCCY_LCY) * 100;
        document.MAINFORM.CFNC_N_PCT.value = SYS_BeFloat(CFNC_N_PCT);
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CheckAmendAMT() {
    try {
        if (document.MAINFORM.CFNC_N_PCT.value > 100) {
            document.MAINFORM.AMEND_AMT.value = 0;
            SYS_CheckError(document.MAINFORM.CFNC_N_PCT, "Finance Percentage should between 0 and 100%");
            document.MAINFORM.INC_DEC_FLAG.value = '';
            document.MAINFORM.NEW_REFI_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            Cal_Caculate_Percent();
        }

    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function Check_D_DUE_DT() {
    try {
        var nSubDays;
        if (document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            nSubDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
            if (nSubDays < 0) {
                SYS_CheckError(document.MAINFORM.CFNC_D_DUE_DT, 'Finance Due date should later than Finance Start date!');
            }
        }

    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function FincAmend_ConfirmBusinessCall() {
    try {
        if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Amend Finance Amount') {
            //document.MAINFORM.CFNC_N_AMT_LCCCY.value = document.MAINFORM.NEW_REFI_AMT.value ; by Adam 20200603
        } else if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Extend Due Date') {
            //document.MAINFORM.CFNC_D_DUE_DT.value = document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value;	    
        }
        if (document.MAINFORM.CFNC_D_MAST_MATU_DT.value != '') {
            document.MAINFORM.CFNC_D_MAST_MATU_DT.value = document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function FincAmend_ConfirmBusinessCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function HiddenShowPaymentDO() {
    try {
        if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Extend Due Date' || document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Amend Rate' || document.MAINFORM.AMEND_AMT.value == '0') {
            document.getElementById("E").style.display = "none";
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = 0;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = 0;
            SYS_DeleteDoRecord("PaymentDebit");
            SYS_DeleteDoRecord("PaymentCredit");
        } else {
            document.getElementById("E").style.display = "";
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.AMEND_AMT.value;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.AMEND_AMT.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function FincAmend_InitValues() {
    try {
        document.getElementById("INC_PERIOD").style.display = "none";
        document.MAINFORM.CFNC_N_PRE_INT_ORG.value = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function FincAmend_PostconditionOnInit() {
    try {
        if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == "Extend Due Date") {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_EXTEN_DUE_DT, 'M');
        } else if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Amend Rate') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'M');
        }
        Check_D_DUE_DT();
        CAL_FINANCE_DAYS();
        document.MAINFORM.CFNC_C_STATUS.value = SYS_BUSI_DATE;
        document.MAINFORM.CFNC_C_FINANCE_FLG.value = 'Y';
        document.MAINFORM.CFNC_I_FINC_TIMES.value = SYS_FloatAdd(document.MAINFORM.CFNC_I_FINC_TIMES.value, 1);
        document.MAINFORM.CFNC_I_AMEND_TIMES.value = SYS_FloatAdd(document.MAINFORM.CFNC_I_AMEND_TIMES.value, 1);
        document.MAINFORM.CFNC_N_AMT_LCCCY_ORG.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        //document.MAINFORM.CFNC_N_PRE_INT_ORG.value = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);by Adam 20200528
        document.MAINFORM.CFNC_N_NET_AMT_ORG.value = document.MAINFORM.CFNC_N_NET_AMT.value;
        HiddenShowPaymentDO();
        document.MAINFORM.CFNC_N_LIBOR_RT_TEMP.value = document.MAINFORM.CFNC_N_LIBOR_RT.value;
        document.MAINFORM.CFNC_N_MARGIN_RT_TEMP.value = document.MAINFORM.CFNC_N_MARGIN_RT.value;

        document.MAINFORM.IA_D_DUE_DATE.value = document.MAINFORM.CFNC_D_DUE_DT.value;
        document.MAINFORM.IA_C_CCY_CODE.value = document.MAINFORM.CFNC_C_CCY.value;
        document.MAINFORM.IA_I_BASE_DAYS.value = document.MAINFORM.CFNC_I_BASIC_DAYS.value;
        document.MAINFORM.IA_D_TRX_VALDATE.value = document.MAINFORM.CFNC_D_DT.value;
        document.MAINFORM.IA_Y_TRX_AMT.value = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        document.MAINFORM.IA_N_FIX_BAS_RATE.value = document.MAINFORM.CFNC_N_RT.value;
        document.MAINFORM.IA_D_CREATE_DATE.value = document.MAINFORM.CFNC_D_DT.value;
        document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.CFNC_C_CCY.value);

        CFNC_C_AMEND_TYPE_onchange();

    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function FincAmend_PreconditionOnInit() {
    try {
        if (document.MAINFORM.FINC_TYPE.value == 'EXCO' || document.MAINFORM.FINC_TYPE.value == 'IMCO') {
            document.getElementById("RELA_DRAW_REF").style.display = "none";
            document.getElementById("AVALIABLE_BY").style.display = "none";
        } else if (document.MAINFORM.FINC_TYPE.value == 'EPLC' || document.MAINFORM.FINC_TYPE.value == 'IPLC') {
            document.getElementById("DELIVER_DOC_AGAINST").style.display = "none";
            document.getElementById("DAY_MON_FLG").style.display = "none";
        }
        if (SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE") {
            if (document.MAINFORM.CFNC_N_LIBOR_RT_TYPE.value == 'Other') {
                document.getElementById("RATE_TYPE_NARR").style.display = "";
                document.getElementById("RATE_TYPE_NARR1").style.display = "";
            } else {
                document.getElementById("RATE_TYPE_NARR").style.display = "none";
                document.getElementById("RATE_TYPE_NARR1").style.display = "none";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function SYF_CFNC_getendday(enddate) {
    try {
        document.MAINFORM.CFNC_OVERDUE_DT.value = enddate;
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function FincAmend_ConfirmBusinessCheckSave() {
    try {} catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
    return true;
}

function FincAmend_CancelCheck() {
    try {} catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
    return true;
}


function FincAmend_initFieldEvent() {
    try {
        document.MAINFORM.AMEND_AMT.onchange = AMEND_AMT_onchange;
        document.MAINFORM.CFNC_C_AMEND_TYPE.onchange = CFNC_C_AMEND_TYPE_onchange;
        document.MAINFORM.CFNC_C_GRACE_DAYS.onchange = CFNC_C_GRACE_DAYS_onchange;
        document.MAINFORM.CFNC_D_EXTEN_DUE_DT.onchange = CFNC_D_EXTEN_DUE_DT_onchange;
        document.MAINFORM.CFNC_N_LIBOR_RT.onchange = CFNC_N_LIBOR_RT_onchange;
        document.MAINFORM.CFNC_N_MARGIN_RT.onchange = CFNC_N_MARGIN_RT_onchange;
        document.MAINFORM.CFNC_N_PCT.onchange = CFNC_N_PCT_onchange;
        document.MAINFORM.CFNC_N_RT.onchange = CFNC_N_RT_onchange;
        document.MAINFORM.INC_DEC_FLAG.onchange = INC_DEC_FLAG_onchange;
        document.MAINFORM.NEW_REFI_AMT.onchange = NEW_REFI_AMT_onchange;
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function AMEND_AMT_onchange() {
    try {
        if (SYS_BeFloat(document.MAINFORM.AMEND_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.AMEND_AMT.value = 0;
        } else {
            var nSubAmt;
            var CFNC_N_BAL = SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value);
            var AMEND_AMT = SYS_BeFloat(document.MAINFORM.AMEND_AMT.value);
            var CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
            nSubAmt = SYS_FloatSub(AMEND_AMT, CFNC_N_BAL);
            if (document.MAINFORM.INC_DEC_FLAG.value == 'Decrease' && nSubAmt > 0) {
                SYS_CheckError(document.MAINFORM.AMEND_AMT.value, 'Amend Amounr should not greater than Finance Balance!');
                document.MAINFORM.AMEND_AMT.value = 0;
            }
            if (document.MAINFORM.INC_DEC_FLAG.value == 'Increase') {
                document.MAINFORM.NEW_REFI_AMT.value = SYS_BeFloat(SYS_FloatAdd(CFNC_N_AMT_LCCCY, AMEND_AMT));
                document.MAINFORM.IA_Y_TRX_AMT.value = document.MAINFORM.NEW_REFI_AMT.value;
            } else if (document.MAINFORM.INC_DEC_FLAG.value == 'Decrease') {
                document.MAINFORM.NEW_REFI_AMT.value = SYS_BeFloat(SYS_FloatSub(CFNC_N_AMT_LCCCY, AMEND_AMT));
                document.MAINFORM.IA_Y_TRX_AMT.value = document.MAINFORM.NEW_REFI_AMT.value;
            }
            document.MAINFORM.CFNC_N_BAL.value = document.MAINFORM.NEW_REFI_AMT.value;
            Cal_Caculate_Percent();
            HiddenShowPaymentDO();
            CheckAmendAMT();
            CFNC_InquireInterest_eLoan();
            Caculate_CFNC_N_NET_AMT();
            Cal_Caculate_BaseMarginAmt();
        }

    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_C_AMEND_TYPE_onchange() {
    try {
        if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Extend Due Date') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_EXTEN_DUE_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INC_DEC_FLAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PCT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AMEND_AMT, 'P');
            document.MAINFORM.AMEND_AMT.value = 0;
            document.MAINFORM.NEW_REFI_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.INC_DEC_FLAG.value = '';
            Cal_Caculate_Percent();
            document.MAINFORM.NEW_REFI_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.IA_Y_TRX_AMT.value = SYS_BeFloat(document.MAINFORM.NEW_REFI_AMT.value);
            document.MAINFORM.CFNC_N_LIBOR_RT.value = document.MAINFORM.CFNC_N_LIBOR_RT_TEMP.value;
            document.MAINFORM.CFNC_N_MARGIN_RT.value = document.MAINFORM.CFNC_N_MARGIN_RT_TEMP.value;
            document.MAINFORM.CFNC_N_RT.value = SYS_FloatAdd(document.MAINFORM.CFNC_N_LIBOR_RT.value, document.MAINFORM.CFNC_N_MARGIN_RT.value);
            document.MAINFORM.IA_N_FIX_BAS_RATE.value = document.MAINFORM.CFNC_N_RT.value;
            EEHtml.fireEvent(document.MAINFORM.AMEND_AMT, "onchange"); //JAX added 2020/5/14
        } else if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Amend Finance Amount') {
            SYT_ChangeFldClass(document.MAINFORM.INC_DEC_FLAG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PCT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_EXTEN_DUE_DT, 'P');
            document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value = '';
            CFNC_D_EXTEN_DUE_DT_Change();
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AMEND_AMT, 'M');
            document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value = document.MAINFORM.CFNC_D_DUE_DT.value;
            document.MAINFORM.IA_D_DUE_DATE.value = document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value;
            document.MAINFORM.CFNC_N_LIBOR_RT.value = document.MAINFORM.CFNC_N_LIBOR_RT_TEMP.value;
            document.MAINFORM.CFNC_N_MARGIN_RT.value = document.MAINFORM.CFNC_N_MARGIN_RT_TEMP.value;
            document.MAINFORM.CFNC_N_RT.value = SYS_FloatAdd(document.MAINFORM.CFNC_N_LIBOR_RT.value, document.MAINFORM.CFNC_N_MARGIN_RT.value);
            document.MAINFORM.IA_N_FIX_BAS_RATE.value = document.MAINFORM.CFNC_N_RT.value;
        } else if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'Amend Rate') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_EXTEN_DUE_DT, 'P');
            document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value = '';
            CFNC_D_EXTEN_DUE_DT_Change();
            SYT_ChangeFldClass(document.MAINFORM.INC_DEC_FLAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PCT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AMEND_AMT, 'P');
            document.MAINFORM.AMEND_AMT.value = 0;
            document.MAINFORM.NEW_REFI_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.IA_Y_TRX_AMT.value = SYS_BeFloat(document.MAINFORM.NEW_REFI_AMT.value);
            document.MAINFORM.INC_DEC_FLAG.value = '';
            Cal_Caculate_Percent();
            document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value = document.MAINFORM.CFNC_D_DUE_DT.value;
            document.MAINFORM.IA_D_DUE_DATE.value = document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value;
            document.MAINFORM.NEW_REFI_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            EEHtml.fireEvent(document.MAINFORM.AMEND_AMT, "onchange"); //JAX added 2020/5/14
        }
        CFNC_InquireInterest_eLoan();
        //Caculate_CFNC_N_NET_AMT();
        HiddenShowPaymentDO();
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_C_GRACE_DAYS_onchange() {
    try {
        CFNC_C_GRACE_DAYS_Change();
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_D_EXTEN_DUE_DT_onchange() {
    try {
        CFNC_D_EXTEN_DUE_DT_Change();
        document.MAINFORM.IA_D_DUE_DATE.value = document.MAINFORM.CFNC_D_EXTEN_DUE_DT.value;
        CFNC_InquireInterest_eLoan();
        Caculate_CFNC_N_NET_AMT();
        Cal_Caculate_BaseMarginAmt();
        CFNC_C_GRACE_DAYS_Change(); //Adam 20200525
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_N_LIBOR_RT_onchange() {
    try {
        Cal_Caculate_IntRT();
        CFNC_InquireInterest_eLoan();
        Caculate_CFNC_N_NET_AMT();
        Cal_Caculate_BaseMarginAmt();


    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_N_MARGIN_RT_onchange() {
    try {
        Cal_Caculate_IntRT();
        CFNC_InquireInterest_eLoan();
        Caculate_CFNC_N_NET_AMT();
        Cal_Caculate_BaseMarginAmt();
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_N_PCT_onchange() {
    try {
        if (document.MAINFORM.CFNC_N_PCT.value > 100 || document.MAINFORM.CFNC_N_PCT.value < 0) {
            SYS_CheckError(document.MAINFORM.CFNC_N_PCT, "Finance Percentage should between 0 and 100%");
            document.MAINFORM.INC_DEC_FLAG.value = '';
            document.MAINFORM.CFNC_N_PCT.value = 100;
        }
        Cal_Caculate_FincAMT();
        if (document.MAINFORM.INC_DEC_FLAG.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.AMEND_AMT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AMEND_AMT, 'P');
        }
        document.MAINFORM.AMEND_AMT.value = 0;
        document.MAINFORM.NEW_REFI_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function CFNC_N_RT_onchange() {
    try {
        CFNC_InquireInterest_eLoan();
        Caculate_CFNC_N_NET_AMT();
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function INC_DEC_FLAG_onchange() {
    try {
        if (document.MAINFORM.INC_DEC_FLAG.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.AMEND_AMT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AMEND_AMT, 'P');
        }
        document.MAINFORM.AMEND_AMT.value = 0;
        document.MAINFORM.NEW_REFI_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        Cal_Caculate_Percent();
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}

function NEW_REFI_AMT_onchange() {
    try {
        CFNC_InquireInterest_eLoan();
        Caculate_CFNC_N_NET_AMT();
    } catch (e) {
        DisExcpt("SSSS_FincAmend.js", e);
    }
}