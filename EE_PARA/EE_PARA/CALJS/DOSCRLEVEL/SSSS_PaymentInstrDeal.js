"path:SCRN/DO/PaymentInstrDeal.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var isFirst = 'true';

csDOScreenProto.Back_CPYT_D_MAT_DATE = function(enddate) {
    try {
        document.MAINFORM.CPYT_D_MAT_DATE.value = enddate;
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CPYT_D_MAT_DATE');
        CHK_CPYT_D_MAT_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.CHK_CPYT_D_MAT_DATE = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CPYT_D_MAT_DATE.value.length > 0) {
            nDays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.CPYT_D_MAT_DATE.name);
            if (nDays <= 0) {
                SYS_CheckError(document.MAINFORM.CPYT_D_MAT_DATE, "Maturity Date should be later than Today!");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.CPYT_D_MAT_DATE = function() {
    try {
        var sDay; // Utility Auto Fix Comments
        var startDate; // Utility Auto Fix Comments
        sDay = SYS_BeInt(document.MAINFORM.CPYT_I_TENOR_DAYS.value);
        startDate = document.MAINFORM.CPYT_D_TENOR_START_DATE.value;
        if (startDate != "" && startDate != null) {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, startDate, sDay, Back_CPYT_D_MAT_DATE, 'A', 'N', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        SetTenorInfotoMain();
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept') {
            SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY();
            SYM_EPLC_CAL_NEW_CFM_COMM_FOR_PAY();
            SYM_EPLC_CAL_TTL_CONF_COMM_FOR_PAY();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.DISABLE_DC_BY_SDA_DSCT_FOR_TERM = function() {
    try {
        var CreditHeader_SEPA; // Utility Auto Fix Comments
        var DebitHeader_SEPA; // Utility Auto Fix Comments
        var SDA_FLG; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var discountflag; // Utility Auto Fix Comments
        SDA_FLG = document.MAINFORM.CPYT_C_SDA_FLAG.value;
        debit = EEHtml.getElementById('do_PaymentDebitHeader_Tab');
        credit = EEHtml.getElementById('do_PaymentCreditHeader_Tab');
        DebitHeader_SEPA = EEHtml.getElementById('DebitHeader_SEPA');
        CreditHeader_SEPA = EEHtml.getElementById('CreditHeader_SEPA');

        if ("EPLC" == SYS_MODULE_NAME) {
            discountflag = document.MAINFORM.DISCNT_FLG.value;
            if (SDA_FLG != "Sight" && discountflag == "NO") {
                debit.style.display = 'none';
                credit.style.display = 'none';
                DebitHeader_SEPA.style.display = 'none';
                CreditHeader_SEPA.style.display = 'none';
            } else {
                debit.style.display = '';
                credit.style.display = '';
                DebitHeader_SEPA.style.display = '';
                CreditHeader_SEPA.style.display = '';
            }
        }
        if ("IPLC" == SYS_MODULE_NAME) {
            if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptFrCE") {
                discountflag = document.MAINFORM.DISCNT_FLG.value; // Utility Auto Fix Comments
                if (SDA_FLG != "Sight" && discountflag == "NO") {
                    debit.style.display = 'none';
                    credit.style.display = 'none';
                    DebitHeader_SEPA.style.display = 'none';
                    CreditHeader_SEPA.style.display = 'none';
                } else {
                    debit.style.display = '';
                    credit.style.display = '';
                    DebitHeader_SEPA.style.display = '';
                    CreditHeader_SEPA.style.display = '';
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var ccy; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == "IMCO" || SYS_MODULE_NAME == "EXCO") {
            ccy = document.MAINFORM.COLL_CCY.value;
        } else {
            ccy = document.MAINFORM.PRES_CCY.value; // Utility Auto Fix Comments
        }
        document.MAINFORM.CPYT_PAY_CCY.value = ccy;
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_PAY_CCY.value, document.MAINFORM.CPYT_N_PAY_AMT.value);
        ProtectAllTheField();
        setDataToDiscount();
        getTenorInfo();
        DISABLE_DC_BY_SDA_DSCT_FOR_TERM();

    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.ProtectAllTheField = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_SDA_FLAG, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_PAY_PER, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_CCY, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_N_PAY_AMT, "P");
        if ("Sight" == document.MAINFORM.CPYT_C_SDA_FLAG.value) {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_D_TENOR_START_DATE, "P");
            SYT_ChangeFldClass(document.MAINFORM.CPYT_I_TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, "P");
            SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, 'H');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_D_MAT_DATE, 'P');
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
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.SetTenorInfotoMain = function() {
    try {
        var PMT_FLG; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == "EPLC") {
            PMT_FLG = document.MAINFORM.PMT_FLG.value;
            if ('DEFERRED' == PMT_FLG) {
                document.MAINFORM.TENOR_START_DT.value = document.MAINFORM.CPYT_D_TENOR_START_DATE.value;
                document.MAINFORM.MATURITY_DT.value = document.MAINFORM.CPYT_D_MAT_DATE.value;
                document.MAINFORM.TENOR_DAYS.value = document.MAINFORM.CPYT_I_TENOR_DAYS.value;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptFrCE") {
            if ('DEFERRED' == PMT_FLG) {
                document.MAINFORM.TENOR_START_DT.value = document.MAINFORM.CPYT_D_TENOR_START_DATE.value;
                document.MAINFORM.MATURITY_DT.value = document.MAINFORM.CPYT_D_MAT_DATE.value;
                document.MAINFORM.TENOR_DAYS.value = document.MAINFORM.CPYT_I_TENOR_DAYS.value;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.getTenorInfo = function() {
    try {
        var INDIVID_DRAW_FLG; // Utility Auto Fix Comments
        var PMT_FLG; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == "EPLC") {
            INDIVID_DRAW_FLG = document.MAINFORM.INDIVID_DRAW_FLG.value;
            PMT_FLG = document.MAINFORM.PMT_FLG.value;
            if ('MIX PAY' != PMT_FLG) {
                document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.TENOR_START_DT.value;
                document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.MATURITY_DT.value;
                document.MAINFORM.CPYT_I_TENOR_DAYS.value = document.MAINFORM.TENOR_DAYS.value;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptFrCE") {
            PMT_FLG = document.MAINFORM.PMT_FLG.value;
            if ('MIX PAY' == PMT_FLG) {
                document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.TENOR_START_DT.value;
                document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.MATURITY_DT.value;
                document.MAINFORM.CPYT_I_TENOR_DAYS.value = document.MAINFORM.TENOR_DAYS.value;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.setDataToDiscount = function() {
    try {
        var dueDate; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == "EPLC_Discount") {
            document.MAINFORM.CFNC_D_MAST_MATU_DT.value = document.MAINFORM.CPYT_D_MAT_DATE.value;
            dueDate = document.MAINFORM.CFNC_D_DUE_DT;
            dueDate.value = document.MAINFORM.CPYT_D_MAT_DATE.value;
            EEHtml.fireEvent(dueDate, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.CPYT_C_TENOR_TYPE_onchange = function(event) {
    try {
        ProtectAllTheField();
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.CPYT_D_MAT_DATE_onchange = function(event) {
    try {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CPYT_D_MAT_DATE');
        CHK_CPYT_D_MAT_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.CPYT_D_TENOR_START_DATE_onchange = function(event) {
    try {
        CPYT_D_MAT_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}

csDOScreenProto.CPYT_I_TENOR_DAYS_onchange = function(event) {
    try {
        CPYT_D_MAT_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentInstrDeal.js", e);
    }
}