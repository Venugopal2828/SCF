var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_EPLC_CONFIRM_CALL();

        //dane 
        SYF_EPLC_CAL_PAYMENT_AC_DESC();

        SYT_LIAB_VOUCHER();
        SYF_EPLC_For_Refund();
        //Add by amy for SMBC demo in 20121011
        SYM_EPLC_SetTrxTempFieldVaule();
        SYF_EPLC_Set_20Z();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return (SYF_EPLC_Check_Payment() && Cal_eloan_fields());
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_EPLC_INIT();
        document.MAINFORM.TEMP_CONF_BAL.value = document.MAINFORM.CONF_BAL.value;
        document.MAINFORM.TEMP_TTL_PAY_AMT.value = document.MAINFORM.TTL_PAY_AMT.value;
        if (document.MAINFORM.VALUE_DT_DR.value == '') {
            document.MAINFORM.VALUE_DT_DR.value = SYS_BUSI_DATE;
        }
        if (document.MAINFORM.VALUE_DT_CR.value == '') {
            document.MAINFORM.VALUE_DT_CR.value = SYS_BUSI_DATE;
        }
        if (C_FUNC_SHORT_NAME == "Establishment" || C_FUNC_SHORT_NAME == "FinanceRepay") {
            document.MAINFORM.TEMP_MODULE_NAME.value = 'CFNC';
        } else {
            document.MAINFORM.TEMP_MODULE_NAME.value = 'EPLC';
        }
        SYF_EPLC_CAL_TEMP_REIM_BK_NM();
        SYM_EPLC_CLS_DRWG_FLG();
        SYF_EPLC_CAL_INT_AMT_IN_ARREARS();
        SYF_EPLC_MT742_Mapping();
        SYF_EPLC_MT742_Mapping();
        SYF_EPLC_STL_AMT();
        //document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.STL_AMT.value;
        if (document.MAINFORM.DISCNT_FLG.value == 'NO') {
            SYT_DisableDivClass('W_div');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        SYM_EPLC_M_PRES_BK_CLS();
        SYT_DisableDivClass('E_div');
        SYF_EPLC_MPO_MT742();
        SYF_EPLC_MPO_MT754();
        SYT_CHG_INIT('SYF_EPLC_CHG_INIT_TO_RUN', 'SYF_EPLC_CHG_CALLBACK');
        SYM_EPLC_CHARGES_ACCOUNT();
        SYT_DisableDivClass('I_div');
        SYM_EPLC_CAL_CHG_CASH_IND_back();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_EPLC_STL_AMT();
            SYF_EPLC_CAL_CONF_BAL();
            SYF_EPLC_CAL_NEW_CFM_COMM();
            SYF_EPLC_CAL_TTL_CONF_COMM();
        }
        SYT_Hidden_COMM_CODE_TRX_show_DEF('EPLC_UTIL_DEF_CHG');
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
        SYF_EPLC_MT798_FLG();
        CHG_DefCharge_chargeAtOnchange();
        FLD_EPLC_DIARY_NARRATIVE_onchange();
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BR_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'P');
        //document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.STL_AMT.value;
        if (document.MAINFORM.DISCNT_FLG.value == 'NO') {
            SYT_DisableDivClass('W_div');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_EPLC_BY_STL_INSTR_FLG = function() {
    try {
        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            CHG_set_UsedChgACFlag(false);
            document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value = document.MAINFORM.LC_CCY.value;
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "P");
            CHG_setAllLocalPayCcy($('CHG_FLD_LOCAL_CUST_CCY').value);
        } else {
            CHG_set_UsedChgACFlag(true);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "M");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_BY_STL_INSTR_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_ADV_BK_CHG_AC_NO = function() {
    try {
        SYM_EPLC_M_CLASS_BY_ADVBK_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_ADV_BK_CHG_AC_NO", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_ADV_BK_CHG_APPL = function() {
    try {
        SYM_EPLC_M_ADV_BK_CHG_APPL(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value, document.MAINFORM.ADV_BK_CHGS.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_ADV_BK_CHG_APPL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY = function() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var ADV_BK_CHGS_BENE; // Utility Auto Fix Comments
        var AMT_TOTAL; // Utility Auto Fix Comments
        var AMT_TO_BENE_PRES_CCY; // Utility Auto Fix Comments
        var ASSIGN_DEDUCT_AMT; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var INT_AMT; // Utility Auto Fix Comments
        var NET_AMT_PD_BENE; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var TNSFR_DOCS_DEDUCT_AMT; // Utility Auto Fix Comments
        var TTL_STL_AMT_RCV; // Utility Auto Fix Comments
        var OUR_CHGS_BENE;
        var AVAL_BY;
        AVAL_BY = document.MAINFORM.AVAL_BY.value;
      //  SYF_EPLC_CAL_TTL_STL_AMT_RCV();
        NET_AMT_PD_BENE = SYS_BeFloat(document.MAINFORM.NET_AMT_PD_BENE.value);
        ADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);
        TNSFR_DOCS_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value);
        ASSIGN_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.ASSIGN_DEDUCT_AMT.value);
        INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        AMT_TO_BENE_PRES_CCY = 0;
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        OUR_CHGS_APPL = Chg.Screen.getForeignChgCustPayTotalAmt();
        OUR_CHGS_BENE = SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);
        AMT_TOTAL = TTL_STL_AMT_RCV - OUR_CHGS_APPL - ADV_BK_CHGS - ADDIT_PRES_BK_AMTS - PRES_BK_CHGS - OUR_CHGS_BENE; 
        AMT_TO_BENE_PRES_CCY = AMT_TOTAL  - ADV_BK_CHGS_BENE - TNSFR_DOCS_DEDUCT_AMT - ASSIGN_DEDUCT_AMT;
        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            if (AMT_TOTAL > CFNC_N_AMT_LCCCY) {
                NET_AMT_PD_BENE = AMT_TOTAL - CFNC_N_AMT_LCCCY; //
                AMT_TO_BENE_PRES_CCY = NET_AMT_PD_BENE  - ADV_BK_CHGS_BENE - TNSFR_DOCS_DEDUCT_AMT - ASSIGN_DEDUCT_AMT;
                document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, NET_AMT_PD_BENE);
                document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, AMT_TO_BENE_PRES_CCY);
            } else {
                document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
                document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
            }

        } else {
        	document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, AMT_TOTAL);
            document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, AMT_TO_BENE_PRES_CCY);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CFNC_C_REF = function() {
    try {
        if ("" != document.MAINFORM.CFNC_C_REF.value) {
            document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value) + SYS_BeFloat(document.MAINFORM.INT_AMT.value);
            document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat('LC_CCY', document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_CFNC_C_REF", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CONF_BAL = function() {
    try {
        var nCONF_BAL; // Utility Auto Fix Comments
        var nLIAB_BAL; // Utility Auto Fix Comments
        var nNew_CONF_BAL; // Utility Auto Fix Comments
        var nNew_LIAB_BAL; // Utility Auto Fix Comments
        var nSTL_AMT; // Utility Auto Fix Comments
        var nTempSTL_AMT;
        nTempSTL_AMT = 0.0;
        //added by zoe 20090116
        if (SYS_FUNCTION_TYPE != "IQ" && SYS_FUNCTION_TYPE != "RE") {
            nNew_CONF_BAL = 0.0;
            nNew_LIAB_BAL = 0.0;
            nCONF_BAL = SYS_BeFloat(document.MAINFORM.CONF_BAL.value);
            nLIAB_BAL = SYS_BeFloat(document.MAINFORM.LIAB_BAL.value);
            nSTL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
            if (nTempSTL_AMT == -1) {
                nTempSTL_AMT = 0;
                if (SYS_FUNCTION_TYPE == "EC") {
                    nTempSTL_AMT = nSTL_AMT;
                }
            }
            nNew_CONF_BAL = Math.max(0, nCONF_BAL - nSTL_AMT + nTempSTL_AMT);
            nNew_LIAB_BAL = Math.max(0, nLIAB_BAL - nSTL_AMT + nTempSTL_AMT);
            nTempSTL_AMT = nSTL_AMT;

            if (document.MAINFORM.OUR_ENG.value == 'CONFIRMATION' || document.MAINFORM.OUR_ENG.value == 'SILENT CONFIRMATION') {
                document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNew_CONF_BAL);
                document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNew_LIAB_BAL);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_CONF_BAL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_EPLC_SWIFT_CHG = function() {
    try {
        SYM_EPLC_M_EPLC_SWIFT_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_EPLC_SWIFT_CHG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_INT_AMT_IN_ARREARS = function() {
    try {
        //Call Interest(in Arrears)
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'In Arrears') {
            document.MAINFORM.INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.CFNC_N_PRE_INT.value);

        } else {

            document.MAINFORM.INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_INT_AMT_IN_ARREARS", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_NET_PD_BENE = function() {
    try {
    /*    var NET_AMT_PD_BENE;
        var OUR_CHGS_APPL;
        var OUR_CHGS_BENE;
        var TTL_STL_AMT_RCV;
        var ISSUE_BK_CHG;
        var ADV_BK_CHGS;
        var ADDIT_PRES_BK_AMTS;
        var PRES_BK_CHGS;
        TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        OUR_CHGS_APPL = Chg.Screen.getForeignChgCustPayTotalAmt();
        OUR_CHGS_BENE = SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);
      
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        
        NET_AMT_PD_BENE = 0;
        NET_AMT_PD_BENE = TTL_STL_AMT_RCV - OUR_CHGS_BENE - OUR_CHGS_APPL -ADV_BK_CHGS - ADDIT_PRES_BK_AMTS - PRES_BK_CHGS ;// - ISSUE_BK_CHG; RECONSTRUCT ON 20241101;
        document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, NET_AMT_PD_BENE);*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_NET_PD_BENE", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_NEW_CFM_COMM = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.CONF_BAL.value) > 0 && document.MAINFORM.MATURITY_DT.value != '' && document.MAINFORM.EXPIRY_DT.value != '') {
            SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value, document.MAINFORM.MATURITY_DT.value, document.MAINFORM.EXPIRY_DT.value);
        } else {
            SYT_RESET_COMM('EPLC_CONF_COMM');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_NEW_CFM_COMM", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUR_CHGS_BENE = function() {
    try {
        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            document.MAINFORM.OUR_CHGS_BENE.value = Chg.Screen.getLocalPayTotalAmt();
        } else {
            document.MAINFORM.OUR_CHGS_BENE.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_OUR_CHGS_BENE", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PAYMENT_AC_DESC = function() {
    try {
        var CR_TYPE; // Utility Auto Fix Comments
        var Crlen; // Utility Auto Fix Comments
        var DR_TYPE; // Utility Auto Fix Comments
        var Drlen; // Utility Auto Fix Comments
        var EEAuto_Cr; // Utility Auto Fix Comments
        var EEAuto_Dr; // Utility Auto Fix Comments
        var cr_desc; // Utility Auto Fix Comments
        var discountflg; // Utility Auto Fix Comments
        var dr_desc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var ntype; // Utility Auto Fix Comments
        EEAuto_Dr = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        EEAuto_Cr = SYS_GetObjByDoName("PaymentCredit"); // Utility Auto Fix Comments
        Drlen = EEAuto_Dr.length; // Utility Auto Fix Comments
        Crlen = EEAuto_Cr.length; // Utility Auto Fix Comments
        discountflg = document.MAINFORM.CFNC_C_REF.value;
        if (discountflg == "") {
            for (i = 0; i < Drlen; i++) {
                DR_TYPE = EEAuto_Dr[i].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = DR_TYPE.substring(0, 1);
                dr_desc = "EPLC06NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(EEAuto_Dr[i], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
            }
            for (i = 0; i < Crlen; i++) {
                CR_TYPE = EEAuto_Cr[i].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = CR_TYPE.substring(0, 1);
                cr_desc = "EPLC06NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(EEAuto_Cr[i], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_PAYMENT_AC_DESC", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_POST_CHG = function() {
    try {
        SYM_EPLC_M_EPLC_POST_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_POST_CHG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT = function() {
    try {
        document.MAINFORM.STL_AMT.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
      //  document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
        document.MAINFORM.STL_BAL.value = 0;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_STL_AMT", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TEMP_REIM_BK_NM = function() {
    try {
        document.MAINFORM.TEMP_REIM_BK_NM.value = document.MAINFORM.REIM_BK_NM.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_TEMP_REIM_BK_NM", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TENOR_DAYS = function() {
    try {
        var nTenorDays; // Utility Auto Fix Comments
        if (document.MAINFORM.TENOR_START_DT.value != "" && document.MAINFORM.MATURITY_DT.value != "") {
            nTenorDays = SYS_GetSubDays('TENOR_START_DT', 'MATURITY_DT');
            if (nTenorDays > 0) {
                document.MAINFORM.TENOR_DAYS.value = nTenorDays;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_TENOR_DAYS", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_CONF_COMM = function() {
    try {
        var CONF_COMM; // Utility Auto Fix Comments
        CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        document.MAINFORM.UNPAID_CONF_COMM.value = SYS_BeFloat(CONF_COMM.getActiveAmt());
        document.MAINFORM.TTL_CONF_COMM.value = SYS_BeFloat(document.MAINFORM.PAID_CONF_COMM.value) + SYS_BeFloat(document.MAINFORM.UNPAID_CONF_COMM.value);
        document.MAINFORM.TTL_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.TTL_CONF_COMM.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_TTL_CONF_COMM", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_STL_AMT_RCV = function() {
    try {
       // document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.STL_AMT.value);
         var AVAL_BY;
        AVAL_BY = document.MAINFORM.AVAL_BY.value;
        if(AVAL_BY !="BY MIXED PYMT"){
        	document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);
        }
        else{
        	var ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
            var OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
            var PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
            var ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value)
        	 var totalamount = SYS_BeFloat(document.MAINFORM.STL_AMT.value)+ ADV_BK_CHGS + OUR_CHGS_APPL + PRES_BK_CHGS + ADDIT_PRES_BK_AMTS;
        	   	document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, totalamount);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CAL_TTL_STL_AMT_RCV", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHECK_STL_BAL = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.STL_BAL.value) < 0 || SYS_BeFloat(document.MAINFORM.STL_AMT.value) < 0) {
            alert("Settlement Balance or Settlement Amt can't be less than zero");
            document.MAINFORM.STL_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_STL_BAL.value);
            document.MAINFORM.STL_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_STL_AMT.value);
           // document.MAINFORM.TTL_STL_AMT_RCV.value = SYS_BeFloat(document.MAINFORM.TEMP_STL_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CHECK_STL_BAL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_CALLBACK = function() {
    try {
        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            return;

        }
        SYF_EPLC_CAL_OUR_CHGS_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, "onchange");
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_APPL, "onchange");
        SYF_EPLC_CAL_ADV_BK_CHG_APPL();
         
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CHG_CALLBACK", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INIT_TO_RUN = function() {
    try {
        //SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY();
        SYF_EPLC_CAL_POST_CHG();
        SYF_EPLC_CAL_EPLC_SWIFT_CHG();
        SYM_EPLC_M_EPLC_OTHER_CHG();
        SYM_EPLC_M_EPLC_COURIER_CHG();
        EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_CHG_INIT_TO_RUN", e);
    }
}

csFuncLevelProto.SYF_EPLC_Check_Payment = function() {
    try {
        var EEAuto_Crdo; // Utility Auto Fix Comments
        var EEAuto_Drdo; // Utility Auto Fix Comments
        EEAuto_Crdo = SYS_GetObjByDoName("PaymentCredit"); // Utility Auto Fix Comments
        EEAuto_Drdo = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        if (EEAuto_Drdo.length < 1) { // Utility Auto Fix Comments
            alert("No payment information."); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_Check_Payment", e);
    }
}

csFuncLevelProto.SYF_EPLC_DISCOUNT_AMT = function() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var AMT_TOTAL; // Utility Auto Fix Comments
        var BENE_CREDIT_AMT; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var TTL_STL_AMT_DR; // Utility Auto Fix Comments
        var TTL_STL_AMT_RCV; // Utility Auto Fix Comments
        BENE_CREDIT_AMT = SYS_BeFloat(document.MAINFORM.BENE_CREDIT_AMT.value);
        TTL_STL_AMT_DR = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_DR.value);
        TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        OUR_CHGS_APPL = Chg.Screen.getForeignChgCustPayTotalAmt();
        AMT_TOTAL = TTL_STL_AMT_RCV - OUR_CHGS_APPL - ADV_BK_CHGS - ADDIT_PRES_BK_AMTS - PRES_BK_CHGS;

        ccy = document.MAINFORM.PRES_CCY.value;
        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            if (AMT_TOTAL >= CFNC_N_AMT_LCCCY) {
                BENE_CREDIT_AMT = AMT_TOTAL;
                document.MAINFORM.TTL_STL_AMT_DR.value = SYT_AmtFormat(ccy, document.MAINFORM.TTL_STL_AMT_RCV.value);
                document.MAINFORM.BENE_CREDIT_AMT.value = SYT_AmtFormat(ccy, BENE_CREDIT_AMT);
            } else {
                TTL_STL_AMT_DR = CFNC_N_AMT_LCCCY + (OUR_CHGS_APPL + ADV_BK_CHGS + ADDIT_PRES_BK_AMTS + PRES_BK_CHGS);
                document.MAINFORM.TTL_STL_AMT_DR.value = SYT_AmtFormat(ccy, TTL_STL_AMT_DR);
                document.MAINFORM.BENE_CREDIT_AMT.value = SYT_AmtFormat(ccy, document.MAINFORM.CFNC_N_AMT_LCCCY.value);
            }

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_DISCOUNT_AMT", e);
    }
}

csFuncLevelProto.SYF_EPLC_FOR_DISCOUNT = function() {
    try {
        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CHG, "P");
            SYT_ChangeFldClass(document.MAINFORM.CHGS_DEDUCTED, "P");
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CHG, "P");
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CHGS_BENE, "P");
            SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.STL_INSTR_FLG, "P");
            SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_AC_NO, "P");
            document.MAINFORM.STL_INSTR_FLG.value = 'Take Charges Separately';
            document.MAINFORM.OUR_CHGS_BENE.value = 0.00;

            CHG_set_UsedChgACFlag(true);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "M");

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_FOR_DISCOUNT", e);
    }
}

csFuncLevelProto.SYF_EPLC_For_Refund = function() {
    try {
        var PAID_CONF_COMM; // Utility Auto Fix Comments
        var PAY_REFUND_AMT; // Utility Auto Fix Comments
        var TEMP_TTL_PAY_AMT; // Utility Auto Fix Comments
        var TTL_CONF_COMM; // Utility Auto Fix Comments
        var TTL_PAY_AMT; // Utility Auto Fix Comments
        var sss; // Utility Auto Fix Comments
        PAY_REFUND_AMT = SYS_BeFloat(document.MAINFORM.PAY_REFUND_AMT.value);
        PAID_CONF_COMM = SYS_BeFloat(document.MAINFORM.PAID_CONF_COMM.value);
        TTL_PAY_AMT = SYS_BeFloat(document.MAINFORM.TTL_PAY_AMT.value);
        TTL_CONF_COMM = SYS_BeFloat(document.MAINFORM.TTL_CONF_COMM.value);
        TEMP_TTL_PAY_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TTL_PAY_AMT.value);
        sss = SYS_BeFloat(document.MAINFORM.CONF_BAL.value) - SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' && (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT' || document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION')) {
            TTL_PAY_AMT = TEMP_TTL_PAY_AMT + PAID_CONF_COMM;
            document.MAINFORM.TTL_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, TTL_PAY_AMT);
        }
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' && sss <= 0 && (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT' || document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION')) {

            PAY_REFUND_AMT = TTL_CONF_COMM - TTL_PAY_AMT;
            document.MAINFORM.PAY_REFUND_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, PAY_REFUND_AMT);

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_For_Refund", e);
    }
}

csFuncLevelProto.SYF_EPLC_HiddenDiscountTab = function() {
    try {
        var discount; // Utility Auto Fix Comments
        var discount_SEPA; // Utility Auto Fix Comments
        var targetDo_FincSinglePayment; // Utility Auto Fix Comments
        var targetDo_PaymentDealer; // Utility Auto Fix Comments
        discount = EEHtml.getElementById('W');
        discount_SEPA = EEHtml.getElementById('W_SEPA');
        if ("NO" == document.MAINFORM.DISCNT_FLG.value) {
            discount.style.display = 'none';
            discount_SEPA.style.display = 'none';
        }

        targetDo_PaymentDealer = SYS_GetObjByDoName("PaymentDealer");
        targetDo_FincSinglePayment = SYS_GetObjByDoName("FincSinglePayment");

        if (targetDo_PaymentDealer && targetDo_FincSinglePayment) {
            //alert(targetDo_FincSinglePayment[0].getDoValueByName('DISCOUNT_TAB_KEY'));
            if (targetDo_FincSinglePayment[0].getDoValueByName('DISCOUNT_TAB_KEY') != targetDo_PaymentDealer[0].getDoValueByName('CPYT_C_SDA_FLAG') + targetDo_PaymentDealer[0].getDoValueByName('CPYT_C_PAY_PER') + targetDo_PaymentDealer[0].getDoValueByName('CPYT_I_TENOR_DAYS')) {
                discount.style.display = 'none';
                discount_SEPA.style.display = 'none';
            }
        }
        //Add by Miya for cfnc start
        if (C_FUNC_SHORT_NAME == "Establishment" || C_FUNC_SHORT_NAME == "FinanceRepay") {
            discount.style.display = "";
            discount_SEPA.style.display = "";
        }
        //Add by Miya for cfnc end
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_HiddenDiscountTab", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_MT742 = function() {
    try {
        if (document.MAINFORM.SEND_MT742_FLG.value == "NO") {

            SYT_DisableDiv("P_div");
            SYT_ChangeFldClass(document.MAINFORM.SEND_MT742_FLG, 'O');
            document.MAINFORM.SEND_MT742_FLG.value = "NO";
        } else {
            SYM_EPLC_EnableDiv('P_div');
            document.MAINFORM.SEND_MT742_FLG.value = "YES";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_MPO_MT742", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_MT754 = function() {
    try {
        if (document.MAINFORM.SEND_MT754_FLG.value == "NO") {
            SYT_DisableDiv("O_div");
            SYT_ChangeFldClass(document.MAINFORM.SEND_MT754_FLG, 'O');
            document.MAINFORM.SEND_MT754_FLG.value = "NO";
            document.MAINFORM.X754_ADV_BK_ID_BTN.value = '...';
            document.MAINFORM.X754_ADV_BK_ADD_BTN.value = '...';
            document.MAINFORM.X754_ACC_BK_ID_BTN.value = '...';
            document.MAINFORM.X754_ACC_BK_ADD_BTN.value = '...';
            document.MAINFORM.X754_BENE_BK_ID_BTN.value = '...';
            document.MAINFORM.X754_BENE_BK_ADD_BTN.value = '...';
            document.MAINFORM.X754_REIM_BK_ID_BTN.value = '...';
            document.MAINFORM.X754_REIM_BK_ADD_BTN.value = '...';
        } else {
            SYM_EPLC_EnableDiv("O_div");
            document.MAINFORM.SEND_MT754_FLG.value = "YES";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_MPO_MT754", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT742_Mapping = function() {
    try {
        if (document.MAINFORM.SEND_MT742_FLG.value == "YES") {

            //MT742 B2 as Reimbusing bank
            document.MAINFORM.X742_ADV_BK_ID.value = document.MAINFORM.REIM_BK_ID.value;
            document.MAINFORM.X742_ADV_BK_NM.value = document.MAINFORM.REIM_BK_NM.value;
            document.MAINFORM.X742_ADV_BK_ADD1.value = document.MAINFORM.REIM_BK_ADD1.value;
            document.MAINFORM.X742_ADV_BK_ADD2.value = document.MAINFORM.REIM_BK_ADD2.value;
            document.MAINFORM.X742_ADV_BK_ADD3.value = document.MAINFORM.REIM_BK_ADD3.value;
            document.MAINFORM.X742_ADV_BK_SW_ADD.value = document.MAINFORM.REIM_BK_SW_ADD.value;
            document.MAINFORM.X742_ADV_BK_SW_TAG.value = document.MAINFORM.REIM_BK_SW_TAG.value;

            //MT742 58a
            document.MAINFORM.X742_BENE_BK_SW_ADD.value = "CSBANKZZ80A";
            SYT_GetBKInfoByBIC(document.MAINFORM.X742_BENE_BK_SW_ADD);

            //MT742 52a as Issuing bank
            document.MAINFORM.X742_ISSUE_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
            document.MAINFORM.X742_ISSUE_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
            document.MAINFORM.X742_ISSUE_BK_ADD1.value = document.MAINFORM.ISSUE_BK_ADD1.value;
            document.MAINFORM.X742_ISSUE_BK_ADD2.value = document.MAINFORM.ISSUE_BK_ADD2.value;
            document.MAINFORM.X742_ISSUE_BK_ADD3.value = document.MAINFORM.ISSUE_BK_ADD3.value;
            document.MAINFORM.X742_ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;
            document.MAINFORM.X742_ISSUE_BK_SW_TAG.value = document.MAINFORM.ISSUE_BK_SW_TAG.value;

            //32a
            document.MAINFORM.X742_VALUEDTPAY32A.value = document.MAINFORM.PMT_REQUEST_DT.value;
            document.MAINFORM.X742_PRES_CCY_32A.value = document.MAINFORM.PRES_CCY.value;
            document.MAINFORM.X742_PRES_AMT_32A.value = document.MAINFORM.STL_AMT.value;
            document.MAINFORM.X742_DATE_34A.value = document.MAINFORM.PMT_REQUEST_DT.value;
            document.MAINFORM.X742_TTLCLMAMT_34A.value = document.MAINFORM.TTL_STL_AMT_RCV.value;
            document.MAINFORM.X742_TTLCLMCCY_34A.value = document.MAINFORM.PRES_CCY.value;

            //33B
            if (document.MAINFORM.ADDIT_PRES_BK_CCY.value == document.MAINFORM.PRES_CCY.value) {
                document.MAINFORM.X742_ADDIT_CCY_33B.value = document.MAINFORM.ADDIT_PRES_BK_CCY.value;
                document.MAINFORM.X742_ADDIT_AMT_33B.value = document.MAINFORM.ADDIT_PRES_BK_AMTS.value;
            } else {
                document.MAINFORM.X742_ADDIT_AMT_33B.value = SYT_AmtFormat(document.MAINFORM.X742_ADDIT_CCY_33B.value,0);
                document.MAINFORM.X742_ADDIT_CCY_33B.value = "";
            }

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_MT742_Mapping", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT754_Mapping = function() {
    try {
        if (document.MAINFORM.SEND_MT754_FLG.value == "YES") {
            //MT754 B2 as Issuing Bank
            document.MAINFORM.X754_ADV_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
            document.MAINFORM.X754_ADV_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
            document.MAINFORM.X754_ADV_BK_ADD1.value = document.MAINFORM.ISSUE_BK_ADD1.value;
            document.MAINFORM.X754_ADV_BK_ADD2.value = document.MAINFORM.ISSUE_BK_ADD2.value;
            document.MAINFORM.X754_ADV_BK_ADD3.value = document.MAINFORM.ISSUE_BK_ADD3.value;
            document.MAINFORM.X754_ADV_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;
            document.MAINFORM.X754_ADV_BK_SW_TAG.value = document.MAINFORM.ISSUE_BK_SW_TAG.value;

            //MT754 53a as reimbursing bank
            document.MAINFORM.X754_REIM_BK_ID.value = document.MAINFORM.REIM_BK_ID.value;
            document.MAINFORM.X754_REIM_BK_NM.value = document.MAINFORM.REIM_BK_NM.value;
            document.MAINFORM.X754_REIM_BK_ADD1.value = document.MAINFORM.REIM_BK_ADD1.value;
            document.MAINFORM.X754_REIM_BK_ADD2.value = document.MAINFORM.REIM_BK_ADD2.value;
            document.MAINFORM.X754_REIM_BK_ADD3.value = document.MAINFORM.REIM_BK_ADD3.value;
            document.MAINFORM.X754_REIM_BK_SW_ADD.value = document.MAINFORM.REIM_BK_SW_ADD.value;
            document.MAINFORM.X754_REIM_BK_SW_TAG.value = document.MAINFORM.REIM_BK_SW_TAG.value;
            document.MAINFORM.X754_REIM_BK_ACNO.value = document.MAINFORM.REIM_BK_PARTY_ID.value;

            //32a
            document.MAINFORM.X754_VALUEDTPAY32A.value = document.MAINFORM.PMT_REQUEST_DT.value;
            document.MAINFORM.X754_PRES_CCY_32A.value = document.MAINFORM.PRES_CCY.value;
            document.MAINFORM.X754_PRES_AMT_32A.value = document.MAINFORM.STL_AMT.value;
            document.MAINFORM.X754_DATE_34A.value = document.MAINFORM.PMT_REQUEST_DT.value;
            document.MAINFORM.X754_TTLCLMAMT_34A.value = document.MAINFORM.TTL_STL_AMT_RCV.value;
            document.MAINFORM.X754_TTLCLMCCY_34A.value = document.MAINFORM.PRES_CCY.value;

            //33B
            if (document.MAINFORM.ADDIT_PRES_BK_CCY.value == document.MAINFORM.PRES_CCY.value) {
                document.MAINFORM.X754_ADDIT_CCY_33B.value = document.MAINFORM.ADDIT_PRES_BK_CCY.value;
                document.MAINFORM.X754_ADDIT_AMT_33B.value = document.MAINFORM.ADDIT_PRES_BK_AMTS.value;
            } else {
                document.MAINFORM.X754_ADDIT_AMT_33B.value = SYT_AmtFormat(document.MAINFORM.X754_ADDIT_CCY_33B.value,0);
                document.MAINFORM.X754_ADDIT_CCY_33B.value = "";
            }

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_MT754_Mapping", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT798_FLG = function() {
    try {
        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Y').style.display = '';
            EEHtml.getElementById('E').style.display = '';
            SYT_EnableDivClass('Y_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Y').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
            SYT_DisableDiv('Y_div');

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_MT798_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_SET_MATURITY_DT_TO_CPYT_D_MAT_DT = function() {
    try {
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentDealer");
        if (targetDo != null) {
            vDo = targetDo[0];
            //SYS_UpdateFldValueByDo(vDo, "CPYT_D_MAT_DATE", document.MAINFORM.MATURITY_DT.value);
            //SYS_UpdateFldValueByDo(vDo, "CPYT_I_TENOR_DAYS", document.MAINFORM.TENOR_DAYS.value);
            //vDo.putDoValueByName('CPYT_D_MAT_DATE', document.MAINFORM.MATURITY_DT.value);
            //vDo.putDoValueByName('CPYT_I_TENOR_DAYS', document.MAINFORM.TENOR_DAYS.value);       
            document.MAINFORM.CPYT_I_TENOR_DAYS.value = document.MAINFORM.TENOR_DAYS.value; 
            document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.MATURITY_DT.value;   
        }
        SYS_RefreshDoGrid(targetDo);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_SET_MATURITY_DT_TO_CPYT_D_MAT_DT", e);
    }
}

csFuncLevelProto.SYF_EPLC_STL_AMT = function() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var CHGS_DEDUCTED; // Utility Auto Fix Comments
        var ISSUE_BK_CHG; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var REIM_BK_CHG; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var STL_BAL; // Utility Auto Fix Comments
        var TTL_CLM_AMT; // Utility Auto Fix Comments
        var TTL_STL_AMT_RCV; // Utility Auto Fix Comments
        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        STL_BAL = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        TTL_CLM_AMT = SYS_BeFloat(document.MAINFORM.TTL_CLM_AMT.value);

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
            SYT_ChangeFldClass(document.MAINFORM.STL_AMT, "M");
        } else {
            document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, PRES_AMT);
            //SYT_ChangeFldClass(document.MAINFORM.STL_AMT, "P");
        }
        STL_BAL = PRES_AMT - STL_AMT;
        document.MAINFORM.STL_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, STL_BAL);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_STL_AMT", e);
    }
}

csFuncLevelProto.SYF_EPLC_Set_20Z = function() {
    try {
        var MT_Convert = document.MAINFORM.MT_Convert.value;

        var PaymentCredit_obj = SYS_GetObjByDoName('PaymentCredit');
        var PaymentCredit_length = PaymentCredit_obj.length;
        for (var i = 0; i < PaymentCredit_length; i++) {
            var CPYT_PAY_ADV_MSG = SYS_GetFldValueByDo(PaymentCredit_obj[i], 'CPYT_PAY_ADV_MSG');
            var CPYT_PAY_COV_MSG = SYS_GetFldValueByDo(PaymentCredit_obj[i], 'CPYT_PAY_COV_MSG');
            if (MT_Convert == 'YES' && (CPYT_PAY_ADV_MSG == 'MT103' || CPYT_PAY_COV_MSG == 'MT202')) {
                document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
            } else {
                document.MAINFORM.C_MAIN_REF_20Z.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_Set_20Z", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.SYF_EPLC_loadDoDataComplete = function() {
    try {
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {        
            SYF_EPLC_CAL_CFNC_C_REF();
            SYF_EPLC_CAL_STL_AMT();
            document.MAINFORM.TEMP_STL_BAL.value = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
            document.MAINFORM.TEMP_TTL_STL_AMT.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT.value);
            document.MAINFORM.TEMP_STL_AMT.value = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
            SYF_EPLC_CAL_TTL_STL_AMT_RCV();
            //document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.ISSUE_BK_CHG_CCY.value, document.MAINFORM.STL_AMT.value);
            document.MAINFORM.TTL_STL_AMT_DR.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value) ;//- SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value); RECONSTRUCT ON 20241101;
            SYF_EPLC_FOR_DISCOUNT();
            SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
          //  SYF_EPLC_CHG_CALLBACK();
            SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit(); 
            SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
            var targetDo_PaymentDealer = SYS_GetObjByDoName("PaymentDealer");
            document.MAINFORM.TENOR_START_DT.value = 	targetDo_PaymentDealer[0].getDoValueByName('CPYT_D_TENOR_START_DATE'); 
            document.MAINFORM.TENOR_DAYS.value = 	targetDo_PaymentDealer[0].getDoValueByName('CPYT_I_TENOR_DAYS'); 
            document.MAINFORM.MATURITY_DT.value = 	targetDo_PaymentDealer[0].getDoValueByName('CPYT_D_MAT_DATE'); 
        }
        AddoneRecordtoCredit();
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            CalcInterestAmount();
        } else {
            SYF_EPLC_HiddenDiscountTab();
        }
        SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, "P");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*SYF_EPLC_loadDoDataComplete", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD1_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_ADD1_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD2_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_ADD2_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD3_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_ADD3_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_MT742_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID_MT742', 'AC_WT_BK_ID_MT742');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_ID_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_NM_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_NM_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ORDER_NO_MT742_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_ORDER_NO_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_SW_ADD_MT742_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_SW_ADD_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        SYF_EPLC_CAL_ADV_BK_CHG_APPL();
        SYF_EPLC_CAL_ADV_BK_CHG_AC_NO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_BENE_onchange = function(event) {
    try {
       SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
       SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT(); //MODULE LEVEL 
       EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_BK_CHGS_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHG_APPL_onchange = function(event) {
    try {
        //SYF_EPLC_CAL_NET_PD_BENE();
         SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_BK_CHG_APPL_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMT_TO_BENE_PRES_CCY_onchange = function(event) {
    try {
        //zoe added 20090102 for intercourse between Payment and Settlement
        SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit();
        SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AMT_TO_BENE_PRES_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_APPLY_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_APPL_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSIGN_DEDUCT_AMT_onchange = function(event) {
    try {
      SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
     EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ASSIGN_DEDUCT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(document.MAINFORM.AVAL_WT_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_OPT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENEF_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENEF_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENEF_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENE_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BL_AWB_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BL_AWB_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BL_AWB_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CERTIFICATE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CERTIFICATE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CERTIFICATE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
     //   SYM_EPLC_TTL_CLM_AMT();
     //   EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHGS_DEDUCTED_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_DRAFT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_DRAFT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_DRAFT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_FREIGHT_INV_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_FREIGHT_INV_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_FREIGHT_INV_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INSP_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INSP_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INSP_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INSURANCE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INSURANCE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INSURANCE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INT_AMT_onchange = function(event) {
    try {
       SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        SYF_EPLC_CAL_CFNC_C_REF();
        //SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.TTL_CLM_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INVOICE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INVOICE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_INVOICE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
       // SYM_EPLC_TTL_CLM_AMT(); REMOVE ON 20241101;
       // EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_CHG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_MATURITY_DT_onchange = function(event) {
    try {
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MATURITY_DT');
        SYF_EPLC_CAL_TENOR_DAYS();
        SYF_EPLC_SET_MATURITY_DT_TO_CPYT_D_MAT_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_MATURITY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_NET_AMT_PD_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_NET_AMT_PD_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_OTHERS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_OTHERS_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_OTHERS_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_APPL_onchange = function(event) {
    try {
        //SYF_EPLC_CAL_NET_PD_BENE();
         SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        //EEHtml.fireEvent(document.MAINFORM.TTL_CLM_AMT, 'onchange');
       // EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
       EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_OUR_CHGS_APPL_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_BENE_onchange = function(event) {
    try {
       // SYF_EPLC_CAL_NET_PD_BENE();
        //EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
             SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
              EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_OUR_CHGS_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PACK_LIST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PACK_LIST_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PACK_LIST_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        //SYF_EPLC_CAL_NET_PD_BENE();
         SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        //EEHtml.fireEvent(document.MAINFORM.TTL_CLM_AMT, 'onchange');
       // EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
      EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYT_GetCUBK_All('BENE_NEGO_ID', document.MAINFORM.PRES_BK_ID.name);
                lbi_CLASS_DOC_PRES_BY();
            } else {
                SYT_GetCUBK_All('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name);
            }
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'RegisterDocsnot') {

            SYM_EPLC_PRES_BK_TO_BENE();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_BK_ID', 'RCV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_RCV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_CHG_onchange = function(event) {
    try {
       // SYM_EPLC_TTL_CLM_AMT();
       // EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_CHG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_PARTY_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_MT742_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MPO_MT742();
        SYF_EPLC_MPO_MT742();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_SEND_MT742_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_MT754_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MPO_MT754();
        SYF_EPLC_MT754_Mapping();
        // Add the methods for Protected the name button when the bank is are null
        InitRun();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_SEND_MT754_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value) != SYS_BeFloat(document.MAINFORM.STL_AMT.value)) {
            document.MAINFORM.STL_AMT.value = document.MAINFORM.TTL_STL_AMT_RCV.value;
            return;
        }
        SYF_EPLC_CHECK_STL_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_STL_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_AMT_EXPECT_onchange = function(event) {
    try {
      //  SYF_EPLC_CAL_TTL_STL_AMT_RCV();
      //  EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_STL_AMT_EXPECT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_INSTR_FLG_onchange = function(event) {
    try {
        SYF_EPLC_BY_STL_INSTR_FLG();
        SYF_EPLC_CAL_OUR_CHGS_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, 'onchange');
        SYM_EPLC_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_STL_INSTR_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_SUB_MESS_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.SUB_MESS_TYPE.value == '758') {
            SYT_ChangeFldClass_New('X798_BANK_CONT', 'M');
            SYT_ChangeFldClass_New('X798_REASON_MSG_22R', 'M');
        } else {
            SYT_ChangeFldClass_New('X798_BANK_CONT', 'O');
            SYT_ChangeFldClass_New('X798_REASON_MSG_22R', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_SUB_MESS_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_MATURITY_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_TENOR_DAYS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSFR_DOCS_DEDUCT_AMT_onchange = function(event) {
    try {
       SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
      EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');

        SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT(); //MODULE LEVEL
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_TNSFR_DOCS_DEDUCT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRX_DT_onchange = function(event) {
    try {
        //SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_TRX_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TTL_STL_AMT_RCV_onchange = function(event) {
    try {
        var i; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var targetDo_D; // Utility Auto Fix Comments
        var targetDo_header;
        var targetDo_headerD;
        if (document.MAINFORM.TTL_STL_AMT_RCV.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TTL_STL_AMT_RCV.value = 0;
        }
        //SYF_EPLC_CAL_NET_PD_BENE();
       SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
       EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
        //zoe added 20090102 for intercourse between Payment and Settlement
        SYM_EPLC_CHECK_VALUE_DT_CR();
       SYF_EPLC_DISCOUNT_AMT();   
        document.MAINFORM.TTL_STL_AMT_DR.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value); // - SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value); RECONSTRUCT ON 20241101;

        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            targetDo = SYS_GetObjByDoName("PaymentCredit");
            targetDo_D = SYS_GetObjByDoName("PaymentDebit");
            targetDo_header = SYS_GetObjByDoName("PaymentCreditHeader");
            targetDo_headerD = SYS_GetObjByDoName("PaymentDebitHeader");

            if (targetDo[0] != '' && targetDo[0] != null && targetDo[0] != 'null' && targetDo[0] != 'undefined') {
                targetDo_header[0].deleteDoObj("PaymentCredit");

            }
            if (targetDo_D[0] != '' && targetDo_D[0] != null && targetDo_D[0] != 'null' && targetDo_D[0] != 'undefined') {
                for (i = 0; i <= targetDo_D.length; i++) {
                    targetDo_headerD[0].deleteDoObj("PaymentDebit");
                }

            }

           AddoneRecordtoCredit();
        }
       // SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit();
      SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
        SYF_EPLC_CHECK_STL_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_TTL_STL_AMT_RCV_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_VESSEL_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_VESSEL_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_VESSEL_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X742_ADV_BK_ID', 'X742_ADV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X742_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ADV_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X742_BENE_BK_ID', 'X742_BENE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_BENE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X742_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_BENE_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_BENE_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_BENE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X742_ISSUE_BK_ID', 'X742_ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ISSUE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X742_ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ISSUE_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ISSUE_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ISSUE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ACC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ACC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ACC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X754_ACC_BK_ID', 'X754_ACC_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ACC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X754_ADV_BK_ID', 'X754_ADV_BK_ID'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X754_BENE_BK_ID', 'X754_BENE_BK_ID'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X754_REIM_BK_ID', 'X754_REIM_BK_ID'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X754_REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD_BTN_MT742_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_ADD_MT742', 'AC_WT_BK_ID_MT742', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_ADD_BTN_MT742_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_BTN_MT742_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AC_WT_BK_ID_BTN_MT742_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('LIAB_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_APPL_AC_MRGN_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_APPL_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('ASSET_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ASSET_ACNO_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_BENE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_ID_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYM_EPLC_SQL_PRESENTER_CUST();
            } else {
                SYT_BankLookUp(event.currentTarget);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_POST_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_POST_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_RCV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_ADV_BK_ADD', 'X742_ADV_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_BENE_BK_ADD', 'X742_BENE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_BENE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_BENE_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_ISSUE_BK_ADD', 'X742_ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ISSUE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X742_ISSUE_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X754_ACC_BK_ADD', 'X754_ACC_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ACC_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ACC_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X754_ADV_BK_ADD', 'X754_ADV_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X754_BENE_BK_ADD', 'X754_BENE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_BENE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_BENE_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X754_REIM_BK_ADD', 'X754_REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X754_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_X754_REIM_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAtMaturity.js*FLD_EPLC_view_1_onclick", e);
    }
}