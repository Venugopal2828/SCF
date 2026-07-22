var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.ORDER_CUST_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ORDER_CUST_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_BK_NOTES.name);
        SYM_IMCO_ORDER_CUST_ID_B2();
        SYM_IMCO_RCV_BK_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_IMCO_INIT();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ORDER_CUST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_ORDER_CUST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ORDER_CUST_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_ORDER_CUST_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ORDER_CUST_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_ORDER_CUST_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ORDER_CUST_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_ORDER_CUST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_RCV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_RCV_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_RCV_BK_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_RCV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_RCV_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_RCV_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_RCV_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_RCV_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_RCV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_RCV_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_RCV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_RCV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_RCV_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_ReleaseofGoods.js", e);
    }
}