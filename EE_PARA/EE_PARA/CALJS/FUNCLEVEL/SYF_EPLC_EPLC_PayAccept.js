var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

var nTempSTL_AMT = -1;
var sightflag = null;

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYF_EPLC_CAL_OUTPUT_FLG();
        SYM_EPLC_CONFIRM_CALL();
        SYF_EPLC_MPO_CFNC_FIELDS();
        SYF_EPLC_CAL_PAYMENT_AC_DESC();
        SYF_EPLC_CAL_TEMP_TOTAL_AMT();
        SYT_LIAB_VOUCHER();
        SYF_EPLC_MIXPAYMENT_SIGHT();
        SYF_EPLC_For_Refund();
        SYM_EPLC_SetTrxTempFieldVaule();
        SYM_EPLC_CAL_PAYMENT_DT();
        SYF_EPLC_Set_20Z();
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            FinanceDataCheck();
            SYM_EPLC_CAL_INT_CHF();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        //  if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
        //                                return (SYF_EPLC_Check_Payment());
        //                            }
        //return (SYF_EPLC_checkAllRecordAccept() && Cal_eloan_fields());
        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            if (!SYF_EPLC_Check_Payment()) {
                return false;
            }
        }
        if (!SYF_EPLC_checkAllRecordAccept()) {
            return false;
        }
        if (!Cal_eloan_fields()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_EPLC_INIT();
        //STL_REF
        document.MAINFORM.NO_OF_STL.value = SYS_BeInt(document.MAINFORM.NO_OF_STL.value) + 1;
        document.MAINFORM.STL_REF.value = document.MAINFORM.C_MAIN_REF.value + "-" + SYT_FillZero(document.MAINFORM.NO_OF_STL.value);
        document.MAINFORM.TEMP_TTL_STL_AMT.value = document.MAINFORM.TTL_STL_AMT.value;
        document.MAINFORM.TEMP_TTL_ACPT_AMT.value = document.MAINFORM.TTL_ACPT_AMT.value;
        document.MAINFORM.BENE_CREDIT_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.TEMP_REIM_BK_NM.value = document.MAINFORM.REIM_BK_NM.value;
        document.MAINFORM.TEMP_CONF_BAL.value = document.MAINFORM.CONF_BAL.value;
        document.MAINFORM.TEMP_PAID_CONF_COMM.value = document.MAINFORM.PAID_CONF_COMM.value;
        document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value);
        document.MAINFORM.TEMP_TTL_PAY_AMT.value = document.MAINFORM.TTL_PAY_AMT.value;
        document.MAINFORM.TEMP_PENDING_PRES_BAL.value = document.MAINFORM.PENDING_PRES_BAL.value;
        SYF_EPLC_CAL_PMT_FLG_BY_AVAL_BY();
        if (document.MAINFORM.PMT_FLG.value == "SIGHT") {
            SYF_EPLC_CAL_CONF_BAL();
        }
        if (SYS_BeFloat(document.MAINFORM.CONF_BAL.value) < 0) {
            document.MAINFORM.CONF_BAL.value = 0;
        }
        SYF_EPLC_CAL_PENDING_PRES_BAL();
        SYF_EPLC_MT742_Mapping();
        SYF_EPLC_CAL_DSCT_FLG();
        SYF_EPLC_ADV_BK_CHGS_BENE();
        SYF_EPLC_ADV_BK_CHG_APPL();
        document.MAINFORM.PMT_REQUEST_DT.value = SYS_BUSI_DATE;
        SYT_ChangeFldClass(document.MAINFORM.STL_AMT, "M");
        SYF_EPLC_STL_AMT();
       // document.MAINFORM.STL_AMT.value = document.MAINFORM.PRES_AMT.value;
       //document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.TTL_CLM_AMT.value;
       SYF_EPLC_CAL_TTL_STL_AMT_RCV();
        document.MAINFORM.CFNC_C_PAY_BY.value = 'Beneficiary';
        if (document.MAINFORM.AVAL_BY.value == "BY ACCEPTANCE") {
            document.MAINFORM.STL_INSTR_FLG.value = 'Take Charges Separately';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYM_EPLC_M_PRES_BK_CLS();
        SYF_EPLC_MPO_PMT_FLG_BY_AVAL_BY();
        SYM_EPLC_M_CLASS_BY_PMT_FLG();
        SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT();
        SYM_EPLC_CLS_DRWG_FLG();
       // SYT_CHG_INIT('SYF_EPLC_CHG_INIT_TO_RUN', 'SYF_EPLC_CHG_CALLBACK');        
        SYM_EPLC_CAL_TTL_CONF_COMM_FOR_PAY();
        SYT_CHG_INIT('SYF_EPLC_CHG_INIT_TO_RUN');
        SYF_EPLC_MPO_MT742();
        SYT_DisableDivClass('E_div');
        SYT_DisableDivClass('I_div');
        SYM_EPLC_CAL_CHG_CASH_IND_back();
        SYF_EPLC_RECEIVE_FIELD();
        SYF_EPLC_MPO_SETTLEMENT_TAB();
        SYT_Hidden_COMM_CODE_TRX_show_DEF('EPLC_UTIL_DEF_CHG');
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
        SYF_EPLC_MT798_FLG();
        CHG_DefCharge_chargeAtOnchange();
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CHGS_BENE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT, 'P')
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BR_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'P');
        if (document.MAINFORM.PMT_FLG.value == 'DEFERRED') {
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_DR, 'B');
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_CR, 'B');
        }
        FLD_EPLC_DIARY_NARRATIVE_onchange();
        SYF_EPLC_STL_AMT();
        SYF_EPLC_CheckPaymentRecordflag();
        SYF_EPLC_hiddenDiscounttab();
        SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, 'P');
     //   document.MAINFORM.STL_AMT.value = document.MAINFORM.PRES_AMT.value;  
      //  document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.PRES_AMT.value;
     //   if (document.MAINFORM.AVAL_BY.value == "BY ACCEPTANCE") {
     //       document.MAINFORM.STL_INSTR_FLG.value = 'Take Charges Separately';
      //      EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, 'onchange');
     //   }
     Chg.attchEvent('SYF_EPLC_CHG_CALLBACK');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_EPLC_ADV_BK_CHGS_BENE = function() {
    try {
        var ADV_BK_CHG; // Utility Auto Fix Comments
        var ADV_BK_CHG_CCY; // Utility Auto Fix Comments
        var PRES_CCY; // Utility Auto Fix Comments
        //
        //            ADV_BK_CHG_CCY = document.MAINFORM.ADV_BK_CHG_CCY.value;
        //            PRES_CCY = document.MAINFORM.PRES_CCY.value;
        //            if (ADV_BK_CHG_CCY != PRES_CCY){
        //                SYS_GetExchangeRate(ADV_BK_CHG_CCY, PRES_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE_ADV_BK_CHG.name);
        //            }
        //            else{
        //                document.MAINFORM.TEMP_RATE_ADV_BK_CHG.value = 1;
        //            }
        //            ADV_BK_CHG =SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value)*SYS_BeFloat(document.MAINFORM.TEMP_RATE_ADV_BK_CHG.value);
        //
        //
        //            SYM_EPLC_M_ADV_BK_CHGS_BENE(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value,ADV_BK_CHG);
        //
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_ADV_BK_CHGS_BENE", e);
    }
}

