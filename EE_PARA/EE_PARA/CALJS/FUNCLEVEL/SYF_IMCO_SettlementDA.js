var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IMCO_CAL_LOCAL_Charge = function() {
    try {

        SYM_IMCO_COURIER_FEE_CHG();
        SYM_IMCO_Chg_Calculate_IMCOSWIFT();
        SYM_IMCO_Postage_charge();
        SYM_IMCO_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_NEW_COL_BAL = function() {
    try {

        var nBILL_AMT; // Utility Auto Fix Comments
        var nCOLL_TRX_BAL; // Utility Auto Fix Comments
        var nNEW_COL_BAL_CCY; // Utility Auto Fix Comments
        nCOLL_TRX_BAL = SYS_BeFloat(document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value);
        nBILL_AMT = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);

        if (nCOLL_TRX_BAL >= nBILL_AMT) {
            nNEW_COL_BAL_CCY = nCOLL_TRX_BAL - nBILL_AMT;
            document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, nNEW_COL_BAL_CCY);
        } else {
            document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value = 0.00;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_TTL_DEBIT_AMT = function() {
    try {

        var nBill_AMT; // Utility Auto Fix Comments
        var nCHG_PD_BY_DRWE; // Utility Auto Fix Comments
        var nINT_AMT; // Utility Auto Fix Comments
        var nPRES_BK_CHG; // Utility Auto Fix Comments
        var nRMEMIT_BK_CHG; // Utility Auto Fix Comments
        var nTTL_DEBIT_AMT; // Utility Auto Fix Comments
        nBill_AMT = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);
        nINT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        nRMEMIT_BK_CHG = SYS_BeFloat(document.MAINFORM.REMIT_BK_AMT_ADD.value);
        nPRES_BK_CHG = SYS_BeFloat(document.MAINFORM.PRES_BK_CHG_LCY.value);
        nCHG_PD_BY_DRWE = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWE.value);

        nTTL_DEBIT_AMT = nBill_AMT + nINT_AMT + nRMEMIT_BK_CHG + nPRES_BK_CHG + nCHG_PD_BY_DRWE;
        document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, nTTL_DEBIT_AMT);
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, "onchange");
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_TTL_PAID_DRWR_AMT = function() {
    try {

        var SUB_TTL; // Utility Auto Fix Comments
        var nBILL_AMT; // Utility Auto Fix Comments
        var nCHG_PD_BY_DRWR; // Utility Auto Fix Comments
        var nINT_AMT; // Utility Auto Fix Comments
        var nREMIT_BK_CHG; // Utility Auto Fix Comments
        var nREMIT_BK_AMT_ADD; // Add on 20181115 for pilot test;
        nBILL_AMT = SYS_BeFloat(document.MAINFORM.BILL_AMT_TO_DRWR.value);
        nINT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT_CHG_CCY.value);
        nREMIT_BK_CHG = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG.value);
        nCHG_PD_BY_DRWR = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value);
        nREMIT_BK_AMT_ADD = SYS_BeFloat(document.MAINFORM.REMIT_BK_AMT_ADD.value);

        SUB_TTL = nBILL_AMT + nINT_AMT + nREMIT_BK_CHG + nREMIT_BK_AMT_ADD - nCHG_PD_BY_DRWR;

        document.MAINFORM.TTL_PAID_DRWR_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, SUB_TTL);
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_DRWE_ACPT_FLG = function() {
    try {

        if (document.MAINFORM.WAIVE_INSTRUCTION.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ACPT_FLG, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ACPT_FLG, 'P');
            document.MAINFORM.DRWE_ACPT_FLG.value = 'Yes';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_DRWR_ACPT_FLG = function() {
    try {

        if (document.MAINFORM.WAIVE_INSTRUCTION.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_ACPT_FLG, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_ACPT_FLG, 'P');
            document.MAINFORM.DRWR_ACPT_FLG.value = 'Yes';

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_SEPARATE_FLG = function() {
    try {

        if (document.MAINFORM.CHG_FLG.value != 'Drawee' || document.MAINFORM.REMIT_BK_CHG_FLG.value != 'Drawee') {
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_DRAWEE_ID = function() {
    try {

        SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYF_IMCO_CAL_LOCAL_Charge()');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_Remit_BK_NM = function() {
    try {

        SYS_GetCUBK('REMIT_BK_ID', document.MAINFORM.REMIT_BK_ID.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_IMCO_INIT();

        document.MAINFORM.CURRNT_STATUS.value = 'SettlementatMaturity(DA)';
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.PMT_REF.value = document.MAINFORM.COLL_NO.value;
        document.MAINFORM.BILL_AMT_FM_DRWE.value = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value);
        // document.MAINFORM.REMIT_BK_CHG.value = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value);
        // document.MAINFORM.PRES_BK_CHG_LCY.value = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value); mark on 20181115 for pilot test ex rate;
        document.MAINFORM.BILL_AMT_TO_DRWR.value = document.MAINFORM.BILL_AMT_FM_DRWE.value;


        SYF_IMCO_CAL_NEW_COL_BAL();
        SYF_IMCO_CalREMIT_BK_CHG_AMTEXRate();

        //invoke init methods
        SYF_IMCO_CHK_DRWE_ACPT_FLG();
        SYF_IMCO_CHK_DRWR_ACPT_FLG();
        SYF_IMCO_CHK_SEPARATE_FLG();
        SYF_IMCO_PRES_BK_ID();
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWR_CORR_MED();

        //for chg A/C NO
        SYF_IMCO_CHG_FLD_LOCAL_CUST_AC_NO();
        document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var chargeAt; // Utility Auto Fix Comments
        SYM_IMCO_CHG_maplocal_foreign_PAY();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.attchEvent(SYF_IMCO_ChgCallBack);
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {

            SYM_IMCO_COURIER_FEE_CHG();
            SYM_IMCO_Chg_Calculate_IMCOSWIFT();
            SYM_IMCO_Postage_charge();
            SYM_IMCO_Chg_Calculation_Other();
        }
        CHG_attachSetDefChargeAt();
        chargeAt = document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value;
        CHG_setAllChargeAt(chargeAt);
        //for charge
        SYM_IMCO_Functions_For_Chg();

        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYF_IMCO_Get_TEMP();
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYM_IMCO_DRWE_ID_B2();
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_REIM_SWIFT_TAG();
        SYM_IMCO_PRE_SWIFT_TAG();
        document.MAINFORM.TEMP_DRWE_ID.value = 'DRWRIDFORCHG';
        SYM_IMCO_CAL_CHG_CASH_IND_back();
        SYM_IMCO_PROTECT_PARTY_INFO();
        SYM_IMCO_SET_CLS_FLG();

        //MPO_Collateral_SECTION();
        //MPO_LIMITS_SECTION();
        //MPO_RISK_TAB_BY_FUNCTION();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        //document.MAINFORM.COLL_TRX_CCY_BAL.value=SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value)-SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);
        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value;
        SYT_Cal_C_TRANS_CODE();
        SYM_IMCO_SetPaymentVchDesc();
        SYT_LIAB_VOUCHER();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_PRES_BK_ID = function() {
    try {

        if (document.MAINFORM.PRES_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWE_ID_B = function() {
    try {

        SYF_IMCO_CAL_LOCAL_Charge();
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_Cal_DRWE_ID_back();
        SYM_IMCO_DRWE_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWE_NM_Z = function() {
    try {

        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_CORR_MED.value = '';
            document.MAINFORM.DRWE_EMAIL.value = '';
            document.MAINFORM.DRWE_FAX.value = '';
            document.MAINFORM.DRWE_LANG.value = 'English';
            document.MAINFORM.DRWE_MAIL_ADD.value = '';
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_REF.value = '';
            document.MAINFORM.DRWE_TELEX.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
            SYM_IMCO_DRWE_ID_B2();
        } else {
            SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYF_IMCO_DRWE_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWR_ID_B = function() {
    try {

        SYM_IMCO_DRWR_CORR_MED();
        SYM_IMCO_Cal_DRWR_ID_back();
        SYM_IMCO_DRWR_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWR_NM_Z = function() {
    try {

        if (document.MAINFORM.DRWR_ID.value == '') {
            document.MAINFORM.DRWR_LANG.value = 'English';
            document.MAINFORM.DRWR_MAIL_ADD.value = '';
            document.MAINFORM.DRWR_NM.value = '';
            document.MAINFORM.DRWR_TELEX.value = '';
            document.MAINFORM.DRWR_ADD1.value = '';
            document.MAINFORM.DRWR_ADD2.value = '';
            document.MAINFORM.DRWR_ADD3.value = '';
            document.MAINFORM.DRWR_CORR_MED.value = '';
            document.MAINFORM.DRWR_EMAIL.value = '';
            document.MAINFORM.DRWR_FAX.value = '';
            document.MAINFORM.DRWR_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
            SYM_IMCO_DRWR_ID_B2();

        } else {
            SYS_GetCUBK('DRWR_ID', document.MAINFORM.DRWR_ID.name, 'SYF_IMCO_DRWR_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_INT_AMT_D = function() {
    try {

        document.MAINFORM.INT_AMT_CHG_CCY.value = document.MAINFORM.INT_AMT.value;
        document.MAINFORM.REMIT_BK_CHG.value = document.MAINFORM.PRES_BK_CHG_LCY.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_TTL_DEBIT_AMT2 = function() {
    try {

        var nBill_AMT; // Utility Auto Fix Comments
        var nCHG_PD_BY_DRWE; // Utility Auto Fix Comments
        var nINT_AMT; // Utility Auto Fix Comments
        var nPRES_BK_CHG; // Utility Auto Fix Comments
        var nRMEMIT_BK_CHG; // Utility Auto Fix Comments
        var nTTL_DEBIT_AMT; // Utility Auto Fix Comments
        nBill_AMT = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);
        nINT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        nRMEMIT_BK_CHG = SYS_BeFloat(document.MAINFORM.REMIT_BK_AMT_ADD.value);
        nPRES_BK_CHG = SYS_BeFloat(document.MAINFORM.PRES_BK_CHG_LCY.value);
        nCHG_PD_BY_DRWE = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWE.value);

        nTTL_DEBIT_AMT = nBill_AMT + nINT_AMT + nRMEMIT_BK_CHG + nPRES_BK_CHG; // Utility Auto Fix Comments
        document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, nTTL_DEBIT_AMT);
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHG_FLD_LOCAL_CUST_AC_NO = function() {
    try {

        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "Yes") {
            CHG_set_UsedChgACFlag(true);

        } else {
            CHG_set_UsedChgACFlag(false);
            // Add by jane for payment logic
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_ChgCallBack = function() {
    try {

        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "No") {
            document.MAINFORM.CHG_PD_BY_DRWE.value = Chg.Screen.getLocalPayTotalAmt();
        } else {
            document.MAINFORM.CHG_PD_BY_DRWE.value = 0;
        }
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWE, "onchange");
        //tracery make and modify for payment logic
        document.MAINFORM.CHG_PD_BY_DRWR.value = Chg.Screen.getForeignPayTotalAmt();
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWR, "onchange");
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        nBILL_AMT_FM_DRWE = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);
        nCOLL_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value);
        if (nBILL_AMT_FM_DRWE > nCOLL_TRX_CCY_AMT) {
            alert("Bill Amount can not greater than New Acceptance Amount");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_BILL_AMT_FM_DRWE = function() {
    try {

        nBILL_AMT_FM_DRWE = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);
        nCOLL_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value);
        if (nBILL_AMT_FM_DRWE < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.BILL_AMT_FM_DRWE.value = 0;
        } else if (nBILL_AMT_FM_DRWE > nCOLL_TRX_CCY_AMT) {
            alert("Bill Amount can not greater than New Acceptance Amount");
            document.MAINFORM.BILL_AMT_FM_DRWE.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_PMT_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.PMT_DT.name) < 0) {
            alert("Payment Date is not allowed in the past times!");
            document.MAINFORM.PMT_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_Negative = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.INT_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INT_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.PRES_BK_CHG_LCY.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_BK_CHG_LCY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CalREMIT_BK_CHG_AMTEXRate = function() {
    try {

        var fromccy;
        var toccy;
        var rate;
        var REMIT_BK_CHG_AMT;
        var lib_chf;
        var presentchg;
        fromccy = document.MAINFORM.REMIT_BK_CHG_CCY.value;
        toccy = document.MAINFORM.COLL_CCY.value;
        presentchg = document.MAINFORM.REMIT_BK_AMT_ADD.value;
        REMIT_BK_CHG_AMT = document.MAINFORM.REMIT_BK_CHG_AMT.value;
        if (fromccy != "" && toccy != "") {
            SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'ACC_EXCH_RATE');
            rate = SYS_BeFloat(document.MAINFORM.ACC_EXCH_RATE.value);
        }
        if (fromccy != toccy) {
            lib_chf = REMIT_BK_CHG_AMT * rate;

            document.MAINFORM.REMIT_BK_CHG.value = SYT_AmtFormat(toccy, lib_chf);
            document.MAINFORM.PRES_BK_CHG_LCY.value = SYT_AmtFormat(toccy, lib_chf);
            document.MAINFORM.REMIT_BK_AMT_ADD.value = SYT_AmtFormat(toccy, SYS_BeFloat(document.MAINFORM.REMIT_BK_AMT_ADD.value * rate));
        }
        if (fromccy == toccy) {
            document.MAINFORM.REMIT_BK_CHG.value = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value);
            document.MAINFORM.PRES_BK_CHG_LCY.value = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value);
        }

    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BILL_AMT_FM_DRWE_onchange = function(event) {
    try {
        SYF_IMCO_BILL_AMT_FM_DRWE();
        SYF_IMCO_CAL_NEW_COL_BAL();
        SYM_IMCO_SET_CLS_FLG();
        SYF_IMCO_CAL_TTL_DEBIT_AMT();
        document.MAINFORM.BILL_AMT_TO_DRWR.value = document.MAINFORM.BILL_AMT_FM_DRWE.value;
        EEHtml.fireEvent(document.MAINFORM.BILL_AMT_TO_DRWR, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BILL_AMT_TO_DRWR_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLG_onchange = function(event) {
    try {
        SYF_IMCO_CHK_SEPARATE_FLG();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_PD_BY_DRWE_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_DEBIT_AMT();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_PD_BY_DRWR_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYF_IMCO_DRWE_NM_Z();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYF_IMCO_DRWR_NM_Z();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_AMT_onchange = function(event) {
    try {
        SYF_IMCO_CHK_Negative();
        SYF_IMCO_CAL_TTL_DEBIT_AMT();
        SYF_IMCO_INT_AMT_D();
        EEHtml.fireEvent(document.MAINFORM.INT_AMT_CHG_CCY, 'onchange');
        //tracery modify for payment logic
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_AMT_CHG_CCY_onchange = function(event) {
    try {
        SYF_IMCO_INT_AMT_D();
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        //tracery add a link for paynment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NET_AMT_RCVD_COLL_CCY_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        SYM_IMCO_Set_NET_AMT_RCVD_COLL_CCY_toPayment();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PMT_DT_onchange = function(event) {
    try {
        SYF_IMCO_CHK_PMT_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CHG_LCY_onchange = function(event) {
    try {
        SYF_IMCO_CHK_Negative();
        SYF_IMCO_CAL_TTL_DEBIT_AMT();
        SYF_IMCO_INT_AMT_D();
        EEHtml.fireEvent(document.MAINFORM.REMIT_BK_CHG, 'onchange');
        //tracery modify for payment logic
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_ID_M();
        SYM_IMCO_Cal_PRES_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_AMT_ADD_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_DEBIT_AMT();
        //tracery modify
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_CHG_onchange = function(event) {
    try {
        //tracery mark for payment logic
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_CHG_FLG_onchange = function(event) {
    try {
        SYF_IMCO_CHK_SEPARATE_FLG();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_COR_MED_onchange = function(event) {
    try {
        SYM_IMCO_REMIT_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SEPARATE_CHG_FLG_onchange = function(event) {
    try {
        SYF_IMCO_CHG_FLD_LOCAL_CUST_AC_NO();
        SYF_IMCO_ChgCallBack();
        SYM_IMCO_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_FM_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_FM_CNTY_CODE', document.MAINFORM.SHIP_FM_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SHIP_TO_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('SHIP_TO_CNTY_CODE', document.MAINFORM.SHIP_TO_CNTY_CODE.name);
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TTL_PAID_DRWR_AMT_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        SYM_IMCO_Set_TTL_PAID_DRWR_AMT_toPayment();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('SPCL_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_SettlementDA.js", e);
    }
}