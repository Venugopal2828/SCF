"path:SCRN/DO/FinanceEstablishReg.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CFNC_C_GRACE_DAYS_Change = function() {
    try {
        var nGraceDays; // Utility Auto Fix Comments
        nGraceDays = SYS_BeFloat(document.MAINFORM.CFNC_C_GRACE_DAYS.value);
        if ('' != document.MAINFORM.CFNC_C_GRACE_DAYS.value) {
            if (nGraceDays < 100) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_GRACE_FLG, 'M');
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_C_GRACE_FLG, "Grace Days can not more than 99 !");
                document.MAINFORM.CFNC_C_GRACE_DAYS.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_C_PAY_BY_Change = function() {
    try {
        var CFNC_C_PAY_BY;
        CFNC_C_PAY_BY = document.MAINFORM.CFNC_C_PAY_BY.value;
        switch (CFNC_C_PAY_BY) {
            case "Beneficiary":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'Up Front';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;
            case "Applicant":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'In Arrears';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;
            case "Drawer":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'Up Front';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;
            case "Drawee":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'In Arrears';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_D_DT_Change = function() {
    try {
        var nSubDays; // Utility Auto Fix Comments
        document.MAINFORM.CFNC_C_STATUS.value = SYS_BUSI_DATE;
        nSubDays = SYS_GetSubDays('CFNC_C_STATUS', 'CFNC_D_DT');
        if (nSubDays < 0) {
            SYS_CheckError(document.MAINFORM.CFNC_D_DT, 'Finance Date cannot before system date!');
            document.MAINFORM.CFNC_D_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_D_DUE_DT_Change = function() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            nFinanceDays = SYS_GetSubDays(document.MAINFORM.CFNC_D_DT.name, document.MAINFORM.CFNC_D_DUE_DT.name);
            if (nFinanceDays > 0) {
                document.MAINFORM.CFNC_I_DAYS.value = nFinanceDays;
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_D_DUE_DT, 'Finance Due date should later than Finance Start date !');
                document.MAINFORM.CFNC_D_DUE_DT.value = '';
            }
        }
        document.MAINFORM.CFNC_D_MAST_MATU_DT.value = document.MAINFORM.CFNC_D_DUE_DT.value;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.Cal_CaculateFinAmt = function() {
    try {
        var CFNC_N_TRX_AMT = document.MAINFORM.CFNC_N_TRX_AMT.value;
        var CFNC_N_PCT = document.MAINFORM.CFNC_N_PCT.value;
        var CFNC_N_TRXCCY_LCY = document.MAINFORM.CFNC_N_TRXCCY_LCY.value;
        var CFNC_C_CCY =document.MAINFORM.CFNC_C_CCY.value
        var CFNC_N_AMT_LCCCY;
        CFNC_N_PCT = SYS_FloatDiv(CFNC_N_PCT, 100);
        CFNC_N_AMT_LCCCY = SYS_FloatMul(SYS_FloatMul(CFNC_N_TRX_AMT, CFNC_N_PCT), CFNC_N_TRXCCY_LCY);
        document.MAINFORM.CFNC_N_AMT_LCCCY.value = SYT_AmtFormat(CFNC_C_CCY, CFNC_N_AMT_LCCCY);
        document.MAINFORM.CFNC_N_BAL.value = SYT_AmtFormat(CFNC_C_CCY, CFNC_N_AMT_LCCCY);
        document.MAINFORM.CFNC_N_BAL.value = SYT_AmtFormat(CFNC_C_CCY, CFNC_N_AMT_LCCCY);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.Cal_Caculate_Perctage = function() {
    try {
        var exchangerate; // Utility Auto Fix Comments
        var financeAmount; // Utility Auto Fix Comments
        var masterAmount; // Utility Auto Fix Comments
        masterAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        exchangerate = SYS_BeFloat(document.MAINFORM.CFNC_N_TRXCCY_LCY.value);
        financeAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        if (financeAmount == 0) {
            exchangerate = SYS_BeFloat(document.MAINFORM.CFNC_N_TRXCCY_LCY.value);
        }
        if (masterAmount == 0 || masterAmount == 0) {
            return;
        }
        if (exchangerate !== 0) {
            document.MAINFORM.CFNC_N_PCT.value = financeAmount / masterAmount / exchangerate * 100;
            return;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.Cal_FINANCE_EXC_RATE = function() {
    try {
        var CFNC_C_TRX_CCY = document.MAINFORM.CFNC_C_TRX_CCY.value;
        var CFNC_C_CCY = document.MAINFORM.CFNC_C_CCY.value;
        if (CFNC_C_TRX_CCY !== CFNC_C_CCY) {
            SYS_GetExchangeRate_S(CFNC_C_TRX_CCY, CFNC_C_CCY, 'Booking Rate', "CFNC_N_TRXCCY_LCY");
        } else {
            document.MAINFORM.CFNC_N_TRXCCY_LCY.value = 1;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CalcInterestAmount = function() {
    try {
        /*var Interest; // Utility Auto Fix Comments
        var InterestAmount; // Utility Auto Fix Comments
        var Rate; // Utility Auto Fix Comments
        var baseday; // Utility Auto Fix Comments
        var intmeth; // Utility Auto Fix Comments
        var intmode; // Utility Auto Fix Comments
        var nFinanceAmount; // Utility Auto Fix Comments
        var nFinanceDays; // Utility Auto Fix Comments
        var nNetAmount; // Utility Auto Fix Comments
        var nNetAmount2; // Utility Auto Fix Comments
        var payby; // Utility Auto Fix Comments
        var sCCY; // Utility Auto Fix Comments
        intmeth = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        sCCY = document.MAINFORM.CFNC_C_CCY.value;
        nFinanceAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        nFinanceDays = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value);
        Rate = SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value) / 100;
        baseday = SYS_BeFloat(document.MAINFORM.CFNC_I_BASIC_DAYS.value);

        intmode = document.MAINFORM.CFNC_C_INT_MODE.value;
        payby = document.MAINFORM.CFNC_C_PAY_BY.value;


        if (intmeth == 'Up Front') {
            if (intmode == 1) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE.value, "M");
                if (nFinanceAmount > 0 && nFinanceDays > 0 && Rate > 0) {
                    InterestAmount = (nFinanceAmount * nFinanceDays * Rate) / baseday;
                    document.MAINFORM.CFNC_N_PRE_INT.value = InterestAmount;
                    EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
                    CalculateNetAmount();
                }
            } else if (intmode == 2) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, "P");
                if (nFinanceAmount > 0 && nFinanceDays > 0 && Rate > 0) {
                    nNetAmount = SYS_BeFloat(nFinanceAmount / (1 + Rate * nFinanceDays / baseday));
                    nNetAmount2 = nNetAmount - nfee;
                    Interest = nFinanceAmount - nNetAmount;
                    document.MAINFORM.CFNC_N_NET_AMT.value = nNetAmount2;
                    EEHtml.fireEvent(document.MAINFORM.CFNC_N_NET_AMT, "onchange");
                    document.MAINFORM.CFNC_N_PRE_INT.value = Interest;
                    EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
                }
            } else {
                document.MAINFORM.CFNC_N_NET_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
                document.MAINFORM.CFNC_N_PRE_INT.value = 0;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
            }
        }*/
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CalculateNetAmount = function() {
    try {
        var InterestAmount; // Utility Auto Fix Comments
        var nFinanceAmount; // Utility Auto Fix Comments
        var nWays; // Utility Auto Fix Comments
        var sCCY; // Utility Auto Fix Comments
        sCCY = document.MAINFORM.CFNC_C_CCY.value;
        nWays = document.MAINFORM.CFNC_C_INT_MODE.value;
        InterestAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);
        nFinanceAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        if (nWays == 1) {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount - InterestAmount;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_NET_AMT, "onchange");
        } else if (nWays == 2) {
            nFinanceAmount = SYS_Befloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value); // Utility Auto Fix Comments
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_NET_AMT, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        Set_CFNC_C_INT_MTHD();
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.FinanceDayschange = function() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        nFinanceDays = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value);

        if (document.MAINFORM.CFNC_D_DT.value != '' && nFinanceDays < 9999) {
            if ((document.MAINFORM.CFNC_C_GRACE_FLG.value == 'Working') && (document.MAINFORM.CFNC_C_GRACE_DAYS.value >= '0')) {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'SYF_CFNC_getendday', 'A', 'Y', 'Y');
            } else if ((document.MAINFORM.CFNC_C_GRACE_FLG.value == 'Calendar') && (document.MAINFORM.CFNC_C_GRACE_DAYS.value >= '0')) {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'SYF_CFNC_getendday', 'A', 'N', 'N');
                CalcInterestAmount();
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.FinanceIntMethedChange = function() {
    try {
        var intmeth; // Utility Auto Fix Comments
        var sCCY; // Utility Auto Fix Comments
        sCCY = document.MAINFORM.CFNC_C_CCY.value;
        intmeth = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        if (intmeth == 'In Arrears') {
            document.MAINFORM.CFNC_N_NET_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.CFNC_N_PRE_INT.value = 0;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
            document.MAINFORM.CFNC_C_INT_MODE.value = 4;
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_MODE, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_MODE, "M");
            CalcInterestAmount();
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.FinanceLiborRateChange = function() {
    try {
        var nLiborRate; // Utility Auto Fix Comments
        var nMarginRate;
        nMarginRate = document.MAINFORM.CFNC_N_MARGIN_RT.value
        nLiborRate = document.MAINFORM.CFNC_N_LIBOR_RT.value;
        document.MAINFORM.CFNC_N_RT.value = SYS_FloatAdd(nMarginRate, nLiborRate);

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.FinancePercentageChange = function() {
    try {
        var nEqAmount; // Utility Auto Fix Comments
        var nFinancePersent; // Utility Auto Fix Comments
        var nLCCY; // Utility Auto Fix Comments
        var nTrxAmount; // Utility Auto Fix Comments
        var sTrxCCY; // Utility Auto Fix Comments
        nTrxAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        nFinancePersent = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        sTrxCCY = document.MAINFORM.CFNC_C_TRX_CCY.value;
        nLCCY = document.MAINFORM.CFNC_N_TRXCCY_LCY.value;
        if (nTrxAmount > 0) {
            if (nFinancePersent > 0 && nFinancePersent <= 100) {
                nEqAmount = nTrxAmount * nFinancePersent * nLCCY / 100;
                document.MAINFORM.CFNC_N_AMT_TXCCY.value = nEqAmount;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_TXCCY, "onchange");
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = nEqAmount;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_LCCCY, "onchange");
                document.MAINFORM.CFNC_N_BAL.value = nEqAmount;
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            } else if (nFinancePersent == 0) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_PCT, 'Finance Percentage should between 0 and 100% !'); // Utility Auto Fix Comments
                document.MAINFORM.CFNC_N_PCT.value = 0;
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.FinancePercentageChange2 = function() {
    try {
        var nEqAmount; // Utility Auto Fix Comments
        var nFinancePersent; // Utility Auto Fix Comments
        var nLCCY; // Utility Auto Fix Comments
        var nTrxAmount; // Utility Auto Fix Comments
        var sTrxCCY; // Utility Auto Fix Comments
        nTrxAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        nFinancePersent = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        sTrxCCY = document.MAINFORM.CFNC_C_TRX_CCY.value;
        nLCCY = document.MAINFORM.CFNC_N_TRXCCY_LCY.value;
        if (nTrxAmount > 0) {
            if (nFinancePersent > 0 && nFinancePersent <= 100) {
                nEqAmount = nTrxAmount * nFinancePersent * nLCCY / 100;
                document.MAINFORM.CFNC_N_AMT_TXCCY.value = nEqAmount;
                //EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_TXCCY, "onchange");
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = nEqAmount;
                //EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_LCCCY, "onchange");
                document.MAINFORM.CFNC_N_BAL.value = nEqAmount;
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            } else if (nFinancePersent == 0) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_PCT, 'Finance Percentage should between 0 and 100% !'); // Utility Auto Fix Comments
                document.MAINFORM.CFNC_N_PCT.value = 0;
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.GetLCYvalue = function() {
    try {
        var sCCY; // Utility Auto Fix Comments
        var sTRXCCY; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        sCCY = document.MAINFORM.CFNC_C_CCY.value;
        sTRXCCY = document.MAINFORM.CFNC_C_TRX_CCY.value;
        if (sCCY != sTRXCCY) {
            //strSQLWhere = "C_FROM_CCY='" + sTRXCCY + "'" + " " + "AND" + " " + "C_TO_CCY='" + sCCY + "'";
            SYS_GetTableDataByRule_S('SSSS_FinanceEstablishReg_GetLCYvalue_0', '1');
        } else {
            document.MAINFORM.CFNC_N_TRXCCY_LCY.value = 1;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.GetMainPageTransactionData = function() {
    try {
        document.MAINFORM.CFNC_C_AC_TYPE.value = 'F03';
        if (SYS_MODULE_NAME == 'EXCO') {
            document.MAINFORM.C_TRX_CCY.value = SYS_getValueFromMain('COLL_CCY');
            document.MAINFORM.N_TRX_AMT.value = SYS_getValueFromMain('COLL_TRX_CCY_AMT');
            document.MAINFORM.CFNC_D_MAST_MATU_DT.value = SYS_getValueFromMain('DUE_DT');
            document.MAINFORM.CFNC_C_ORIGIN_MODULE.value = SYS_MODULE_NAME;
            document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.value = SYS_getValueFromMain('C_MAIN_REF');
            document.MAINFORM.CFNC_C_ORIGIN_TRX_REF.value = SYS_getValueFromMain('C_MAIN_REF');
        }
        if (SYS_MODULE_NAME == 'EPLC') {
            document.MAINFORM.C_TRX_CCY.value = SYS_getValueFromMain('LC_CCY');
            document.MAINFORM.N_TRX_AMT.value = SYS_getValueFromMain('PRES_AMT');
            document.MAINFORM.CFNC_D_MAST_MATU_DT.value = SYS_getValueFromMain('MATURITY_DT');
            document.MAINFORM.CFNC_C_ORIGIN_MODULE.value = SYS_MODULE_NAME;
            document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.value = SYS_getValueFromMain('C_MAIN_REF');
            document.MAINFORM.CFNC_C_ORIGIN_TRX_REF.value = SYS_getValueFromMain('DRAWING_REF');
            document.MAINFORM.LC_CCY.value = SYS_getValueFromMain('LC_CCY');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.HidenDoField = function() {
    try {
        var i; // Utility Auto Fix Comments
        var objForm; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        var sclassName; // Utility Auto Fix Comments
        document.body.style.cursor = "not-allowed";
        document.oncontextmenu = "return false";
        objForm = document.forms[0];
        for (i = 0; i < objForm.length; i++) { // Utility Auto Fix Comments
            sclassName = objForm.elements[i].className;
            sMark = "_" + sclassName.substr(sclassName.indexOf("_") + 1, 1);
            objForm.elements[i].className = sclassName.replace(sMark, "_P");
            if (objForm.elements[i].type == "text" || objForm.elements[i].type == "textarea") {
                objForm.elements[i].readonly = true;
                objForm.elements[i].onBlur = false;
            } else {
                objForm.elements[i].disabled = true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.CFNC_C_ORIGIN_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.CFNC_N_PCT.value = 100;
        document.MAINFORM.CFNC_N_TRXCCY_LCY.value = 1;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        CFNC_INTEREST_INSTAL_FLG_onchange();
        CFNC_PRINCIPAL_INSTAL_FLG_onchange();
        CFNC_N_LIBOR_RT_TYPE_onchange();
        document.MAINFORM.CFNC_C_RELT_REF.value = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.CFNC_C_REF.value = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.CFNC_C_AC_TYPE.value = 'DF1';
        document.MAINFORM.CFNC_C_APPROVE_STATUS.value = 'T';
        document.MAINFORM.CFNC_C_STATUS.value = SYS_BUSI_DATE;
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value === 'Up Front') {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'AMZ';
        } else if (document.MAINFORM.CFNC_C_INT_PAYABLE.value === 'In Arrears') {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'ACC';
        }
        Cal_CaculateFinAmt();




    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.SYF_CFNC_getendday = function(enddate) {
    try {
        document.MAINFORM.CFNC_D_DUE_DT.value = enddate;
        document.MAINFORM.CFNC_D_MAST_MATU_DT.value = document.MAINFORM.CFNC_D_DUE_DT.value;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.Set_CFNC_C_INT_MTHD = function() {
    try {
        if ('Up Front' == document.MAINFORM.CFNC_C_INT_PAYABLE.value) {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'AMZ';
        } else {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'ACC';
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_C_AC_NO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('CFNC_C_AC_NO', 'CFNC_C_AC_NO');
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_C_CCY_onchange = function(event) {
    try {
        /*GetLCYvalue();
    FinancePercentageChange();
    CalcInterestAmount();*/
        Cal_FINANCE_EXC_RATE();
        Cal_CaculateFinAmt();
        Cal_Caculate_Perctage();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_C_GRACE_DAYS_onchange = function(event) {
    try {
        CFNC_C_GRACE_DAYS_Change();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_C_INT_MODE_onchange = function(event) {
    try {
        CalcInterestAmount();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_C_INT_PAYABLE_onchange = function(event) {
    try {
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value === 'Up Front') {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'AMZ';
        } else if (document.MAINFORM.CFNC_C_INT_PAYABLE.value === 'In Arrears') {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'ACC';
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_C_PAY_BY_onchange = function(event) {
    try {
        CFNC_C_PAY_BY_Change();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_D_DT_onchange = function(event) {
    try {
        CFNC_D_DT_Change();
        CFNC_D_DUE_DT_Change();
        if (document.MAINFORM.CFNC_I_DAYS.value != 0) {
            FinanceDayschange();
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_D_DUE_DT_onchange = function(event) {
    try {
        CFNC_D_DUE_DT_Change();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_INTEREST_INSTAL_FLG_onchange = function(event) {
    try {
        if (document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.value == 'No') {
            document.getElementById("INTEREST_INTERVAL").style.display = "none";
            document.getElementById("CFNC_INTEREST_INTERVAL").style.display = "none";
        } else {
            document.getElementById("INTEREST_INTERVAL").style.display = "";
            document.getElementById("CFNC_INTEREST_INTERVAL").style.display = "";
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_I_DAYS_onchange = function(event) {
    try {
        FinanceDayschange();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_N_AMT_LCCCY_onchange = function(event) {
    try {
        //CalcInterestAmount();
        document.MAINFORM.CFNC_N_AMT_TXCCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        document.MAINFORM.CFNC_N_BAL.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        Cal_Caculate_Perctage();
        FinancePercentageChange2();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_N_LIBOR_RT_onchange = function(event) {
    try {
        var CFNC_N_LIBOR_RT = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        if (CFNC_N_LIBOR_RT > 100) {
            SYS_CheckError(document.MAINFORM.CFNC_N_LIBOR_RT, 'Base Rate should between 0 and 100% !');
        }
        FinanceLiborRateChange();
        CalcInterestAmount();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_N_LIBOR_RT_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.CFNC_N_LIBOR_RT_TYPE.value == 'Other') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_RT_NARR, 'M');
            document.getElementById("RATE_TYPE_NARR").style.display = "";
            document.getElementById("RATE_TYPE_NARR1").style.display = "";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_RT_NARR, 'P');
            document.getElementById("RATE_TYPE_NARR").style.display = "none";
            document.getElementById("RATE_TYPE_NARR1").style.display = "none";

        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_N_MARGIN_RT_onchange = function(event) {
    try {
        var CFNC_N_MARGIN_RT = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        if (CFNC_N_MARGIN_RT > 100) {
            SYS_CheckError(document.MAINFORM.CFNC_N_MARGIN_RT, 'Margin Rate should between 0 and 100% !');
        }
        FinanceLiborRateChange();
        CalcInterestAmount();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_N_PCT_onchange = function(event) {
    try {
        //FinancePercentageChange();
        var CFNC_N_PCT = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        if (CFNC_N_PCT > 0 && CFNC_N_PCT <= 100) {
            Cal_CaculateFinAmt();
        } else {
            SYS_CheckError(document.MAINFORM.CFNC_N_PCT, 'Finance Percentage should between 0 and 100% !');
            document.MAINFORM.CFNC_N_PCT.value = 100;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}

csDOScreenProto.CFNC_PRINCIPAL_INSTAL_FLG_onchange = function(event) {
    try {
        if (document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.value == 'No') {
            document.getElementById("PRICIPAL_INTERVAL").style.display = "none";
            document.getElementById("CFNC_PRINCIPAL_INTERVAL").style.display = "none";
        } else {
            document.getElementById("PRICIPAL_INTERVAL").style.display = "";
            document.getElementById("CFNC_PRINCIPAL_INTERVAL").style.display = "";
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishReg.js", e);
    }
}