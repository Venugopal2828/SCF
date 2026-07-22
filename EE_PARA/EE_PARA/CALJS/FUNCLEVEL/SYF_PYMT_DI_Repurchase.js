var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_PYMT_disable_fields();
        SYT_Chgs_Without_Deferred_Terms();
        document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
        SYT_Hide_Partchgfld();
        SYT_Cal_ChgCashInd();
        SYT_Cal_ChgAC();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, "P");
        if (SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_preswift", "_transaction");
            SYT_Audit_Main();
        }

        //Auto advice printing
        SYT_AdviceAutoPrint(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.X103_ORDCU_ID_50A.value, "DI");
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_disable_fields = function() {
    try {

        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_INSTR_CCY_33B);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_INSTR_AMT_33B);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_SETT_CCY_32A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_SETT_AMT_32A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCU_ID_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCU_NM_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD1_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD2_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUADD3_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_ORDCUACNO_50A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.CHEQ_NO);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103_BENECU_NM_59A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103BENECUADD1_59A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103BENECUADD2_59A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.X103BENECUADD3_59A);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.BENE_CNTY_RES);
        SYM_GTEE_MPO_SW_FORM(document.MAINFORM.MLT_STLMT);
        document.MAINFORM.Ord_Cust_lookup.disabled = true;
        document.MAINFORM.lookup1.disabled = true;
        document.MAINFORM.LOOK_UP_BTN1.disabled = true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var notes; // Utility Auto Fix Comments
        var stlmt; // Utility Auto Fix Comments
        if (!SYS_Batch_CheckFieldValue()) {
            return false;
        }
        //check whether the value of all class fields are correct
        stlmt = SYT_Init_Notes();
        if (stlmt == false) {
            return false;
        }
        notes = SYT_VisibleNote();
        if (notes == false) {
            return false;
        }
        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }
        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
        document.MAINFORM.CHG_VALUE_DATE.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        SYT_Chk_FormAdv_CashInd();


        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_calculate_charge = function() {
    try {

        if (document.MAINFORM.CR_AMT.value == 0) {
            Chg.calculate(['DI_REPU'], document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.DB_AMT.value);
        } else {
            Chg.calculate(['DI_REPU'], document.MAINFORM.X103_INSTR_CCY_33B.value, document.MAINFORM.CR_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_save_original_trn_details = function() {
    try {

        document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
        document.MAINFORM.REVERSAL_DT.value = document.MAINFORM.X103_VALUE_DT_32A.value;
        document.MAINFORM.REVE_AC_NO.value = document.MAINFORM.CPYT_CR_BK_AC.value;
        document.MAINFORM.REVE_AMT.value = DecimalFormat(document.MAINFORM.CR_AMT.value, findDecFromCCY(document.MAINFORM.X103_INSTR_CCY_33B.value));
        document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.X103_BENECU_NM_59A.value;
        document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.X103BENECUADD1_59A.value;
        document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.X103BENECUADD2_59A.value;
        document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.X103BENECUADD3_59A.value;
        document.MAINFORM.CHEQ_NO.value = document.MAINFORM.RPLCD_CHEQ_NO.value;
        document.MAINFORM.RELATED_REF_NO.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_PYMT_save_original_trn_details();
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
        SYF_PYMT_calculate_charge();
        document.MAINFORM.X103_VALUE_DT_32A.value = SYS_BUSI_DATE;
        document.MAINFORM.CURRNT_STATUS.value = 'REPURCHASE';
        document.MAINFORM.NXT_STATUS.value = 'END';
        SYF_PYMT_set_values_for_settlement_screen();
        document.MAINFORM.REPUR_IND.value = "Yes";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_set_values_for_settlement_screen = function() {
    try {

        SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'N', 'N', 'TRUE');
        document.MAINFORM.CR_CCY.value = document.MAINFORM.X103_INSTR_CCY_33B.value;
        document.MAINFORM.DB_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        document.MAINFORM.CR_CALC_AMT.value = document.MAINFORM.REVE_AMT.value;
        document.MAINFORM.DB_CALC_AMT.value = 0;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            SYM_IWGT_Check_APPL_BENE();
            SYT_CHG_INIT();
            Chg.Screen.mapLocalCust('X103_ORDCU_ID_50A', 'X103_ORDCU_NM_50A');
            Chg.attchEvent(SYT_Cal_ChgAC);
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHEQ_NO_onchange = function(event) {
    try {
        //alert("heelo");
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CPYT_CR_BK_AC_onchange = function(event) {
    try {
        get_receiving_bank_id_using_nostro_account();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_LOOK_UP_BTN1_onclick = function(event) {
    try {
        list_Nostro_receiving_banks_per_currency();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_RPLCD_CHEQ_NO_onchange = function(event) {
    try {
        document.MAINFORM.RPLCD_CHEQ_NO.value = document.MAINFORM.RPLCD_CHEQ_NO.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD1_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD1_59A.value = document.MAINFORM.X103BENECUADD1_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD2_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD2_59A.value = document.MAINFORM.X103BENECUADD2_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103BENECUADD3_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103BENECUADD3_59A.value = document.MAINFORM.X103BENECUADD3_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        get_receiving_bank_details_using_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_BENECU_NM_59A_onchange = function(event) {
    try {
        document.MAINFORM.X103_BENECU_NM_59A.value = document.MAINFORM.X103_BENECU_NM_59A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_AMT_33B_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_INSTR_CCY_33B_onchange = function(event) {
    try {
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUACNO_50A_onchange = function(event) {
    try {
        debit_account_changed();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD1_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD1_50A.value = document.MAINFORM.X103_ORDCUADD1_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD2_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD2_50A.value = document.MAINFORM.X103_ORDCUADD2_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCUADD3_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCUADD3_50A.value = document.MAINFORM.X103_ORDCUADD3_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_ID_50A_onchange = function(event) {
    try {
        change_of_applicant_id();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ORDCU_NM_50A_onchange = function(event) {
    try {
        document.MAINFORM.X103_ORDCU_NM_50A.value = document.MAINFORM.X103_ORDCU_NM_50A.value.trim();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_AMT_32A_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_SETT_CCY_32A_onchange = function(event) {
    try {
        if (document.MAINFORM.RECORDER_TYPE.value != "NonCustomer") {
            document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        }
        document.MAINFORM.DB_CCY.value = document.MAINFORM.X103_SETT_CCY_32A.value;
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.RATE_TYPE.value, document.MAINFORM.RATE_NAME.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_VALUE_DT_32A_onchange = function(event) {
    try {
        DI_validate_value_date();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_Repurchase.js", e);
    }
}