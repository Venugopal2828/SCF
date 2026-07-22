var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.PRES_BK_NM2.value = document.MAINFORM.PRES_BK_NM.value;
        SYM_IMCO_DRWR_CORR_MED();
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_PRES_BK_ID();
        SYM_IMCO_INIT();
        SYM_IMCO_LOCAL_LCY_BAL();
        SYM_IMCO_CAL_LOCAL_AMT();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
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
        SYM_IMCO_DRWE_ID_B2();
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REIM_SWIFT_TAG();
        SYM_IMCO_PRE_SWIFT_TAG();
        //if(SYS_FUNCTION_TYPE !="EC" && SYS_FUNCTION_TYPE !="RE" && SYS_FUNCTION_TYPE !="IQ"){
        SYF_IMCO_MPO_OUR_ROLE();
        SYF_IMCO_MPO_COLL_TYPE();
        //}
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MPO_OUR_ROLE = function() {
    try {

        if (document.MAINFORM.OUR_ROLE.value == 'First Collecting Bank') {
            if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
                document.MAINFORM.PRES_BK_CORR_MED.value = 'None';
                document.MAINFORM.PRES_BK_LANG.value = 'English';
            }
            SYT_ChangeFldClass_New('PRES_BK_ID', 'O');
            SYT_ChangeFldClass_New('PRES_BK_NM', 'M');
            SYT_ChangeFldClass_New('PRES_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('PRES_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'O');
            SYT_ChangeFldClass_New('PRES_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('PRES_BK_CORR_MED', 'M');
            SYT_ChangeFldClass_New('PRES_BK_LANG', 'M');
            SYT_ChangeFldClass_New('PRES_BK_REF', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ID_BTN', 'O');
            SYT_ChangeFldClass_New('PRES_BK_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('PRES_BK_POST_ADD_BTN', 'O');
        } else {

            SYT_ChangeFldClass_New('PRES_BK_ID', 'B');
            SYT_ChangeFldClass_New('PRES_BK_NM', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD1', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD2', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD3', 'B');
            SYT_ChangeFldClass_New('PRES_BK_MAIL_ADD', 'B');
            SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'B');
            SYT_ChangeFldClass_New('PRES_BK_SW_TAG', 'B');
            SYT_ChangeFldClass_New('PRES_BK_CORR_MED', 'B');
            SYT_ChangeFldClass_New('PRES_BK_LANG', 'B');
            SYT_ChangeFldClass_New('PRES_BK_REF', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ID_BTN', 'B');
            SYT_ChangeFldClass_New('PRES_BK_ADD_BTN', 'B');
            SYT_ChangeFldClass_New('PRES_BK_POST_ADD_BTN', 'B');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MPO_COLL_TYPE = function() {
    try {

        if (document.MAINFORM.COLL_TYPE.value == "Documentary Direct" || document.MAINFORM.COLL_TYPE.value == 'Clean Direct') {
            SYT_ChangeFldClass_New("REMIT_BK_NM", "O");
            SYT_ChangeFldClass_New("REMIT_BK_COR_MED", "O");
            SYT_ChangeFldClass_New("REMIT_LANG", "O");
        } else {
            SYT_ChangeFldClass_New("REMIT_BK_NM", "M");
            SYT_ChangeFldClass_New("REMIT_BK_COR_MED", "M");
            SYT_ChangeFldClass_New("REMIT_LANG", "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ACK_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.ACK_DT.name) < 0) {
            alert("Acknowledgement Date is not allowed in the past times!");
            document.MAINFORM.ACK_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_ID_M();
        SYM_IMCO_Cal_PRES_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_AMT_ADD_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.REMIT_BK_AMT_ADD.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.REMIT_BK_AMT_ADD.value = 0;

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_Acknowledgement.js", e);
    }
}