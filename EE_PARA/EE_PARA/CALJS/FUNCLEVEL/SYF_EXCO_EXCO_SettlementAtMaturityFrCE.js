var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_EXCO_CONFIRM_CALL();
        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.NEW_OTST_BAL.value;

        //dane

        SYF_EXCO_CAL_INT_CHF();

        SYF_EXCO_CAL_PAYMENT_AC_DESC();
        SYM_EXCO_CHARGE_DT();

        document.MAINFORM.MSG_TYPE.value = 'EXCO.006.PmtAdv';
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return (SYF_EXCO_CHK_MNS_PLS() && Cal_eloan_fields_EXCO());
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        var nC_MAIN_REF; // Utility Auto Fix Comments
        var nNO_OF_STL; // Utility Auto Fix Comments
        SYM_EXCO_INIT();
        //SYM_EXCO_FOR_DISCOUNT();
        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            document.MAINFORM.STL_INSTR_FLG.value = 'Take Charges Separately';
        } else {
            document.MAINFORM.STL_INSTR_FLG.value = 'Deduct Charges from Proceeds';
        }
        //For PMT_REF
        nNO_OF_STL = SYS_BeInt(document.MAINFORM.NO_OF_STL.value);
        nNO_OF_STL = nNO_OF_STL + 1;
        document.MAINFORM.NO_OF_STL.value = nNO_OF_STL;

        nC_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.PMT_REF.value = nC_MAIN_REF + nNO_OF_STL;

        //for Bill Amount
        //document.MAINFORM.DRWNG_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;
        document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        SYF_EXCO_CALL_NEW_OTST_BAL();
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        SYM_EXCO_TEMP_CHARGE_DT();

        SYT_Cal_LOCAL_AMT('COLL_CCY', 'COLL_TRX_CCY_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function(xpath) {
    try {
        SYM_EXCO_HiddenFinanceDoFields();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        SYT_DisableDivClass('B_div');

        SYT_CHG_INIT('SYF_EXCO_CHG_INIT_TO_RUN', 'SYF_EXCO_CHG_CALLBACK');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;

        SYF_EXCO_HiddenDiscountTab();
        SYM_EXCO_FOR_DISCOUNT(); //add for Unique test on 20200610

        // for bug 1502
        //SYM_EXCO_M_DRWR_FIELDS_CLASS();
        //SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD_BTN, 'M');
        //SYT_ChangeFldClass(document.MAINFORM.DRWR_POST_ADD_BTN, 'M');
        SYM_EXCO_CAL_CHG_CASH_IND_back();

        //MPO_Collateral_SECTION();
        //MPO_LIMITS_SECTION();
        //MPO_RISK_TAB_BY_FUNCTION();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_EXCO_AFTER_DRWR_ID = function() {
    try {
        EEHtml.fireEvent(document.MAINFORM.DRWR_CORR_MED, "onChange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_AFTER_DRWR_ID", e);
    }
}

csFuncLevelProto.SYF_EXCO_BY_STL_INSTR_FLG = function() {
    try {
        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            CHG_set_UsedChgACFlag(false);
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "P");
        } else {
            CHG_set_UsedChgACFlag(true);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "M");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_BY_STL_INSTR_FLG", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS = function() {
    try {
        var Sub_Total; // Utility Auto Fix Comments
        var nCOLL_BK_CHG_MNS; // Utility Auto Fix Comments
        var nCOLL_BK_CHG_PLS; // Utility Auto Fix Comments
        var nDRWNG_AMT_COLL_CCY; // Utility Auto Fix Comments
        var nINT_AMT; // Utility Auto Fix Comments
        var nINT_AMT_ARREARS; // Utility Auto Fix Comments
        var nWAIVE_TTL_DWE_CHG; // Utility Auto Fix Comments
        nDRWNG_AMT_COLL_CCY = SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value);
        nINT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT_FRGN.value);
        nCOLL_BK_CHG_PLS = SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_PLS.value);
        nCOLL_BK_CHG_MNS = SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_MNS.value);
        nWAIVE_TTL_DWE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);

        nINT_AMT_ARREARS = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        Sub_Total = nDRWNG_AMT_COLL_CCY + nINT_AMT + nCOLL_BK_CHG_PLS - nCOLL_BK_CHG_MNS + nWAIVE_TTL_DWE_CHG + nINT_AMT_ARREARS;

        document.MAINFORM.AMT_RCVD_OUR_CHGS.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, Sub_Total);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NET_AMT_PD_COL_CCY = function() {
    try {
        var CHG_PD_BY_DRWR; // Utility Auto Fix Comments
        var DRWEE_CHG; // Utility Auto Fix Comments
        var INT_IN_ARREARS; // Utility Auto Fix Comments
        var NET_AMT_PD_COL_CCY; // Utility Auto Fix Comments
        var TOTAL_PAID_DRWER; // Utility Auto Fix Comments
        TOTAL_PAID_DRWER = SYS_BeFloat(document.MAINFORM.CR_AMT_DRWR_CCY.value);
        CHG_PD_BY_DRWR = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value);
        DRWEE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);
        INT_IN_ARREARS = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        NET_AMT_PD_COL_CCY = TOTAL_PAID_DRWER - CHG_PD_BY_DRWR - INT_IN_ARREARS;


        document.MAINFORM.NET_AMT_PD_COL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, NET_AMT_PD_COL_CCY);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CALL_NET_AMT_PD_COL_CCY", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NEW_OTST_BAL = function() {
    try {
        var NEW_OTST_BAL; // Utility Auto Fix Comments
        NEW_OTST_BAL = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value) - SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value);
        document.MAINFORM.NEW_OTST_BAL.value = Math.max(NEW_OTST_BAL, 0);
        document.MAINFORM.NEW_OTST_BAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.NEW_OTST_BAL.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CALL_NEW_OTST_BAL", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_CHG_PD_BY_DRWR = function() {
    try {
        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            document.MAINFORM.CHG_PD_BY_DRWR.value = Chg.Screen.getLocalPayTotalAmt();
        } else {
            document.MAINFORM.CHG_PD_BY_DRWR.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CAL_CHG_PD_BY_DRWR", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_CR_AMT_DRWR_CCY = function() {
    try {
        var DRWEE_CHG; // Utility Auto Fix Comments
        var NET_AMT_RCVD_COLL_CCY; // Utility Auto Fix Comments
        //document.MAINFORM.CR_AMT_DRWR_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value,document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        DRWEE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);
        NET_AMT_RCVD_COLL_CCY = SYS_BeFloat(document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        document.MAINFORM.CR_AMT_DRWR_CCY.value = NET_AMT_RCVD_COLL_CCY - DRWEE_CHG; // Utility Auto Fix Comments
        document.MAINFORM.CR_AMT_DRWR_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.CR_AMT_DRWR_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CAL_CR_AMT_DRWR_CCY", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_INT_CHF = function() {
    try {
        var ccy; // Utility Auto Fix Comments
        var int; // Utility Auto Fix Comments
        var lib; // Utility Auto Fix Comments
        var lib_chf; // Utility Auto Fix Comments
        var mag; // Utility Auto Fix Comments
        var mag_chf; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            ccy = document.MAINFORM.CFNC_C_CCY.value;
            document.MAINFORM.CFNC_DISCOUNT_CCY.value = ccy;
            lib = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_AMT.value);
            mag = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_AMT.value);
            int = SYS_BeFloat(document.MAINFORM.INT_AMT.value);

            SYS_GetExchangeRate_S(ccy, SYS_LOCAL_CCY, 'Booking Rate', 'CFNC_BOOKING_RATE');
            rate = SYS_BeFloat(document.MAINFORM.CFNC_BOOKING_RATE.value);
            lib_chf = lib * rate;
            mag_chf = mag * rate;
            document.MAINFORM.CFNC_LIB_CHF_AMT.value = SYT_AmtFormat(ccy, lib_chf);
            document.MAINFORM.CFNC_MARG_CHF_AMT.value = SYT_AmtFormat(ccy, mag_chf);
            int_chf = SYS_BeFloat(document.MAINFORM.CFNC_LIB_CHF_AMT.value) + SYS_BeFloat(document.MAINFORM.CFNC_MARG_CHF_AMT.value);
            if (ccy != SYS_LOCAL_CCY) {
                document.MAINFORM.CFNC_TTL_CHF_AMT.value = SYT_AmtFormat(ccy, int_chf);
                document.MAINFORM.CFNC_TTL_FX_AMT.value = document.MAINFORM.INT_AMT.value; //modify by tracery for 1530
            } else {
                document.MAINFORM.CFNC_TTL_CHF_AMT.value = 0;
            }

            if (ccy == SYS_LOCAL_CCY) {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.CHF";
            } else {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.F.CURR.";
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CAL_INT_CHF", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY = function() {
    try {
        document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.AMT_RCVD_OUR_CHGS.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_PAYMENT_AC_DESC = function() {
    try {
        var CFNC_C_REF; // Utility Auto Fix Comments
        var CR_TYPE; // Utility Auto Fix Comments
        var Crlen; // Utility Auto Fix Comments
        var DR_TYPE; // Utility Auto Fix Comments
        var Drlen; // Utility Auto Fix Comments
        var _Cr; // Utility Auto Fix Comments
        var _Dr; // Utility Auto Fix Comments
        var cr_desc; // Utility Auto Fix Comments
        var dr_desc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var ntype; // Utility Auto Fix Comments
        _Dr = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        _Cr = SYS_GetObjByDoName("PaymentCredit"); // Utility Auto Fix Comments
        Drlen = _Dr.length; // Utility Auto Fix Comments
        Crlen = _Cr.length; // Utility Auto Fix Comments
        CFNC_C_REF = document.MAINFORM.CFNC_C_REF.value;
        if ("" != CFNC_C_REF) {
            document.MAINFORM.CFNC_AC_DESC.value = "EXCO01NULLNULLNULLI"; // Utility Auto Fix Comments
            for (i = 0; i < Drlen; i++) { // Utility Auto Fix Comments
                DR_TYPE = _Dr[i].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = DR_TYPE.substring(0, 1);
                dr_desc = "EXCO06NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(_Dr[i], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
            }
            for (i = 0; i < Crlen; i++) {
                CR_TYPE = _Cr[i].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = CR_TYPE.substring(0, 1);
                cr_desc = "EXCO01NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(_Cr[i], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
            }
        } else {
            for (i = 0; i < Drlen; i++) {
                DR_TYPE = _Dr[i].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = DR_TYPE.substring(0, 1);
                dr_desc = "EXCO01NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(_Dr[i], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
            }
            for (i = 0; i < Crlen; i++) {
                CR_TYPE = _Cr[i].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = CR_TYPE.substring(0, 1);
                cr_desc = "EXCO01NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(_Cr[i], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CAL_PAYMENT_AC_DESC", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_WAIVE_TTL_DWE_CHG = function() {
    try {
        document.MAINFORM.WAIVE_TTL_DWE_CHG.value = Chg.Screen.getForeignPayTotalAmt();
        EEHtml.fireEvent(document.MAINFORM.WAIVE_TTL_DWE_CHG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CAL_WAIVE_TTL_DWE_CHG", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_CALLBACK = function() {
    try {
        SYF_EXCO_CAL_CHG_PD_BY_DRWR();
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWR, "onchange");

        SYF_EXCO_CAL_WAIVE_TTL_DWE_CHG();
        EEHtml.fireEvent(document.MAINFORM.WAIVE_TTL_DWE_CHG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CHG_CALLBACK", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_INIT_TO_RUN = function() {
    try {
        SYM_EXCO_M_EXCO_OTHER_CHG();
        SYM_EXCO_M_EXCO_SWIFT_CHG();
        SYM_EXCO_M_EXCO_COURIER_CHG();
        SYM_EXCO_M_EXCO_POST_CHG();
        EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CHG_INIT_TO_RUN", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_MNS_PLS = function() {
    try {
        if (document.MAINFORM.COLL_BK_CHG_PLS.value != 0 && document.MAINFORM.COLL_BK_CHG_MNS.value != 0) {
            SYS_CheckError(document.MAINFORM.COLL_BK_CHG_MNS, 'Collecting Bank Charges Plus and Collecting Bank Charges Minus cannot be present both!');
            //return false;
            document.MAINFORM.COLL_BK_CHG_MNS.value = 0;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_CHK_MNS_PLS", e);
    }
}

csFuncLevelProto.SYF_EXCO_HiddenDiscountTab = function() {
    try {
        var discount; // Utility Auto Fix Comments
        discount = EEHtml.getElementById('W');
        if ("YES" != document.MAINFORM.DISCNT_FLG.value) {
            discount.style.display = 'none';
            SYT_DisableDiv('W_div');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_HiddenDiscountTab", e);
    }
}

csFuncLevelProto.SYF_EXCO_SetPaymentDate = function() {
    try {
        var obj; // Utility Auto Fix Comments
        obj = document.MAINFORM.CFNC_D_PAY_DT;
        obj.value = document.MAINFORM.PMT_DT.value;
        EEHtml.fireEvent(obj, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_SetPaymentDate", e);
    }
}

csFuncLevelProto.SYF_EXCO_UPDATE_CREDIT_BY_NET_AMT_PD = function() {
    try {
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.NET_AMT_PD_COL_CCY.value;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_UPDATE_CREDIT_BY_NET_AMT_PD", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.SYF_EXCO_loadDoDataComplete = function() {
    try {
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            CalcInterestAmount();
        }

        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            SET_VALUE_TO_STL_TAB();
        }

        AddoneRecordtoCredit();
        EEHtml.fireEvent(document.MAINFORM.DRWNG_AMT_COLL_CCY, "onchange"); //added Jax 2020/5/25
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*SYF_EXCO_loadDoDataComplete", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_EXCO_AMT_RCVD_OUR_CHGS_onchange = function(event) {
    try {
        SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY();
        //document.MAINFORM.NET_AMT_RCVD_COLL_CCY.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_AMT_RCVD_OUR_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_PD_BY_DRWR_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_PD_BY_DRWR_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_CHG_MNS_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_MNS.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.COLL_BK_CHG_MNS.value = 0;
        }



        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CHK_MNS_PLS();
        //document.MAINFORM.AMT_RCVD_OUR_CHGS.fireEvent('onchange');
        //document.MAINFORM.COLL_BK_CHG_PLS.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.COLL_BK_CHG_PLS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_CHG_MNS_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_CHG_PLS_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_PLS.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.COLL_BK_CHG_PLS.value = 0;
        }


        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CHK_MNS_PLS();
        //document.MAINFORM.AMT_RCVD_OUR_CHGS.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_CHG_PLS_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CR_AMT_DRWR_CCY_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CR_AMT_DRWR_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWNG_AMT_COLL_CCY_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DRWNG_AMT_COLL_CCY.value = 0;
        }
        //if (SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value) > SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value)) { //Add for unique test on 20200615
        if (SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value) > SYS_BeFloat(document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value)) {
            alert("The amount field do not more than Collection Balance");
            document.MAINFORM.DRWNG_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;
        }
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CALL_NEW_OTST_BAL();
        SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY(); //add at 190221
        EEHtml.fireEvent(document.MAINFORM.NEW_OTST_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWNG_AMT_COLL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWR_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWR_ID', 'DRWR_ID', 'SYF_EXCO_AFTER_DRWR_ID()');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWR_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWR_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWR_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INCASE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INCASE_OF_ND_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_AMT_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_AMT_FRGN_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INT_AMT_FRGN_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_NET_AMT_PD_COL_CCY_onchange = function(event) {
    try {
        SYM_EXCO_Set_NET_AMT_PD_COL_CCY_toPaymentCredit();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_NET_AMT_PD_COL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_NET_AMT_RCVD_COLL_CCY_onchange = function(event) {
    try {
        if (document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = 0;
        }


        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');

        //zoe added 20090102 for intercourse between Payment and Settlement
        SYM_EXCO_Set_NET_AMT_RCVD_COLL_CCY_toPaymentDebit();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_NET_AMT_RCVD_COLL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PMT_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.COLL_DT.name, document.MAINFORM.PMT_DT.name) < 0) {
            alert("The payment value date should not less than the registration date");
            document.MAINFORM.PMT_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PMT_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_STL_INSTR_FLG_onchange = function(event) {
    try {
        SYF_EXCO_BY_STL_INSTR_FLG();
        SYF_EXCO_CAL_CHG_PD_BY_DRWR();
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWR, 'onchange');
        SYM_EXCO_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_STL_INSTR_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_WAIVE_TTL_DWE_CHG_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_WAIVE_TTL_DWE_CHG_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWR_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWR_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_DRWR_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturityFrCE.js*FLD_EXCO_view_1_onclick", e);
    }
}