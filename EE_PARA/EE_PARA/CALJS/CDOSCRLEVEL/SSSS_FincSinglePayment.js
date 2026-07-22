"path:SCRN/DO/FincSinglePayment.jsp";

function CAL_CFNC_N_PAY_AMT() {
    try {
        if (SYS_MODULE_NAME != "CFNC") {
            var CFNC_N_AMT_LCCCY;
            var CFNC_N_PRE_INT;
            if ("In Arrears" == document.MAINFORM.CFNC_C_INT_PAYABLE.value) {
                CFNC_N_PRE_INT = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);
                CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
                document.MAINFORM.CFNC_N_PAY_AMT.value = CFNC_N_PRE_INT + CFNC_N_AMT_LCCCY;
            }
        }
        if (SYS_MODULE_NAME == "CFNC") {
            document.MAINFORM.CFNC_N_PAY_AMT.value = SYS_FloatAdd(document.MAINFORM.CFNC_PAID_PRIN_SUM.value, document.MAINFORM.CFNC_N_PAID_INT.value);
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAY_AMT, 'onchange');
        }
        if (SYS_MODULE_NAME == "RPFM") {
            if (SYS_FUNCTION_NAME == "RepayGrantor") {
                document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                Cal_CPYT_N_PAY_AMT();
                getCPYT_DR_TTL_AMT_TTLCCY();
                getCPYT_CR_TTL_AMT_TTLCCY();
                //SYF_RPFM_set_repayamt_to_PAYMENT_CREDIT();
                SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                SYM_RPFM_Delete_credit_record();
            }
            if (SYS_FUNCTION_NAME == "SettleParticipant") {
                document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                Cal_CPYT_N_PAY_AMT();
                getCPYT_DR_TTL_AMT_TTLCCY();
                getCPYT_CR_TTL_AMT_TTLCCY();
                SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                SYM_RPFM_Delete_credit_record();
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CAL_repayAmt() {
    try {
        var CFNC_C_INT_PAYABLE = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        if (CFNC_C_INT_PAYABLE == 'In Arrears') {
            if (SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) <= SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_INT.value)) {
                document.MAINFORM.CFNC_N_PAY_PRIN.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, 0);
                document.MAINFORM.CFNC_N_PAY_INT.value = document.MAINFORM.CFNC_N_PAY_AMT.value;
            } else {
                document.MAINFORM.CFNC_N_PAY_PRIN.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_FloatSub(SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value), SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_INT.value)));
                document.MAINFORM.CFNC_N_PAY_INT.value = document.MAINFORM.CFNC_N_UNPAID_INT.value;
            }
        }


    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Cal_CFNC_PAID_PRIN_SUM() {
    try {
        if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == 'Clear Payment') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'P');
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = document.MAINFORM.CFNC_N_BAL.value;
        } else if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'M');
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = 0.00;
        }
        EEHtml.fireEvent(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Cal_Outstanding_AMT() {
    try {
        var CFNC_N_PAY_PRIN = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_PRIN.value);
        var CFNC_N_PAY_INT = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value);
        var CFNC_N_PAY_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value);
        var CFNC_N_PRE_INT = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);
        var TEMP_CFNC_N_PAY_INT = SYS_BeFloat(document.MAINFORM.TEMP_CFNC_N_PAY_INT.value);
        if (TEMP_CFNC_N_PAY_INT <= CFNC_N_PRE_INT) {
            if (CFNC_N_PAY_AMT < CFNC_N_PRE_INT - TEMP_CFNC_N_PAY_INT) {
                document.MAINFORM.CFNC_N_PAY_INT.value = document.MAINFORM.CFNC_N_PAY_AMT.value;
                document.MAINFORM.CFNC_N_PAY_PRIN.value = 0;
            } else {
                document.MAINFORM.CFNC_N_PAY_INT.value = document.MAINFORM.CFNC_N_PRE_INT.value;
                document.MAINFORM.CFNC_N_PAY_PRIN.value = (SYS_FloatSub(document.MAINFORM.CFNC_N_PAY_AMT.value, document.MAINFORM.CFNC_N_PRE_INT.value) > 0) ? SYS_FloatSub(document.MAINFORM.CFNC_N_PAY_AMT.value, document.MAINFORM.CFNC_N_PRE_INT.value) : 0;
            }
        } else {
            document.MAINFORM.CFNC_N_PAY_PRIN.value = SYS_FloatSub(document.MAINFORM.CFNC_N_PAY_AMT.value, document.MAINFORM.CFNC_N_PRE_INT.value);
            document.MAINFORM.CFNC_N_PAY_INT.value = document.MAINFORM.CFNC_N_PRE_INT.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Cal_outstandingInterest() {
    try {
        var IA_Y_TTL_POST_INT = 0;
        var IA_Y_TTL_PAID_INT = 0;
        var IA_Y_TTL_REFUND_INT = 0;
        var bal = 0;
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'In Arrears') {
            SYS_GetTableDataByRule_S("GetACCUnpaidInt", "1", true);
            IA_Y_TTL_POST_INT = SYS_BeFloat(document.MAINFORM.BM_TEMP_FIN_AMT1.value);
            IA_Y_TTL_PAID_INT = SYS_BeFloat(document.MAINFORM.BM_TEMP_FIN_AMT2.value);
            IA_Y_TTL_REFUND_INT = SYS_BeFloat(document.MAINFORM.BM_TEMP_FIN_AMT3.value);
            bal = SYS_FloatSub(IA_Y_TTL_POST_INT, SYS_FloatAdd(IA_Y_TTL_REFUND_INT, IA_Y_TTL_PAID_INT));
            document.MAINFORM.CFNC_N_UNPAID_INT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, Math.abs(bal));
        }
        document.MAINFORM.CFNC_N_UNPAID_PRIN.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_PRIN.value));

    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CalcInterestAmount() {
    try {
        var baseday; // Utility Auto Fix Comments
        var interest; // Utility Auto Fix Comments
        var liborAmount; // Utility Auto Fix Comments
        var liborrate; // Utility Auto Fix Comments
        var marginAmount; // Utility Auto Fix Comments
        var marginrate; // Utility Auto Fix Comments
        var nFinanceAmount; // Utility Auto Fix Comments
        var nFinanceDays; // Utility Auto Fix Comments
        var payable; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var sCCY; // Utility Auto Fix Comments
        marginrate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        liborrate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        payable = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        sCCY = document.MAINFORM.CFNC_C_CCY.value;
        nFinanceAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        nFinanceDays = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value);
        rate = SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value);
        baseday = SYS_BeInt(document.MAINFORM.CFNC_I_BASIC_DAYS.value);
        if (document.MAINFORM.CFNC_C_INT_MODE.value == "Simple Interest") {
            marginAmount = (nFinanceAmount / 100) * (marginrate / baseday) * nFinanceDays;
            liborAmount = (nFinanceAmount / 100) * (liborrate / baseday) * nFinanceDays;
            interest = marginAmount + liborAmount;
        }
        if (document.MAINFORM.CFNC_C_INT_MODE.value == "Simple Yield") {
            interest = (rate / (1 + ((rate / 100) * (nFinanceDays / baseday)))) * nFinanceAmount * nFinanceDays / baseday / 100; // Utility Auto Fix Comments
            marginAmount = interest / rate * marginrate; // Utility Auto Fix Comments
            liborAmount = interest / rate * liborrate; // Utility Auto Fix Comments
        }
        if (document.MAINFORM.CFNC_C_INT_MODE.value == "Compound Interest") {
            interest = SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value) * SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value) / SYS_BeFloat(document.MAINFORM.CFNC_I_BASIC_DAYS.value) / 100;
            liborAmount = Math.pow((1 + SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value) * 365 / 360 / 100), period);
            marginAmount = (1 + SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value) * (SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value) - period * 365) / 100 / 360);
        }
        document.MAINFORM.CFNC_N_PRE_INT.value = interest;
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
        document.MAINFORM.CFNC_N_MARGIN_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, marginAmount);
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_MARGIN_AMT, "onchange");
        document.MAINFORM.CFNC_N_LIBOR_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, liborAmount);
        //dane 2008-12-26 begin
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Applicant" && payable == "Up Front") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount - liborAmount - marginAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Applicant" && payable == "In Arrears") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Beneficiary" && payable == "Up Front") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount - liborAmount - marginAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Drawer" && payable == "Up Front") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount - liborAmount - marginAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Drawee") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount;
        }
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_NET_AMT, "onchange");
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Change_CFNC_N_BAL() {
    try {
        document.MAINFORM.CFNC_N_BAL_TEMP.value = SYS_FloatSub(document.MAINFORM.CFNC_N_BAL.value, document.MAINFORM.CFNC_PAID_PRIN_SUM.value);
        if (document.MAINFORM.CFNC_N_BAL_TEMP.value == 0) {
            document.MAINFORM.REPAY_FLG.value = 'YES';
        } else {
            document.MAINFORM.REPAY_FLG.value = 'NO';
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Change_CFNC_N_RT_NARR() {
    try {
        if (document.MAINFORM.CFNC_N_LIBOR_RT_TYPE.value != 'Other') {
            document.getElementById("RateTypeNarrative_01").style.display = 'none';
            document.getElementById("RateTypeNarrative_02").style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Change_CPYT_CR_DR_AMT() {
    try {
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYS_FloatAdd(SYS_FloatAdd(document.MAINFORM.CFNC_PAID_PRIN_SUM.value, document.MAINFORM.CFNC_N_PAID_INT.value), document.MAINFORM.CUST_AC_AMT1.value);
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, 'onchange');
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYS_FloatAdd(document.MAINFORM.CFNC_N_PAY_AMT.value, document.MAINFORM.CFNC_N_REFUND.value);
        EEHtml.fireEvent(document.MAINFORM.CPYT_N_PAY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Change_CUST_AC_AMT1() {
    try {
        document.MAINFORM.CUST_AC_AMT1.value = SYS_FloatAdd(SYS_FloatSub(SYS_FloatSub(document.MAINFORM.CFNC_N_PAY_AMT.value, document.MAINFORM.CFNC_PAID_PRIN_SUM.value), document.MAINFORM.CFNC_N_PAID_INT.value), document.MAINFORM.CFNC_N_REFUND.value);
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Check_CFNC_N_PAY_AMT() {
    try {
        if (SYS_BeFloat(document.MAINFORM.CUST_AC_AMT1.value) < 0) {
            alert("Payment Amount is not enough to pay principal and interest.");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Check_CFNC_PAID_PRIN_SUM() {
    try {
        if (document.MAINFORM.CFNC_PAID_PRIN_SUM.value < 0) {
            alert('The amount field should not accept negative values!');
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.CFNC_PAID_PRIN_SUM.value) > SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value)) {
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = 0;
            alert('Total Principal Paid cannot be more than Balance Amount.');
        }
        if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == 'Unclear Payment' && SYS_BeFloat(document.MAINFORM.CFNC_PAID_PRIN_SUM.value) == SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value)) {
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = 0;
            alert('Unclear payment,Total Principal Paid cannot be equal to Balance Amount.');
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Chk_CFNC_PAYMENT_FLAG() {
    try {
        if (document.MAINFORM.CFNC_PAYMENT_FLAG.value == 'Yes') {
            document.getElementById("C").style.display = "block";
        } else {
            document.getElementById("C").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_ConfirmBusinessCall() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            Change_CFNC_N_BAL();
        }
        if (SYS_MODULE_NAME == "RPFM") {
            document.MAINFORM.TEMP_CFNC_N_PAY_INT.value = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value);
            document.MAINFORM.TEMP_CFNC_N_PAY_PRIN.value = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_PRIN.value);
        }

    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_ConfirmBusinessCheck() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            if (!Check_CFNC_N_PAY_AMT()) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function GetInqInteLoanData() {
    try {
        document.MAINFORM.IA_D_POST_TODATE.value = document.MAINFORM.CFNC_D_PAY_DT.value;
        document.MAINFORM.IA_C_REF_NO.value = document.MAINFORM.CFNC_C_REF.value;
        document.MAINFORM.IA_D_POST_FROMDATE.value = document.MAINFORM.CFNC_D_DT.value;
        document.MAINFORM.IA_D_TRX_VALDATE.value = document.MAINFORM.CFNC_D_PAY_DT.value;
        document.MAINFORM.IA_Y_TRX_AMT.value = document.MAINFORM.CFNC_PAID_PRIN_SUM.value;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Hide_FinanceRepayment_Info() {
    try {
        document.getElementById("CFNC_01").style.display = 'none';
        document.getElementById("CFNC_02").style.display = 'none';
        document.getElementById("CFNC_03").style.display = 'none';
        document.getElementById("CFNC_04").style.display = 'none';
        document.getElementById("CFNC_05").style.display = 'none';
        document.getElementById("CFNC_06").style.display = 'none';
        document.getElementById("CFNC_07").style.display = 'none';
        document.getElementById("CFNC_08").style.display = 'none';
        if ("EPLC_PayAtMaturity" == SYS_ORG_FUNCTION_NAME || "EPLC_PaymentAtMaturityFrCE" == SYS_ORG_FUNCTION_NAME || SYS_ORG_FUNCTION_NAME == "EXCO_SettlementAtMaturity" || SYS_ORG_FUNCTION_NAME == "EXCO_SettlementAtMaturityFrCE"||SYS_ORG_FUNCTION_NAME == "IPLC_PaymentAtMaturity") {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_PMT_CLEAR_TYPE, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function InitFinancePayment() {
    try {
        if ("" != document.MAINFORM.CFNC_C_REF.value) {
            if (SYS_MODULE_NAME == "RPFM") {
                if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "EC") {
                    Cal_outstandingInterest();
                    document.MAINFORM.CFNC_D_PAY_DT.value = SYS_BUSI_DATE;
                    SYS_InqGapi_S("RPFM_Repayment_ACC_InqInt");
                }
                document.MAINFORM.CFNC_N_BAL_TEMP.value = document.MAINFORM.CFNC_N_BAL.value;
                document.MAINFORM.CFNC_D_PAY_DT.value = SYS_BUSI_DATE;
                var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
                var CFNC_N_PRE_INT; // Utility Auto Fix Comments
                if ("In Arrears" == document.MAINFORM.CFNC_C_INT_PAYABLE.value) {
                    document.MAINFORM.CFNC_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_INT.value), SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_PRIN.value)));
                }
                CAL_repayAmt();
                if (SYS_FUNCTION_NAME == "RepayGrantor") {
                    changeCFNC_N_PAID_AMT();
                    getCPYT_DR_TTL_AMT_TTLCCY();
                    getCPYT_CR_TTL_AMT_TTLCCY();
                    SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                    SYM_RPFM_Delete_credit_record();
                }
                if (SYS_FUNCTION_NAME == "SettleParticipant") {
                    changeCFNC_N_PAID_AMT();
                    getCPYT_DR_TTL_AMT_TTLCCY();
                    getCPYT_CR_TTL_AMT_TTLCCY();
                    SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                }
            } else {
                document.MAINFORM.CFNC_N_BAL.value = 0.00;
                CAL_CFNC_N_PAY_AMT();
                document.MAINFORM.CFNC_N_PAY_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            }
            document.MAINFORM.CFNC_D_PAY_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CFNC_I_OVERDUE_DAYS.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.CFNC_PMT_CLEAR_TYPE, 'P'); //Add for cfnc
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function InitFinancePaymentData() {
    try {
        document.MAINFORM.CFNC_N_BAL_TEMP.value = document.MAINFORM.CFNC_N_BAL.value;
        document.MAINFORM.CFNC_I_OVERDUE_DAYS_TEMP.value = SYS_BUSI_DATE;
        document.MAINFORM.CFNC_I_OVERDUE_DAYS.value = SYS_GetSubDays(document.MAINFORM.CFNC_I_OVERDUE_DAYS_TEMP.name, document.MAINFORM.CFNC_OVERDUE_DT.name);
        document.MAINFORM.CFNC_N_AMT_TXCCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CFNC_D_PAY_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_InitValues() {
    try {
        if (SYS_MODULE_NAME != "CFNC") {
            InitFinancePayment();
        }
        if (SYS_MODULE_NAME == "CFNC") {
            document.MAINFORM.CFNC_N_BAL_TEMP.value = document.MAINFORM.CFNC_N_BAL.value;
            InitFinancePaymentData();
        }
        if (SYS_MODULE_NAME == "EPLC" && SYS_ORG_FUNCTION_SHORT_NAME == "PayAtMat") {
            var dist_flag = SYS_getValueFromMain('DISCNT_FLG');
            if (dist_flag == "NO") {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PAY_AMT, 'P');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Inquire_eLoan() {
    try {
        var nDay = SYS_GetSubDays(document.MAINFORM.CFNC_D_PAY_DT.name, document.MAINFORM.CFNC_D_DUE_DT.name);
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'Up Front' && nDay >= 0) {
            if (document.MAINFORM.CFNC_PAID_PRIN_SUM.value == 0) {
                document.MAINFORM.CFNC_N_REFUND.value = 0;
            } else {
                SYS_InqGapi_S("CFNC_Repayment_AMZ_InqInt");
            }
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_REFUND, 'onchange');
        } else {
            SYS_InqGapi_S("CFNC_Repayment_ACC_InqInt");
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAY_PNLT_INT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAID_INT, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_PostconditionOnInit() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            var amt = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value); //added
            document.MAINFORM.CFNC_N_PAY_AMT.value = SYT_AmtFormat(amt, document.MAINFORM.CFNC_N_PAY_AMT.value); //added
        }
        document.getElementById("CFNC_RPFM01").style.display = 'none';
        document.getElementById("CFNC_RPFM02").style.display = 'none';
        if (SYS_MODULE_NAME == "CFNC") {
            Show_FinanceRepayment_Info();
            Change_CFNC_N_RT_NARR();
            SHOW_CFNC_PRINCIPAL_INSTAL_FLG();
            Chk_CFNC_PAYMENT_FLAG();
            if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == 'Clear Payment') {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'P');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'M');
            }
        }
        if (SYS_MODULE_NAME != "CFNC") {
            Hide_FinanceRepayment_Info();
            if (SYS_MODULE_NAME == "RPFM") {
                getCPYT_DR_TTL_AMT_TTLCCY();
                getCPYT_CR_TTL_AMT_TTLCCY();
                SYT_ChangeFldClass(document.MAINFORM.CFNC_PMT_CLEAR_TYPE, 'P'); //Add for cfnc
                document.getElementById("CFNC_RPFM01").style.display = '';
                document.getElementById("CFNC_RPFM02").style.display = '';
            }
        }


    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function PreInitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function SET_VALUE_TO_STL_TAB() {
    try {
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var INT_AMT; // Utility Auto Fix Comments
        var Total_Credit_AMT; // Utility Auto Fix Comments
        if ("In Arrears" == document.MAINFORM.CFNC_C_INT_PAYABLE.value) {
            document.MAINFORM.INT_AMT.value = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_AMT.value) + SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.INT_AMT, "onchange");
        }
        INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        Total_Credit_AMT = CFNC_N_AMT_LCCCY + INT_AMT;
        if ("EXCO" == SYS_MODULE_NAME) {
            document.MAINFORM.CR_AMT_DRWR_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, Total_Credit_AMT);
            EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, "onchange");
        } else if ("EPLC" == SYS_MODULE_NAME) {
            document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, Total_Credit_AMT);
            EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function SHOW_CFNC_PRINCIPAL_INSTAL_FLG() {
    try {
        if (document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.value == 'Yes' && document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.value == 'Yes') {
            document.getElementById("PrincipalInstallmentInterval_01").style.display = 'block';
            document.getElementById("PrincipalInstallmentInterval_02").style.display = 'block';
            document.getElementById("InterestInstallmentInterval_01").style.display = 'block';
            document.getElementById("InterestInstallmentInterval_02").style.display = 'block';
        } else if (document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.value == 'Yes' && document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.value == 'No') {
            document.getElementById("PrincipalInstallmentInterval_01").style.display = 'block';
            document.getElementById("PrincipalInstallmentInterval_02").style.display = 'block';
            document.getElementById("InterestInstallmentInterval_01").style.display = 'none';
            document.getElementById("InterestInstallmentInterval_02").style.display = 'none';
        } else if (document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.value == 'No' && document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.value == 'Yes') {
            document.getElementById("PrincipalInstallmentInterval_01").style.display = 'none';
            document.getElementById("PrincipalInstallmentInterval_02").style.display = 'none';
            document.getElementById("InterestInstallmentInterval_01").style.display = 'block';
            document.getElementById("InterestInstallmentInterval_02").style.display = 'block';
        } else if (document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.value == 'No' && document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.value == 'No') {
            document.getElementById("PrincipalInstallmentInterval_01").style.display = 'none';
            document.getElementById("PrincipalInstallmentInterval_02").style.display = 'none';
            document.getElementById("InterestInstallmentInterval_01").style.display = 'none';
            document.getElementById("InterestInstallmentInterval_02").style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function Show_FinanceRepayment_Info() {
    try {
        if (SYS_MODULE_NAME == "RPFM") {
            document.getElementById("CFNC_01").style.display = 'block';
            document.getElementById("CFNC_02").style.display = 'block';
            document.getElementById("CFNC_03").style.display = 'block';
            document.getElementById("CFNC_04").style.display = 'block';
            document.getElementById("CFNC_05").style.display = 'block';
            document.getElementById("CFNC_06").style.display = 'block';
            document.getElementById("CFNC_07").style.display = 'block';
            document.getElementById("CFNC_08").style.display = 'block';
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function changeCFNC_N_PAID_AMT() {
    try {
        var balance; // Utility Auto Fix Comments
        var newbalance; // Utility Auto Fix Comments
        var payAmount; // Utility Auto Fix Comments
        payAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_PRIN.value);
        balance = SYS_BeFloat(document.MAINFORM.CFNC_N_BAL_TEMP.value);
        if (SYS_MODULE_NAME = 'RPFM') {
            balance = SYS_BeFloat(document.MAINFORM.SET_BAL.value);
        }
        if (balance >= payAmount) {
            newbalance = balance - payAmount;
            document.MAINFORM.CFNC_N_BAL.value = newbalance;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_BAL, "onchange");
        } else {
            SYS_CheckError(document.MAINFORM.CFNC_N_PAY_AMT, "Paid Amount cannot exceed Balance!");
            document.MAINFORM.CFNC_N_PAY_PRIN.value = document.MAINFORM.CFNC_N_UNPAID_PRIN.value;
            document.MAINFORM.CFNC_N_PAY_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function chk_CFNC_D_PAY_DT() {
    try {
        var nPayDay_01 = SYS_GetSubDays(document.MAINFORM.CFNC_D_PAY_DT.name, document.MAINFORM.CFNC_D_DUE_DT.name);
        var nPayDay_02 = SYS_GetSubDays(document.MAINFORM.CFNC_D_PAY_DT.name, document.MAINFORM.CFNC_D_DT.name);

        if (nPayDay_01 < 0) {
            // Payment Date should not be later than End Date!
            SYS_CheckError(document.MAINFORM.CFNC_D_PAY_DT, "Payment Date should not be later than End Date!");
        } else if (nPayDay_02 >= 0) {
            // Payment date must after Start Date!
            SYS_CheckError(document.MAINFORM.CFNC_D_PAY_DT, "Payment date must after Start Date!");
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function FincSinglePayment_initFieldEvent() {
    try {
        document.MAINFORM.CFNC_D_PAY_DT.onchange = CFNC_D_PAY_DT_onchange;
        document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.onchange = CFNC_INTEREST_INSTAL_FLG_onchange;
        document.MAINFORM.CFNC_N_PAY_AMT.onchange = CFNC_N_PAY_AMT_onchange;
        document.MAINFORM.CFNC_PAID_PRIN_SUM.onchange = CFNC_PAID_PRIN_SUM_onchange;
        document.MAINFORM.CFNC_PMT_CLEAR_TYPE.onchange = CFNC_PMT_CLEAR_TYPE_onchange;
        document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.onchange = CFNC_PRINCIPAL_INSTAL_FLG_onchange;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CFNC_D_PAY_DT_onchange() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            chk_CFNC_D_PAY_DT();
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CFNC_INTEREST_INSTAL_FLG_onchange() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            SHOW_CFNC_PRINCIPAL_INSTAL_FLG();
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CFNC_N_PAY_AMT_onchange() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            Change_CUST_AC_AMT1();
            Change_CPYT_CR_DR_AMT();
        }
        if (SYS_MODULE_NAME == "RPFM") {
            CAL_repayAmt();
            changeCFNC_N_PAID_AMT();
            if (SYS_FUNCTION_NAME == "RepayGrantor") {
                document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                Cal_CPYT_N_PAY_AMT();
                getCPYT_DR_TTL_AMT_TTLCCY();
                getCPYT_CR_TTL_AMT_TTLCCY();
                //SYF_RPFM_set_repayamt_to_PAYMENT_CREDIT();
                SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                SYM_RPFM_Delete_credit_record();
            }
            if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
                if (SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value) < 0) {
                    alert("The amount field should not accept negative values!");
                    document.MAINFORM.CFNC_N_PAY_AMT.value = 0;
                    document.MAINFORM.CFNC_N_PAY_INT.value = 0;
                }
            }
            if (SYS_FUNCTION_NAME == "SettleParticipant") {
                var amt = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value);
                document.MAINFORM.CFNC_N_PAY_AMT.value = SYT_AmtFormat(amt, document.MAINFORM.CFNC_N_PAY_AMT.value);
                document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                Cal_CPYT_N_PAY_AMT();
                getCPYT_DR_TTL_AMT_TTLCCY();
                getCPYT_CR_TTL_AMT_TTLCCY();
                SYF_RPFM_set_repayamt_to_PAYMENT_DEBIT();
                SYM_RPFM_Delete_credit_record();
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CFNC_PAID_PRIN_SUM_onchange() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            Check_CFNC_PAID_PRIN_SUM();
            Inquire_eLoan();
            CAL_CFNC_N_PAY_AMT();
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CFNC_PMT_CLEAR_TYPE_onchange() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            Cal_CFNC_PAID_PRIN_SUM();
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}

function CFNC_PRINCIPAL_INSTAL_FLG_onchange() {
    try {
        if (SYS_MODULE_NAME == "CFNC") {
            SHOW_CFNC_PRINCIPAL_INSTAL_FLG();
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePayment.js", e);
    }
}