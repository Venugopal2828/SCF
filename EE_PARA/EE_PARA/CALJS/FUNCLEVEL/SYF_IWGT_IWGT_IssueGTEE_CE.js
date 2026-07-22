var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CLS_FLG.value = 'NO';
        SYT_CLERK_ID();
        SYT_CHG_VOUCHER();
        SYT_LIAB_VOUCHER();
        document.MAINFORM.CURRNT_STATUS.value = "IssueInwardGtee";
        document.MAINFORM.NXT_STATUS.value = "Issued";
        document.MAINFORM.ORIGIN_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_BAL.value);
        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_IWGT_Check_EXPIRY_DT()) {
            return false;
        }
        if (!SYM_IWGT_Check_APPL_BENE()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        //document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        //document.MAINFORM.BANK_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;

        SYS_GetRefNo_S('IWGT', 'SYM_IWGT_setref');
        // SYF_IWGT_Cal_Incoming_Field();
        SYF_IWGT_CAL_SEND_TO_RECEIVER();
        SYT_ChangeFldClass_New('COMM_START_DT', 'B');
        //document.MAINFORM.AC_BK_SW_TAG.value = "";
        document.MAINFORM.TEMP_FURTHER_IDENTITY.value = "Issue";
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
        document.MAINFORM.REG_DT.value = SYS_DATE;
        FLD_IWGT_ISSUE_BK_ID_onchange();
        SYM_IWGT_ISSUE_BK();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*InitValues", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {
        document.MAINFORM.BANK_N90_REF_20.value = SYS_getValueFromMain('C_MAIN_REF');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*OnLoadTemplate", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        onChangeDiary();
        SYF_IWGT_Cal_APLB_RULE();
        SYM_IWGT_APLB_RULE();
        SYM_IWGT_Cal_Counter_Guarantee_Information();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();

        // SYM_IWGT_MPO_X760_DETL_77C();

        SYT_ShowBlankRow('APPL_BRCH_blankrow', 2);

        SYM_IWGT_Chg_Screen_local();
        Chg.Screen.mapForeignCust("APPL_ID", "APPL_NM", "GTEE_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_IWGT_HIDE_COMM_BY_CHG_POLICY();
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher - credit ccy
            SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher - mapping trx ccy to unpaid ccy
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189

            if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
                SYM_IWGT_Chg_Calculate_AdviceComm();

                if (document.MAINFORM.COUNTR_GTEE.value == 'Yes') {
                    SYM_IWGT_Chg_Calculate_IssComm();
                }
            }
            if (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') {
                SYM_IWGT_Chg_Calculate_IssComm();
            }
            SYM_IWGT_Chg_Calculate_Other();
            SYM_IWGT_Chg_Calculate_POST();
            SYM_IWGT_Chg_Calculate_SWIFT();
            SYM_IWGT_Chg_Calculate_courier();
            CHG_setAllChargeAt("1");
        }
        SYF_IWGT_COUNTER_GTEE_FLG();
        IWGT_APPL_BRCH_GTEE();
        lbi_IWGT_BENE_GTEE_IntFieldClass();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYM_IWGT_Cal_ADD_BUTTON();
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
        SYM_IWGT_MPO_APPL_CORR_MED();
        SYM_IWGT_MPO_BENE_CORR_MED();
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
        SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_CORR_MED, 'M');
        // SYF_IWGT_MPO_Incoming_Fields();


        SYT_ChangeFldClass_New("COMM_START_DT", 'P');
        SYT_ChangeFldClass_New("COMM_END_DT", 'P');
        SYT_ChangeFldClass_New("COMM_DT", 'P');
        SYT_ChangeFldClass_New("NXT_COMM_DT", 'P');

        SYM_IWGT_MPO_RCV_FM_BK_NM();
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'EC') {
            if (document.MAINFORM.CHG_POLICY.value == "Part in Advance") {
                SYT_ChangeFldClass_New("NXT_COMM_DT", "M");
                SYT_ChangeFldClass_New("COMM_DT", "M");
                SYT_ChangeFldClass_New("CURRENT_COMM", "M");
            }
        }

        CHG_DefCharge_chargeAtOnchange();
        SYF_IWGT_ChangeFldClass();
        SYF_IWGT_Risk_Show(); //20250221
        SYF_IWGT_Cal24E(); //20250221
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IWGT_AC_BK_SW_TAG = function() {
    try {
        if (document.MAINFORM.AC_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.AC_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_AC_BK_SW_TAG", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_SEND_TO_RECEIVER = function() {
    try {
        //Add by jane at 20090322
        CURRNT_STATUS = document.MAINFORM.CURRNT_STATUS.value;
        if (CURRNT_STATUS == 'RegisterInwardGuarantee') {
            document.MAINFORM.TEMP_TAG_72.value = document.MAINFORM.X760_BKTOBK_INFO72.value;
            document.MAINFORM.X760_BKTOBK_INFO72.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_CAL_SEND_TO_RECEIVER", e);
    }
}

csFuncLevelProto.SYF_IWGT_CHK_COMM_DT = function() {
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
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_CHK_COMM_DT", e);
    }
}

csFuncLevelProto.SYF_IWGT_CHK_COMM_END_DT = function() {
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
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_CHK_COMM_END_DT", e);
    }
}

csFuncLevelProto.SYF_IWGT_COUNTER_GTEE_FLG = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') {
            EEHtml.getElementById('K').style.display = '';
            SYT_EnableDivClass('K_div');
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
            document.MAINFORM.BENE_CUST_BK.value = 'Bank'; //Add on 20250218;
            document.MAINFORM.SEND_TO.value = 'Bank'; //Add on 20250218;
        } else {
            EEHtml.getElementById('K').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('K_div');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_COUNTER_GTEE_FLG", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal24E = function() {
    try {
        var code = document.MAINFORM.DELIV_OF_ORIG_CODE.value;
        if (code == 'OTHR' || code == 'COUR') {
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'M');
        } else {
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'P');
            document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal24E", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_APLB_RULE = function() {
    try {
        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.all.Applicable.style.visibility = 'visible';
            document.all.APLB_RULE_NARR.style.display = 'block';
        } else {
            document.all.Applicable.style.visibility = 'hidden';
            document.all.APLB_RULE_NARR.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal_APLB_RULE", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Charge_Calculate = function() {
    try {
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') {
            SYM_IWGT_Chg_Calculate_IssComm();
        }
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
            SYM_IWGT_Chg_Calculate_AdviceComm();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal_Charge_Calculate", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Confirm_FLG = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU' && document.MAINFORM.FORM_OF_UNDERTAKING.value == 'STBY') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'M');
			SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M');
			SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'M');
			SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'M');
        } else if (document.MAINFORM.FORM_OF_UNDERTAKING.value == 'DGAR') {
            document.MAINFORM.CONF_INSTR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
			SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
            document.MAINFORM.AVAL_WT_BK_NM.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
            document.MAINFORM.AVAL_WT_BK_ID.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal_Confirm_FLG", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Incoming_Field = function() {
    try {
        if (document.MAINFORM.CURRNT_STATUS.value == "RegisterInwardGuarantee") {
            document.MAINFORM.TEMP_DOC_REQ.value = document.MAINFORM.GTEE_DETAILS_79.value;
        }
        if (document.MAINFORM.CURRNT_STATUS.value == "ProcessMT760") {
            document.MAINFORM.X760_DETL_77C.value = document.MAINFORM.NON_STD_WORDNG.value;
        }
        document.MAINFORM.TEMP_TAG_72.value = document.MAINFORM.X760_BKTOBK_INFO72.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal_Incoming_Field", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_SEND_TO = function() {
    try {
        var BENE_CUST_BK = document.MAINFORM.BENE_CUST_BK.value;
        var SEND_TO = document.MAINFORM.SEND_TO.value;
        var BENE_NM = document.MAINFORM.BENE_NM.value;
        if (BENE_CUST_BK == 'Customer' && SEND_TO == 'Customer' && BENE_NM != '') {
            document.MAINFORM.SEND_TO_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.SEND_TO_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.SEND_TO_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.SEND_TO_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.SEND_TO_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            document.MAINFORM.SEND_TO_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
            document.MAINFORM.SEND_TO_REF.value = document.MAINFORM.BENE_REF.value;
            document.MAINFORM.SEND_TO_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
            document.MAINFORM.SEND_TO_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
            document.MAINFORM.SEND_TO_FAX.value = document.MAINFORM.BENE_FAX.value;
        } else {
            document.MAINFORM.SEND_TO_ID.value = '';
            document.MAINFORM.SEND_TO_NM.value = '';
            document.MAINFORM.SEND_TO_ADD1.value = '';
            document.MAINFORM.SEND_TO_ADD2.value = '';
            document.MAINFORM.SEND_TO_ADD3.value = '';
            document.MAINFORM.SEND_TO_MAIL_ADD.value = '';
            document.MAINFORM.SEND_TO_REF.value = '';
            document.MAINFORM.SEND_TO_CORR_MED.value = '';
            document.MAINFORM.SEND_TO_EMAIL.value = '';
            document.MAINFORM.SEND_TO_FAX.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal_SEND_TO", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_TOTAL_ISS_COMM = function() {
    try {
        var ADV_COMM; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM');
        ADV_COMM = Chg.Screen.getTrxChargeByCommCode('IWGT_ADV_COMM');
        document.MAINFORM.COMM_CCY.value = ISS_COMM.getActiveCcy();
        SYT_ChangeFldClass_New('COMM_CCY', 'P');
        document.MAINFORM.TOTAL_ISS_COMM.value = ISS_COMM.getActiveAmt() + ADV_COMM.getActiveAmt();
        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal_TOTAL_ISS_COMM", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_X768_DATE_30 = function() {
    try {
        if (document.MAINFORM.SEND_MT768_FLG.value == 'Y') {
            document.MAINFORM.X768_DATE_30.value = document.MAINFORM.INWARD_RCV_DT.value;
        } else {
            document.MAINFORM.X768_DATE_30.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Cal_X768_DATE_30", e);
    }
}

csFuncLevelProto.SYF_IWGT_Calculate_ISS_COMM_NEW = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM');
        unit_code = SYS_ORI_UNIT_CODE;
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("IWGT_ISS_COMM", "USD", "0");
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYT_ChangeFldClass(document.MAINFORM.NXT_COMM_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.CURRENT_COMM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.COMM_DT, 'M');
                break;
            case 'Weekly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_SET_NO_OF_PERIODS();
                SYM_IWGT_Cal_NXT_COMM_DT();
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_DT.value, '7', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Monthly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '30', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_SET_NO_OF_PERIODS();
                SYM_IWGT_Cal_NXT_COMM_DT();
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_DT.value, '30', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Quarterly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '90', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_IWGT_Cal_NXT_COMM_DT();
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_SET_NO_OF_PERIODS();
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_DT.value, '90', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '180', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_IWGT_Cal_NXT_COMM_DT();
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_SET_NO_OF_PERIODS();
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_DT.value, '180', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '365', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_IWGT_Cal_NXT_COMM_DT();
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_SET_NO_OF_PERIODS();
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_DT.value, '365', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Calculate_ISS_COMM_NEW", e);
    }
}

csFuncLevelProto.SYF_IWGT_Calculate_ISS_COMM_NEW2 = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                break;
            case 'All in advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                break;
            case 'Part in advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("IWGT_ISS_COMM", "USD", "0");
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                break;
            case 'Weekly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
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
                break;
            case 'Monthly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Calculate_ISS_COMM_NEW2", e);
    }
}

csFuncLevelProto.SYF_IWGT_ChangeFldClass = function() {
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
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','O');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','O');
                break;
            case 'All in advance':
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
            case 'Part in advance':
                SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                //SYT_ChangeFldClass_New('COMM_DT', 'M');
                //SYT_ChangeFldClass_New('NXT_COMM_DT', 'M');
                //SYT_ChangeFldClass_New('CURRENT_COMM', 'M');
                SYT_ChangeFldClass(document.MAINFORM.NXT_COMM_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.CURRENT_COMM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.COMM_DT, 'M');
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
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_ChangeFldClass", e);
    }
}

