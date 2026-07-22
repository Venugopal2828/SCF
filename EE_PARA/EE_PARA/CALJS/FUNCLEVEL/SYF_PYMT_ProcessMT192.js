var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        if (document.MAINFORM.MT_Convert.value == "YES") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        var note; // Utility Auto Fix Comments
        note = "\nDuring " + SYS_FUNCTION_DESC + ", " + SYS_USER_ID + " on " + SYS_BUSI_DATE + " " + SYS_TIME + '\n';
        if (document.MAINFORM.NOTES.value.trim() != "") {
            document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value + note + "Notes Added: " + document.MAINFORM.NOTES.value;
        } else {
            document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        var note; // Utility Auto Fix Comments
        if (document.MAINFORM.CORR_MSG_DI.value == "MT111") {
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.SEND_CORR_SW_ADD.value;
            document.MAINFORM.RELATED_REF_NO.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.REVE_AMT.value = document.MAINFORM.X103_INSTR_AMT_33B.value;
            document.MAINFORM.REVERSAL_DT.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        }
        if (buttonType == 'Confirm') {
            note = "\nDuring " + SYS_FUNCTION_DESC + ", " + SYS_USER_ID + " on " + SYS_BUSI_DATE + " " + SYS_TIME + '\n';
            if (document.MAINFORM.NOTES.value.trim() != "") {
                document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value + note + "Notes Added: " + document.MAINFORM.NOTES.value;
            } else {
                document.MAINFORM.TRX_HISTORY.value = document.MAINFORM.TRX_HISTORY_TEMP.value;
            }
        }
        SYT_setTag11forSwift();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.PAY_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.XN99_NARRATIVE_79.value = "";
        SYM_PYMT_Chg_BK_CUS_TYPE();
        document.MAINFORM.CORR_MSG.value = "";
        document.MAINFORM.PROD.value = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        document.MAINFORM.CURRNT_STATUS.value = "CREATE_CORRES";
        SYM_PYMT_REF_20();
        //document.MAINFORM.UETR_GPI_121.value = SYF_PYMT_get_guid();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        load_flg = "F";
        count_notes = 0;
        document.MAINFORM.NOTES.value = "";
        document.MAINFORM.TRX_HISTORY_TEMP.value = document.MAINFORM.TRX_HISTORY.value;
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ID, 'M');
        SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_NM, 'M');
        if (document.MAINFORM.CU_TYPE.value == "Bank") {
            document.MAINFORM.BK_CUS_TYPE[0].checked = true;
        } else {
            document.MAINFORM.BK_CUS_TYPE[1].checked = true;
        }
        if (SYS_FUNCTION_TYPE != "IQ" && SYS_FUNCTION_TYPE != "RE") {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_preswift", "_transaction");
        }
        SYM_PYMT_Shw_MPO_MsgType();
        SYF_PYMT_Chg_CORR_MSG_DI();
        SYM_PYMT_Chg_CORR_MSG();
        load_flg = "T";
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_CORR_MSG_DI = function() {
    try {
        if (document.MAINFORM.CORR_MSG_DI.value == "MT111") {
            SYT_ChangeFldClass(document.MAINFORM.MT111_QUER, 'M');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'P');
            SYM_PYMT_enableField(document.MAINFORM.Query_Button, 'O');
            SYM_PYMT_disableField(document.MAINFORM.XN99_NARRATIVE_79_Button, 'O');
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.SEND_CORR_SW_ADD.value;
            document.MAINFORM.RELATED_REF_NO.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.REVE_AMT.value = document.MAINFORM.X103_INSTR_AMT_33B.value;
            document.MAINFORM.REVERSAL_DT.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MT111_QUER, 'P');
            SYM_PYMT_enableField(document.MAINFORM.XN99_NARRATIVE_79_Button, 'O');
            SYM_PYMT_disableField(document.MAINFORM.Query_Button, 'O');
            SYT_ChangeFldClass(document.MAINFORM.XN99_NARRATIVE_79, 'M');
            if (load_flg == "T") {
                document.MAINFORM.XN99_NARRATIVE_79.value = "";
                document.MAINFORM.MT111_QUER.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*SYF_PYMT_Chg_CORR_MSG_DI", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_MT_CATEGORY_DI = function() {
    try {
        SYM_PYMT_Cal_MsgType();
        SYM_PYMT_Chg_CORR_MSG(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*SYF_PYMT_Chg_MT_CATEGORY_DI", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_MT_SUBCAT_DI = function() {
    try {
        SYM_PYMT_Cal_MsgType();
        SYF_PYMT_Chg_MT_CATEGORY_DI();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*SYF_PYMT_Chg_MT_SUBCAT_DI", e);
    }
}

csFuncLevelProto.SYF_PYMT_get_guid = function() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*SYF_PYMT_get_guid", e);
    }
}

csFuncLevelProto.FLD_PYMT_BK_CUS_TYPE_onchange = function(event) {
    try {
        SYM_PYMT_Chg_BK_CUS_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_BK_CUS_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CORRES_TYPE_onchange = function(event) {
    try {
        SYM_PYMT_Chg_CORRES_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_CORRES_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_CORR_MSG_onchange = function(event) {
    try {
        SYM_PYMT_Chg_CORR_MSG();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_CORR_MSG_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_C_TRT_LOG_ID_TEMP_onchange = function(event) {
    try {
        var prod_code; // Utility Auto Fix Comments
        prod_code = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (prod_code == 'OT') {
            SYS_GetCUBK('NARR_79_OUT', "C_TRT_LOG_ID_TEMP");
        } else {
            SYS_GetCUBK('NARR_79_IN', "C_TRT_LOG_ID_TEMP");
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_C_TRT_LOG_ID_TEMP_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_MT_CATEGORY_onchange = function(event) {
    try {
        SYM_PYMT_Chg_MT_CATEGORY();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_MT_CATEGORY_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_MT_SUBCAT_onchange = function(event) {
    try {
        SYM_PYMT_Chg_MT_SUBCAT();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_MT_SUBCAT_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_CORR_BK_ID_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SEND_CORR_BK_ID();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_SEND_CORR_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_SEND_CORR_SW_ADD_onchange = function(event) {
    try {
        SYM_PYMT_Chg_SEND_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_SEND_CORR_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_PYMT_NarrButton_95_onclick = function(event) {
    try {
        SYS_InsertClause('XN95_96_NARRATIVE');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_NarrButton_95_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_Query_Ans_Button_onclick = function(event) {
    try {
        SYS_InsertClause('X95_96_QUER_ANS');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_Query_Ans_Button_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_Query_Button_onclick = function(event) {
    try {
        SYS_InsertClause('MT111_QUER');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_Query_Button_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_XN99_NARRATIVE_79_Button_onclick = function(event) {
    try {
        SYS_InsertClause('XN99_NARRATIVE_79');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_XN99_NARRATIVE_79_Button_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_button_onclick = function(event) {
    try {
        SYM_PYMT_Clk_SEND_CORR_BK_ID_lookup();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_button_onclick", e);
    }
}

csFuncLevelProto.FLD_PYMT_button6_onclick = function(event) {
    try {
        var prod_code; // Utility Auto Fix Comments
        document.MAINFORM.C_TRT_LOG_ID_TEMP.value = "";
        prod_code = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (prod_code == 'OT') {
            //SYS_InqCUBK_Sql('NARR_79_OUT', "C_MAIN_REF LIKE '%<--C_MAIN_REF-->%'");
            SYS_InqCUBK_byCondition('NARR_79_OUT', '1');
        } else {
            SYS_InqCUBK_Sql('NARR_79_IN', "C_MAIN_REF LIKE '%<--C_MAIN_REF-->%'");
            SYS_InqCUBK_byCondition('NARR_79_IN', '1');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT192.js*FLD_PYMT_button6_onclick", e);
    }
}