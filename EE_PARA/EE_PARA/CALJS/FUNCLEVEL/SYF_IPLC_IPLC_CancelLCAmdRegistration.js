var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IPLC_INIT_FOR_DT();
        SYM_IPLC_MPO_APPL_BENE();
        SYM_IPLC_MPO_ADV_ADVTHU_BK();
        SYM_IPLC_MPO_REIM_APPL_BK();
        SYM_IPLC_change_APLB_RULE_NARR();
        SYM_IPLC_change_EXPIRY_PLC_NARR();
        SYM_IPLC_CHK_Bank_Reference();
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYM_IPLC_CAL_ADV_BK_ID_back();
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        SYM_IPLC_CAL_APPL_BK_ID_back();
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        SYM_IPLC_CAL_REIM_BK_ID_back();
        SYM_IPLC_Cal_NEW_BENE_ID_back();
        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('D_div');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Cancel_Amd_Reg';
        document.MAINFORM.CLS_FLG.value = 'No';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCAmdRegistration.js", e);
    }
}