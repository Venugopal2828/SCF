var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('F_div');
        SYT_DisableDivClass('G_div');
        SYT_DisableDivClass('H_div');
        SYT_ChangeFldClass(document.MAINFORM.CLS_FLG, 'M');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FINANCE_TYPE_onchange = function(event) {
    try {
        SYM_GTEE_Cal_AREA_CODE();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_CUST_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ORDER_CUST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_CUST_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ORDER_CUST_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_AC_NO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ORDER_INST_AC_NO');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ORDER_INST_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_FixMasterPLF.js", e);
    }
}