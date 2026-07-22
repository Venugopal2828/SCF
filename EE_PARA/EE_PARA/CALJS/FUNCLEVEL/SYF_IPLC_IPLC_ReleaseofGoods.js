var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.ORDER_CUST_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ORDER_CUST_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_BK_NOTES.name);
        SYM_IPLC_CAL_RCV_BK_ADD_Back();
        SYM_IPLC_CAL_ORDER_CUST_ADD_back();
        SYM_IPLC_INIT_FOR_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_CUST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ORDER_CUST_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_CUST_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ORDER_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_CUST_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ORDER_CUST_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_CUST_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ORDER_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_RCV_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_BK_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_RCV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_RCV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_RCV_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_RCV_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_RCV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_RCV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReleaseofGoods.js", e);
    }
}