csFuncLevelProto.SYF_EPLC_ADV_BK_CHG_APPL = function() {
    try {
        SYM_EPLC_M_ADV_BK_CHG_APPL(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value, document.MAINFORM.ADV_BK_CHGS.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_ADV_BK_CHG_APPL", e);
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_BY_STL_INSTR_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY = function() {
    try {
        var ADV_BK_CHGS_BENE; // Utility Auto Fix Comments
        var AMT_TO_BENE_PRES_CCY; // Utility Auto Fix Comments
        var ASSIGN_DEDUCT_AMT; // Utility Auto Fix Comments
        var INT_AMT; // Utility Auto Fix Comments
        var NET_AMT_PD_BENE; // Utility Auto Fix Comments
        var TNSFR_DOCS_DEDUCT_AMT; // Utility Auto Fix Comments
        NET_AMT_PD_BENE = SYS_BeFloat(document.MAINFORM.NET_AMT_PD_BENE.value);
        ADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);
        TNSFR_DOCS_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value);
        ASSIGN_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.ASSIGN_DEDUCT_AMT.value);
        INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        AMT_TO_BENE_PRES_CCY = 0;
        if (sightflag) {
            AMT_TO_BENE_PRES_CCY = NET_AMT_PD_BENE - ADV_BK_CHGS_BENE - TNSFR_DOCS_DEDUCT_AMT - ASSIGN_DEDUCT_AMT;
            document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, AMT_TO_BENE_PRES_CCY);
        } else {
            if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
                AMT_TO_BENE_PRES_CCY = NET_AMT_PD_BENE - ADV_BK_CHGS_BENE - TNSFR_DOCS_DEDUCT_AMT - ASSIGN_DEDUCT_AMT - INT_AMT;
                document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, AMT_TO_BENE_PRES_CCY);

            } else {
                document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
            }
        }
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CFNC_N_TRX_AMT = function() {
    try {
        if ("YES" == document.MAINFORM.DISCNT_FLG.value) {
            //document.MAINFORM.CFNC_N_TRX_AMT.value = document.MAINFORM.STL_AMT.value; //Mark and change to PRES_AMT on 20241022 for suang;
            document.MAINFORM.CFNC_N_TRX_AMT.value = document.MAINFORM.PRES_AMT.value; 
            var per = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
            document.MAINFORM.CFNC_N_AMT_LCCCY.value = per * SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value) / 100;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_LCCCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_CFNC_N_TRX_AMT", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CONF_BAL = function() {
    try {
        var nCONF_BAL; // Utility Auto Fix Comments
        var nLIAB_BAL; // Utility Auto Fix Comments
        var nNew_CONF_BAL; // Utility Auto Fix Comments
        var nNew_LIAB_BAL; // Utility Auto Fix Comments
        var nSTL_AMT; // Utility Auto Fix Comments
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_CONF_BAL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_DSCT_FLG = function() {
    try {
        var paymentflag; // Utility Auto Fix Comments
        paymentflag = document.MAINFORM.PMT_FLG.value;
        if ("SIGHT" == paymentflag) {
            document.MAINFORM.DISCNT_FLG.value = "NO";
        }
        if ("MIX PAY" == paymentflag) {
            document.MAINFORM.DISCNT_FLG.value = "NO";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_DSCT_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_LC_BAL = function() {
    try {
        var LC_BAL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        // added by zoe 20090113
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value);
        LC_BAL = Math.max(0, LC_BAL - PRES_AMT);
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_LC_BAL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_NET_PD_BENE = function() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var ADV_BK_CHG_APPL; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var FINANCE_AMT; // Utility Auto Fix Comments
        var NET_AMT_PD_BENE; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var OUR_CHGS_BENE; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var TTL_STL_AMT_RCV; // Utility Auto Fix Comments
        var fNET_AMT_PD_BENE; // Utility Auto Fix Comments
        var ISSUE_BK_CHG;
        FINANCE_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        ADV_BK_CHG_APPL = SYS_BeFloat(document.MAINFORM.ADV_BK_CHG_APPL.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        OUR_CHGS_APPL = Chg.Screen.getForeignChgCustPayTotalAmt();
        OUR_CHGS_BENE = SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);

        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        ISSUE_BK_CHG = SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value);
        NET_AMT_PD_BENE = 0;
        if (sightflag == null) {
            return;
        }
   
        if (sightflag) {
          //  fNET_AMT_PD_BENE = SYS_BeFloat(TTL_STL_AMT_RCV - OUR_CHGS_BENE - OUR_CHGS_APPL - ADV_BK_CHGS - ADDIT_PRES_BK_AMTS - PRES_BK_CHGS - ISSUE_BK_CHG);
          fNET_AMT_PD_BENE = SYS_BeFloat(TTL_STL_AMT_RCV - OUR_CHGS_BENE - OUR_CHGS_APPL - ADV_BK_CHGS - ADDIT_PRES_BK_AMTS - PRES_BK_CHGS); // Recalculating logic on 20241031 ;
            if (SYS_BeFloat(fNET_AMT_PD_BENE) >= 0) {
                document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, fNET_AMT_PD_BENE); 
            }
        } else {
            if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
               // if (document.MAINFORM.CFNC_N_PCT.value == 100) {
                   // CFNC_N_AMT_LCCCY = TTL_STL_AMT_RCV;
                   SYF_EPLC_CAL_CFNC_N_TRX_AMT();
             //  }
                     CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
                NET_AMT_PD_BENE = SYS_BeFloat(CFNC_N_AMT_LCCCY - OUR_CHGS_BENE);
                if (SYS_BeFloat(NET_AMT_PD_BENE) >= 0) {
                    document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, NET_AMT_PD_BENE);
                }
            } else {
                document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
            }
        }
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_NET_PD_BENE", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUR_CHGS_APPL = function() {
    try {
        //document.MAINFORM.OUR_CHGS_APPL.value =Chg.Screen.getForeignChgCustPayTotalAmt();
        //document.MAINFORM.OUR_CHGS_APPL.value = Chg.Screen.getForeignPayTotalAmt();
        //document.MAINFORM.OUR_CHGS_APPL.fireEvent("onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_OUR_CHGS_APPL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUR_CHGS_BENE = function() {
    try {
        var OUR_CHGS_BENE;
        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            OUR_CHGS_BENE = Chg.Screen.getLocalPayTotalAmt();
            document.MAINFORM.OUR_CHGS_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, OUR_CHGS_BENE);
        } else {
            document.MAINFORM.OUR_CHGS_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_OUR_CHGS_BENE", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUTPUT_Check = function() {
    try {
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        if (len == 1 && targetDo[0].getDoValueByName("CPYT_C_SDA_FLAG") != "Sight") {
            if (document.MAINFORM.DISCNT_FLG.value == "YES") {
                return true;
            } else {
                return false;
            }
        }
        for (i = 0; i < len; i++) {
            if (targetDo[i].getDoValueByName("CPYT_C_SDA_FLAG") == "Sight") {
                if (document.MAINFORM.SIGHT_PMT_FLG.value == "NO") {
                    return false;
                } else {
                    return true;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_OUTPUT_Check", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUTPUT_FLG = function() {
    try {
        var i; // Utility Auto Fix Comments
        var isDeferred; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetdo; // Utility Auto Fix Comments
        targetdo = SYS_GetObjByDoName('PaymentInstrDeal');
        isDeferred = SYF_EPLC_CAL_OUTPUT_Check();
        len = targetdo.length;
        if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept") {
            for (i = 0; i < len; i++) {
                vDo = targetdo[i];
                vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'N');
                vDo.putDoValueByName("CPYT_C_SETTLE_END_FLAG", 'N');
                if (vDo.getDoValueByName('CPYT_C_SDA_FLAG') == 'Sight') {
                    if (!isDeferred) {
                        vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'Y');
                        vDo.putDoValueByName("CPYT_C_SETTLE_END_FLAG", 'Y');
                    }
                } else {
                    if (isDeferred && vDo.getDoValueByName('CPYT_C_SDA_FLAG') != 'Sight') {
                        vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'Y');
                    }
                }
            }
        } else if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAccept") {
            for (i = 0; i < len; i++) {
                vDo = targetdo[i];
                if (vDo.getDoValueByName('CPYT_C_SDA_FLAG') == 'Sight') {
                    vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'Y');
                    vDo.putDoValueByName("CPYT_C_SETTLE_END_FLAG", 'Y');
                } else {
                    vDo.putDoValueByName("CPYT_C_OUTPUT_FLAG", 'N');
                    vDo.putDoValueByName("CPYT_C_SETTLE_END_FLAG", 'N');
                }
            }
        }
        SYS_RefreshDoGrid(targetdo);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_OUTPUT_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PAYMENT_AC_DESC = function() {
    try {
        var CR_TYPE; // Utility Auto Fix Comments
        var Crlen; // Utility Auto Fix Comments
        var DR_TYPE; // Utility Auto Fix Comments
        var Drlen; // Utility Auto Fix Comments
        var _Cr; // Utility Auto Fix Comments
        var _Dr; // Utility Auto Fix Comments
        var cr_desc; // Utility Auto Fix Comments
        var dr_desc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var ntype; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        if (len == 1 && targetDo[0].getDoValueByName("CPYT_C_SDA_FLAG") != "Sight") {
            _Dr = targetDo[0].getDoByName("PaymentDebit"); // Utility Auto Fix Comments
            _Cr = targetDo[0].getDoByName("PaymentCredit"); // Utility Auto Fix Comments
            Drlen = _Dr.length; // Utility Auto Fix Comments
            Crlen = _Cr.length; // Utility Auto Fix Comments
            for (j = 0; j < Drlen; j++) {
                DR_TYPE = _Dr[j].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = DR_TYPE.substring(0, 1);
                dr_desc = "EPLC07NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(_Dr[j], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
            }
            for (k = 0; k < Crlen; k++) {
                CR_TYPE = _Cr[k].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
                ntype = CR_TYPE.substring(0, 1);
                cr_desc = "EPLC07NULLNULLNULL" + ntype;
                SYS_UpdateFldValueByDo(_Cr[k], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
            }
            document.MAINFORM.CFNC_AC_DESC.value = "EPLC07NULLNULLNULLI";
        } else {
            for (i = 0; i < len; i++) {
                if (targetDo[i].getDoValueByName("CPYT_C_SDA_FLAG") == "Sight") {
                    _Dr = targetDo[i].getDoByName("PaymentDebit"); // Utility Auto Fix Comments
                    _Cr = targetDo[i].getDoByName("PaymentCredit"); // Utility Auto Fix Comments
                    Drlen = _Dr.length; // Utility Auto Fix Comments
                    Crlen = _Cr.length; // Utility Auto Fix Comments
                    for (j = 0; j < Drlen; j++) {
                        DR_TYPE = _Dr[j].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
                        ntype = DR_TYPE.substring(0, 1);
                        dr_desc = "EPLC03NULLNULLNULL" + ntype;
                        SYS_UpdateFldValueByDo(_Dr[j], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
                    }
                    for (k = 0; k < Crlen; k++) {
                        CR_TYPE = _Cr[k].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
                        ntype = CR_TYPE.substring(0, 1);
                        cr_desc = "EPLC03NULLNULLNULL" + ntype;
                        SYS_UpdateFldValueByDo(_Cr[k], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_PAYMENT_AC_DESC", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PENDING_PRES_BAL = function() {
    try {
        var OLD_PENDING_PRES_BAL; // Utility Auto Fix Comments
        var PENDING_PRES_BAL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        //added by zoe 20090113 foe Pending Pres Amt deduction
        OLD_PENDING_PRES_BAL = SYS_BeFloat(document.MAINFORM.TEMP_PENDING_PRES_BAL.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value);
        PENDING_PRES_BAL = OLD_PENDING_PRES_BAL - PRES_AMT;
        document.MAINFORM.PENDING_PRES_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, PENDING_PRES_BAL);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_PENDING_PRES_BAL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PMT_FLG_BY_AVAL_BY = function() {
    try {
        var AVAL_BY;
        AVAL_BY = document.MAINFORM.AVAL_BY.value;
        if (AVAL_BY == "BY PAYMENT") {
            document.MAINFORM.PMT_FLG.value = "SIGHT";
        } else if (AVAL_BY == "BY ACCEPTANCE") {
            document.MAINFORM.PMT_FLG.value = "DEFERRED";
        } else if (AVAL_BY == "BY DEF PAYMENT") {
            document.MAINFORM.PMT_FLG.value = "DEFERRED";
        } else if (AVAL_BY == "BY MIXED PYMT") {
            document.MAINFORM.PMT_FLG.value = "MIX PAY";
        } else {
            document.MAINFORM.PMT_FLG.value = "";
            SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, 'M');
        }
        EEHtml.fireEvent(document.MAINFORM.PMT_FLG, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_PMT_FLG_BY_AVAL_BY", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PMT_FLG_NEGO = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            document.MAINFORM.PMT_FLG.value = 'SIGHT';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_PMT_FLG_NEGO", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PMT_RQQUEST_DT = function() {
    try {
        document.MAINFORM.PMT_REQUEST_DT.value = document.MAINFORM.MATURITY_DT.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_PMT_RQQUEST_DT", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_POST_CHG = function() {
    try {
        SYM_EPLC_M_EPLC_POST_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_POST_CHG", e);
    }
}

csFuncLevelProto.SYF_EPLC_Cal_SGHT_DEF_FLG = function() {
    try {
        if (document.MAINFORM.PMT_FLG.value == "DEFERRED") {
            document.MAINFORM.STL_INSTR_FLG.value='Take Charges Separately';
            FLD_EPLC_STL_INSTR_FLG_onchange();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_Cal_SGHT_DEF_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_SIGHT_DEFER_FLG = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.TRX_DT.value.length > 0 && document.MAINFORM.PMT_REQUEST_DT.value.length > 0) {
            nDays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.PMT_REQUEST_DT.name);
            if (nDays > 0) {
                document.MAINFORM.SIGHT_PMT_FLG.value = "YES";
            } else {
                document.MAINFORM.SIGHT_PMT_FLG.value = "NO";
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_SIGHT_DEFER_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT = function() {
    try {
        // added by zoe 20090103 

        SYF_EPLC_CAL_STL_AMT_BY_SDA_FLAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_STL_AMT", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT_BY_SDA_FLAG = function() {
    try {
        if (document.MAINFORM.PMT_FLG.value == "SIGHT") {
            SYF_EPLC_CAL_CONF_BAL();
        } //Edit by amy
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_STL_AMT_BY_SDA_FLAG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT_EXPECT = function() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHG_APPL; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var CHGS_DEDUCTED; // Utility Auto Fix Comments
        var ISSUE_BK_CHG; // Utility Auto Fix Comments
        var ISSUE_BK_CHG_CCY; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var PRES_CCY; // Utility Auto Fix Comments
        var REIM_BK_CHG; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var STL_AMT_EXPECT; // Utility Auto Fix Comments
        //
        //            ADDIT_PRES_BK_AMTS = 0;
        //            //if Additional Amount Claimed CCY!=Pres CCY, not settled here,settle in Settle Partial Payment
        //            if(document.MAINFORM.ADDIT_PRES_BK_CCY.value!=document.MAINFORM.PRES_CCY.value){
        //            ADDIT_PRES_BK_AMTS = 0;
        //            }else{
        //            ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        //            }
        //
        //            //Call ISSUE_BK_CHG
        //            ISSUE_BK_CHG_CCY = document.MAINFORM.ISSUE_BK_CHG_CCY.value;
        //            PRES_CCY = document.MAINFORM.PRES_CCY.value;
        //            if (ISSUE_BK_CHG_CCY != PRES_CCY){
        //                SYS_GetExchangeRate(ISSUE_BK_CHG_CCY, PRES_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE_ISS_BK_CHG_CCY.name);
        //            }
        //            else{
        //                document.MAINFORM.TEMP_RATE_ISS_BK_CHG_CCY.value = 1;
        //            }
        //            ISSUE_BK_CHG =SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value)*SYS_BeFloat(document.MAINFORM.TEMP_RATE_ISS_BK_CHG_CCY.value);
        //
        //            CFNC_N_AMT_LCCCY =SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        //
        //            STL_AMT =SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        //            ADV_BK_CHG_APPL =SYS_BeFloat(document.MAINFORM.ADV_BK_CHG_APPL.value);
        //            PRES_BK_CHGS =SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        //            OUR_CHGS_APPL =SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        //
        //            CHGS_DEDUCTED =SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);	
        //            REIM_BK_CHG =SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);		
        //            if(sightflag == null){
        //            return;
        //            }
        //            if(sightflag){	//if it is a Sight record
        //            		STL_AMT_EXPECT = STL_AMT + ADV_BK_CHG_APPL+ ADDIT_PRES_BK_AMTS+ PRES_BK_CHGS + OUR_CHGS_APPL- ISSUE_BK_CHG- CHGS_DEDUCTED- REIM_BK_CHG;
        //            		document.MAINFORM.STL_AMT_EXPECT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value,STL_AMT_EXPECT);
        //            	}else {
        //            		if (document.MAINFORM.DISCNT_FLG.value == 'YES'){	//if this reocrd can be Discounted
        //            		document.MAINFORM.STL_AMT_EXPECT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value,CFNC_N_AMT_LCCCY);
        //            		}else{
        //            		document.MAINFORM.STL_AMT_EXPECT.value = 0;
        //            		}
        //            	}
        //            	
        //
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_STL_AMT_EXPECT", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_BAL = function() {
    try {
        var STL_AMT; // Utility Auto Fix Comments
        var STL_BAL; // Utility Auto Fix Comments
        var TEMP_OLD_STL_AMT; // Utility Auto Fix Comments
        //
        //            TEMP_OLD_STL_AMT = SYS_BeFloat(document.MAINFORM.TEMP_OLD_STL_AMT.value);
        //            STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value); 
        //            STL_BAL = TEMP_OLD_STL_AMT - STL_AMT; 
        //            document.MAINFORM.STL_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value,STL_BAL);
        //
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_STL_BAL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_SWIFT_CHG = function() {
    try {
        SYM_EPLC_M_EPLC_SWIFT_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_SWIFT_CHG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TEMP_TOTAL_AMT = function() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var CFNC_C_INT_PAYABLE; // Utility Auto Fix Comments
        var CFNC_C_PAY_BY; // Utility Auto Fix Comments
        var CFNC_N_LIBOR_AMT; // Utility Auto Fix Comments
        var CFNC_N_MARGIN_AMT; // Utility Auto Fix Comments
        var CHGS_DEDUCTED; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var TEMP_TOTAL_AMT; // Utility Auto Fix Comments
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        CHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        CFNC_N_LIBOR_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_AMT.value);
        CFNC_N_MARGIN_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_AMT.value);
        CFNC_C_PAY_BY = document.MAINFORM.CFNC_C_PAY_BY.value;
        CFNC_C_INT_PAYABLE = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        if (CFNC_C_PAY_BY == 'Applicant' && CFNC_C_INT_PAYABLE == 'In Arrears') {
            TEMP_TOTAL_AMT = PRES_AMT + ADDIT_PRES_BK_AMTS - CHGS_DEDUCTED + CFNC_N_LIBOR_AMT + CFNC_N_MARGIN_AMT;
            document.MAINFORM.TEMP_TOTAL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, TEMP_TOTAL_AMT);
        }
        if (CFNC_C_PAY_BY == 'Applicant' || CFNC_C_INT_PAYABLE == 'In Arrears') {
            TEMP_TOTAL_AMT = PRES_AMT + ADDIT_PRES_BK_AMTS - CHGS_DEDUCTED;
            document.MAINFORM.TEMP_TOTAL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, TEMP_TOTAL_AMT);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_TEMP_TOTAL_AMT", e);
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

csFuncLevelProto.SYF_EPLC_CAL_TTL_STL_AMT_RCV = function() {
    try {
      //  document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);
              var AVAL_BY;
        AVAL_BY = document.MAINFORM.AVAL_BY.value;
        if(AVAL_BY !="BY MIXED PYMT"){
        	document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);
        }
        else{
        	var ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
            var OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
            var PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
            var ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        	var totalamount = SYS_BeFloat(document.MAINFORM.STL_AMT.value)+ ADV_BK_CHGS + OUR_CHGS_APPL + PRES_BK_CHGS + ADDIT_PRES_BK_AMTS;
        	document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, totalamount);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_TTL_STL_AMT_RCV", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_UTIL_DEF_CHG = function() {
    try {
        Chg.calculate(["EPLC_UTIL_DEF_CHG"], document.MAINFORM.PRES_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CAL_UTIL_DEF_CHG", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHECK_STL_BAL = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.STL_BAL.value) < 0 || SYS_BeFloat(document.MAINFORM.STL_AMT.value) < 0) {
            alert("Settlement Balance or Settlement Amt can't be less than zero");
            document.MAINFORM.STL_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_STL_BAL.value);
            document.MAINFORM.STL_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_STL_AMT.value);

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CHECK_STL_BAL", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_CALLBACK = function() {
    try {
        SYF_EPLC_CAL_OUR_CHGS_BENE();


        SYF_EPLC_CAL_OUR_CHGS_APPL();


        SYF_EPLC_ADV_BK_CHGS_BENE();

        SYF_EPLC_ADV_BK_CHG_APPL();
        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CHG_CALLBACK", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INIT_TO_RUN = function() {
    try {
        SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY();
        SYM_EPLC_CAL_NEW_CFM_COMM_FOR_PAY();

        SYF_EPLC_CAL_SWIFT_CHG();
        SYF_EPLC_CAL_UTIL_DEF_CHG();
        Chg.calculate(["EPLC_UTIL_SIGHT_CHG"], document.MAINFORM.PRES_CCY.value, document.MAINFORM.PRES_AMT.value, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);
        Chg.calculate(["EPLC_HANDLING_COMM"], document.MAINFORM.PRES_CCY.value);
        SYF_EPLC_CAL_POST_CHG();
        SYM_EPLC_M_EPLC_COURIER_CHG();
        SYM_EPLC_M_EPLC_OTHER_CHG();
        EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CHG_INIT_TO_RUN", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_MATURITY_DT = function() {
    try {
        if (SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.MATURITY_DT.name) == "Y") {
            SYS_CheckError(document.MAINFORM.MATURITY_DT, "Maturity Date is Holiday!");
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CHK_MATURITY_DT", e);
    }
}

csFuncLevelProto.SYF_EPLC_Change_CONF_COMM_fields_style = function() {
    try {
        if (document.MAINFORM.PMT_FLG.value != 'SIGHT' && document.MAINFORM.AVAL_BY.value != 'BY PAYMENT') {
            EEHtml.getElementById('TotalConfirmationCommission').style.display = "none";
            EEHtml.getElementById('ActualPaidConfirmationCommission').style.display = "none";
            document.MAINFORM.PAID_CONF_COMM.style.visibility = "hidden";
            document.MAINFORM.TTL_CONF_COMM.style.visibility = "hidden";
            document.MAINFORM.PAID_CONF_COMM1.style.visibility = "hidden";
        } else {
            EEHtml.getElementById('TotalConfirmationCommission').style.display = "block";
            EEHtml.getElementById('ActualPaidConfirmationCommission').style.display = "block";
            document.MAINFORM.PAID_CONF_COMM.style.visibility = "visible";
            document.MAINFORM.TTL_CONF_COMM.style.visibility = "visible";
            document.MAINFORM.PAID_CONF_COMM1.style.visibility = "visible";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_Change_CONF_COMM_fields_style", e);
    }
}

csFuncLevelProto.SYF_EPLC_CheckPaymentRecordflag = function() {
    try {
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        for (i = 0; i < len; i++) {
            vDo = targetDo[i];
            if ("Sight" == vDo.getDoValueByName('CPYT_C_SDA_FLAG')) {
                sightflag = true;
                return;
            } else {
                sightflag = false;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_CheckPaymentRecordflag", e);
    }
}

csFuncLevelProto.SYF_EPLC_Check_Payment = function() {
    try {
        var EEAuto_Crdo;
        var EEAuto_Drdo;
        EEAuto_Crdo = SYS_GetObjByDoName("PaymentCredit");
        EEAuto_Drdo = SYS_GetObjByDoName("PaymentDebit");
        if (EEAuto_Drdo.length < 1 || EEAuto_Crdo.length < 1) {
            alert("No payment information.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_Check_Payment", e);
    }
}

csFuncLevelProto.SYF_EPLC_DisabledDiv = function(sDivIdString) {
    try {
        var i; // Utility Auto Fix Comments
        var oDiv_input; // Utility Auto Fix Comments
        var oDiv_select; // Utility Auto Fix Comments
        var oDiv_temp; // Utility Auto Fix Comments
        var oDiv_textarea; // Utility Auto Fix Comments
        var oExceptFldName; // Utility Auto Fix Comments
        var objElement; // Utility Auto Fix Comments
        oExceptFldName = sDivIdString.split("|")[1];
        oDiv_temp = EEHtml.getElementById(sDivIdString.split("|")[0]);
        if (oDiv_temp == null) {
            return;
        }
        oDiv_input = oDiv_temp.getElementsByTagName("input");
        oDiv_select = oDiv_temp.getElementsByTagName("select");
        oDiv_textarea = oDiv_temp.getElementsByTagName("textarea");
        objElement = null;
        for (i = 0; i < oDiv_input.length; i++) {
            objElement = oDiv_input[i];
            if (objElement.name == oExceptFldName) {
                continue;
            }
            SYF_EPLC_DisabledElement(objElement, true);
        }
        for (i = 0; i < oDiv_select.length; i++) {
            objElement = oDiv_select[i];
            if (objElement.name == oExceptFldName) {
                continue;
            }
            SYF_EPLC_DisabledElement(objElement, true);
        }
        for (i = 0; i < oDiv_textarea.length; i++) {
            objElement = oDiv_textarea[i];
            if (objElement.name == oExceptFldName) {
                continue;
            }
            SYF_EPLC_DisabledElement(objElement, true);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_DisabledDiv", e);
    }
}

csFuncLevelProto.SYF_EPLC_DisabledElement = function(objElement, flag) {
    try {
        var oriClass; // Utility Auto Fix Comments
        var oriDisable; // Utility Auto Fix Comments
        var oriValue; // Utility Auto Fix Comments
        if (flag) {
            oriClass = objElement.getAttribute("ori_class");
            if (oriClass == null) {
                objElement.setAttribute("ori_class", objElement.className);
                objElement.setAttribute("ori_value", objElement.value);
                objElement.setAttribute("ori_disable", objElement.disabled);
            }
            SYT_ChangeFldClass(objElement, "P");
        } else {
            oriClass = objElement.getAttribute("ori_class");
            oriValue = objElement.getAttribute("ori_value");
            oriDisable = objElement.getAttribute("ori_disable");
            if (oriClass != null && oriClass != "") {
                SYT_ChangeFldClass(objElement, oriClass.substring(oriClass.length - 1, oriClass.length));
            }
            if (oriValue != null) {
                objElement.value = oriValue;
            }
            if (oriDisable != null) {
                objElement.disabled = oriDisable;
            }

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_DisabledElement", e);
    }
}

csFuncLevelProto.SYF_EPLC_EnableDiv = function(sDivId) {
    try {
        SYT_EnableDivClass(sDivId);
        //
        //            var i; // Utility Auto Fix Comments
        //                    var oDiv_input; // Utility Auto Fix Comments
        //                    var oDiv_select; // Utility Auto Fix Comments
        //                    var oDiv_temp; // Utility Auto Fix Comments
        //                    var oDiv_textarea; // Utility Auto Fix Comments
        //                    var objElement; // Utility Auto Fix Comments
        //                    oDiv_temp =EEHtml.getElementById(sDivId);
        //                    oDiv_input = oDiv_temp.getElementsByTagName("input");
        //                    oDiv_select = oDiv_temp.getElementsByTagName("select");
        //                    oDiv_textarea = oDiv_temp.getElementsByTagName("textarea");
        //                    objElement = null;
        //                    for (i = 0; i < oDiv_input.length; i++) {
        //                        objElement = oDiv_input[i];
        //                        SYF_EPLC_DisabledElement(objElement, false);
        //                    }
        //                    for (i = 0; i < oDiv_select.length; i++) {
        //                        objElement = oDiv_select[i];
        //                        SYF_EPLC_DisabledElement(objElement, false);
        //                    }
        //                    for (i = 0; i < oDiv_textarea.length; i++) {
        //                        objElement = oDiv_textarea[i];
        //                        SYF_EPLC_DisabledElement(objElement, false);
        //                    }
        //
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_EnableDiv", e);
    }
}

csFuncLevelProto.SYF_EPLC_For_NEGOTIATION = function() {
    try {
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
            flag = false;
            len = targetDo.length;
            for (i = 0; i < len; i++) {
                vDo = targetDo[i];
                if ("Sight" == vDo.getDoValueByName('CPYT_C_SDA_FLAG')) {
                    SYT_ChangeFldClass(document.MAINFORM.TTL_STL_AMT_RCV, 'M');
                    document.MAINFORM.PMT_FLG.value = 'SIGHT';
                    break;
                } else {
                    document.MAINFORM.PMT_FLG.value = 'DEFERRED';
                }

                if (document.MAINFORM.DISCNT_FLG.value == "YES") {
                    SYT_ChangeFldClass(document.MAINFORM.TTL_STL_AMT_RCV, 'M');
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TTL_STL_AMT_RCV, 'P');
                }

            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_For_NEGOTIATION", e);
    }
}

csFuncLevelProto.SYF_EPLC_For_Refund = function() {
    try {
        var PAID_CONF_COMM; // Utility Auto Fix Comments
        var PAY_REFUND_AMT; // Utility Auto Fix Comments
        var PMT_FLG; // Utility Auto Fix Comments
        var TEMP_TTL_PAY_AMT; // Utility Auto Fix Comments
        var TTL_CONF_COMM; // Utility Auto Fix Comments
        var TTL_PAY_AMT; // Utility Auto Fix Comments
        var sss; // Utility Auto Fix Comments
        PAY_REFUND_AMT = SYS_BeFloat(document.MAINFORM.PAY_REFUND_AMT.value);
        PAID_CONF_COMM = SYS_BeFloat(document.MAINFORM.PAID_CONF_COMM.value);
        TTL_PAY_AMT = SYS_BeFloat(document.MAINFORM.TTL_PAY_AMT.value);
        TTL_CONF_COMM = SYS_BeFloat(document.MAINFORM.TTL_CONF_COMM.value);
        TEMP_TTL_PAY_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TTL_PAY_AMT.value);
        PMT_FLG = document.MAINFORM.PMT_FLG.value;
        sss = SYS_BeFloat(document.MAINFORM.CONF_BAL.value) - SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' && (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT' || (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION' && PMT_FLG == 'SIGHT'))) {
            TTL_PAY_AMT = TEMP_TTL_PAY_AMT + PAID_CONF_COMM;
            document.MAINFORM.TTL_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, TTL_PAY_AMT);
        }
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' && sss <= 0 && (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT' || (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION' && PMT_FLG == 'SIGHT'))) {

            PAY_REFUND_AMT = TTL_CONF_COMM - TTL_PAY_AMT;
            document.MAINFORM.PAY_REFUND_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, PAY_REFUND_AMT);

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_For_Refund", e);
    }
}

csFuncLevelProto.SYF_EPLC_MIXPAYMENT_SIGHT = function() {
    try {
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
            flag = false;
            len = targetDo.length;
            for (i = 0; i < len; i++) {
                vDo = targetDo[i];
                if ("Sight" == vDo.getDoValueByName('CPYT_C_SDA_FLAG')) {
                    SYT_ChangeFldClass(document.MAINFORM.TTL_STL_AMT_RCV, 'M');
                    SYT_ChangeFldClass(document.MAINFORM.STL_AMT, 'M');
                    document.MAINFORM.MIX_PAYMENT_SDA_FLAG.value = 'Sight'; // Utility Auto Fix Comments
                   document.MAINFORM.STL_AMT.value= vDo.getDoValueByName('CPYT_N_PAY_AMT');
                   
                    break;
                } else {
                    document.MAINFORM.MIX_PAYMENT_SDA_FLAG.value = '';
                    SYT_ChangeFldClass(document.MAINFORM.TTL_STL_AMT_RCV, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.STL_AMT, 'P');

                }
            }
        }
         EEHtml.fireEvent(document.MAINFORM.STL_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MIXPAYMENT_SIGHT", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_CFNC_FIELDS = function() {
    try {
        if (document.MAINFORM.DISCNT_FLG.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_MODE, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AC_NO, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_I_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, "P");
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, "P");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MPO_CFNC_FIELDS", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_DSCT_FLG = function() {
    try {
        var paymentflag;
        var AVAL_BY_FLG;
        paymentflag = document.MAINFORM.PMT_FLG.value;
        AVAL_BY_FLG = document.MAINFORM.AVAL_BY.value;
        if ("SIGHT" == paymentflag || "MIX PAY" == paymentflag) {
            SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "P");
            EEHtml.fireEvent(document.MAINFORM.DISCNT_FLG, 'onchange');
        }
        if ("DEFERRED" == paymentflag) {
            SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "M");
        }
        if (AVAL_BY_FLG == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "P");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MPO_DSCT_FLG", e);
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MPO_MT742", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PMT_FLG_BY_AVAL_BY = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == "BY NEGOTIATION") {
            SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, "M");
            SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, "P");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MPO_PMT_FLG_BY_AVAL_BY", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_SETTLEMENT_TAB = function() {
    try {
        //
        //                    	if(sightflag == null){
        //                    	return;
        //                    		}
        //                    	if(sightflag){
        //                    	 SYF_EPLC_EnableDiv("C_div");
        //                    	}else{	
        //                    		if (document.MAINFORM.DISCNT_FLG.value!='YES'){ 
        //                    		 SYF_EPLC_DisabledDiv("C_div");
        //                    		 SYT_ChangeFldClass(document.MAINFORM.PMT_REQUEST_DT,'M');
        //                    		}
        //                    		else{
        //                    		 SYF_EPLC_DisabledDiv('C_div');
        //                    		SYT_ChangeFldClass(document.MAINFORM.PMT_REQUEST_DT,'M');
        //                    		SYT_ChangeFldClass(document.MAINFORM.STL_INSTR_FLG,'M');
        //                    		}
        //                    	
        //                    	}
        //                    
        //       if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
        //                SYF_EPLC_DisabledDiv("C_div");
        //                SYT_ChangeFldClass(document.MAINFORM.PMT_REQUEST_DT, 'M');
        //                SYT_ChangeFldClass(document.MAINFORM.STL_INSTR_FLG, 'M');
        //            } else {
        //                SYF_EPLC_EnableDiv("C_div");
        //            }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MPO_SETTLEMENT_TAB", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_SGHT_DEF_FLG = function() {
    try {
        if (document.MAINFORM.PMT_FLG.value == "DEFERRED") {
            SYT_ChangeFldClass(document.MAINFORM.SIGHT_PMT_FLG, 'B');
            SYT_ChangeFldClass(document.MAINFORM.STL_INSTR_FLG, 'P');
            document.MAINFORM.STL_INSTR_FLG.value='Take Charges Separately';
            FLD_EPLC_STL_INSTR_FLG_onchange();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SIGHT_PMT_FLG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.STL_INSTR_FLG, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MPO_SGHT_DEF_FLG", e);
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
                document.MAINFORM.X742_ADDIT_AMT_33B.value = 0.00;
                document.MAINFORM.X742_ADDIT_CCY_33B.value = "";
            }

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MT742_Mapping", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT798_FLG = function() {
    try {
        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_MT798_FLG", e);
    }
}

csFuncLevelProto.SYF_EPLC_RECEIVE_FIELD = function() {
    try {
        if ((document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT' || document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') && document.MAINFORM.DISCNT_FLG.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.TTL_STL_AMT_RCV, "O");

        } else {

            SYT_ChangeFldClass(document.MAINFORM.TTL_STL_AMT_RCV, "M");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_RECEIVE_FIELD", e);
    }
}

csFuncLevelProto.SYF_EPLC_SET_CHG_AS_DEFFER_BY_ONLY_ACCPT = function() {
    try {
        var DEFFER_FLG; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        //zoe added 20090102 to set charge paid at as DEFERRED when only do Accept
        if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "EC") {
            targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
            len = targetDo.length;
            if (len < 1) {
                if (document.MAINFORM.PMT_FLG.value == 'SIGHT') {
                    CHG_setAllChargeAt(Chg.AT_TRX);
                } else {
                    CHG_setAllChargeAt(Chg.AT_DEFERRED);
                }
                return;
            }
            flag = false;
            for (i = 0; i < len; i++) {
                vDo = targetDo[i];
                if ("Sight" == vDo.getDoValueByName('CPYT_C_SDA_FLAG')) {
                    flag = true;
                    document.MAINFORM.MIX_PAYMENT_SDA_FLAG.value = 'Sight';
                }
            }
            DEFFER_FLG = document.MAINFORM.SIGHT_PMT_FLG.value;
            if (flag && DEFFER_FLG != 'YES') {
                CHG_setAllChargeAt(Chg.AT_TRX);
            } else {
                if (document.MAINFORM.DISCNT_FLG.value != 'YES') {
                    CHG_setAllChargeAt(Chg.AT_DEFERRED);

                } else {
                    CHG_setAllChargeAt(Chg.AT_TRX);
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_SET_CHG_AS_DEFFER_BY_ONLY_ACCPT", e);
    }
}

csFuncLevelProto.SYF_EPLC_SET_MATURITY_DT_TO_CPYT_D_MAT_DT = function() {
    try {
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        if (targetDo != null) {
            vDo = targetDo[0];
            vDo.putDoValueByName('CPYT_D_MAT_DATE', document.MAINFORM.MATURITY_DT.value);
            SYS_RefreshDoGrid(targetDo);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_SET_MATURITY_DT_TO_CPYT_D_MAT_DT", e);
    }
}

csFuncLevelProto.SYF_EPLC_STL_AMT = function() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var CHGS_DEDUCTED; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var STL_BAL; // Utility Auto Fix Comments
        var TTL_CLM_AMT; // Utility Auto Fix Comments
        var TTL_STL_AMT_RCV; // Utility Auto Fix Comments
        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        STL_BAL = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        TTL_CLM_AMT = SYS_BeFloat(document.MAINFORM.TTL_CLM_AMT.value);

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
            }
            SYT_ChangeFldClass(document.MAINFORM.STL_AMT, "M");
        } else {
        	if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.STL_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, PRES_AMT);
          }
            SYT_ChangeFldClass(document.MAINFORM.STL_AMT, "P");
        }
        STL_BAL = PRES_AMT - STL_AMT;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_STL_AMT", e);
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_Set_20Z", e);
    }
}

csFuncLevelProto.SYF_EPLC_VALUE_DATE = function() {
    try {
        if (document.MAINFORM.PMT_FLG.value == 'SIGHT') {

            document.MAINFORM.VALUE_DT_DR.value = SYS_BUSI_DATE;
            document.MAINFORM.VALUE_DT_CR.value = SYS_BUSI_DATE;
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_DR, 'M');
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_CR, 'M');
        } else if (document.MAINFORM.PMT_FLG.value == 'DEFERRED') {
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_DR, 'B');
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_CR, 'B');


        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_VALUE_DATE", e);
    }
}

csFuncLevelProto.SYF_EPLC_checkAllRecordAccept = function() {
    try {
        var _Crdo; // Utility Auto Fix Comments
        var _Drdo; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        flag = false;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            vDo = targetDo[i];
            if (vDo.getDoValueByName('CPYT_C_SDA_FLAG') != "Sight") {
                if (vDo.getDoValueByName('CPYT_D_MAT_DATE') == "" || vDo.getDoValueByName('CPYT_D_MAT_DATE') == null) {
                    alert("All the term payment records should be ACCEPTED first!");
                    return false;
                }
            } else if (vDo.getDoValueByName('CPYT_C_SDA_FLAG') == "Sight" && document.MAINFORM.SIGHT_PMT_FLG.value == "NO") {
                _Crdo = vDo.getDoByName("PaymentCredit"); // Utility Auto Fix Comments
                _Drdo = vDo.getDoByName("PaymentDebit"); // Utility Auto Fix Comments
                if (_Drdo.length < 1) { // Utility Auto Fix Comments
                    alert("No payment for Sight record."); // Utility Auto Fix Comments
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_checkAllRecordAccept", e);
    }
}

csFuncLevelProto.SYF_EPLC_checkDiscounttab = function() {
    try {
        var CPYT_D_MAT_DATE; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        len = targetDo.length;
        if (len > 1) {
            alert("This drawing contains multi payment records, Can't do discount here! Pls go to discount Function after this Function");
            SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "P");
            document.MAINFORM.DISCNT_FLG.value = "NO";
        }
        if (len == 0) {
            alert("No record in Payment Tab!");
            SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "P");
            document.MAINFORM.DISCNT_FLG.value = "NO";
        }
        if (len == 1) {
            vDo = targetDo[0];
            if ("Sight" == vDo.getDoValueByName('CPYT_C_SDA_FLAG')) {
                alert("This record is SIGHT!");
                SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "P");
                document.MAINFORM.DISCNT_FLG.value = "NO";
                SYT_ChangeFldClass(document.MAINFORM.STL_AMT, "M");
            } else if ("Sight" != vDo.getDoValueByName('CPYT_C_SDA_FLAG') && vDo.getDoValueByName('CPYT_D_MAT_DATE') == "") {
                alert("Please make sure the maturity date is specified in the Payment Tab before doing Discount!! ");
                document.MAINFORM.DISCNT_FLG.value = "NO";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "M");
                CPYT_D_MAT_DATE = vDo.getDoValueByName('CPYT_D_MAT_DATE');
                document.MAINFORM.CFNC_D_DUE_DT.value = CPYT_D_MAT_DATE;
                //dane 2008-12-15 begin
                document.MAINFORM.CFNC_D_DUE_DT_TEMP.value = CPYT_D_MAT_DATE;
                //dane 2008-12-15 end
                document.MAINFORM.CFNC_D_MAST_MATU_DT.value = CPYT_D_MAT_DATE;
                EEHtml.fireEvent(document.MAINFORM.CFNC_D_DUE_DT, "onchange");
                document.MAINFORM.CFNC_I_DAYS_TEMP.value = document.MAINFORM.CFNC_I_DAYS.value;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_checkDiscounttab", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.SYF_EPLC_hiddenDiscounttab = function() {
    try {
        var discount;
        var discount_SEPA;
        discount = EEHtml.getElementById('W');
        discount_SEPA = EEHtml.getElementById('W_SEPA');
        if ("NO" == document.MAINFORM.DISCNT_FLG.value) {
            discount.style.display = 'none';
            discount_SEPA.style.display = 'none';
           // SYS_UpdateFldValueByDo(SYS_GetObjByDoName("PaymentDebitHeader")[0], "CPYT_DR_TTL_AMT_TTLCCY", 0.00); //MARKED ON 20241018 FOR mix pay release ;
          //  SYS_UpdateFldValueByDo(SYS_GetObjByDoName("PaymentCrebitHeader")[0], "CPYT_CR_TTL_AMT_TTLCCY", 0.00);//MARKED ON 20241018 FOR mix pay release ;
            if (document.MAINFORM.AVAL_BY.value != 'BY PAYMENT' && document.MAINFORM.AVAL_BY.value != 'BY NEGOTIATION') {
             //   SYS_DeleteDoRecord("PaymentDebit"); //MARKED ON 20241018 FOR mix pay release ;
             //   SYS_DeleteDoRecord("PaymentCredit");  //MARKED ON 20241018 FOR mix pay release ;
            }
            SYF_EPLC_DisabledDiv("W_div");

        } else {

            discount.style.display = '';
            discount_SEPA.style.display = '';
            SYT_EnableDivClass('W_div');
            DoFrame.hideDO("PaymentInstrDeal.PaymentCreditHeader", "G_div");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_hiddenDiscounttab", e);
    }
}

csFuncLevelProto.SYF_EPLC_loadDoDataComplete = function() {
    try {
        SYF_EPLC_CheckPaymentRecordflag();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_EPLC_CAL_STL_AMT();
            SYF_EPLC_MPO_SETTLEMENT_TAB();
            SYF_EPLC_ADV_BK_CHGS_BENE();
            SYF_EPLC_ADV_BK_CHG_APPL();
            SYF_EPLC_SET_CHG_AS_DEFFER_BY_ONLY_ACCPT();
            document.MAINFORM.ADV_BK_CHGS_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
            document.MAINFORM.NET_AMT_PD_BENE.value = 0;
            document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = 0;
            SYF_EPLC_For_NEGOTIATION();
            SYF_EPLC_Cal_SGHT_DEF_FLG();
            SYF_EPLC_MIXPAYMENT_SIGHT();
            document.MAINFORM.TEMP_STL_BAL.value = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
            document.MAINFORM.TEMP_STL_AMT.value = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
            SYF_EPLC_CAL_TTL_STL_AMT_RCV();
            SYF_EPLC_VALUE_DATE();
            SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY();
            SYM_EPLC_CAL_NEW_CFM_COMM_FOR_PAY();
            SYM_EPLC_CAL_TTL_CONF_COMM_FOR_PAY();
        }
        SYF_EPLC_MPO_SGHT_DEF_FLG();
        SYF_EPLC_hiddenDiscounttab();
        SYF_EPLC_MPO_DSCT_FLG();
        SYM_EPLC_changeDiscountFieldclass();
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, "onchange");
        if (document.MAINFORM.AVAL_BY.value == "BY NEGOTIATION") {
            SYT_ChangeFldClass(document.MAINFORM.DISCNT_FLG, "P");
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_DR, 'M');
            SYT_ChangeFldClass(document.MAINFORM.VALUE_DT_CR, 'M');
            if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
                document.MAINFORM.VALUE_DT_DR.value = SYS_BUSI_DATE;
                document.MAINFORM.VALUE_DT_CR.value = SYS_BUSI_DATE;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*SYF_EPLC_loadDoDataComplete", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD1_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_ADD1_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD2_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_ADD2_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD3_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_ADD3_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_MT742_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID_MT742', 'AC_WT_BK_ID_MT742');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_ID_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_NM_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_NM_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ORDER_NO_MT742_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_ORDER_NO_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_SW_ADD_MT742_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_SW_ADD_MT742_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYF_EPLC_CAL_STL_AMT_EXPECT();
        EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADVBK_CHG();
        SYF_EPLC_ADV_BK_CHGS_BENE();
        SYF_EPLC_ADV_BK_CHG_APPL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_BENE_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_CHGS_BENE.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADV_BK_CHGS_BENE.value = 0;
        }

        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_BK_CHGS_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHG_APPL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_STL_AMT_EXPECT();
        EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');

        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_BK_CHG_APPL_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMT_TO_BENE_PRES_CCY_onchange = function(event) {
    try {
        SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit();
        SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AMT_TO_BENE_PRES_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_APPLY_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_APPL_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSIGN_DEDUCT_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ASSIGN_DEDUCT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function(event) {
    try {
        SYF_EPLC_CAL_PMT_FLG_BY_AVAL_BY();

        //SYM_EPLC_M_CLASS_BY_AVAL_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(document.MAINFORM.AVAL_WT_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_OPT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENEF_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENEF_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENEF_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENE_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BL_AWB_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BL_AWB_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BL_AWB_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CERTIFICATE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CERTIFICATE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CERTIFICATE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        if (document.MAINFORM.CHGS_DEDUCTED.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CHGS_DEDUCTED.value = 0;
        }

        //SYF_EPLC_CAL_STL_AMT_EXPECT();
        //document.MAINFORM.STL_AMT_EXPECT.fireEvent('onchange');
        /*SYM_EPLC_TTL_CLM_AMT(); 
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');*/  //Marked on 20241031 conclusion with suang;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHGS_DEDUCTED_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value == 'F') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = 1;
        } else {
            CHG_allTrxChargeAt_onchange();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        if (document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value == 'F') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = 1;
        } else {
            CHG_allChargeFor_onchange();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DISCNT_FLG_onchange = function(event) {
    try {
        SYF_EPLC_checkDiscounttab();    
        SYF_EPLC_hiddenDiscounttab();
        // modified by zoe 20081212 for Discount
        SYM_EPLC_changeDiscountFieldclass();
        //20090102 added by zoe
        SYF_EPLC_SET_CHG_AS_DEFFER_BY_ONLY_ACCPT();
        //20081231 zoe
        SYF_EPLC_MPO_SETTLEMENT_TAB();
        //SYF_EPLC_CAL_STL_AMT_EXPECT();
       // EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
       // SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
       // EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
        GetMainPageTransactionData();
        EEHtml.attachEventListener(document.MAINFORM.CFNC_N_PCT, 'onchange', SYF_EPLC_CAL_NET_PD_BENE);
        SYF_EPLC_RECEIVE_FIELD();
        SYF_EPLC_For_NEGOTIATION();
        if (document.MAINFORM.DISCNT_FLG.value == 'NO' && document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            SYS_DeleteDoRecord("PaymentDebit");
        }
        CFNC_C_PAY_BY_Change();
        SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_DISCNT_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_DRAFT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_DRAFT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_DRAFT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_FREIGHT_INV_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_FREIGHT_INV_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_FREIGHT_INV_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INSP_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INSP_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INSP_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INSURANCE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INSURANCE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INSURANCE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INT_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
       // SYF_EPLC_CAL_STL_AMT_EXPECT();
       // EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange'); // Utility Auto Fix Comments
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INVOICE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INVOICE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_INVOICE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_CHG.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ISSUE_BK_CHG.value = 0;
        }


        //SYF_EPLC_CAL_STL_AMT_EXPECT();
        //document.MAINFORM.STL_AMT_EXPECT.fireEvent('onchange');
       // EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_CHG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_MATURITY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_MATURITY_DT();
        SYF_EPLC_CAL_TENOR_DAYS();
        SYF_EPLC_SET_MATURITY_DT_TO_CPYT_D_MAT_DT();
        SYF_EPLC_CAL_PMT_RQQUEST_DT();
        EEHtml.fireEvent(document.MAINFORM.PMT_REQUEST_DT, 'onchange');

        document.MAINFORM.CFNC_D_MAST_MATU_DT.value = document.MAINFORM.MATURITY_DT.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_MATURITY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_NET_AMT_PD_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_NET_AMT_PD_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_OTHERS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_OTHERS_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_OTHERS_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_APPL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_STL_AMT_EXPECT();
        SYF_EPLC_CAL_NET_PD_BENE();


        EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_OUR_CHGS_APPL_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_OUR_CHGS_BENE_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PACK_LIST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PACK_LIST_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PACK_LIST_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PMT_FLG_onchange = function(event) {
    try {
    	  SYF_EPLC_For_NEGOTIATION();
    	  SYF_EPLC_MPO_DSCT_FLG();
        SYM_EPLC_M_CLASS_BY_PMT_FLG();
        SYF_EPLC_SET_CHG_AS_DEFFER_BY_ONLY_ACCPT();
        SYF_EPLC_CAL_STL_AMT();

        SYM_EPLC_CLS_DRWG_FLG();

        SYM_EPLC_CAL_TTL_ACPT_AMT();
        SYF_EPLC_Cal_SGHT_DEF_FLG();
        SYF_EPLC_MPO_SGHT_DEF_FLG();
        //added by zoe 20081212 for Discount
        //SYF_EPLC_MPO_DSCT_FLG();
        SYF_EPLC_CAL_DSCT_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PMT_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PMT_REQUEST_DT_onchange = function(event) {
    try {
        //SYF_EPLC_CAL_SIGHT_DEFER_FLG();
        EEHtml.fireEvent(document.MAINFORM.SIGHT_PMT_FLG, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PMT_REQUEST_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYF_EPLC_CAL_STL_AMT_EXPECT();
        SYF_EPLC_CAL_NET_PD_BENE();

        EEHtml.fireEvent(document.MAINFORM.STL_AMT_EXPECT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_CORR_MED_onchange", e);
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_BK_ID', 'RCV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_RCV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_RCV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_RCV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_CHG_onchange = function(event) {
    try {
        if (document.MAINFORM.REIM_BK_CHG.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.REIM_BK_CHG.value = 0;
        }


        //SYF_EPLC_CAL_STL_AMT_EXPECT();
        //document.MAINFORM.STL_AMT_EXPECT.fireEvent('onchange');
       /* SYM_EPLC_TTL_CLM_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');*/ //Marked on 20241031 conclusion with suang;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_CHG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_PARTY_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_MT742_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MPO_MT742();
        SYF_EPLC_MT742_Mapping();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_SEND_MT742_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_SIGHT_PMT_FLG_onchange = function(event) {
    try {
        SYF_EPLC_SET_CHG_AS_DEFFER_BY_ONLY_ACCPT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_SIGHT_PMT_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_AMT_onchange = function(event) {
    try {
        var PRES_AMT; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var STL_BAL; // Utility Auto Fix Comments
        //
        //            SYF_EPLC_CAL_STL_BAL();
        //
        //            SYM_EPLC_CLS_DRWG_FLG();
        //
        //            SYF_EPLC_CAL_STL_AMT_EXPECT();
        //            document.MAINFORM.STL_AMT_EXPECT.fireEvent('onchange');
        //
        //
        //            //added by zoe 20081220
        //
        //            CAL_TTL_CLM_AMT();
        //            document.MAINFORM.TTL_CLM_AMT.fireEvent('onchange');
        //
        //            SYF_EPLC_CAL_CFNC_N_TRX_AMT();
        if (document.MAINFORM.PMT_FLG.value == "SIGHT") {
            SYF_EPLC_CAL_CONF_BAL();
        }
        STL_BAL = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        STL_BAL = PRES_AMT - STL_AMT;
        document.MAINFORM.STL_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, STL_BAL);
        SYF_EPLC_CHECK_STL_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_STL_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_AMT_EXPECT_onchange = function(event) {
    try {
     //   SYF_EPLC_CAL_TTL_STL_AMT_RCV();
      //  EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_STL_AMT_EXPECT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_INSTR_FLG_onchange = function(event) {
    try {
        SYF_EPLC_BY_STL_INSTR_FLG();

        SYF_EPLC_CAL_OUR_CHGS_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, 'onchange');
        SYM_EPLC_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_STL_INSTR_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_MATURITY_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_TENOR_DAYS_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_START_DT_onchange = function(event) {
    try {
        SYM_EPLC_CAL_MATURITY_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_TENOR_START_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSFR_DOCS_DEDUCT_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value = 0;
        }


        SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT();
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_TNSFR_DOCS_DEDUCT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_TTL_STL_AMT_RCV_onchange = function(event) {
    try {
        //SYF_EPLC_STL_AMT();
        if (document.MAINFORM.TTL_STL_AMT_RCV.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TTL_STL_AMT_RCV.value = 0;
        }


        if (SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value) > SYS_BeFloat(document.MAINFORM.STL_AMT.value)) {
            //document.MAINFORM.TTL_STL_AMT_RCV.value = 0;  mark as Suang requested
        }
        SYF_EPLC_CAL_NET_PD_BENE();
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
        SYM_EPLC_CHECK_VALUE_DT_CR();
        //document.MAINFORM.TTL_STL_AMT_DR.value = SYS_BeFloat(document.MAINFORM.TTL_CLM_AMT.value); // - SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value); delete it on 20241031;
        document.MAINFORM.TTL_STL_AMT_DR.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
        SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit();
        SYF_EPLC_CHECK_STL_BAL();

        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {
            GetMainPageTransactionData();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_TTL_STL_AMT_RCV_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_VALUE_DT_DR_onchange = function(event) {
    try {
        SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY();
        SYM_EPLC_CAL_NEW_CFM_COMM_FOR_PAY();
        SYM_EPLC_CAL_TTL_CONF_COMM_FOR_PAY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_VALUE_DT_DR_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_VESSEL_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_VESSEL_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_VESSEL_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X742_ADV_BK_ID', 'X742_ADV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X742_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ADV_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X742_BENE_BK_ID', 'X742_BENE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_BENE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X742_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_BENE_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_BENE_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_BENE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('X742_ISSUE_BK_ID', 'X742_ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ISSUE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.X742_ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ISSUE_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ISSUE_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ISSUE_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD_BTN_MT742_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_ADD_MT742', 'AC_WT_BK_ID_MT742', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_ADD_BTN_MT742_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_BTN_MT742_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AC_WT_BK_ID_BTN_MT742_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('LIAB_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_APPL_AC_MRGN_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_APPL_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('ASSET_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ASSET_ACNO_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_BENE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick", e);
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ADD_BTN_onclick", e);
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_ID_BTN_onclick", e);
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
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_RCV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_ADV_BK_ADD', 'X742_ADV_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_BENE_BK_ADD', 'X742_BENE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_BENE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_BENE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_BENE_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X742_ISSUE_BK_ADD', 'X742_ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ISSUE_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_X742_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_X742_ISSUE_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept.js*FLD_EPLC_view_1_onclick", e);
    }
}