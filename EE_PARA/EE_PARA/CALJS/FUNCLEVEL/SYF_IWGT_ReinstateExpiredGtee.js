var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.ORIGIN_GTEE_BAL.value);
        document.MAINFORM.CLOSE_DT.value = '';
        document.MAINFORM.CURRNT_STATUS.value = 'Reopen-Expiry';
        document.MAINFORM.NXT_STATUS.value = '';
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IWGT_APLB_RULE();

        SYT_DisableDivClass('A_div');
        SYT_DisableDivClass('C_div');

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CLERK_ID();
        document.MAINFORM.ORIGIN_GTEE_BAL.value = 0;
        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_ReinstateExpiredGtee.js", e);
    }
}