csFuncLevelProto.SYF_IWGT_Chk_INWARD_RCV_DT_REG_DT = function() {
    try {
        if (SYS_GetSubDays(document.MAINFORM.INWARD_RCV_DT.name, document.MAINFORM.REG_DT.name) > 0) {
            SYS_CheckError(document.MAINFORM.INWARD_RCV_DT, "Issue Date should not be early than Transaction Date!");
            document.MAINFORM.INWARD_RCV_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Chk_INWARD_RCV_DT_REG_DT", e);
    }
}

csFuncLevelProto.SYF_IWGT_FOR_AMEND_DT = function() {
    try {
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Weekly':
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_WEEK();
                SYF_IWGT_SET_NO_OF_PERIODS();
                //document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ISS_COMM_WEEK.getPayAmt());
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_WEEK.protectChargeAt();
                break;
            case 'Monthly':
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_MONTH();
                SYF_IWGT_SET_NO_OF_PERIODS();
                //document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ISS_COMM_MONTH.getPayAmt());
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_MONTH.protectChargeAt();
                break;
            case 'Quarterly':
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_QUARTER();
                SYF_IWGT_SET_NO_OF_PERIODS();
                //document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ISS_COMM_QUARTER.getPayAmt());
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_QUARTER.protectChargeAt();
                break;
            case 'Half yearly':
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_HALF_YEAR();
                SYF_IWGT_SET_NO_OF_PERIODS();
                //document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ISS_COMM_HALF_YEAR.getPayAmt());
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_HALF_YEAR.protectChargeAt();
                break;
            case 'Yearly':
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM_YEAR();
                SYF_IWGT_SET_NO_OF_PERIODS();
                //document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                //document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYS_FloatSubToString(SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value), SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value));
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, ISS_COMM_YEAR.getPayAmt());
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_YEAR.protectChargeAt();
                break;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_FOR_AMEND_DT", e);
    }
}

