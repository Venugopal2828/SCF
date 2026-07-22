var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_LC_ACK';
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.NXT_STATUS.value = 'AmdLC';
        document.MAINFORM.AC_WT_BK_CORR_MED.value = 'None';
        SYM_IPLC_INIT_FOR_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
        SYM_IPLC_CAL_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_AC_WT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_AC_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_AC_WT_BK_ID();

        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_AC_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
        SYM_IPLC_SQL_AC_WT_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CHG_TRX_CCY_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_CHG_TRX_CCY.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADV_BK_CHG_TRX_CCY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_LCAcknowledgement.js", e);
    }
}