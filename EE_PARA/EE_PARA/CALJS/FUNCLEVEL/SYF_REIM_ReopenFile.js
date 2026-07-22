var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_REIM_ChgFldCLS = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.LC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CLOSE_DT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GRACE_DAYS, 'P');
        SYT_ChangeFldClass(document.MAINFORM.LC_CCY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_INST_AMT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_CONF_BAL, 'P');
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
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CLS_FLG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P');
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
        SYT_ChangeFldClass(document.MAINFORM.DIARY_NOTES, '0');
        SYT_ChangeFldClass(document.MAINFORM.DIARY_DT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NOTES, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AMT_SPEC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'H');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID_BTN, 'H');
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'NO';
        SYT_Init_Notes('AVAL_WT_BK_NOTES');
        SYT_Init_Notes('ISSUE_BK_NOTES');
        SYT_Init_Notes('DRWE_NOTES');
        SYT_Init_Notes('BENE_NOTES');
        SYT_Init_Notes('PRES_BK_NOTES');
        SYT_Cal_LOCAL_AMT('LC_CCY', 'REIM_INST_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('B_div');
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CONF_CR_AC_NO.value = '35790101';
        document.MAINFORM.CONF_DR_AC_NO.value = '35790102';
        document.MAINFORM.TEMP_AC_AMT2.value = document.MAINFORM.REIM_CONF_BAL.value;

        document.MAINFORM.TEMP_AC_AMT1.value = document.MAINFORM.REIM_CONF_BAL.value;
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        //SYF_REIM_ChgFldCLS();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_BENE_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ID_onchange = function(event) {
    try {
        Cal_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ID_BTN_onclick = function(event) {
    try {
        Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_BENE_ORDER_NO_onchange = function(event) {
    try {
        Cal_BENE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ADD_BTN_onclick = function(event) {
    try {
        Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ID_onchange = function(event) {
    try {
        Cal_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ID_BTN_onclick = function(event) {
    try {
        Cal_DRWE();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_ORDER_NO_onchange = function(event) {
    try {
        Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_DRWE_SW_ADD_onchange = function(event) {
    try {
        Cal_DRWE_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        Cal_PRES_BK_ADD(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ID_onchange = function(event) {
    try {
        Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        Cal_PRES_BK();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        Cal_PRES_BK_ORDER_NO(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        Cal_PRES_BK_SW_ADD();
        Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}

csFuncLevelProto.FLD_REIM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_REIM_ReopenFile.js", e);
    }
}