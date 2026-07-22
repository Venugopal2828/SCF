var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_REOPEN_LC';
        document.MAINFORM.CLS_FLG.value = 'No';
        SYT_ChangeFldClass_New('CLS_FLG', 'P');
        document.MAINFORM.REINST_DT.value = SYS_DATE;
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
        SYM_IPLC_INIT_FOR_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_ChangeFldClass(document.MAINFORM.CLS_FLG, "P");
        SYT_DisableDivClass('B_div');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReopenLC.js", e);
    }
}