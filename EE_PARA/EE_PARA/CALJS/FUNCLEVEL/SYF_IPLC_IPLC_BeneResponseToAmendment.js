var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_CAL_Temp_Tolerance = function() {
    try {

        var NEG_TOL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var TOL; // Utility Auto Fix Comments
        var nNEG_TOL; // Utility Auto Fix Comments
        var nPOS_TOL; // Utility Auto Fix Comments
        POS_TOL = document.MAINFORM.NEW_POS_TOL.value;
        NEG_TOL = document.MAINFORM.NEW_NEG_TOL.value;



        if ((POS_TOL != '' || POS_TOL != 0) || (NEG_TOL != '' || NEG_TOL != 0)) {
            if (POS_TOL < 10) {
                nPOS_TOL = '0' + POS_TOL;
            } else {
                nPOS_TOL = POS_TOL;
            }
            if (NEG_TOL < 10) {
                nNEG_TOL = '0' + NEG_TOL;
            } else {
                nNEG_TOL = NEG_TOL;
            }
            TOL = nPOS_TOL + '/' + nNEG_TOL;
        }
        if ((POS_TOL == '' || POS_TOL == 0) && (NEG_TOL == '' || NEG_TOL == 0)) {
            TOL = '';
        }
        document.MAINFORM.TEMP_TAG_39A.value = TOL;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_CAL_Temp_Tolerance", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*CancelCheck", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_ADV_BK_SW = function() {
    try {

        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_ADV_BK_SW", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_APLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            document.MAINFORM.APLB_RULE_NARR.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, "P"); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.APLB_RULE_NARR.style.visibility = "hidden"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_APLB_RULE", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_EXPIRY_PLC = function() {
    try {

        if (document.MAINFORM.EXPIRY_PLC.value == 'Other') {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "visible"; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, "P"); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "hidden"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_EXPIRY_PLC", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_NEW_EXPIRY_PLC = function() {
    try {

        if (document.MAINFORM.NEW_EXPIRY_PLC.value == 'Other') {
            document.MAINFORM.NEW_EXPIRY_PLC_NA.style.visibility = "visible"; // Utility Auto Fix Comments
        } else {
            document.MAINFORM.NEW_EXPIRY_PLC_NA.style.visibility = "hidden"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_NEW_EXPIRY_PLC", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_NEW_PARTIAL_SHIP = function() {
    try {

        if (document.MAINFORM.NEW_PARTIAL_SHIP.value == 'OTHER') {
            document.MAINFORM.NEW_PARTIAL_SHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.NEW_PARTIAL_SHIP_NARR.style.visibility = 'hidden';
            document.MAINFORM.NEW_PARTIAL_SHIP_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_NEW_PARTIAL_SHIP", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_NEW_TNSHIP = function() {
    try {

        if (document.MAINFORM.NEW_TNSHIP.value == 'OTHER') {
            document.MAINFORM.NEW_TNSHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.NEW_TNSHIP_NARR.style.visibility = 'hidden';

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_NEW_TNSHIP", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_PARTIAL_SHIP = function() {
    try {

        if (document.MAINFORM.PARTIAL_SHIP.value == 'OTHER') {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_PARTIAL_SHIP", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_TNSHIP = function() {
    try {

        if (document.MAINFORM.TNSHIP.value == 'OTHER') {
            document.MAINFORM.TNSHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.TNSHIP_NARR.style.visibility = 'hidden';

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_TNSHIP", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.NXT_STATUS.value = 'AmdLC';
        SYF_IPLC_CAL_Temp_Tolerance();
        SYM_IPLC_CAL_Temp_Amount_AMD();
        SYM_IPLC_CAL_Temp_fields_AMD();
        SYM_IPLC_CAL_Temp_AMT_AMD_SWIFT();
        // Add by jane for Liability Voucher
        SYT_LIAB_VOUCHER();

        Cal_MSG_TYPE();

        document.MAINFORM.ACCEPT_REJECT.value = document.MAINFORM.BENE_CONS_FLG.value;


        document.MAINFORM.CURRNT_STATUS.value = 'Beneficiary Responsed';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NEW_BENE_CORR_MED.value = "None"; // Utility Auto Fix Comments
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.CURRNT_STATUS.value = '';
        document.MAINFORM.NEW_BENE_LANG.value = 'English';
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.ADV_BK_REF.value;
        document.MAINFORM.BENE_CONS_DT.value = SYS_BUSI_DATE;
        SYM_IPLC_INIT_FOR_DT();
        SYM_IPLC_CAL_TEMP_LIAB_ACNO();
        SYF_IPLC_CAL_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_IPLC_MT798_FLAG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('N').style.display = '';
            SYT_EnableDivClass('N_div');
        } else {
            EEHtml.getElementById('N').style.display = 'none';
            SYT_DisableDiv('N_div');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_MT798_FLAG", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //notes
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYM_IPLC_CAL_ADV_BK_ID_back();
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        SYM_IPLC_CAL_APPL_BK_ID_back();
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        SYM_IPLC_CAL_REIM_BK_ID_back();
        SYM_IPLC_Cal_NEW_BENE_ID_back();
        SYF_IPLC_Change_SameAsApplicant();
        //Visibility
        SYF_IPLC_Change_APLB_RULE();
        SYF_IPLC_Change_EXPIRY_PLC();
        SYF_IPLC_Change_NEW_EXPIRY_PLC();
        SYF_IPLC_Change_NEW_PARTIAL_SHIP();
        SYF_IPLC_Change_NEW_TNSHIP();
        SYF_IPLC_Change_PARTIAL_SHIP();
        SYF_IPLC_Change_TNSHIP();
        SYF_IPLC_Change_ADV_BK_SW();
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
        SYM_IPLC_CHK_Bank_Reference();

        SYM_IPLC_Alert_SYN_FLG();
        SYF_IPLC_MT798_FLAG();


        SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_AUTH_REQ, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, 'P');
        SYT_ChangeFldClass_New('SAME_AS_APPL_FLG', 'O');
        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('C_div');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*editRecordCheck", e);
    }
}

csFuncLevelProto.SYF_IPLC_getDOdata_AdviceForBankCust = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYS_GetDataForDO_S("AdviceForBankCust", 'N', false);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_NEW_LC_BAL = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var LC_BAL; // Utility Auto Fix Comments
        var NEW_LC_AMT; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var lc_bal_new; // Utility Auto Fix Comments
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        POS_TOL = SYS_BeInt(document.MAINFORM.NEW_POS_TOL.value);
        NEW_LC_AMT = LC_AMT + INC_AMT - DEC_AMT;
        lc_bal_new = LC_BAL + INC_AMT - DEC_AMT;
        NEW_LC_BAL = NEW_LC_AMT * (1 + POS_TOL / 100);
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_AMT);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, "onchange");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_CAL_NEW_LC_BAL", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_SameAsApplicant = function() {
    try {

        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD3, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_MAIL_ADD, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_REF, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_LANG, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_CORR_MED, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_EMAIL, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_FAX, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_AC_OFF_CODE, "P");
            SYT_DisableField(document.MAINFORM.FORACOF_ID_BTN);
            SYT_DisableField(document.MAINFORM.FORACOF_ADD_BTN);
            SYT_DisableField(document.MAINFORM.FORACOF_POST_ADD_BTN);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_NM, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_REF, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_LANG, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_CORR_MED, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_EMAIL, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_FAX, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_AC_OFF_CODE, "O");
            SYT_EnableFields(document.MAINFORM.FORACOF_ID_BTN);
            SYT_EnableFields(document.MAINFORM.FORACOF_ADD_BTN);
            SYT_EnableFields(document.MAINFORM.FORACOF_POST_ADD_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Change_SameAsApplicant", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_SameAsApplicant_2 = function() {
    try {

        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'Yes') {
            document.MAINFORM.FORACOF_ID.value = document.MAINFORM.APPL_ID.value;
            document.MAINFORM.FORACOF_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.FORACOF_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.FORACOF_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.FORACOF_ADD3.value = document.MAINFORM.APPL_ADD3.value;
            document.MAINFORM.FORACOF_MAIL_ADD.value = document.MAINFORM.APPL_MAIL_ADD.value;
            document.MAINFORM.FORACOF_REF.value = document.MAINFORM.APPL_REF.value;
            document.MAINFORM.FORACOF_LANG.value = document.MAINFORM.APPL_LANG.value;
            document.MAINFORM.FORACOF_CORR_MED.value = document.MAINFORM.APPL_CORR_MED.value;
            document.MAINFORM.FORACOF_EMAIL.value = document.MAINFORM.APPL_EMAIL.value;
            document.MAINFORM.FORACOF_FAX.value = document.MAINFORM.APPL_FAX.value;
            document.MAINFORM.FORACOF_AC_OFF_CODE.value = document.MAINFORM.AC_OFFICER_CODE.value;
        } else {
            document.MAINFORM.FORACOF_ID.value = '';
            document.MAINFORM.FORACOF_NM.value = '';
            document.MAINFORM.FORACOF_ADD1.value = '';
            document.MAINFORM.FORACOF_ADD2.value = '';
            document.MAINFORM.FORACOF_ADD3.value = '';
            document.MAINFORM.FORACOF_MAIL_ADD.value = '';
            document.MAINFORM.FORACOF_REF.value = '';
            document.MAINFORM.FORACOF_LANG.value = '';
            document.MAINFORM.FORACOF_CORR_MED.value = '';
            document.MAINFORM.FORACOF_EMAIL.value = '';
            document.MAINFORM.FORACOF_FAX.value = '';
            document.MAINFORM.FORACOF_AC_OFF_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*SYF_IPLC_Cal_SameAsApplicant_2", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        SYF_IPLC_Change_ADV_BK_SW();
        SYM_IPLC_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.ADV_BK_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_SQL_ADV_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.ADV_THU_BK_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_SQL_ADV_THU_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_Change_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APLB_RULE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_IPLC_MT798_FLAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPLY_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.APPL_BK_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
        SYM_IPLC_SQL_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_APPL_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_BENE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_CONF_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_CONF_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_CONF_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_Change_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_EXPIRY_PLC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_FORACOF_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_FORACOF_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_FORACOF_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_FORACOF_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ACNO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_NEW_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_NEW_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.NEW_BENE_CORR_MED, 'onchange'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_NEW_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_BENE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_Change_NEW_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_EXPIRY_PLC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_IPLC_Change_NEW_PARTIAL_SHIP();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_NEW_PARTIAL_SHIP_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_AUTH_REQ_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_AUTH_REQ_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.REIM_BK_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_REIM_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
        SYM_IPLC_SQL_REIM_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_REIM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Change_SameAsApplicant();
        SYF_IPLC_Cal_SameAsApplicant_2();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_SAME_AS_APPL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_BeneResponseToAmendment.js*FLD_IPLC_view_1_onclick", e);
    }
}