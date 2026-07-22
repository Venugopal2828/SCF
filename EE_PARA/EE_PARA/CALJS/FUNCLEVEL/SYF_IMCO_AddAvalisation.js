var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Avalisation';
        document.MAINFORM.NXT_STATUS.value = 'Active';
        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DT_BILL_AVAL.value = SYS_BUSI_DATE;
        document.MAINFORM.ADD_AVAL_FLG.value = 'Yes';
        document.MAINFORM.RV_TRXTYPE.value = '301';
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWR_CORR_MED();
        SYM_IMCO_INIT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_TENOR_START_DT = function() {
    try {

        if (document.MAINFORM.TENOR_EVENT.value == "XXX") {
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_EVENT, 'M');
        } else if (document.MAINFORM.TENOR_EVENT.value == "XX") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.DAY_MON_FLG.value = 'D';
            document.MAINFORM.DUE_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_EVENT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, 'B');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, "M");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_EVENT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.DUE_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'B');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_MAT_DT_back = function(matdt) {
    try {

        document.MAINFORM.DUE_DT.value = matdt;
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_TENOR_DAY = function() {
    try {

        var nDays = (document.MAINFORM.DAY_MON_FLG.value == "D") ? SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) * 30;
        if (document.MAINFORM.TENOR_START_DT.value != "" && nDays != 0 && document.MAINFORM.DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, nDays, 'SYF_IMCO_MAT_DT_back()', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYF_IMCO_Get_TEMP();
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYM_IMCO_DRWE_ID_B2();
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_REIM_SWIFT_TAG();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chk_TENOR_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.TENOR_START_DT.name) < 0) {
            alert("Tenor Start Date is not allowed in the past times!");
            document.MAINFORM.TENOR_START_DT.value = '';
        } else if (SYS_GetSubDays(document.MAINFORM.TENOR_START_DT.name, document.MAINFORM.DUE_DT.name) < 0) {
            alert("Tenor Maturity Date is not allowed before Tenor Start Date!");
            document.MAINFORM.DUE_DT.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_ACPT_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.ACPT_DT.name) < 0) {
            alert("Acceptance Date  is not allowed in the past times!");
            document.MAINFORM.ACPT_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_TRACER_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.TRACER_DT.name) < 0) {
            alert("Risk Date is not allowed in the past times!");
            document.MAINFORM.TRACER_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ACPT_DT_onchange = function(event) {
    try {
        SYF_IMCO_CHK_ACPT_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_DAY();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DUE_DT_onchange = function(event) {
    try {
        SYF_IMCO_Chk_TENOR_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_NM();
        SYM_IMCO_PRES_BK_ID_M();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_COR_MED_onchange = function(event) {
    try {
        SYM_IMCO_REMIT_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_DAY();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_EVENT_onchange = function(event) {
    try {
        SYF_IMCO_TENOR_START_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_IMCO_Chk_TENOR_DT();
        SYF_IMCO_TENOR_DAY();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TRACER_DT_onchange = function(event) {
    try {
        SYF_IMCO_CHK_TRACER_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_AddAvalisation.js", e);
    }
}