var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_REIM_Cal_CLOSE_DT = function() {
    try {

        var GraceDays; // Utility Auto Fix Comments
        GraceDays = SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value);
        if (document.MAINFORM.EXPIRY_DT.value != "") {
            if (GraceDays > 0) {
                document.MAINFORM.CLOSE_DT.value = SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.EXPIRY_DT.value, GraceDays, 'SYF_REIM_Cal_CLOSE_DT_back', 'A', 'N', 'Y');
            } else {
                document.MAINFORM.CLOSE_DT.value = document.MAINFORM.EXPIRY_DT.value;
            }
        } else {
            document.MAINFORM.CLOSE_DT.value = SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, SYS_DATE, 365, 'SYF_REIM_Cal_CLOSE_DT_back', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_CLOSE_DT_back = function(clodt) {
    try {

        document.MAINFORM.CLOSE_DT.value = clodt;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_REIM_CONF_BAL = function() {
    try {

        var POS_TOL; // Utility Auto Fix Comments
        var REIM_CONF_BAL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value);
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        if (document.MAINFORM.CONF_INSTR.value == 'Confirmed') {
            if (document.MAINFORM.AMT_SPEC.value != 'NOT EXCEEDING') {
                REIM_CONF_BAL = REIM_INST_AMT * (1 + POS_TOL / 100);
                document.MAINFORM.REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_CONF_BAL);
            } else {
                document.MAINFORM.REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_INST_AMT);
            }
        } else {
            REIM_CONF_BAL = 0;
            document.MAINFORM.REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_CONF_BAL);
        }
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_REIM_INST_BAL = function() {
    try {

        var POS_TOL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        var REIM_INST_BAL; // Utility Auto Fix Comments
        REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.REIM_INST_BAL.value);
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);



        if (POS_TOL != 0 && document.MAINFORM.AMT_SPEC.value != 'NOT EXCEEDING') {
            REIM_INST_BAL = REIM_INST_AMT * (1 + POS_TOL / 100);
        } else {
            REIM_INST_BAL = REIM_INST_AMT;
        }
        document.MAINFORM.REIM_INST_BAL.value = REIM_INST_BAL;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_ChgFldCLS = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CHG_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADD_AMT_COVRD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CNTY, 'P');
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Chk_EXPIRY_DT = function() {
    try {

        var days; // Utility Auto Fix Comments
        days = SYS_GetSubDays('EXPIRY_DT', 'ISSUE_DT');
        if (days > 0) {
            SYS_CheckError(document.MAINFORM.ISSUE_DT, "expiry date should be later than issue date!");
            document.MAINFORM.ISSUE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Chk_GRACE_DAYS = function() {
    try {

        var GraceDays; // Utility Auto Fix Comments
        GraceDays = SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value);
        if (GraceDays < 0 || GraceDays > 9999) {
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, "GraceDays has been exceeded!");
            GraceDays = 0; // Utility Auto Fix Comments
            document.MAINFORM.GRACE_DAYS.value = GraceDays;
        }
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.CASH_COV_BAL.value;
        document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.REIM_CONF_BAL.value;
        document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.REIM_CONF_BAL.value;

        document.MAINFORM.CONF_CR_AC_NO.value = '35790101';
        document.MAINFORM.CONF_DR_AC_NO.value = '35790102';
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Get_TEMP_N90_REF_20 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Get_TEMP_N90_REF_21 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYT_CLERK_ID();
        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.ISSUE_BK_SW_TAG.value = 'A';
        document.MAINFORM.CURRNT_STATUS.value = 'Register';
        document.MAINFORM.NXT_STATUS.value = 'Claim';

        SYF_REIM_Cal_CLOSE_DT();
        SYF_REIM_Chk_GRACE_DAYS();

        SYF_REIM_Get_TEMP_N90_REF_20();
        SYF_REIM_Get_TEMP_N90_REF_21();
        SYF_REIM_Cal_REIM_INST_BAL();
        SYF_REIM_Cal_REIM_CONF_BAL();
        SYM_REIM_Get_X730_ADV_BKID_B2();
        SYM_REIM_Get_X730_DOC_CRE_NO_20();
        SYM_REIM_Get_X730_RCVER_NO_21();
        if (document.MAINFORM.BENE_NM.value == '') {
            Cal_BENE_ID();
        }

        Cal_ISSUE_BK_SW_ADD();
        Cal_ISSUE_BK_SW_TAG();

        document.MAINFORM.CONF_INSTR.value = 'Not Confirmed';
        document.MAINFORM.CASH_COV_HELD.value = 'No';
        SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //for charge init

        SYM_REIM_Chg_Screen_ISSUE();
        SYM_REIM_Chg_Screen_CLM();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher - credit ccy
            SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher - mapping trx ccy to unpaid ccy
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY(); //add by tracery for charge voucher - debit ccy
            CHG_setAllChargeAt("1");
        }
        SYM_REIM_Cal_REIM_BK_CHG_DESC();


        if (SYS_FUNCTION_TYPE == 'MM') {
            Cal_AVAL_WT_BK_SW_ADD();
            Cal_ISSUE_BK_ID();
            Cal_PRES_BK_SW_ADD();
            Cal_AC_BK_SW_ADD();
            Cal_DRWE_SW_ADD();
            Cal_BENE_ACNO();
        }
        CAL_AVAL_WT_MULI_ADD();

        Cal_X730_VALUE_DT_32A();
        SYM_REIM_Cal_CASH_COV_HELD();

        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_REIM_ChgFldCLS();
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_ShowBlankRow('REIM_Negotiating Bank_1', 7, 'Y');
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_AC_BK_SW_ADD();
        Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_onchange = function(event) {
    try {
        Cal_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_NM_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AMT_SPEC_onchange = function(event) {
    try {
        SYF_REIM_Cal_REIM_CONF_BAL();
        SYF_REIM_Cal_REIM_INST_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_AVAL_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_AVAL_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        Cal_AVAL_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_AVAL_WT_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_NOTES_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_AVAL_WT_BK_SW_ADD();
        Cal_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_BENE_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ID_onchange = function(event) {
    try {
        Cal_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ID_BTN_onclick = function(event) {
    try {
        Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ORDER_NO_onchange = function(event) {
    try {
        Cal_BENE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_AC_NO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('CASH_COV_AC_NO');
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_DR_ACNO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('CASH_COV_DR_ACNO');
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_HELD_onchange = function(event) {
    try {
        SYM_REIM_Cal_CASH_COV_HELD();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_PCT_onchange = function(event) {
    try {
        SYM_REIM_Chk_CASH_COV_PCT();

        SYM_REIM_Cal_CASH_COV_AMT();
        SYM_REIM_Cal_CASH_COV_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CONF_INSTR_onchange = function(event) {
    try {
        SYF_REIM_Cal_REIM_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_REIM_Get_TEMP_N90_REF_20();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ADD_BTN_onclick = function(event) {
    try {
        Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ID_onchange = function(event) {
    try {
        Cal_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ID_BTN_onclick = function(event) {
    try {
        Cal_DRWE();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ORDER_NO_onchange = function(event) {
    try {
        Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_SW_ADD_onchange = function(event) {
    try {
        Cal_DRWE_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_REIM_Cal_CLOSE_DT();
        SYF_REIM_Chk_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_REIM_Cal_CLOSE_DT();
        SYF_REIM_Chk_GRACE_DAYS();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ID();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterInstruction'){
//JACK 0921 REIM
SYM_REIM_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_REIM_Chg_Screen_ISSUE();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_ISSUE_BK_SW_ADD();
        Cal_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_DT_onchange = function(event) {
    try {
        SYF_REIM_Chk_EXPIRY_DT();
        SYM_REIM_Cal_X730_BEACK_DT_30();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_NARR_TAG_79_onchange = function(event) {
    try {
        Get_XN99_NARRATIVE_79();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_LC_CCY_onchange = function(event) {
    try {
        var arr; // Utility Auto Fix Comments
        SYF_REIM_Cal_REIM_CONF_BAL();
        SYM_REIM_Chg_Screen_ISSUE();
        arr = ['ISS_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG'];
        SYM_REIM_Chg_Calculate(arr);
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_LC_NO_onchange = function(event) {
    try {
        SYM_REIM_Get_X730_RCVER_NO_21();
        SYF_REIM_Get_TEMP_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_POS_TOL_onchange = function(event) {
    try {
        SYF_REIM_Cal_REIM_CONF_BAL();
        SYF_REIM_Cal_REIM_INST_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_PRES_BK_ADD(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ID_onchange = function(event) {
    try {
        Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_PRES_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_PRES_BK_ORDER_NO(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_PRES_BK_SW_ADD();
        Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REIM_INST_AMT_onchange = function(event) {
    try {
        var arr; // Utility Auto Fix Comments
        SYF_REIM_Cal_REIM_INST_BAL();
        SYF_REIM_Cal_REIM_CONF_BAL();
        SYM_REIM_Chg_Screen_ISSUE();
        arr = ['ISS_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG'];
        SYM_REIM_Chg_Calculate(arr);
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REIM_INST_BAL_onchange = function(event) {
    try {
        SYF_REIM_Cal_REIM_INST_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_SEND_TO_onchange = function(event) {
    try {
        Cal_ISSUE_NARR_TAG_79();
        Get_X730_ACC_IDEN_25();
        Get_X730_BEACK_DT_30();
        SYM_REIM_Cal_X730_BEACK_DT_30();
        Cal_ISSUE_NARR_MAIL();
        SYM_REIM_Get_X730_ADV_BKID_B2();
        SYM_REIM_Get_X730_DOC_CRE_NO_20();
        SYM_REIM_Get_X730_RCVER_NO_21();

        Get_Ack_79();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_CHG_AMT_32A_onchange = function(event) {
    try {
        Cal_X730_CHG_AMT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_CHG_CCY_32A_onchange = function(event) {
    try {
        Cal_X730_CHG_AMT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_VALUE_DT_32A_onchange = function(event) {
    try {
        Cal_X730_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_AutoProcessMT740.js", e);
    }
}