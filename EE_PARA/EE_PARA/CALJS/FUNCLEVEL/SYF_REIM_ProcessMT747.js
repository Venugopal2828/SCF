var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYT_CLERK_ID();
        document.MAINFORM.NEW_POS_TOL.value = document.MAINFORM.POS_TOL.value;
        document.MAINFORM.NEW_NEG_TOL.value = document.MAINFORM.NEG_TOL.value;
        document.MAINFORM.NO_OF_AMD.value = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value) + 1;
        document.MAINFORM.CURRNT_STATUS.value = 'Register';
        document.MAINFORM.NXT_STATUS.value = 'Claim';
        SYF_REIM_Cal_AMD_REF();
        SYF_REIM_Cal_CLOSE_DT();
        SYF_REIM_Cal_REIM_INST_BAL();
        SYF_REIM_Cal_REIM_CONF_BAL();
        SYF_REIM_Cal_NEW_LC_AMT();
        SYF_REIM_Chk_GRACE_DAYS();
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
        //for Advice Tab
        SYF_REIM_Get_TEMP_N90_REF_20();
        SYF_REIM_Get_TEMP_N90_REF_21();
        //set value for mt730
        SYM_REIM_Get_X730_DOC_CRE_NO_20();
        SYM_REIM_Get_X730_RCVER_NO_21();
        SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_CLOSE_DT_back = function(clsdt) {
    try {

        document.MAINFORM.CLOSE_DT.value = clsdt;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_CLOSE_DT = function() {
    try {

        var GraceDays; // Utility Auto Fix Comments
        GraceDays = SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value);
        if (document.MAINFORM.NEW_EXPIRY_DT.value != "") {
            document.MAINFORM.CLOSE_DT.value = SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.NEW_EXPIRY_DT.value, GraceDays, 'SYF_REIM_Cal_CLOSE_DT_back', 'A', 'N', 'Y');
        } else {
            if (document.MAINFORM.EXPIRY_DT.value != "") {
                document.MAINFORM.CLOSE_DT.value = SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.EXPIRY_DT.value, GraceDays, 'SYF_REIM_Cal_CLOSE_DT_back', 'A', 'N', 'Y');
            } else {
                document.MAINFORM.CLOSE_DT.value = SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, SYS_DATE, '365', 'SYF_REIM_Cal_CLOSE_DT_back', 'A', 'N', 'Y');
            }
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Chk_GRACE_DAYS = function() {
    try {

        var GraceDays; // Utility Auto Fix Comments
        GraceDays = SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value);
        if (GraceDays < 0 || GraceDays > 9999) {
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, "GraceDays has been exceeded!");
            GraceDays = 0;
            document.MAINFORM.GRACE_DAYS.value = GraceDays;
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_NEW_LC_AMT = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_LC_AMT; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        if (INC_AMT != 0) {
            NEW_LC_AMT = REIM_INST_AMT + INC_AMT;
        } else if (document.MAINFORM.DEC_AMT.value != 0) {
            NEW_LC_AMT = REIM_INST_AMT - DEC_AMT;
        } else {
            NEW_LC_AMT = REIM_INST_AMT;
        }
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_AMT);
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_DEC_AMT = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        if (DEC_AMT != 0) {
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_INC_AMT = function() {
    try {

        var INC_AMT; // Utility Auto Fix Comments
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        if (INC_AMT != 0) {
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_REIM_INST_BAL = function() {
    try {

        var POS_TOL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        var REIM_INST_BAL; // Utility Auto Fix Comments
        REIM_INST_BAL = 0;
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        if (document.MAINFORM.AMT_SPEC.value == 'NOT EXCEEDING') {
            REIM_INST_BAL = REIM_INST_AMT;
        } else {
            REIM_INST_BAL = REIM_INST_AMT * (1 + POS_TOL / 100);
        }
        document.MAINFORM.REIM_INST_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_INST_BAL);

    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_ChgFldCLS = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.ISSUE_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_LC_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN.value, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CNTY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CASH_COV_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_TAG_57A.value, 'P');
        SYT_ChangeFldClass(document.MAINFORM.X730_ACC_BKID_57A_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.X730_CHG_CCY_32A, 'O');
        SYT_ChangeFldClass(document.MAINFORM.X730_TAG_32A, 'P');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_REIM_ChgFldCLS();
        SYT_Init_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //Charge
        onChangeDiary();
        Get_X730_BEACK_DT_30();
        Cal_ISSUE_NARR_MAIL();
        SYM_REIM_Chg_Screen_ISSUE();
        SYM_REIM_Chg_Screen_CLM();
        SYF_REIM_Cal_NEW_AMT_SPEC();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher - credit ccy
            SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher - mapping trx ccy to unpaid ccy
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY(); //add by tracery for charge voucher - debit ccy
            CHG_setAllChargeAt("1");
            Cal_ISSUE_BK_ID();
        }
        SYF_REIM_Cal_CLOSE_DT();
        Cal_X730_VALUE_DT_32A();
        SYM_REIM_Cal_CASH_COV_DR_ACNO();
        SYM_REIM_Cal_CASH_COV_PCT();
        SYM_REIM_Cal_CASH_COV_AC_NO();
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var CASH_COV_AMT; // Utility Auto Fix Comments
        var NEW_REIM_CONF_BAL; // Utility Auto Fix Comments
        var ORG_CASH_COV_AMT; // Utility Auto Fix Comments
        var REIM_CONF_BAL; // Utility Auto Fix Comments
        var TEMP_AMT; // Utility Auto Fix Comments
        if (document.MAINFORM.NEW_EXPIRY_DT.value == '') {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        }
        CASH_COV_AMT = SYS_BeFloat(document.MAINFORM.CASH_COV_AMT.value);
        ORG_CASH_COV_AMT = SYS_BeFloat(document.MAINFORM.ORG_CASH_COV_AMT.value);
        TEMP_AMT = CASH_COV_AMT - ORG_CASH_COV_AMT;
        if (TEMP_AMT > 0) {
            document.MAINFORM.CASH_COV_INC_AMT.value = TEMP_AMT;
        } else {
            document.MAINFORM.CASH_COV_DEC_AMT.value = -TEMP_AMT;
        }
        SYT_CHG_VOUCHER();
        document.MAINFORM.CONF_CR_AC_NO.value = '35790101';
        document.MAINFORM.CONF_DR_AC_NO.value = '35790102';
        NEW_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_CONF_BAL.value);
        REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value);
        if (NEW_REIM_CONF_BAL != REIM_CONF_BAL) {
            document.MAINFORM.TEMP_AC_AMT2.value = NEW_REIM_CONF_BAL;
            document.MAINFORM.TEMP_AC_AMT4.value = REIM_CONF_BAL;
            document.MAINFORM.TEMP_AC_AMT1.value = NEW_REIM_CONF_BAL;
            document.MAINFORM.TEMP_AC_AMT5.value = REIM_CONF_BAL;
        } else {
            document.MAINFORM.TEMP_AC_AMT1.value = 0;
            document.MAINFORM.TEMP_AC_AMT2.value = 0;
            document.MAINFORM.TEMP_AC_AMT4.value = 0;
            document.MAINFORM.TEMP_AC_AMT5.value = 0;
        }
        document.MAINFORM.TEMP_AC_AMT3.value = document.MAINFORM.CASH_COV_INC_AMT.value;
        document.MAINFORM.TEMP_AC_AMT6.value = document.MAINFORM.CASH_COV_DEC_AMT.value;
        document.MAINFORM.AMEND_FLAG.value = 'y';
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Get_TEMP_N90_REF_20 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Get_TEMP_N90_REF_21 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_NEW_REIM_INST_BAL = function() {
    try {

        var NEW_LC_AMT; // Utility Auto Fix Comments
        var NEW_POS_TOL; // Utility Auto Fix Comments
        var NEW_REIM_INST_BAL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        var REIM_INST_BAL; // Utility Auto Fix Comments
        var TEMP_AMT; // Utility Auto Fix Comments
        var NEW_REIM_CONF_BAL; // Utility Auto Fix Comments
        NEW_REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_INST_BAL.value);
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value);
        REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.REIM_INST_BAL.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        NEW_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_CONF_BAL.value);
        TEMP_AMT = 0;
        if (document.MAINFORM.AMT_SPEC.value != 'NOT EXCEEDING') {
            TEMP_AMT = NEW_LC_AMT * (1 + NEW_POS_TOL / 100) - REIM_INST_AMT * (1 + POS_TOL / 100);
            NEW_REIM_INST_BAL = SYS_BeFloat(REIM_INST_BAL) + SYS_BeFloat(TEMP_AMT);
        } else {
            NEW_REIM_INST_BAL = NEW_REIM_CONF_BAL;
        }
        document.MAINFORM.NEW_REIM_INST_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_REIM_INST_BAL);
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_NEW_REIM_CONF_BAL = function(ref) {
    try {

        var NEW_LC_AMT; // Utility Auto Fix Comments
        var NEW_POS_TOL; // Utility Auto Fix Comments
        var NEW_REIM_CONF_BAL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var REIM_CONF_BAL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        var TEMP_AMT; // Utility Auto Fix Comments
        var NEW_REIM_INST_BAL;
        NEW_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_CONF_BAL.value);
        NEW_REIM_INST_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_INST_BAL.value);
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value);
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value);
        TEMP_AMT = 0;
        if (document.MAINFORM.CONF_INSTR.value == "Confirmed") {
            REIM_CONF_BAL = document.MAINFORM.REIM_INST_BAL.value;
            TEMP_AMT = NEW_LC_AMT * (1 + NEW_POS_TOL / 100) - REIM_INST_AMT * (1 + POS_TOL / 100);
            NEW_REIM_CONF_BAL = SYS_BeFloat(REIM_CONF_BAL) + SYS_BeFloat(TEMP_AMT);
            NEW_REIM_INST_BAL = SYS_BeFloat(REIM_CONF_BAL) + SYS_BeFloat(TEMP_AMT);
        } else {
            REIM_CONF_BAL = 0;
            NEW_REIM_CONF_BAL = 0;
        }
        document.MAINFORM.REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_CONF_BAL);
        document.MAINFORM.NEW_REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_REIM_CONF_BAL);
        document.MAINFORM.NEW_REIM_INST_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_REIM_INST_BAL);
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_AMT_SPEC = function() {
    try {

        var NEG_TOL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var REIM_CONF_BAL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value);
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        NEG_TOL = SYS_BeFloat(document.MAINFORM.NEG_TOL.value);
        if (document.MAINFORM.AMT_SPEC.value == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
            document.MAINFORM.POS_TOL.value = "";
            document.MAINFORM.NEG_TOL.value = "";
            POS_TOL = 0;
            NEG_TOL = 0;
            REIM_CONF_BAL = REIM_INST_AMT * (1 + POS_TOL / 100);
            document.MAINFORM.REIM_CONF_BAL.value = REIM_CONF_BAL;
            document.MAINFORM.REIM_INST_AMT.value = document.MAINFORM.REIM_CONF_BAL.value;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_AMD_REF = function() {
    try {

        var No; // Utility Auto Fix Comments
        var Nr; // Utility Auto Fix Comments
        No = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        if (No < 10) {
            Nr = '/0' + No;
        } else {
            Nr = '/' + No;
        }
        document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + Nr;
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_NEW_AMT_SPEC = function() {
    try {

        var NEW_NEG_TOL; // Utility Auto Fix Comments
        var NEW_POS_TOL; // Utility Auto Fix Comments
        var REIM_CONF_BAL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.REIM_CONF_BAL.value);
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value);
        NEW_NEG_TOL = SYS_BeFloat(document.MAINFORM.NEW_NEG_TOL.value);
        if (document.MAINFORM.NEW_AMT_SPEC.value == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'P');
            document.MAINFORM.NEW_POS_TOL.value = 0;
            document.MAINFORM.NEW_NEG_TOL.value = 0;
            REIM_CONF_BAL = REIM_INST_AMT * (1 + NEW_POS_TOL / 100);
            document.MAINFORM.NEW_REIM_CONF_BAL.value = document.MAINFORM.NEW_LC_AMT.value;
            document.MAINFORM.NEW_REIM_INST_BAL.value = document.MAINFORM.NEW_LC_AMT.value;
            document.MAINFORM.CASH_COV_AMT.value = document.MAINFORM.NEW_REIM_CONF_BAL.value;
            SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
            EEHtml.fireEvent(document.MAINFORM.CASH_COV_PCT, "onchange");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_Cal_REIM_CONF_BAL = function() {
    try {

        var POS_TOL; // Utility Auto Fix Comments
        var REIM_CONF_BAL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        REIM_CONF_BAL = 0;
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        if (document.MAINFORM.CONF_INSTR.value == "Confirmed") {
            if (document.MAINFORM.AMT_SPEC.value != 'NOT EXCEEDING') {
                REIM_CONF_BAL = REIM_INST_AMT * (1 + POS_TOL / 100);
            } else {
                REIM_CONF_BAL = REIM_INST_AMT;
            }
        } else {
            REIM_CONF_BAL = 0;
        }
        document.MAINFORM.REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_CONF_BAL);

    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_AMD_DT = function() {
    try {

        var days; // Utility Auto Fix Comments
        days = SYS_GetSubDays('NEW_EXPIRY_DT', 'AMD_DT');
        if (days >= 0) {
            SYS_CheckError(document.MAINFORM.NEW_EXPIRY_DT, "Amend Date should be later than New Expiry  date!");
            document.MAINFORM.AMD_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.SYF_REIM_CASH_COV = function() {
    try {

        if (document.MAINFORM.CASH_COV_AC_NO.value != '' && document.MAINFORM.CASH_COV_DR_ACNO.value != '') {
            if (document.MAINFORM.CASH_COV_AC_NO.value.toLowerCase() == document.MAINFORM.CASH_COV_DR_ACNO.value.toLowerCase()) {
                alert('same Account No');
                document.MAINFORM.CASH_COV_DR_ACNO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_AC_BK_SW_ADD();
        Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_onchange = function(event) {
    try {
        Cal_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AC_WT_BK_NM_onchange = function(event) {
    try {
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AMD_DT_onchange = function(event) {
    try {
        var days1;
        var days2;
        var days3;
        var days4;
        days1 = SYS_GetSubDays('AMD_DT', 'ISSUE_DT');
        days2 = SYS_GetSubDays('NEW_EXPIRY_DT', 'AMD_DT');
        days3 = SYS_GetSubDays('ISSUE_DT', 'AMD_DT');
        days4 = SYS_GetSubDays('CLOSE_DT', 'AMD_DT');
        if (document.MAINFORM.NEW_EXPIRY_DT.value == '') {
            if (days1 > 0) {
                SYS_CheckError(document.MAINFORM.ISSUE_DT, "Amend date should be later than issue date!");
                document.MAINFORM.AMD_DT.value = '';
            }
        } else {
            if (days2 > 0 || days3 < 0) {
                SYS_CheckError(document.MAINFORM.AMD_DT, "Amend date should be between NEW_EXPIRY_DT & ISSUE_DT");
                document.MAINFORM.AMD_DT.value = '';
            }
        }
        if (days4 > 0) {
            SYS_CheckError(document.MAINFORM.CLOSE_DT, "Amend date should be later than Close date!");
            document.MAINFORM.AMD_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AMT_SPEC_onchange = function(event) {
    try {
        SYF_REIM_Cal_AMT_SPEC();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_AVAL_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_AVAL_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        Cal_AVAL_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_AVAL_WT_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_NOTES_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_AVAL_WT_BK_SW_ADD();
        Cal_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_BENE_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ID_onchange = function(event) {
    try {
        Cal_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ID_BTN_onclick = function(event) {
    try {
        Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ORDER_NO_onchange = function(event) {
    try {
        Cal_BENE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_AC_NO_onchange = function(event) {
    try {
        SYF_REIM_CASH_COV();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_AC_NO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('CASH_COV_AC_NO');
        SYS_InqCUBK_byCondition('CASH_COV_AC_NO', '1');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_DR_ACNO_onchange = function(event) {
    try {
        SYF_REIM_CASH_COV();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_DR_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('CASH_COV_DR_ACNO');
        SYS_InqCUBK_byCondition('CASH_COV_DR_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_HELD_onchange = function(event) {
    try {
        SYM_REIM_Cal_CASH_COV_HELD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CASH_COV_PCT_onchange = function(event) {
    try {
        SYM_REIM_Chk_CASH_COV_PCT();
        SYM_REIM_Cal_CASH_COV_AMT();
        SYM_REIM_Cal_CASH_COV_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_CONF_INSTR_onchange = function(event) {
    try {
        SYF_REIM_Cal_REIM_CONF_BAL();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_C_MAIN_REF_onchange = function(event) {
    try {
        SYM_REIM_Get_X730_DOC_CRE_NO_20();
        SYF_REIM_Get_TEMP_N90_REF_20();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DEC_AMT_onchange = function(event) {
    try {
        SYF_REIM_Cal_DEC_AMT();
        SYF_REIM_Cal_NEW_LC_AMT();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_AMT, "onchange");
        EEHtml.fireEvent(document.MAINFORM.CASH_COV_PCT, "onchange");
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ADD_BTN_onclick = function(event) {
    try {
        Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ID_onchange = function(event) {
    try {
        Cal_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ID_BTN_onclick = function(event) {
    try {
        Cal_DRWE();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ORDER_NO_onchange = function(event) {
    try {
        Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_SW_ADD_onchange = function(event) {
    try {
        Cal_DRWE_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_REIM_Cal_CLOSE_DT();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_REIM_Chk_GRACE_DAYS();
        SYF_REIM_Cal_CLOSE_DT();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_INC_AMT_onchange = function(event) {
    try {
        SYF_REIM_Cal_INC_AMT();
        SYF_REIM_Cal_NEW_LC_AMT();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_AMT, "onchange");
        EEHtml.fireEvent(document.MAINFORM.CASH_COV_PCT, "onchange");
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
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
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_REIM_Chg_Screen_ISSUE();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_ISSUE_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_ISSUE_BK_SW_ADD();
        Cal_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_ISSUE_NARR_TAG_79_onchange = function(event) {
    try {
        Get_XN99_NARRATIVE_79();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_LC_CCY_onchange = function(event) {
    try {
        var arr; // Utility Auto Fix Comments
        SYM_REIM_Chg_Screen_ISSUE();
        arr = ['Amendment', 'Confirmation', 'Cancellation', 'SWIFT_REIM', 'Postage_REIM', 'Other_REIM'];
        SYM_REIM_Chg_Calculate(arr);
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            SYM_REIM_Cal_CASH_COV_HELD();
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_LC_NO_onchange = function(event) {
    try {
        SYM_REIM_Get_X730_RCVER_NO_21();
        SYF_REIM_Get_TEMP_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_NEG_TOL_onchange = function(event) {
    try {
        SYF_REIM_Cal_AMT_SPEC();
        SYF_REIM_Cal_NEW_AMT_SPEC();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_NEW_AMT_SPEC_onchange = function(event) {
    try {
        SYF_REIM_Cal_NEW_AMT_SPEC();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_NEW_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_REIM_Cal_CLOSE_DT();
        var days; // Utility Auto Fix Comments
        days = SYS_GetSubDays('NEW_EXPIRY_DT', 'ISSUE_DT');
        if (days >= 0) {
            SYS_CheckError(document.MAINFORM.ISSUE_DT, " new expiry date should be later than issue date!");
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_NEW_LC_AMT_onchange = function(event) {
    try {
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_NEW_POS_TOL_onchange = function(event) {
    try {
        SYF_REIM_Cal_NEW_LC_AMT();
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
        SYF_REIM_Cal_NEW_AMT_SPEC();
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
        SYM_REIM_Cal_CASH_COV_HELD();
        if ((SYM_REIM_SpecialCharacters_onchange(document.MAINFORM.NEW_POS_TOL.value)) == false) {
            alert("special characters are not allowed");
            document.MAINFORM.NEW_POS_TOL.value = 0;
        }
        EEHtml.fireEvent(document.MAINFORM.CASH_COV_PCT, "onchange");
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_NEW_REIM_INST_BAL_onchange = function(event) {
    try {
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_POS_TOL_onchange = function(event) {
    try {
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
        SYF_REIM_Cal_AMT_SPEC();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_PRES_BK_ADD(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ID_onchange = function(event) {
    try {
        Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_PRES_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_PRES_BK_ORDER_NO(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_PRES_BK_SW_ADD();
        Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REIM_BK_CHG_DESC_onchange = function(event) {
    try {
        SYM_REIM_Cal_REIM_BK_CHG_DESC();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REIM_CONF_BAL_onchange = function(event) {
    try {
        SYF_REIM_Cal_NEW_REIM_CONF_BAL();
        SYF_REIM_Cal_AMT_SPEC();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REIM_INST_AMT_onchange = function(event) {
    try {
        var arr; // Utility Auto Fix Comments
        SYF_REIM_Cal_AMT_SPEC();
        SYF_REIM_Cal_NEW_LC_AMT();
        SYM_REIM_Chg_Screen_ISSUE();
        arr = ['Amendment', 'Confirmation', 'Cancellation', 'SWIFT_REIM', 'Postage_REIM', 'Other_REIM'];
        SYM_REIM_Chg_Calculate(arr);
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            SYM_REIM_Cal_CASH_COV_HELD();
        }
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_REIM_INST_BAL_onchange = function(event) {
    try {
        SYF_REIM_Cal_NEW_REIM_INST_BAL();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
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
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_CHG_AMT_32A_onchange = function(event) {
    try {
        Cal_X730_CHG_AMT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_CHG_CCY_32A_onchange = function(event) {
    try {
        Cal_X730_CHG_AMT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_X730_VALUE_DT_32A_onchange = function(event) {
    try {
        Cal_X730_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_ProcessMT747.js", e);
    }
}