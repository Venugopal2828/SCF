var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_GTEE_Cal_LIAB_AMT();
        //SYM_GTEE_CCY_AMT_LIAB();
        SYT_CLERK_ID();
        SYT_CHG_VOUCHER();
        SYT_LIAB_VOUCHER();

        Cal_MSG_TYPE();
        //JACK 0921 GTEE
        //Get_SYND_INFO();
        //Cal_CASH_COV_BAL_TXCCY();
        //Cal_CASH_COV_BAL();
        if(document.MAINFORM.SAME_AS_APPL_FLG.value=='ACTP'){
        	document.MAINFORM.TEMP_INDEMN_NM.value = document.MAINFORM.INDEMN_NM.value;
        	document.MAINFORM.TEMP_INDEMN_ADD1.value = document.MAINFORM.INDEMN_ADD1.value;
        	document.MAINFORM.TEMP_INDEMN_ADD2.value = document.MAINFORM.INDEMN_ADD2.value;
        	document.MAINFORM.TEMP_INDEMN_ADD3.value = document.MAINFORM.INDEMN_ADD3.value;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_GTEE_Check_EXPIRY_DT()) {
            return false;
        }

            if (!SYM_GTEE_Check_EXPIRY_DT_ISSUE_DT()) {
                return false;
          }
    
        if (!SYM_GTEE_Check_APPL_BENE()) {
            return false;
        }
        if (!SYF_GTEE_CHK_COMM_END_DT()) {
            return false;
        }
        if (!SYF_GTEE_CHK_COMM_DT()) {
            return false;
        }

        return Cal_eloan_fields_GTEE();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CLS_FLG.value = 'NO';
        document.MAINFORM.SEND_TO_REF.value = 'NONREF';
        document.MAINFORM.ISSUE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "1";
        document.MAINFORM.GTEE_CLM_BAL.value = document.MAINFORM.GTEE_BAL.value;
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_MATURITY_DT();
        document.MAINFORM.X798_CRE_DATE.value = '';
        document.MAINFORM.X798_CRE_TIME.value = '';
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.name, "P");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE.name, "M");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.name, "P");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_COLLECT_CCY.name, "O");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE.name, "M");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.name, "O");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_ALL_BAL_CCY.name, "O");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_VALUE_DATE.name, "P");
        SYT_ChangeFldClass_New(document.MAINFORM.TMPL_BTN.name, "O");
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYM_GTEE_MPO_SW_FORM();
        SYT_ShowBlankRow('INDE', 1);
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_GTEE_Calculate_ISS_COMM_NEW();
            CHG_setAllChargeAt(1);
            CHG_allTrxChargeAt_onchange();
            SYM_GTEE_Chg_Calculate_COURIER_CHG();
            SYM_GTEE_Chg_Calculate_POST();
            SYM_GTEE_Chg_Calculate_SWIFT();
            SYM_GTEE_Chg_Calculate_Other();
            CHG_setAllCollCcy(SYS_LOCAL_CCY);
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            var GTEE_POST_CHG1 = Chg.Screen.getTrxChargeByCommCode('GTEE_POST_CHG');
            var GTEE_COURIER_CHG1 = Chg.Screen.getTrxChargeByCommCode('GTEE_COURIER_CHG');
            var GTEE_SWIFT_CHG1 = Chg.Screen.getTrxChargeByCommCode('GTEE_SWIFT_CHG');
            var GTEE_OTHER_CHG1 = Chg.Screen.getTrxChargeByCommCode('GTEE_OTHER_CHG');
            SYT_Set_TRXCCY2CHG();
            Chg.attchEvent('SYF_GTEE_Cal_SYT_CHG_PROTECT_Trx_Def_Charge_UnpaidCCY');
        }
        SYF_GTEE_ChangeFldClass();
        SYT_Cal_C_TRANS_CODE();
        SYF_GTEE_Cal_TEMP_N90_REF_20();
        SYF_GTEE_Cal_TEMP_N90_REF_21();
        SYT_DisableDivClass('B_div');
        SYT_CHG_PROTECT_Trx_Def_Charge_UnpaidCCY('GTEE_ISS_COMM');
        SYF_GTEE_MT798_FLG();
        SYF_GTEE_COUNTER_GTEE_FLG();
        SYF_GTEE_CAL_GOVERN_LAW();
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY.name, "P");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_LOCAL_CUST_PAY_RATE.name, "M");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.name, "P");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_COLLECT_CCY.name, "O");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FOREIGN_CUST_PAY_RATE.name, "M");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.name, "O");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_ALL_BAL_CCY.name, "O");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_VALUE_DATE.name, "P");
        //SWIFT2019
        document.MAINFORM.TEMP_APLB_CODE.value = '/' + document.MAINFORM.APLB_RULE.value + '/';
        CHG_DefCharge_chargeAtOnchange();
        FLD_GTEE_EXPIRY_TYPE_onchange();
        FLD_GTEE_EXPIRY_TYPE_LOCAL_onchange();
        FLD_GTEE_AUTO_EXTEN_PERIOD_onchange();
        FLD_GTEE_DIARY_NARRATIVE_onchange();
        FLD_GTEE_SW_FORM_onchange();
        FLD_GTEE_DELIV_OF_ORIG_CODE_onchange();
        FLD_GTEE_DELIV_OF_ORIG_CODE_LOCAL_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_798_762 = function() {
    try {
        if (document.MAINFORM.SUB_MESS_TYPE.value == '762') {
            document.MAINFORM.X798_20_REF.value = document.MAINFORM.C_MAIN_REF.value;
            SYT_ChangeFldClass_New('X798_CUST_ADD', 'M');
            SYT_ChangeFldClass_New('X798_CUST_REF', 'M');
            // SYT_ChangeFldClass_New('X798_31S_DOC_DATE', 'O');
            // SYT_ChangeFldClass_New('X798_AMT_TYPE_39P', 'M');
            // SYT_ChangeFldClass_New('X798_VALI_TYPE_23B', 'M');
            SYT_ChangeFldClass_New('X798_23X_CODE', 'O');
            SYT_ChangeFldClass_New('X798_23X_NARR', 'O');
            SYT_ChangeFldClass_New('X798_29A_CUST_CONT', 'O');
            SYT_ChangeFldClass_New('X798_72C_B2C_INFO', 'O');
            SYT_ChangeFldClass_New('X798_49J_BENE_STATE', 'O');

            SYT_ChangeFldClass_New('X798_ADV_BK_REF_21P', 'M');
            // SYT_ChangeFldClass_New('X798_31C_ISSUE_DATE', 'P');
            // SYT_ChangeFldClass_New('X798_29D_BENE_CONTACT', 'P');
            // SYT_ChangeFldClass_New('X798_INSTRU_78B', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_CODE', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_PARTY', 'P');
            SYT_ChangeFldClass_New('X798_29P_PRO_BANK_IND', 'P');
            SYT_ChangeFldClass_New('X798_29U_LEAD_BANK_IND', 'P');
            // SYT_ChangeFldClass_New('ISSUE_BK_52_SW_ADD', 'O');
        } else if (document.MAINFORM.SUB_MESS_TYPE.value == '745') {
            document.MAINFORM.X798_20_REF.value = document.MAINFORM.C_MAIN_REF.value;
            SYT_ChangeFldClass_New('X798_CUST_ADD', 'M');
            SYT_ChangeFldClass_New('X798_ADV_BK_REF_21P', 'O');
            SYT_ChangeFldClass_New('X798_CUST_REF', 'O');
            // SYT_ChangeFldClass_New('X798_31C_ISSUE_DATE', 'M');
            SYT_ChangeFldClass_New('X798_29A_CUST_CONT', 'O');
            // SYT_ChangeFldClass_New('X798_29D_BENE_CONTACT', 'O');
            // SYT_ChangeFldClass_New('X798_INSTRU_78B', 'O');
            SYT_ChangeFldClass_New('X798_72C_B2C_INFO', 'O');
            SYT_ChangeFldClass_New('X798_23X_CODE', 'O');
            SYT_ChangeFldClass_New('X798_23X_NARR', 'O');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_CODE', 'O');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_PARTY', 'O');
            SYT_ChangeFldClass_New('X798_29P_PRO_BANK_IND', 'O');
            SYT_ChangeFldClass_New('X798_29U_LEAD_BANK_IND', 'O');
            // SYT_ChangeFldClass_New('X798_31S_DOC_DATE', 'P');
            // SYT_ChangeFldClass_New('X798_AMT_TYPE_39P', 'P');
            // SYT_ChangeFldClass_New('X798_VALI_TYPE_23B', 'P');
            SYT_ChangeFldClass_New('X798_49J_BENE_STATE', 'P');
            // SYT_ChangeFldClass_New('ISSUE_BK_52_SW_ADD', 'M');

        } else {
            SYT_ChangeFldClass_New('X798_20_REF', 'P');
            SYT_ChangeFldClass_New('X798_CUST_ADD', 'P');
            SYT_ChangeFldClass_New('X798_ADV_BK_REF_21P', 'P');
            SYT_ChangeFldClass_New('X798_CUST_REF', 'P');
            // SYT_ChangeFldClass_New('X798_31C_ISSUE_DATE', 'P');
            SYT_ChangeFldClass_New('X798_29A_CUST_CONT', 'P');
            // SYT_ChangeFldClass_New('X798_29D_BENE_CONTACT', 'P');
            // SYT_ChangeFldClass_New('X798_INSTRU_78B', 'P');
            SYT_ChangeFldClass_New('X798_72C_B2C_INFO', 'P');
            SYT_ChangeFldClass_New('X798_23X_CODE', 'P');
            SYT_ChangeFldClass_New('X798_23X_NARR', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_CODE', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_PARTY', 'P');
            SYT_ChangeFldClass_New('X798_29P_PRO_BANK_IND', 'P');
            SYT_ChangeFldClass_New('X798_29U_LEAD_BANK_IND', 'P');
            // SYT_ChangeFldClass_New('X798_31S_DOC_DATE', 'P');
            // SYT_ChangeFldClass_New('X798_AMT_TYPE_39P', 'P');
            // SYT_ChangeFldClass_New('X798_VALI_TYPE_23B', 'P');
            SYT_ChangeFldClass_New('X798_49J_BENE_STATE', 'P');

            // SYT_ChangeFldClass_New('ISSUE_BK_52_SW_ADD', 'P');



        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_GOVERN_LAW = function() {
    try {
        if (document.MAINFORM.GOVERN_LAW_CNTY_CODE.value != '') {
            document.MAINFORM.GOVERN_LAW.value = document.MAINFORM.GOVERN_LAW_CNTY_CODE.value + '/' + document.MAINFORM.TEMP_GOVERN_LAW.value;
        } else {
            document.MAINFORM.GOVERN_LAW.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_GOVERN_LAW_LOCAL = function() {
    try {
        if (document.MAINFORM.GOVERN_LAW_CNTY_CODE_LOCAL.value != '') {
            document.MAINFORM.GOVERN_LAW_LOCAL.value = document.MAINFORM.GOVERN_LAW_CNTY_CODE_LOCAL.value + '/' + document.MAINFORM.TEMP_GOVERN_LAW_LOCAL.value;
        } else {
            document.MAINFORM.GOVERN_LAW_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_COMM_DT = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
        if (COMM_DT < COMM_START_DT) {
            alert("Commission Date must be later than or equal to Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_COMM_END_DT = function() {
    try {
        var COMM_END_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_END_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_END_DT.value);
        if (COMM_END_DT < COMM_START_DT) {
            alert("Commission End Date must be later than Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_COUNTER_GTEE_FLG = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            EEHtml.getElementById('C').style.display = '';
            SYT_EnableDivClass('C_div');
            document.MAINFORM.TRANS_INDICATOR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'P');
            document.MAINFORM.DELIV_OF_ORIG_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'P');
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'P');
            document.MAINFORM.DELIVERY_TO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        } else {
            EEHtml.getElementById('C').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('C_div');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Advice_tab_TAG20 = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_COMM_START_DT = function() {
    try {
        //SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYF_GTEE_Calculate_ISS_COMM_NEW();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Charge = function() {
    try {
        SYM_GTEE_Chg_Screen();
        SYM_GTEE_Chg_calculate_Issue();
        SYM_GTEE_Chg_Calculate_POST();
        SYM_GTEE_Chg_Calculate_SWIFT();
        SYM_GTEE_Chg_Calculate_Other();
        SYM_GTEE_Chg_Calculate_COURIER_CHG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Charge_Appl = function() {
    try {
        if (document.MAINFORM.APPL_ID_BTN.value == "CUST") {
            SYS_GetCUBK('APPL_ID_CUST', document.MAINFORM.APPL_ID.name, 'SYF_GTEE_Cal_Charge');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Charge_Bene = function() {
    try {
        if (document.MAINFORM.BENE_ID_BTN.value == "CUST") {
            SYS_GetCUBK('BENE_ID_CUST', document.MAINFORM.BENE_ID.name, 'SYF_GTEE_Cal_Charge');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Confirm_FLG = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU' && document.MAINFORM.FORM_OF_UNDERTAKING.value == 'STBY') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'O');
        } else if (document.MAINFORM.FORM_OF_UNDERTAKING.value == 'DGAR') {
            document.MAINFORM.CONF_INSTR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
            document.MAINFORM.AVAL_WT_BK_NM.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
            document.MAINFORM.AVAL_WT_BK_ID.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL = function() {
    try {
        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_GTEE_BAL_LOCAL = function() {
    try {
        document.MAINFORM.GTEE_BAL_LOCAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY_LOCAL.value, document.MAINFORM.GTEE_AMT_LOCAL.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_SYT_CHG_PROTECT_Trx_Def_Charge_UnpaidCCY = function() {
    try {
        SYT_CHG_PROTECT_Trx_Def_Charge_UnpaidCCY('GTEE_ISS_COMM');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TEMP_N90_REF_20 = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TEMP_N90_REF_21 = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SEND_TO_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TOTAL_ISS_COMM = function() {
    try {
        var ISS_COMM; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        document.MAINFORM.COMM_CCY.value = ISS_COMM.getActiveCcy();
        SYT_ChangeFldClass_New('COMM_CCY', 'P');
        document.MAINFORM.TOTAL_ISS_COMM.value = ISS_COMM.getActiveAmt();
        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        unit_code = SYS_ORI_UNIT_CODE;
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                break;
            case 'All in Advance':
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                CHG_allTrxChargeAt_onchange();
                ISS_COMM.protectChargeAt();
                break;
            case 'Part in Advance':
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                document.MAINFORM.COMM_DT.value = '';
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.COMM_BAL.value = document.MAINFORM.TOTAL_ISS_COMM.value;
                ISS_COMM.protectChargeAt();
                break;
            case 'Weekly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_WEEK.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                SYF_GTEE_SET_NO_OF_PERIODS();
                SYM_GTEE_Cal_NXT_COMM_DT();
                document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    ncurrentcomm = ISS_COMM_WEEK.getActiveAmt();
                } else {
                    ncurrentcomm = 0;
                }
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(ncurrentcomm));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ncurrentcomm);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_MONTH.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    ncurrentcomm = ISS_COMM_MONTH.getActiveAmt();
                } else {
                    ncurrentcomm = 0;
                }
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(ncurrentcomm));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ncurrentcomm);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_QUARTER.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    ncurrentcomm = ISS_COMM_QUARTER.getActiveAmt();
                } else {
                    ncurrentcomm = 0;
                }
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(ncurrentcomm));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ncurrentcomm);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_HALF_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    ncurrentcomm = ISS_COMM_HALF_YEAR.getActiveAmt();
                } else {
                    ncurrentcomm = 0;
                }
                // document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(ncurrentcomm));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ncurrentcomm);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    ncurrentcomm = ISS_COMM_YEAR.getActiveAmt();
                } else {
                    ncurrentcomm = 0;
                }
                // document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(ncurrentcomm));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ncurrentcomm);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY2 = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                //ISS_COMM.protectChargeAt();
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.NXT_COMM_DT.value = '';
                //document.MAINFORM.COMM_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                //ISS_COMM.protectChargeAt();
                break;
            case 'Weekly':
                //ISS_COMM_WEEK.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_WEEK.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                //ISS_COMM_WEEK.protectChargeAt();
                break;
            case 'Monthly':
                //ISS_COMM_MONTH.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_MONTH.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '30',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                //ISS_COMM_MONTH.protectChargeAt();
                break;
            case 'Quarterly':
                //ISS_COMM_QUARTER.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_QUARTER.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '90',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                //ISS_COMM_QUARTER.protectChargeAt();
                break;
            case 'Half yearly':
                //ISS_COMM_HALF_YEAR.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_HALF_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '180',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                //ISS_COMM_HALF_YEAR.protectChargeAt();
                break;
            case 'Yearly':
                //ISS_COMM_YEAR.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //document.MAINFORM.COMM_DT.value =document.MAINFORM.COMM_START_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '365',document.MAINFORM.COMM_DT.name,'A','N','N');				
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                //ISS_COMM_YEAR.protectChargeAt();
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Calculate_ISS_COMM_NEW = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                //Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Weekly':
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                CHG_allTrxChargeAt_onchange();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                if (document.MAINFORM.EXPIRY_DT.value) {
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                }
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                if (document.MAINFORM.EXPIRY_DT.value) {
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                }
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                if (document.MAINFORM.EXPIRY_DT.value) {
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                }
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                if (document.MAINFORM.EXPIRY_DT.value) {
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                }
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                if (document.MAINFORM.EXPIRY_DT.value) {
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                }
                SYM_GTEE_Cal_COMM_DT();
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Calculate_ISS_COMM_NEW2 = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                // SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM();
                // SYF_GTEE_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Weekly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW();
                SYF_GTEE_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                    CHG_allTrxChargeAt_onchange();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                    CHG_allTrxChargeAt_onchange();
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_ChangeFldClass = function() {
    try {
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        //ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        //ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        //ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        //ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        //ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        //ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                SYT_ChangeFldClass_New('COMM_DT', 'B');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'B');
                SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'O');
                SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'O');
                break;
            case 'All in Advance':
                SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                SYT_ChangeFldClass_New('COMM_DT', 'B');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM.protectChargeFor();
                //ISS_COMM.protectChargeAt();
                //ISS_COMM._protectActiveAmt();
                //ISS_COMM._protectCollectAmt();			
                break;
            case 'Part in Advance':
                SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'M');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'M');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM.protectChargeFor();
                //ISS_COMM.protectChargeAt();
                //ISS_COMM._protectActiveAmt();
                //ISS_COMM._protectCollectAmt();			
                break;
            case 'Weekly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_WEEK.protectChargeFor();
                //ISS_COMM_WEEK.protectChargeAt();
                //ISS_COMM_WEEK._protectActiveAmt();
                //ISS_COMM_WEEK._protectCollectAmt();			
                break;
            case 'Monthly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_MONTH.protectChargeFor();
                //ISS_COMM_MONTH.protectChargeAt();
                //ISS_COMM_MONTH._protectActiveAmt();
                //ISS_COMM_MONTH._protectCollectAmt();			
                break;
            case 'Quarterly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_QUARTER.protectChargeFor();
                //ISS_COMM_QUARTER.protectChargeAt();
                //ISS_COMM_QUARTER._protectActiveAmt();
                //ISS_COMM_QUARTER._protectCollectAmt();			
                break;
            case 'Half yearly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_HALF_YEAR.protectChargeFor();
                //ISS_COMM_HALF_YEAR.protectChargeAt();
                //ISS_COMM_HALF_YEAR._protectActiveAmt();
                //ISS_COMM_HALF_YEAR._protectCollectAmt();			
                break;
            case 'Yearly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_YEAR.protectChargeFor();
                //ISS_COMM_YEAR.protectChargeAt();
                //ISS_COMM_YEAR._protectActiveAmt();
                //ISS_COMM_YEAR._protectCollectAmt();			
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_FOR_AMEND_DT = function() {
    try {
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Weekly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                SYF_GTEE_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_WEEK.protectChargeAt();
                break;
            case 'Monthly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                SYF_GTEE_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_MONTH.protectChargeAt();
                break;
            case 'Quarterly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                SYF_GTEE_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_QUARTER.protectChargeAt();
                break;
            case 'Half yearly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                SYF_GTEE_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_HALF_YEAR.protectChargeAt();
                break;
            case 'Yearly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                SYF_GTEE_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_YEAR.protectChargeAt();
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MT798_FLG = function() {
    try {
        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDivClass('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Part_In_Advance_Comm_Onchange = function() {
    try {
        var CURRENT_COMM; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var TOTAL_ISS_COMM; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (document.MAINFORM.CHG_POLICY.value == 'Part in Advance') {
            if (document.MAINFORM.CURRENT_COMM.value != 0) {
                CURRENT_COMM = SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                TOTAL_ISS_COMM = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value);
                if (CURRENT_COMM > TOTAL_ISS_COMM) {
                    alert("Current Commission should less than or equal to Total Issuance Commission");
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                } else {
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                }
            }
        }
        ISS_COMM.protectChargeFor();
        ISS_COMM.protectChargeAt();
        ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
        ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_SET_NO_OF_PERIODS = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var NO_OF_PERIODS; // Utility Auto Fix Comments
        NO_OF_PERIODS = SYS_BeInt(document.MAINFORM.NO_OF_PERIODS.value);
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
        if (COMM_DT > COMM_START_DT) {
            document.MAINFORM.NO_OF_PERIODS.value = 0;
        } else if (COMM_DT == COMM_START_DT) {
            document.MAINFORM.NO_OF_PERIODS.value = 1;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Set_ChargeAt = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);

        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Weekly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_MONTH.setChargeAt(1);
                } else {
                    ISS_COMM_MONTH.setChargeAt(0);
                }
                break;
            case 'Quarterly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_QUARTER.setChargeAt(1);
                } else {
                    ISS_COMM_QUARTER.setChargeAt(0);
                }
                break;
            case 'Half yearly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_HALF_YEAR.setChargeAt(1);
                } else {
                    ISS_COMM_HALF_YEAR.setChargeAt(0);
                }
                break;
            case 'Yearly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_YEAR.setChargeAt(1);
                } else {
                    ISS_COMM_YEAR.setChargeAt(0);
                }
                break;

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APLB_RULE_onchange = function() {
    try {
        SYM_GTEE_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APLB_RULE_LOCAL_onchange = function() {
    try {
        document.MAINFORM.TEMP_APLB_CODE_LOCAL.value = '/' + document.MAINFORM.APLB_RULE_LOCAL.value + '/';
        if (document.MAINFORM.APLB_RULE_LOCAL.value == 'OTHR') {
            document.MAINFORM.APLB_RULE_NARR_LOCAL.style.display = 'block';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR_LOCAL, 'M');
        } else {
            document.MAINFORM.APLB_RULE_NARR_LOCAL.value = '';
            document.MAINFORM.APLB_RULE_NARR_LOCAL.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR_LOCAL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLY_FLG_onchange = function() {
    try {
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_APPL_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED1_onchange = function() {
    try {
        SYM_GTEE_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function() {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_onchange = function() {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.APPL_ID.value == "") {
            SYM_GTEE_Cal_Clear_Appl_ID();
        } else {
            SYF_GTEE_Cal_Charge_Appl();
            SYM_GTEE_APPL_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_LOCAL_onchange = function() {
    try {
        SYM_GTEE_CAL_APPL_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function() {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function() {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_onchange = function() {
    try {
        var bk_acNo = document.MAINFORM.ASSET_ACNO.value;
        var cu_acNo = document.MAINFORM.LIAB_ACNO.value;
        if (!SYM_GTEE_ACNO_EQL(bk_acNo, cu_acNo)) {
            alert("Bank account number and Customer account number should not be same");
            document.MAINFORM.ASSET_ACNO.value = '';
            document.MAINFORM.LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_EXTEN_PERIOD_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_EXTEN_CODE_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'O');
        }
        
         if (document.MAINFORM.AUTO_EXTEN_CODE.value == 'ONEY'){
        	document.MAINFORM.AUTO_EXTEN_PERIOD.value = '';
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'P');
        }else if (document.MAINFORM.AUTO_EXTEN_CODE.value == 'OTHR'){
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'M');
        }else{
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_EXTEN_PERIOD_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_EXTEN_CODE_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL.value == ''&&document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == '') {
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'O');
        }
        
        if (document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == 'ONEY'){
        	document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL.value = '';
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'P');
        }else if (document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value == 'OTHR'){
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'M');
        }else{
        	SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_RENEW_onchange = function() {
    try {
        SYM_GTEE_Cal_FXD_EXPIRY();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_LOCAL_onchange = function() {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID_LOCAL', 'AVAL_WT_BK_ID_LOCAL');
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_NM_LOCAL_onchange = function() {
    try {
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_SW_ADD_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value = document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value + "XXX";
            }
        }
        SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_ID_LOCAL_onchange = function() {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID_LOCAL', 'ADV_THU_BK_ID_LOCAL');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_NM_LOCAL_onchange = function() {
    try {
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THU_BK_SW_ADD_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value.length == 11 || document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value.length == 8) {

            if (document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value.length == 8) {
                document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value = document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value + "XXX";
            }
        }
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CORR_MED_onchange = function() {
    try {
        SYM_GTEE_MPO_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function() {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_onchange = function() {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.BENE_ID.value == "") {
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else {
            SYF_GTEE_Cal_Charge_Bene();
            SYM_GTEE_BENE_ID_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_LOCAL_onchange = function() {
    try {
        SYM_GTEE_CAL_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function() {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function() {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function() {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function() {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function() {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function() {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function() {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_POLICY_onchange = function() {
    try {
        //SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYF_GTEE_Calculate_ISS_COMM_NEW();
        SYF_GTEE_ChangeFldClass();
        SYM_GTEE_Cal_NXT_COMM_DT();
        //SYF_GTEE_Set_ChargeAt();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_BAL_onchange = function() {
    try {
        document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_DT_onchange = function() {
    try {
        SYF_GTEE_CHK_COMM_DT();
        //SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY2();
        SYF_GTEE_Calculate_ISS_COMM_NEW2();
        SYM_GTEE_Cal_NXT_COMM_DT();
        //SYF_GTEE_Set_ChargeAt();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_END_DT_onchange = function() {
    try {
        SYF_GTEE_CHK_COMM_END_DT();
        SYF_GTEE_FOR_AMEND_DT();
        //SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYF_GTEE_Calculate_ISS_COMM_NEW();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_START_DT_onchange = function() {
    try {
        SYF_GTEE_CHK_COMM_END_DT();
        SYF_GTEE_CHK_COMM_DT();
        SYF_GTEE_FOR_AMEND_DT();
        //SYF_GTEE_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY();
        SYF_GTEE_Calculate_ISS_COMM_NEW();
        //SYF_GTEE_Set_ChargeAt();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CONF_INSTR_onchange = function() {
    try {
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' || document.MAINFORM.CONF_INSTR.value == 'MAY ADD') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CURRENT_COMM_onchange = function() {
    try {
        SYF_GTEE_Part_In_Advance_Comm_Onchange();
        document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.DELIVERY_TO_LOCAL.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE_LOCAL.value = document.MAINFORM.DELIVERY_TO_LOCAL.value;
            if (document.MAINFORM.DELIVERY_TO_LOCAL.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_LOCAL, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_LOCAL, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE_LOCAL.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_LOCAL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIV_OF_ORIG_CODE_onchange = function() {
    try {
        var code = document.MAINFORM.DELIV_OF_ORIG_CODE.value;
        if (code == 'OTHR'|| code == 'COUR') {
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'M');
        } else {
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIV_OF_ORIG_CODE_LOCAL_onchange = function() {
    try {
        var code = document.MAINFORM.DELIV_OF_ORIG_CODE_LOCAL.value;
        if (code == 'OTHR'|| code == 'COUR') {
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDER_LOCAL, 'M');
        } else {
            document.MAINFORM.DELIV_OF_ORIG_UNDER_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDER_LOCAL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function() {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_EXPIRY_DT_onchange = function() {
    try {
        SYM_GTEE_Cal_MATURITY_DT();
        SYM_GTEE_Check_EXPIRY_DT_ISSUE_DT();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_EXPIRY_TYPE_onchange = function() {
    try {
        var type = document.MAINFORM.EXPIRY_TYPE.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
        } else if (type == 'OPEN') {
            document.MAINFORM.EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
            document.MAINFORM.AUTO_EXTEN_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'P');
            document.MAINFORM.AUTO_EXTEN_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'P');

        }
        FLD_GTEE_AUTO_EXTEN_PERIOD_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_EXPIRY_TYPE_LOCAL_onchange = function() {
    try {
        var type = document.MAINFORM.EXPIRY_TYPE_LOCAL.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'M');
            document.MAINFORM.EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
        } else {
            document.MAINFORM.EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL, 'P');
            document.MAINFORM.AUTO_EXTEN_CODE_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE_LOCAL, 'P');
        }
        FLD_GTEE_AUTO_EXTEN_PERIOD_LOCAL_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FILE_23X_CODE_onchange = function() {
    try {
        if (document.MAINFORM.FILE_23X_CODE.value != '') {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '/' + document.MAINFORM.FILE_23X_CODE.value + '/';
        } else {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FORM_OF_UNDERTAKING_onchange = function() {
    try {
        SYF_GTEE_Cal_Confirm_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FORM_OF_UNDERTAKING_LOCAL_onchange = function() {
    try {
        var FORM = document.MAINFORM.FORM_OF_UNDERTAKING_LOCAL.value;
        if (FORM == 'DGAR' ||FORM == 'DEPU') {
            document.MAINFORM.AVAL_WT_BK_ID_LOCAL.value = '';
            document.MAINFORM.AVAL_WT_BK_NM_LOCAL.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD1_LOCAL.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD2_LOCAL.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD3_LOCAL.value = '';
            document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value = '';
            document.MAINFORM.AVAL_WT_BK_SW_TAG_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN_LOCAL, 'P');
        }else{
        	  SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN_LOCAL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GOVERN_LAW_CNTY_CODE_onchange = function() {
    try {
        SYF_GTEE_CAL_GOVERN_LAW();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GOVERN_LAW_CNTY_CODE_LOCAL_onchange = function() {
    try {
        SYF_GTEE_CAL_GOVERN_LAW_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_AMT_onchange = function() {
    try {
        if (document.MAINFORM.GTEE_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.GTEE_AMT.value = 0;
        }


        SYF_GTEE_Cal_GTEE_BAL();
        SYM_GTEE_Chg_calculate_Issue();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_AMT_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.GTEE_AMT_LOCAL.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.GTEE_AMT_LOCAL.value = 0;
        }
        SYF_GTEE_Cal_GTEE_BAL_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_CORR_MED_onchange = function() {
    try {
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function() {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
        /*
    if(SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
    JACK 0919 GTEE
    SYM_GTEE_Set_Risk_Party_Info();
    document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
    }
    */
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_LOCAL_onchange = function() {
    try {
        SYM_GTEE_CAL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function() {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function() {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_LOCAL_onchange = function() {
    try {
        SYM_GTEE_CAL_ISSUE_BK_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_SW_ADD_LOCAL_onchange = function() {
    try {
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_DT_onchange = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays <= 0) {
            alert('Expiry Date Must Be Later that Issue Date');
            document.MAINFORM.ISSUE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_LIAB_ACNO_onchange = function() {
    try {
        var bk_acNo = document.MAINFORM.ASSET_ACNO.value;
        var cu_acNo = document.MAINFORM.LIAB_ACNO.value;
        if (!SYM_GTEE_ACNO_EQL(bk_acNo, cu_acNo)) {
            alert("Bank account number and Customer account number should not be same");
            document.MAINFORM.ASSET_ACNO.value = '';
            document.MAINFORM.LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_PURP_OF_MESS_onchange = function() {
    try {
        SYF_GTEE_Cal_Confirm_FLG();
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            document.MAINFORM.TRANS_INDICATOR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'P');
            document.MAINFORM.DELIV_OF_ORIG_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'P');
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'P');
            document.MAINFORM.DELIVERY_TO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        } else if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU') {
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_REG_DT_onchange = function() {
    try {
        SYM_GTEE_REGISTER_DATE();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function() {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_CORR_MED_onchange = function() {
    try {
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function() {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function() {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_REF_onchange = function() {
    try {
        SYF_GTEE_Cal_TEMP_N90_REF_21();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function() {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_STAN_WORD_REQD_onchange = function() {
    try {
        if (document.MAINFORM.STAN_WORD_REQD.value == 'STND') {
            SYT_ChangeFldClass(document.MAINFORM.UNDERTAKING_TYPE_LOCAL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.STAN_WORD_REQD_LANG, 'O');
        } else {
            document.MAINFORM.UNDERTAKING_TYPE_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.UNDERTAKING_TYPE_LOCAL, 'P');
            document.MAINFORM.STAN_WORD_REQD_LANG.value = '';
            SYT_ChangeFldClass(document.MAINFORM.STAN_WORD_REQD_LANG, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SUB_MESS_TYPE_onchange = function() {
    try {
        SYF_GTEE_798_762();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SW_FORM_onchange = function() {
    try {
        SYM_GTEE_MPO_SW_FORM();
        SYM_GTEE_MPO_SIGNATURE();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_GOVERN_LAW_onchange = function() {
    try {
        SYF_GTEE_CAL_GOVERN_LAW();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_GOVERN_LAW_LOCAL_onchange = function() {
    try {
        SYF_GTEE_CAL_GOVERN_LAW_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_UNDERTAKING_TYPE_LOCAL_onchange = function() {
    try {
        if (document.MAINFORM.UNDERTAKING_TYPE_LOCAL.value != '') {
            document.MAINFORM.TEMP_UNTAKE_TYPE_LOCAL.value = '/' + document.MAINFORM.UNDERTAKING_TYPE_LOCAL.value + '/';
            if (document.MAINFORM.UNDERTAKING_TYPE_LOCAL.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.UNDERTAKING_TYPE_NARR_LOCAL, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.UNDERTAKING_TYPE_NARR_LOCAL, 'O');
            }
        } else {
            document.MAINFORM.TEMP_UNTAKE_TYPE_LOCAL.value = '';
            document.MAINFORM.UNDERTAKING_TYPE_NARR_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_VALID_FM_DT_onchange = function() {
    try {
        SYM_GTEE_Cal_COMM_START_DT();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function() {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_AC_MRGN_BTN_onclick = function() {
    try {
        /*var SQL; // Utility Auto Fix Comments
                SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
                SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_BTN_LOCAL_onclick = function() {
    try {
        SYM_GTEE_SQL_APPL_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_BTN_onclick = function() {
    try {
        /*var SQL; // Utility Auto Fix Comments
                SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
                SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ADD_BTN_LOCAL_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_BTN_onclick = function() {
    try {
        SYM_GTEE_SQL_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AVAL_WT_BK_ID_BTN_LOCAL_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ID_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_THRU_BK_ID_BTN_LOCAL_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function() {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_BTN_LOCAL_onclick = function() {
    try {
        SYM_GTEE_SQL_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function() {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function() {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton_onclick = function() {
    try {
        return SYS_InsertClause('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton2_onclick = function() {
    try {
        return SYS_InsertClause('GTEE_DETAILS_79');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton3_onclick = function() {
    try {
        return SYS_InsertClause('NARR_MAIL');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function() {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_BTN_LOCAL_onclick = function() {
    try {
        SYM_GTEE_SQL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_ID_BTN_LOCAL_onclick = function() {
    try {
        SYM_GTEE_SQL_ISSUE_BK_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SND_TO_ID_BANK_BTN_onclick = function() {
    try {
        SYM_GTEE_SEND_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TMPL_BTN_onclick = function() {
    try {
        //SYS_InqCUBK('GTEE_DETAILS');
        SYS_InqTemplate('GTEE_DETAILS');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function() {
    try {
        return SYS_InsertClause('CHARGES');
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}