var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IMCO_CAL_ADV_TYPE = function() {
    try {

        if (document.MAINFORM.ADV_TYPE.value == 'OTHR') {
            document.MAINFORM.ADV_TXT.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.ADV_TXT, 'M');
        } else {
            document.MAINFORM.ADV_TXT.style.visibility = "hidden";
            SYT_ChangeFldClass(document.MAINFORM.ADV_TXT, 'O');
            document.MAINFORM.ADV_TXT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_Maturity_Date = function() {
    try {

        var nDays = (document.MAINFORM.DAY_MON_FLG.value == "D") ? SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) : SYS_BeInt(document.MAINFORM.TENOR_DAYS.value) * 30;

        if (document.MAINFORM.TENOR_START_DT.value != "" && nDays != 0 && document.MAINFORM.DAY_MON_FLG.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, nDays, 'SYF_IMCO_CAL_Maturity_Date_back()', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_Maturity_Date_back = function(matdt) {
    try {

        document.MAINFORM.DUE_DT.value = matdt;
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_SEND_TO_BANK = function() {
    try {

        if (document.MAINFORM.MESG_TYPE.value == 'MT499' || document.MAINFORM.MESG_TYPE.value == 'MT999') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NARR, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
            document.MAINFORM.NARR_MAIL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'O');

        } else if (document.MAINFORM.MESG_TYPE.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD3, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'O');
            document.MAINFORM.SEND_TO_SW_ADD.value = '';
            SYF_IMCO_SEND_SWIFT_TAG();
            SYT_ChangeFldClass(document.MAINFORM.NARR, 'P');
            document.MAINFORM.NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_NM, 'P');
            document.MAINFORM.SEND_TO_NM.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD3, 'P');
            document.MAINFORM.SEND_TO_ADD1.value = '';
            document.MAINFORM.SEND_TO_ADD2.value = '';
            document.MAINFORM.SEND_TO_ADD3.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_REF, 'P');
            document.MAINFORM.SEND_TO_REF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'P');
            document.MAINFORM.SEND_TO_SW_ADD.value = '';
            SYF_IMCO_SEND_SWIFT_TAG();
            SYT_ChangeFldClass(document.MAINFORM.NARR, 'P');
            document.MAINFORM.NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
            document.MAINFORM.NARR_MAIL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ID, 'P');
            document.MAINFORM.SEND_TO_ID.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_TENOR_DATE = function() {
    try {

        if (document.MAINFORM.TENOR_EVENT.value == 'XXX') {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DAY_MON_FLG, 'M');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.MSG_TYPE.value = 'IMCO.006.NonPmtAcpt';
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWR_CORR_MED();
        SYF_IMCO_Get_TEMP();
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYM_IMCO_INIT();
        document.MAINFORM.COLL_BK_NM.value = document.MAINFORM.REMIT_BK_NM.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_IMCO_CAL_ADV_TYPE();
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
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
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_SEND_SWIFT_TAG = function() {
    try {

        if (document.MAINFORM.SEND_TO_SW_ADD.value != '') {
            document.MAINFORM.SEND_TO_SW_TAG.value = 'A';
        } else {
            document.MAINFORM.SEND_TO_SW_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_ADV_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.REG_DT.name, document.MAINFORM.ADV_DT.name) < 0) {
            alert("Advice Date is not allowed in the past times!");
            document.MAINFORM.ADV_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ADV_DT_onchange = function(event) {
    try {
        SYF_IMCO_CHK_ADV_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ADV_TYPE_onchange = function(event) {
    try {
        SYF_IMCO_CAL_ADV_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DAY_MON_FLG_onchange = function(event) {
    try {
        SYF_IMCO_CAL_Maturity_Date();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_NM();
        SYM_IMCO_PRES_BK_ID_M();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_COR_MED_onchange = function(event) {
    try {
        SYM_IMCO_REMIT_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_DAYS_onchange = function(event) {
    try {
        SYF_IMCO_CAL_Maturity_Date();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_EVENT_onchange = function(event) {
    try {
        SYF_IMCO_Cal_TENOR_DATE();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_START_DT_onchange = function(event) {
    try {
        SYF_IMCO_CAL_Maturity_Date();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_AdviceNonPaymentFromCE.js", e);
    }
}