csFuncLevelProto.SYF_IWGT_FURTHER = function() {
    try {
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, 'P');
            document.MAINFORM.ASSET_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, 'P');
            document.MAINFORM.LIAB_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_FURTHER", e);
    }
}

csFuncLevelProto.SYF_IWGT_GTEE_AMT = function() {
    try {
        document.MAINFORM.GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_GTEE_AMT", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_Incoming_Fields = function() {
    try {
        if (document.MAINFORM.CURRNT_STATUS.value == "RegisterInwardGuarantee") {
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
            //SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'M');
        }
        if (document.MAINFORM.CURRNT_STATUS.value == "ProcessMT760") {
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'M');
            //SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_MPO_Incoming_Fields", e);
    }
}

csFuncLevelProto.SYF_IWGT_Part_In_Advance_Comm_Onchange = function() {
    try {
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('IWGT_ISS_COMM');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                break;
            case 'Part in Advance':
                // ISS_COMM.setChargeAt(0);
                //                    document.MAINFORM.NXT_COMM_DT.value = '';
                //                    document.MAINFORM.PERIOD.value = 0;
                //                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                //                    SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                //                    SYF_IWGT_Cal_TOTAL_ISS_COMM();
                //                    document.MAINFORM.CURRENT_COMM.value = 0;
                //                    Chg.Screen.setChargeValue("IWGT_ISS_COMM", "USD", "0");
                //                    document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0'; 

                ISS_COMM.setChargeAt(0);
                //document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_IWGT_Chg_Calculate_IWGT_ISS_COMM();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                //document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                Chg.Screen.setChargeValue("IWGT_ISS_COMM", "USD", document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';

                break;
            case 'Weekly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
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
                break;
            case 'Monthly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_IWGT_Calculate_IWGT_ISS_COMM_NEW();
                SYF_IWGT_Cal_TOTAL_ISS_COMM();
                SYF_IWGT_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value); // Utility Auto Fix Comments
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value); // Utility Auto Fix Comments
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Part_In_Advance_Comm_Onchange", e);
    }
}

