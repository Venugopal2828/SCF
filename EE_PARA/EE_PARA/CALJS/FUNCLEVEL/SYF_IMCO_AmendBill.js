var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Amend an Accepted Bill';
        document.MAINFORM.NXT_STATUS.value = 'Active';
        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Cal_NEW_ACPT_AMT = function() {
    try {

        var COLL_AMT = SYS_BeFloat(document.MAINFORM.ACPT_AMT.value);
        var INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        var DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);

        document.MAINFORM.NEW_ACPT_AMT.value = COLL_AMT + INC_AMT - DEC_AMT;
        if (SYS_BeFloat(document.MAINFORM.NEW_ACPT_AMT.value) < 0) {
            alert("The amount field should not negative values!");
            document.MAINFORM.NEW_ACPT_AMT.value = 0;
            document.MAINFORM.DEC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NEW_ACPT_CCY.value = document.MAINFORM.ACPT_CCY.value;
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWR_CORR_MED();
        SYF_IMCO_PRES_BK_ID();
        SYM_IMCO_INIT();
        SYM_IMCO_LOCAL_LCY_BAL();
        SYM_IMCO_CAL_LOCAL_AMT();
        SYF_IMCO_MPO_COLL_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chk_INC_DEC_AMT = function() {
    try {

        if (document.MAINFORM.DEC_AMT.value != 0 && document.MAINFORM.INC_AMT.value != 0) {
            SYS_CheckError(document.MAINFORM.INC_AMT, "The Increase Amount and Decrease Amount cannot be both presented.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_IMCO_Chk_INC_DEC_AMT()) {
            return false;
        }
        SYT_CHG_VOUCHER();
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_PRES_BK_ID = function() {
    try {

        var pres = document.MAINFORM.PRES_BK_ID.value;
        if (pres == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IMCO_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_IMCO_COURIER_FEE_CHG();
            SYM_IMCO_Chg_Calculate_IMCOSWIFT();
            SYM_IMCO_Postage_charge();
            SYM_IMCO_Chg_Calculation_Other();
            CHG_setAllChargeAt(1);
        }
        //for charge
        SYM_IMCO_Functions_For_Chg();

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
        SYM_IMCO_REMIT_BK_CORR_MED();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chk_TENOR_DT = function() {
    try {

        if (SYS_GetSubDays(document.MAINFORM.TENOR_START_DT.name, document.MAINFORM.DUE_DT.name) < 0) {
            alert("Tenor Maturity Date is not allowed before Tenor Start Date");
            document.MAINFORM.DUE_DT.value = '';
        }

    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
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
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_ACPT_AMT_onchange = function(event) {
    try {
        SYF_IMCO_Cal_NEW_ACPT_AMT();
        EEHtml.fireEvent(document.MAINFORM.NEW_ACPT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DEC_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }


        SYF_IMCO_Cal_NEW_ACPT_AMT();
        SYF_IMCO_Chk_INC_DEC_AMT();
        EEHtml.fireEvent(document.MAINFORM.NEW_ACPT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_NM();
        SYM_IMCO_COURIER_FEE_CHG();
        SYM_IMCO_Chg_Calculate_IMCOSWIFT();
        SYM_IMCO_Postage_charge();
        SYM_IMCO_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DUE_DT_onchange = function(event) {
    try {
        SYF_IMCO_Chk_TENOR_DT();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INC_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.INC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }


        SYF_IMCO_Cal_NEW_ACPT_AMT();
        SYF_IMCO_Chk_INC_DEC_AMT();
        EEHtml.fireEvent(document.MAINFORM.DEC_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_ACPT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_ID_M();
        SYM_IMCO_Cal_PRES_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_COR_MED_onchange = function(event) {
    try {
        SYM_IMCO_REMIT_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TENOR_START_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_AmendBill.js", e);
    }
}