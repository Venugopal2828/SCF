var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_REIM_ChgFldCLS = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.LC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRACE_DAYS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_CONF_BAL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADD_AMT_COVRD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLS_FLG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P'); // Utility Auto Fix Comments
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        document.MAINFORM.CLS_FLG.value = 'Yes';
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        CHG_setAllCollCcy(SYS_LOCAL_CCY);
        SYT_Set_TRXCCY2CHG();
        document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE;
        if (SYS_FUNCTION_TYPE != "RE") {
            SYF_REIM_CHK_ADD_CHARGE();
        }
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CONF_CR_AC_NO.value = '35790101';
        document.MAINFORM.CONF_DR_AC_NO.value = '35790102';
        document.MAINFORM.TEMP_AC_AMT4.value = document.MAINFORM.REIM_CONF_BAL.value;

        document.MAINFORM.TEMP_AC_AMT5.value = document.MAINFORM.REIM_CONF_BAL.value;
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_REIM_ChgFldCLS();
        SYT_ShowBlankRow('REIM_Negotiating Bank_1', 6, 'Y');

        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_REIM_CHK_ADD_CHARGE();
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.SYF_REIM_CHK_ADD_CHARGE = function() {
    try {

        var ccy = document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.value;
        var unPaidAmt = SYS_BeFloat(Chg.Screen.getLocalBalTotalAmt(ccy) + Chg.Screen.getForeignBalTotalAmt(ccy));
        if (unPaidAmt > 0 && document.MAINFORM.OVER_CHG_FLG.value == 'NO') {
            SYS_CheckError(document.MAINFORM.OVER_CHG_FLG, "There are outstanding charges. Please use the Settle Charges Function to clear them.");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_OVER_CHG_FLG_onchange = function(event) {
    try {
        SYF_REIM_CHK_ADD_CHARGE();
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_CloseFile.js", e);
    }
}