csFuncLevelProto.SYF_IWGT_Risk_Show = function() {
    try {
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') {
            EEHtml.getElementById('G').style.display = '';
            SYT_EnableDivClass('G_div');
            document.MAINFORM.PURP_OF_MESS.value = "ACNF";
        } else {
            EEHtml.getElementById('G').style.display = 'none';
            SYT_DisableDivClass('G_div');
            document.MAINFORM.PURP_OF_MESS.value = "ADVI";
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_Risk_Show", e);
    }
}

csFuncLevelProto.SYF_IWGT_SET_NO_OF_PERIODS = function() {
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
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_SET_NO_OF_PERIODS", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*SYF_IWGT_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_WT_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_WT_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_WT_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value != "") {
            SYS_GetCUBK('ACCT_WITH_BK', 'AC_WT_BK_ID', 'SYM_IWGT_Cal_AC_BK_SW_TAG');
        }
        SYM_IWGT_Clear_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_WT_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_TLX.value = '';
            document.MAINFORM.ADV_BK_NOTES.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_FLG_onchange = function(event) {
    try {
        switch (document.MAINFORM.ADV_FLG.value) {
            case '2ADV':
                document.MAINFORM.ISSUE_BY.value = 'MT760';
				EEHtml.fireEvent(document.MAINFORM.ISSUE_BY, "onchange");
                document.MAINFORM.SW_FORM.value = 'MT760';
				EEHtml.fireEvent(document.MAINFORM.SW_FORM, "onchange");
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ID, 'M');
                break;
            case 'BENE':
                document.MAINFORM.ISSUE_BY.value = 'Mail';
                document.MAINFORM.SW_FORM.value = 'Mail';
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'O');
                SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ID, 'O');
                break;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_TLX.value = '';
            document.MAINFORM.ADV_THU_BK_NOTES.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_TAG_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_TAG.value == 'D') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'M');
        }
        if (document.MAINFORM.ADV_THU_BK_SW_TAG.value == 'A') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_SW_TAG_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APLB_RULE_onchange = function(event) {
    try {
        SYM_IWGT_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APLB_RULE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_CORR_MED1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_CUST_BK_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_EMAIL_1_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.APPL_EMAIL_1.value)) == true) {

            document.MAINFORM.APPL_EMAIL_1.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_EMAIL_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_onchange = function(event) {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.ASSET_ACNO.value)) == false) {
            document.MAINFORM.ASSET_ACNO.value = '';
        }
        if (SYM_IWGT_CheckAcno() == false) {
            document.MAINFORM.ASSET_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ASSET_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYF_IWGT_Cal_SEND_TO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYF_IWGT_Cal_SEND_TO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYF_IWGT_Cal_SEND_TO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
        SYF_IWGT_Cal_SEND_TO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_CUST_BK_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_EMAIL_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.BENE_EMAIL.value)) == true) {

            document.MAINFORM.BENE_EMAIL.value = '';
        }
        SYF_IWGT_Cal_SEND_TO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_EMAIL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function(event) {
    try {
        var obj; // Utility Auto Fix Comments
        SYM_IWGT_Cal_Bene_All();
        SYM_IWGT_Cal_ADD_BUTTON();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim") {
            obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
            if (obj) {
                SYM_IWGT_Chg_Screen_local();
                SYM_IWGT_Chg_Calculate_POST();
                SYM_IWGT_Chg_Calculate_SWIFT();
            }
        }
        SYF_IWGT_Cal_SEND_TO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYF_IWGT_Cal_SEND_TO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_AMT_MT768_onchange = function(event) {
    try {
        if (document.MAINFORM.CHG_AMT_MT768.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CHG_AMT_MT768.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_AMT_MT768_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
        var ChargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (ChargeFor == 'F') {
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
            CHG_allTrxChargeAt_onchange();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_POLICY_onchange = function(event) {
    try {
        SYF_IWGT_Calculate_ISS_COMM_NEW();
        SYF_IWGT_ChangeFldClass();
        //SYM_IWGT_Cal_NXT_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_POLICY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_COMM_BAL_onchange = function(event) {
    try {
        document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_COMM_BAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_COMM_DT_onchange = function(event) {
    try {
        SYF_IWGT_CHK_COMM_DT();
        SYF_IWGT_Calculate_ISS_COMM_NEW2();
        SYM_IWGT_Cal_NXT_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_COMM_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_COMM_END_DT_onchange = function(event) {
    try {
        SYF_IWGT_CHK_COMM_END_DT();
        SYF_IWGT_FOR_AMEND_DT();
        SYF_IWGT_Calculate_ISS_COMM_NEW();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_COMM_END_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_COMM_START_DT_onchange = function(event) {
    try {
        SYF_IWGT_CHK_COMM_END_DT();
        SYF_IWGT_CHK_COMM_DT();
        SYF_IWGT_FOR_AMEND_DT();
        SYF_IWGT_Calculate_ISS_COMM_NEW();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_COMM_START_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 11 || document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_INSTR_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM' || document.MAINFORM.CONF_INSTR.value == 'MAY ADD') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'O');
        } else {
            SYT_ClearFields("CONF_BK_NM,CONF_BK_ID,CONF_BK_ADD1,CONF_BK_ADD2,CONF_BK_ADD3,CONF_BK_SW_ADD");
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_SW_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_INSTR_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONTR_GTEE_EXP_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.CONTR_GTEE_EXP.name) > 0) {
            alert("CG Date can't accept more than  Expiry  Date!");
            document.MAINFORM.CONTR_GTEE_EXP.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONTR_GTEE_EXP_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_COUNTR_GTEE_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Counter_Guarantee_Information();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_COUNTR_GTEE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CURRENT_COMM_onchange = function(event) {
    try {
        var CURRENT = SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
        var TOTALISS = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value);
        if (CURRENT > TOTALISS) {

            document.MAINFORM.CURRENT_COMM.value = "0";
            document.MAINFORM.COMM_BAL.value = "0";

        } else {
            SYF_IWGT_Part_In_Advance_Comm_Onchange();
            document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CURRENT_COMM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO.value + '/';
            if (document.MAINFORM.DELIVERY_TO.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_DELIVERY_TO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_AMD_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO_AMD_CODE.value + '/';
            if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_DELIVERY_TO_AMD_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIV_OF_ORIG_CODE_onchange = function(event) {
    try {
        SYF_IWGT_Cal24E();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_DELIV_OF_ORIG_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DET_CHG_MT768_onchange = function(event) {
    try {
        if (document.MAINFORM.DET_CHG_MT768.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CCY_MT768, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CHG_AMT_MT768, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CCY_MT768, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_AMT_MT768, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_DET_CHG_MT768_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_EXPIRY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_TYPE_onchange = function(event) {
    try {
        var type = document.MAINFORM.EXPIRY_TYPE.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'M');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
        } else if (type == 'OPEN') {
            document.MAINFORM.EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT, 'P');
            document.MAINFORM.EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND, 'P');
            document.MAINFORM.AUTO_EXTEN_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_CODE, 'P');
            document.MAINFORM.AUTO_EXTEN_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF, 'P');
            document.MAINFORM.AUTO_EXTEN_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT, 'P');
            document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_PERIOD, 'P');

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_EXPIRY_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_TYPE_LOCAL_onchange = function(event) {
    try {
        var type = document.MAINFORM.EXPIRY_TYPE_LOCAL.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'M');
            document.MAINFORM.EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_PERIOD_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_NOTIF_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AUTO_EXTEN_EXPIRY_DT_LOCAL, 'P');
        } else {
            document.MAINFORM.EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_COND_LOCAL, 'P');
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
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_EXPIRY_TYPE_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_FILE_23X_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.FILE_23X_CODE.value != '') {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '/' + document.MAINFORM.FILE_23X_CODE.value + '/';
        } else {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_FILE_23X_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_FORM_OF_UNDERTAKING_onchange = function(event) {
    try {
        if (document.MAINFORM.FORM_OF_UNDERTAKING.value == 'STBY') {
            document.MAINFORM.GTEE_TYPE.value = 'Standby';
        }
        SYF_IWGT_Cal_Confirm_FLG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_FORM_OF_UNDERTAKING_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_AMT_onchange = function(event) {
    try {
        // if (document.MAINFORM.GTEE_AMT.value < 0) {
        //                                alert("The amount field do not accept negative values");
        //                                document.MAINFORM.GTEE_AMT.value = 0;
        //                            }
        if (SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) < 0) {
            alert("The Guarantee amount field should not accept negative values!");
            document.MAINFORM.GTEE_AMT.value = 0;
        }


        SYF_IWGT_GTEE_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_GTEE_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_AMT_LOCAL_onchange = function(event) {
    try {
        document.MAINFORM.GTEE_BAL_LOCAL.value = document.MAINFORM.GTEE_AMT_LOCAL.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_GTEE_AMT_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_BAL_onchange = function(event) {
    try {
        SYF_IWGT_Cal_Charge_Calculate();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_GTEE_BAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_CCY_onchange = function(event) {
    try {
        SYF_IWGT_Cal_Charge_Calculate();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_GTEE_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ID_BTN_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_SQL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_INDEMN_ID_BTN_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_INDEMN_ID_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_CAL_INDEMN_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_INDEMN_ID_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function(event) {
    try {
        SYF_IWGT_Chk_INWARD_RCV_DT_REG_DT();
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_INWARD_RCV_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_SEND_BANK_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ISSUE_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_ID_onchange = function(event) {
    try {
        //SYS_GetCUBK('ISS_BK_ID', 'ISSUE_BK_ID');
        SYM_IWGT_ISSUE_BK();
        //SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ISSUE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_ID_LOCAL_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_ID_LOCAL.value == "") {
            document.MAINFORM.ISSUE_BK_NM_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD1_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD2_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD3_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value = '';
            SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL(); //added
            SYM_IWGT_CAL_ISSUE_BK_ID_back_LOCAL();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID_LOCAL', 'ISSUE_BK_ID_LOCAL', 'SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL', 'SYM_IWGT_CAL_ISSUE_BK_ID_back_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ISSUE_BK_ID_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BK_SW_ADD_LOCAL_onchange = function(event) {
    try {
        SYM_IWGT_CHK_ISSUE_BK_SW_TAG_LOCAL();
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value = document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ISSUE_BK_SW_ADD_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISSUE_BY_onchange = function(event) {
    try {
        //var GTEE_DETAILS_79;
        //    switch (document.MAINFORM.ISSUE_BY.value) {
        //        case 'Mail':
        //            SYT_ChangeFldClass_New('NARR_MAIL', 'M');
        //            break;
        //        case 'Fax':
        //            SYT_ChangeFldClass_New('NARR_MAIL', 'M');
        //            break;
        //        case 'Email':
        //            SYT_ChangeFldClass_New('NARR_MAIL', 'M');
        //            break;
        //            //case 'None':
        //            //    SYT_ChangeFldClass_New('NARR_MAIL', 'P');
        //            //break;
        //        case 'SWIFT':
        //            SYT_ChangeFldClass_New('NARR_MAIL', 'P');
        //            break;
        //    }

        var adv_to = document.MAINFORM.ADV_FLG.value;

        if (adv_to == 'BENE' && (document.MAINFORM.ISSUE_BY.value != 'Mail' && document.MAINFORM.ISSUE_BY.value != 'Other')) {
            alert("Advise by can't be MTXXX!");
            document.MAINFORM.ISSUE_BY.value = '';
            return false;
        }
        switch (document.MAINFORM.ISSUE_BY.value) {
            case 'MT760':
                SYT_ChangeFldClass_New('GTEE_DETAILS', 'M');

                break;
            case 'Mail':
                SYT_ChangeFldClass_New('NARR_MAIL', 'M');
                SYT_ChangeFldClass_New('GTEE_DETAILS', 'O');
                SYT_ClearFields("GTEE_DETAILS");
                break;
            case 'MT799':
                SYT_ChangeFldClass_New('GTEE_DETAILS_79', 'O');
                SYT_ChangeFldClass_New('GTEE_DETAILS', 'O');
                SYT_ClearFields("GTEE_DETAILS");
                break;
            case 'MT199':
                SYT_ChangeFldClass_New('GTEE_DETAILS_79', 'O');
                SYT_ChangeFldClass_New('GTEE_DETAILS', 'O');
                SYT_ClearFields("GTEE_DETAILS");
                break;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ISSUE_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_LIAB_ACNO_onchange = function(event) {
    try {
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.LIAB_ACNO.value)) == false) {
            document.MAINFORM.LIAB_ACNO.value = '';
        }
        if (SYM_IWGT_CheckAcno() == false) {
            document.MAINFORM.LIAB_ACNO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_LIAB_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_MTHD_OF_ISS_onchange = function(event) {
    try {
        SYF_IWGT_Cal_Charge_Calculate();
        SYF_IWGT_Risk_Show(); //20250221 for suang;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_MTHD_OF_ISS_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_NEW_Bene_All();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_NEW_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_NEW_BENE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
        SYM_IWGT_Cal_NEW_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_NEW_BENE_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_PURP_OF_MESS_onchange = function(event) {
    try {
        SYF_IWGT_COUNTER_GTEE_FLG();
        SYF_IWGT_Cal_Confirm_FLG();
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
            document.MAINFORM.SW_FORM.value = 'MT760'; // add on 20250218;
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'O');
            document.MAINFORM.BENE_CUST_BK.value = 'Bank'; //Add on 20250218;
            document.MAINFORM.SEND_TO.value = 'Bank'; //Add on 20250218;
        } else if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU') {
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
            document.MAINFORM.SW_FORM.value = 'Mail'; // add on 20250218;
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'M');
            document.MAINFORM.SEND_TO.value = 'Customer'; //Add on 20250218;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRANS_INDICATOR, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDERTAKING, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.UNDERLYING_TRANS_DETAILS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_CODE, 'O');
            document.MAINFORM.SW_FORM.value = 'MT760'; // add on 20250218;
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'O');

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_PURP_OF_MESS_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_RCV_FM_BK_CORR_MED();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee" || SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {

            SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_EMAIL_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.RCV_FM_BK_EMAIL.value)) == true) {

            document.MAINFORM.RCV_FM_BK_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_EMAIL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_MT768_FLG_onchange = function(event) {
    try {
        SYF_IWGT_Cal_X768_DATE_30();
        SYM_IWGT_MPO_X768_DATE_30();
        SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_MT768_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
            SYM_IWGT_MPO_AMD_DTL_OUT767();

        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee") {
            SYM_IWGT_MPO_X760_DETL_77C();
        }
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_EMAIL_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.SEND_TO_EMAIL.value)) == true) {

            document.MAINFORM.SEND_TO_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_EMAIL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_MAIL_ADD_ORDERNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_STAN_WORD_REQD_onchange = function(event) {
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
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_STAN_WORD_REQD_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_SW_FORM_onchange = function(event) {
    try {
if (document.MAINFORM.SW_FORM.value == 'MT760') {
    SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS, 'M');
    SYT_ChangeFldClass(document.MAINFORM.ClauseButton, 'M');
    SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
    SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
    document.MAINFORM.GTEE_DETAILS_79.value = "";
    document.MAINFORM.NARR_MAIL.value = "";
    SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
    SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
    SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'O');
} else {
    SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS, 'P');
    SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'P');
    document.MAINFORM.BK_TO_BK_INFO.value = '';
    document.MAINFORM.GTEE_DETAILS.value = '';
    SYT_ChangeFldClass(document.MAINFORM.ClauseButton, 'P');
    if (document.MAINFORM.SW_FORM.value == "Mail") {
        SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'M');
        SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'M');
        SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
        document.MAINFORM.GTEE_DETAILS_79.value = "";
        SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
    } else if (document.MAINFORM.SW_FORM.value == " ") {
        SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
    } else {
        document.MAINFORM.NARR_MAIL.value = "";
        SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'M');
        SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'M');
    }
}
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SW_FORM_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_UNDERTAKING_TYPE_LOCAL_onchange = function(event) {
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
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_UNDERTAKING_TYPE_LOCAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_AC_WT_BK_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_WT_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_NM_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_AC_WT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AC_WT_BK_NM_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //
        //                    var SQL="C_CUST_ID='liability' AND C_CURRENCY = '" + SYS_LOCAL_CCY+ "' AND C_AC_IDENTIFIER='C'";
        //                    SYS_InqCUBK_Sql('LIAB_ACNO' ,SQL);
        //                    
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_AC_MRGN_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_APPL_MAIL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //var SQL; // Utility Auto Fix Comments
        //                            SQL = "C_CUST_ID='liability' AND C_CURRENCY = '" + SYS_LOCAL_CCY + "' AND C_AC_IDENTIFIER<>'C'";
        //                            SYS_InqCUBK_Sql('ASSET_ACNO', SQL);
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ASSET_ACNO_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_AVAL_WT_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_BENE_MAIL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_CONF_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_ISS_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISS_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_ISS_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_NEW_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_NEW_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_TEMP_DOC_REQ_CLAUSE_BT_onclick = function(event) {
    try {
        return SYS_InsertClause("TEMP_DOC_REQ");
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_TEMP_DOC_REQ_CLAUSE_BT_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_IssueGTEE_CE.js*FLD_IWGT_view_1_onclick", e);
    }
}