var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_CAN_LC';
        document.MAINFORM.LCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CLS_FLG.value = 'Yes';
        document.MAINFORM.LC_BAL_CLS.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.LC_BAL.value = 0;
        document.MAINFORM.AVAL_BY.className = 'CHAR_P';
        document.MAINFORM.AVAL_BY.disabled = true;
        document.MAINFORM.ASSET_ACNO.className = 'CHAR_P';
        document.MAINFORM.ASSET_ACNO.disabled = true;
        document.MAINFORM.LIAB_ACNO.className = 'CHAR_P';
        document.MAINFORM.LIAB_ACNO.disabled = true;
        SYM_IPLC_INIT_FOR_DT();
        SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, 'P');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_EXPIRY_PLC = function() {
    try {

        var EXPIRY_PLC = document.MAINFORM.EXPIRY_PLC.value;
        if (EXPIRY_PLC == "Other") {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'hidden';

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_APLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            document.MAINFORM.APLB_RULE_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.APLB_RULE_NARR.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('B_div');
        onChangeDiary();
        SYF_IPLC_Change_APLB_RULE();
        SYF_IPLC_Change_EXPIRY_PLC();
        document.MAINFORM.LC_BAL.value = document.MAINFORM.LC_AMT.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_SQL_ADV_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_SQL_ADV_THU_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_Change_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_Change_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_CancelLCRegistration.js", e);
    }
}