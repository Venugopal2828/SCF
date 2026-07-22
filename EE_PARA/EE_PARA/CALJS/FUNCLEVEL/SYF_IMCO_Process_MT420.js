var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_IMCO_MT420_TAG_32();
        SYM_IMCO_CAL_TENOR_32K();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYT_CLERK_ID();
        document.MAINFORM.REMIT_BK_NM2.value = document.MAINFORM.REMIT_BK_NM.value;
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWR_CORR_MED();


        SYM_IMCO_INIT();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYF_IMCO_Get_TEMP();
        SYM_IMCO_DRWE_ID_B2();
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_REIM_SWIFT_TAG();
        SYM_IMCO_PRE_SWIFT_TAG();

        SYT_Init_Notes(document.MAINFORM.COLL_BK_NOTES.name);
        SYM_IMCO_CAL_COLL_BK_ID_back();
        SYT_DisableDivClass('B_div');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_REMOVE_MESSG_OPTION = function() {
    try {

        var COLL_TYPE = document.MAINFORM.COLL_TYPE.value;
        if (COLL_TYPE == 'Documentary Through Bank' || COLL_TYPE == 'Clean Through Bank') {
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "Email");
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'Fax');
            if (document.MAINFORM.RV_FOR_ACCT_CUST_BK.value == 'Bank') {
                SYT_AddOption(document.MAINFORM.MESG_TYPE.name, "MT420", "MT420");
                SYT_AddOption(document.MAINFORM.MESG_TYPE.name, "MT499", "MT499");
                SYT_AddOption(document.MAINFORM.MESG_TYPE.name, "MT999", "MT999");
            } else if (document.MAINFORM.RV_FOR_ACCT_CUST_BK.value == 'Customer') {
                SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "MT420");
                SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT499');
                SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT999');
            }
        } else {
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "MT420");
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT499');
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT999');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_CAL_COLL_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_CAL_COLL_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_SQL_COLL_BANK();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_CAL_COLL_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_SQL_COLL_BK_SW_ADD();
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_TYPE_onchange = function(event) {
    try {
        SYF_IMCO_REMOVE_MESSG_OPTION();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_NM();
        SYF_IMCO_Chg_Tracer();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYF_IMCO_MESSAG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_NM();
        SYM_IMCO_PRES_BK_ID_M();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT420.js", e);
    }
}