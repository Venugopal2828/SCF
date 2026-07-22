"path:SCRN/DO/FincSinglePaymentCF.jsp";

function Cal_CFNC_N_PAY_AMT() {
    try {
        if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == 'Clear Payment') {
            if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'In Arrears') {
                document.MAINFORM.CFNC_N_PAY_AMT.value = SYS_FloatAdd(document.MAINFORM.CFNC_N_PRE_INT.value, document.MAINFORM.CFNC_N_BAL_TEMP.value);
            } else {
                document.MAINFORM.CFNC_N_PAY_AMT.value = SYS_FloatSub(document.MAINFORM.CFNC_N_BAL_TEMP.value, document.MAINFORM.CFNC_N_REFUND.value);
            }
        } else if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == 'Unclear Payment') {
            document.MAINFORM.CFNC_N_PAY_AMT.value = SYS_FloatAdd(document.MAINFORM.CFNC_PAID_PRIN_SUM.value, document.MAINFORM.CFNC_N_PRE_INT.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function Cal_CFNC_PAID_PRIN_SUM() {
    try {
        if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == 'Clear Payment') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'P');
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = document.MAINFORM.CFNC_N_BAL_TEMP.value;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
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
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function Change_CFNC_N_BAL() {
    try {
        document.MAINFORM.CFNC_N_BAL.value = SYS_FloatSub(document.MAINFORM.CFNC_N_AMT_LCCCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
        document.MAINFORM.REPAY_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function Change_CFNC_N_RT_NARR() {
    try {
        if (document.MAINFORM.CFNC_N_LIBOR_RT_TYPE.value != 'Other') {
            document.getElementById("RATE_TYPE_NARR").style.display = 'none';
            document.getElementById("RATE_TYPE_NARR1").style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function Change_CPYT_CR_DR_AMT() {
    try {
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYS_FloatSub(document.MAINFORM.CFNC_PAID_PRIN_SUM.value, document.MAINFORM.CFNC_N_REFUND.value);
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYS_FloatSub(document.MAINFORM.CFNC_N_PAY_AMT.value, document.MAINFORM.CFNC_N_REFUND.value);
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
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
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function Check_CFNC_PAID_PRIN_SUM() {
    try {
        if (SYS_BeFloat(document.MAINFORM.CFNC_PAID_PRIN_SUM.value) > SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value)) {
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = 0;
            alert('Total Principal Paid cannot be more than Balance Amount.');
        }

        if (document.MAINFORM.CFNC_PMT_CLEAR_TYPE.value == 'Unclear Payment' && SYS_BeFloat(document.MAINFORM.CFNC_PAID_PRIN_SUM.value) == SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value)) {
            document.MAINFORM.CFNC_PAID_PRIN_SUM.value = 0;
            alert('Unclear payment,Total Principal Paid cannot be equal to Balance Amount.');
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function Chk_CFNC_PAYMENT_FLAG() {
    try {
        if (document.MAINFORM.CFNC_PAYMENT_FLAG.value == 'Yes') {
            document.getElementById("C").style.display = "";
        } else {
            document.getElementById("C").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function ConfirmBusinessCall() {
    try {
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAY_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CFNC_D_PAY_DT, 'onchange');
        if (SYS_ORG_FUNCTION_NAME == "FinanceRepay") {
            document.MAINFORM.C_FUNC_SHORT_NAME.value = 'FinanceRepay';
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function ConfirmBusinessCheck() {
    try {
        if (!Check_CFNC_N_PAY_AMT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function InitValues() {
    try {
        document.MAINFORM.CFNC_N_BAL_TEMP.value = document.MAINFORM.CFNC_N_BAL.value;
        document.MAINFORM.CUST_AC_AMT1.value = 0;
        document.MAINFORM.CFNC_I_OVERDUE_DAYS_TEMP.value = SYS_BUSI_DATE;
        document.MAINFORM.CFNC_I_OVERDUE_DAYS.value = SYS_GetSubDays(document.MAINFORM.CFNC_OVERDUE_DT.name, document.MAINFORM.CFNC_I_OVERDUE_DAYS_TEMP.name);
        document.MAINFORM.CFNC_N_AMT_TXCCY.value = document.MAINFORM.CFNC_N_PAY_AMT.value;
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CFNC_D_PAY_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function Inquire_eLoan() {
    try {
        var nDay = SYS_GetSubDays(document.MAINFORM.CFNC_D_PAY_DT.name, document.MAINFORM.CFNC_D_DUE_DT.name);
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'Up Front' && nDay > 0) {
            SYS_InqGapi_S("CFNC_Repayment_AMZ_InqInt");
            document.MAINFORM.CFNC_N_REFUND.value = document.MAINFORM.TEMP_CFNC_N_REFUND.value;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_REFUND, 'onchange');
        } else {
            SYS_InqGapi_S("CFNC_Repayment_ACC_InqInt");
            document.MAINFORM.CFNC_N_PAY_PNLT_INT.value = document.MAINFORM.IA_Y_PENINT_AMT.value;
            document.MAINFORM.CFNC_N_PRE_INT.value = document.MAINFORM.TEMP_CFNC_N_PRE_INT.value;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAY_PNLT_INT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, 'onchange');
        }
        Change_CPYT_CR_DR_AMT();
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function PostconditionOnInit() {
    try {
        Change_CFNC_N_RT_NARR();
        SHOW_CFNC_PRINCIPAL_INSTAL_FLG();
        Chk_CFNC_PAYMENT_FLAG();

    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function PreInitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
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
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function SHOW_REPAYMENT_INFO_CF() {
    try {
        if (SYS_MODULE_NAME == 'CFNC') {
            document.getElementById("Principal1").style.display = 'block';
            document.getElementById("Rate Type1").style.display = 'block';
            document.getElementById("Rate Type2").style.display = 'block';
            document.getElementById("Payment").style.display = 'block';
            document.getElementById("Amount").style.display = 'block';
            document.getElementById("Interest").style.display = 'block';
            document.getElementById("Penalty Rate").style.display = 'block';
            document.getElementById("Installment").style.display = 'block';
        } else {
            document.getElementById("Principal1").style.display = 'none';
            document.getElementById("Rate Type1").style.display = 'none';
            document.getElementById("Rate Type2").style.display = 'none';
            document.getElementById("Payment").style.display = 'none';
            document.getElementById("Amount").style.display = 'none';
            document.getElementById("Interest").style.display = 'none';
            document.getElementById("Penalty Rate").style.display = 'none';
            document.getElementById("Installment").style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
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
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}
window.onunload = OnLeave;

function OnLeave() {
    PreconditionOnUnload();
    SYS_OnLeave();
    PostconditionOnUnload();
}

function PreconditionOnUnload() {
    try {} catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function PostconditionOnUnload() {
    try {} catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function LoadDODataOnInit() {
    try {} catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}


function initFieldEvent() {
    try {
        document.MAINFORM.CFNC_D_PAY_DT.onchange = CFNC_D_PAY_DT_onchange;
        document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.onchange = CFNC_INTEREST_INSTAL_FLG_onchange;
        document.MAINFORM.CFNC_N_PAY_AMT.onchange = CFNC_N_PAY_AMT_onchange;
        document.MAINFORM.CFNC_N_PAY_PNLT_INT.onchange = CFNC_N_PAY_PNLT_INT_onchange;
        document.MAINFORM.CFNC_N_PRE_INT.onchange = CFNC_N_PRE_INT_onchange;
        document.MAINFORM.CFNC_N_REFUND.onchange = CFNC_N_REFUND_onchange;
        document.MAINFORM.CFNC_PAID_PRIN_SUM.onchange = CFNC_PAID_PRIN_SUM_onchange;
        document.MAINFORM.CFNC_PAYMENT_FLAG.onchange = CFNC_PAYMENT_FLAG_onchange;
        document.MAINFORM.CFNC_PMT_CLEAR_TYPE.onchange = CFNC_PMT_CLEAR_TYPE_onchange;
        document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.onchange = CFNC_PRINCIPAL_INSTAL_FLG_onchange;
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function OnInitial() {
    try {
        PreconditionOnInit();
        SYS_OnInit();
        PostconditionOnInit();
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function CFNC_D_PAY_DT_onchange() {
    try {

        chk_CFNC_D_PAY_DT()
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function CFNC_INTEREST_INSTAL_FLG_onchange() {
    try {

        SHOW_CFNC_PRINCIPAL_INSTAL_FLG();
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function CFNC_N_PAY_AMT_onchange() {
    try {

        Change_CPYT_CR_DR_AMT();
        Change_CFNC_N_BAL();
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function CFNC_N_PAY_PNLT_INT_onchange() {}

function CFNC_N_PRE_INT_onchange() {}

function CFNC_N_REFUND_onchange() {}

function CFNC_PAID_PRIN_SUM_onchange() {
    try {

        Check_CFNC_PAID_PRIN_SUM();
        Inquire_eLoan();
        Cal_CFNC_N_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAY_AMT, 'onchange');
        Change_CPYT_CR_DR_AMT();
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function CFNC_PAYMENT_FLAG_onchange() {}

function CFNC_PMT_CLEAR_TYPE_onchange() {
    try {
        Cal_CFNC_PAID_PRIN_SUM();
        EEHtml.fireEvent(document.MAINFORM.CFNC_PAID_PRIN_SUM, 'onchange');
        Cal_CFNC_N_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_PAY_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}

function CFNC_PRINCIPAL_INSTAL_FLG_onchange() {
    try {
        SHOW_CFNC_PRINCIPAL_INSTAL_FLG();
    } catch (e) {
        DisExcpt("SSSS_FincSinglePaymentCF.js", e);
    }
}