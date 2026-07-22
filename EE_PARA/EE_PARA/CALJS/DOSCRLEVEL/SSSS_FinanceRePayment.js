"path:SCRN/DO/FinanceRePayment.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Back_CFNC_D_MAT_DATE = function(enddate) {
    try {
        document.MAINFORM.CFNC_D_DUE_DT.value = enddate;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.FinanceBalanceChange = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.CFNC_N_BAL.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.CFNC_N_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.FinanceDayschange = function() {
    try {
        var nFinanceDays2; // Utility Auto Fix Comments
        nFinanceDays2 = document.MAINFORM.CFNC_I_DAYS.value;
        if (nFinanceDays2 > 0) {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays2, 'Back_CFNC_D_MAT_DATE', 'A', 'N', 'N');
        } else {
            alert("Finance days cannot be less than 0");
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.FinanceDueDatechange = function() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            nFinanceDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
            if (nFinanceDays > 0) {
                document.MAINFORM.CFNC_I_DAYS.value = nFinanceDays;
            } else {
                alert("Finance Due date should later than Finance Start date1");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.InitAmzInt = function() {
    try {
        var sFinanceRef; // Utility Auto Fix Comments
        var sTrxCCY; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        //sFinanceRef = document.MAINFORM.CFNC_C_REF.value;
        //strSQLWhere = "IA_C_REF_NO='" + sFinanceRef + "'";
        SYS_GetTableDataByRule_S('SSSS_FinanceRePayment_InitAmzInt_0', '1');
        nAmzInt = document.MAINFORM.CFNC_N_REACC_INT.value;
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.CFNC_N_REACC_INT.value = SYT_AmtFormat(sTrxCCY, nAmzInt);
        document.MAINFORM.CFNC_N_PAID_INT.value = SYT_AmtFormat(sTrxCCY, nAmzInt);
        SYT_ChangeFldClass(document.MAINFORM.CFNC_N_REACC_INT, "P");
        SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PAY_PNLT_INT, "P");
        SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PAID_INT, "P");
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.InitTrxAmtAMT = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.CFNC_C_CCY.value;
        document.MAINFORM.N_TRX_AMT.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.N_TRX_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var Arrayvalue; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        str = SYS_getCurrNodeParentValue('FincRepaymentHeader', 'CFNC_C_REF_TEMP');
        Arrayvalue = str.split(';'); // Utility Auto Fix Comments
        SYS_RebuildOptions('CFNC_C_REF', Arrayvalue);
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.IntRetFlag = function() {
    try {
        if (document.MAINFORM.CFNC_C_RET_FLG.value == 1 && document.MAINFORM.CFNC_C_INT_MTHD.value == 1) {
            SYS_getDataByDOComp(document.MAINFORM.CFNC_C_RET_FLG.name);
        }
        if (document.MAINFORM.CFNC_C_RET_FLG.value == 2 || document.MAINFORM.CFNC_C_INT_MTHD.value == 2) { //驴驴驴驴驴驴驴驴驴驴驴驴驴驴
            document.MAINFORM.CFNC_N_RFD_INT.value = 0;
            document.MAINFORM.CFNC_N_RFD_EXTINT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.LCAmountChange = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.CFNC_N_AMT_LCCCY.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.CFNC_N_AMT_LCCCY.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.PageInitByRef = function() {
    try {
        SYS_getDataByDOComp('CFNC_C_REF', setOrgBalancevalue);
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.PaidInterestChange = function() {
    try {
        var nInterest; // Utility Auto Fix Comments
        var nPaidInterestAMT; // Utility Auto Fix Comments
        var nTotalInterestAMT; // Utility Auto Fix Comments
        var sFinanceCCY; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_N_REACC_INT.value != "") {

            sFinanceCCY = document.MAINFORM.CFNC_C_CCY.value;
            nPaidInterestAMT = SYS_BeFloat(document.MAINFORM.CFNC_N_PAID_INT.value);
            nTotalInterestAMT = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_MARGIN_OLD.value);
            nInterest = nTotalInterestAMT - nPaidInterestAMT;
            if (nInterest >= 0) {
                document.MAINFORM.CFNC_N_PAID_INT.value = SYT_AmtFormat(sFinanceCCY, nPaidInterestAMT);
                document.MAINFORM.CFNC_N_REACC_INT.value = SYT_AmtFormat(sFinanceCCY, nInterest);
                document.MAINFORM.CFNC_N_REACC_INT.value = SYT_AmtFormat(sFinanceCCY, nInterest);
            } else {
                alert("Paid Interest cannot more than Total Accrual Interest!");
                document.MAINFORM.CFNC_N_PAID_INT.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.PaneltyRateChange = function() {
    try {
        if (document.MAINFORM.CFNC_N_PNLT_RT.value != "" && document.MAINFORM.CFNC_N_AMT_LCCCY.value != "") {
            SYS_getDataByDOComp('CFNC_N_PNLT_RT');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.PayPrincipleAMTchange = function() {
    try {
        var nFinanceBal; // Utility Auto Fix Comments
        var nPayAment; // Utility Auto Fix Comments
        var nPrinciple; // Utility Auto Fix Comments
        var sFinanceCCY; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_N_RT.value != "" && document.MAINFORM.CFNC_N_PAY_AMT.value != "" && document.MAINFORM.CFNC_C_RET_FLG.value == "1") {
            nPrinciple = SYS_BeFloat(document.MAINFORM.CFNC_N_BAL_ORG.value);
            nPayAment = SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value);
            nFinanceBal = nPrinciple - nPayAment;
            if (nFinanceBal >= 0) {
                sFinanceCCY = document.MAINFORM.CFNC_C_CCY.value;
                document.MAINFORM.CFNC_N_PAY_AMT.value = SYT_AmtFormat(sFinanceCCY, document.MAINFORM.CFNC_N_PAY_AMT.value);
                document.MAINFORM.CFNC_N_BAL.value = SYT_AmtFormat(sFinanceCCY, nFinanceBal);
                document.MAINFORM.CFNC_N_AMT_TXCCY.value = SYT_AmtFormat(sFinanceCCY, nFinanceBal);
            } else {
                alert("Payment amount cannot over than Finance amount!"); // Utility Auto Fix Comments
                document.MAINFORM.CFNC_N_PAY_AMT.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.PaymentDateChange = function() {
    try {
        var nPaydatecheck; // Utility Auto Fix Comments
        var nRefunddays; // Utility Auto Fix Comments
        var nRefunddays2; // Utility Auto Fix Comments
        var sFinaneMethod; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_PAY_DT.value != "" && document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            nRefunddays = SYS_GetSubDays(document.MAINFORM.CFNC_D_PAY_DT.name, document.MAINFORM.CFNC_D_DUE_DT.name); //驴驴驴驴驴驴驴驴驴驴驴驴驴驴
            nRefunddays2 = SYS_GetSubDays(document.MAINFORM.CFNC_D_DT.name, document.MAINFORM.CFNC_D_PAY_DT.name); //驴驴驴驴驴驴驴驴驴驴驴驴驴驴
            nPaydatecheck = SYS_GetSubDays(document.MAINFORM.CFNC_D_LAST_PMT_DT.name, document.MAINFORM.CFNC_D_PAY_DT.name); // Utility Auto Fix Comments
            sFinaneMethod = document.MAINFORM.CFNC_C_INT_MTHD.value; //驴驴驴驴驴驴 1.Amortization 2.Accrual
            if (nPaydatecheck >= 0) {
                if (nRefunddays2 > 0) {
                    document.MAINFORM.CFNC_I_DISCOUNT_DAYS_N.value = nRefunddays;
                    if (sFinaneMethod == "2") //驴驴驴驴驴驴驴Accrual
                    {
                        SYS_getDataByDOComp(document.MAINFORM.CFNC_N_REACC_INT.name, SetFinanceAccInterest);
                    }
                    if (sFinaneMethod == "1") //驴驴驴驴驴驴驴Amortization
                    {
                        InitAmzInt();
                    }
                } else {
                    alert("Payment date must after Finance Date!");
                    document.MAINFORM.CFNC_D_PAY_DT.value = "";
                }
            } else {
                alert("Payment date should later than last payment date");
                document.MAINFORM.CFNC_D_PAY_DT.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.SetFinanceAccInterest = function() {
    try {
        var nPrinciple; // Utility Auto Fix Comments
        var sFinanceCCY; // Utility Auto Fix Comments
        nPrinciple = SYS_BeFloat(document.MAINFORM.CFNC_N_REACC_INT.value); //驴驴驴驴驴驴
        sFinanceCCY = document.MAINFORM.CFNC_C_CCY.value;
        document.MAINFORM.CFNC_N_REACC_INT.value = SYT_AmtFormat(sFinanceCCY, nPrinciple);
        document.MAINFORM.CFNC_N_PAY_MARGIN_OLD.value = SYT_AmtFormat(sFinanceCCY, nPrinciple);
        SYT_ChangeFldClass(document.MAINFORM.CFNC_N_REACC_INT, "P");
        SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PAY_PNLT_INT, "P");
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.TrxAmountChange = function() {
    try {
        var sTrxCCY; // Utility Auto Fix Comments
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        document.MAINFORM.CFNC_N_AMT_TXCCY.value = SYT_AmtFormat(sTrxCCY, document.MAINFORM.CFNC_N_AMT_TXCCY.value);
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.setFinanceInterest = function() {
    try {
        var nPrinciple; // Utility Auto Fix Comments
        nPrinciple = SYS_BeFloat(document.MAINFORM.CFNC_N_REACC_INT.value); //Get Finance Balance
        document.MAINFORM.CFNC_N_PAY_MARGIN_OLD.value = nPrinciple;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.setOrgBalancevalue = function() {
    try {
        var nPrinciple; // Utility Auto Fix Comments
        nPrinciple = SYS_BeFloat(document.MAINFORM.CFNC_N_BAL.value); //驴驴驴驴驴驴
        document.MAINFORM.CFNC_N_BAL_ORG.value = nPrinciple;
        InitAmzInt();
        TrxAmountChange();
        LCAmountChange();
        FinanceBalanceChange();
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_C_REF_onchange = function(event) {
    try {
        PageInitByRef(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_C_RET_FLG_onchange = function(event) {
    try {
        IntRetFlag(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_D_DT_onchange = function(event) {
    try {
        FinanceDueDatechange(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_D_DUE_DT_onchange = function(event) {
    try {
        FinanceDueDatechange(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_D_PAY_DT_onchange = function(event) {
    try {
        PaymentDateChange(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_I_DAYS_onchange = function(event) {
    try {
        FinanceDayschange(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_N_PAY_AMT_onchange = function(event) {
    try {
        PayPrincipleAMTchange(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}

csDOScreenProto.CFNC_N_PNLT_RT_onchange = function(event) {
    try {
        PaneltyRateChange(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FinanceRePayment.js", e);
    }
}