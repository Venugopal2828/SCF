var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_New_Expiry_Date = function() {
    try {

        var sSubdays; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_DATE3.value = SYS_BUSI_DATE;
        if (document.MAINFORM.NEW_EXPIRY_DT.value < document.MAINFORM.EXPIRY_DT.value) {
            sSubdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE3.name, document.MAINFORM.NEW_EXPIRY_DT.name);
            if (sSubdays < 0) {
                alert('New Expiry Date should be later than System Date!');
                document.MAINFORM.NEW_EXPIRY_DT.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.AMD_DT.value = SYS_DATE;
        document.MAINFORM.BENE_LANG.value = 'English';
        document.MAINFORM.BENE_CORR_MED.value = 'None';
        document.MAINFORM.NEW_BENE_CORR_MED.value = 'None';
        document.MAINFORM.NEW_BENE_LANG.value = 'English';
        document.MAINFORM.CONF_INSTR.value = 'WITHOUT';
        document.MAINFORM.REIM_BK_AUTH_REQ.value = 'No';
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_REG_LC_AMD';
        document.MAINFORM.NXT_STATUS.value = '';
        SYM_IPLC_INIT_FOR_DT();
        //for new amd
        document.MAINFORM.NEW_EXPIRY_PLC.value = '';
        document.MAINFORM.INC_AMT.value = 0;
        document.MAINFORM.DEC_AMT.value = 0;
        document.MAINFORM.DETRMNTL_FLG.value = '';
        document.MAINFORM.NEW_EXPIRY_DT.value = '';
        document.MAINFORM.NEW_EXPIRY_PLC_NA.value = '';
        document.MAINFORM.NEW_ADDIT_COV_AMT.value = '';
        SYF_IPLC_Cal_NO_OF_AMD();
        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        document.MAINFORM.DETRMNTL_FLG.value = "No";
        document.MAINFORM.NEW_AMT_SPEC.value = document.MAINFORM.AMT_SPEC.value;
        //SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "O");
        document.MAINFORM.NEW_BENE_ID.value = document.MAINFORM.BENE_ID.value;
        document.MAINFORM.NEW_BENE_NM.value = document.MAINFORM.BENE_NM.value;
        document.MAINFORM.NEW_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        document.MAINFORM.NEW_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
        document.MAINFORM.NEW_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        document.MAINFORM.NEW_BENE_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
        document.MAINFORM.NEW_BENE_REF.value = document.MAINFORM.BENE_REF.value;
        document.MAINFORM.NEW_BENE_ACNO.value = document.MAINFORM.BENE_AC_NO.value;
        document.MAINFORM.NEW_BENE_LANG.value = document.MAINFORM.BENE_LANG.value;
        document.MAINFORM.NEW_BENE_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
        document.MAINFORM.NEW_BENE_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
        document.MAINFORM.NEW_BENE_FAX.value = document.MAINFORM.BENE_FAX.value;
        document.MAINFORM.NEW_BENE_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
        document.MAINFORM.NEW_LC_AMT.value = document.MAINFORM.LC_AMT.value;
        document.MAINFORM.NEW_LC_BAL.value = document.MAINFORM.LC_BAL.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_APLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            document.MAINFORM.APLB_RULE_NARR.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'M');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'O');
            document.MAINFORM.APLB_RULE_NARR.value = '';
            document.MAINFORM.APLB_RULE_NARR.style.visibility = "hidden"; // Utility Auto Fix Comments

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_EXPIRY_PLC = function() {
    try {

        if (document.MAINFORM.EXPIRY_PLC.value == 'Other') {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "visible";

        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.value = '';
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "hidden";

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_IPLC_Change_APLB_RULE();
        SYF_IPLC_Change_EXPIRY_PLC();
        SYF_IPLC_NEW_EXPIRY_PLC();
        SYF_IPLC_CHK_Bank_Reference();
        onChangeDiary();
        SYF_IPLC_Change_SameAsApplicant();
        //for parties notes
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYM_IPLC_CAL_ADV_BK_ID_back();
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        SYM_IPLC_CAL_APPL_BK_ID_back();
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        SYM_IPLC_CAL_REIM_BK_ID_back();
        SYM_IPLC_Cal_NEW_BENE_ID_back();
        /*The fields for the "old/existing" Beneficiary must be protected
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_OFF_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, 'P');
SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, 'O');*/
        SYM_IPLC_MPO_APPL_BENE();
        FLD_IPLC_CONF_BK_ID_onchange();
        SYT_DisableDivClass("D_div");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_NO_OF_AMD = function(ref) {
    try {

        var NO_OF_AMD; // Utility Auto Fix Comments
        NO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        if (NO_OF_AMD == "" || NO_OF_AMD == 0) {
            document.MAINFORM.NO_OF_AMD.value = 1;
        } else {
            document.MAINFORM.NO_OF_AMD.value = NO_OF_AMD + 1;
        }
        SYF_IPLC_SetAmdRef(document.MAINFORM.NO_OF_AMD.value);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_SetAmdRef = function() {
    try {

        var NO_OF_AMD; // Utility Auto Fix Comments
        NO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);

        if (NO_OF_AMD < 10) {
            ref = '-0' + NO_OF_AMD;
        } else {
            ref = '-' + NO_OF_AMD;
        }

        document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + ref;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_Tolerance = function() {
    try {

        if (document.MAINFORM.NEW_AMT_SPEC.value == 'NOT EXCEEDING') {
            document.MAINFORM.NEW_POS_TOL.value = 0;
            document.MAINFORM.NEW_NEG_TOL.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'P');
            SYF_IPLC_Cal_NEW_LC_BAL();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'O');
            SYF_IPLC_Cal_NEW_LC_BAL();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_NEW_LC_BAL = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var LC_BAL; // Utility Auto Fix Comments
        var NEW_LC_AMT; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var lc_bal_new;
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        POS_TOL = SYS_BeInt(document.MAINFORM.NEW_POS_TOL.value);
        if (POS_TOL > 0 || INC_AMT > 0 || DEC_AMT > 0) {
            NEW_LC_AMT = LC_AMT + INC_AMT - DEC_AMT;
            NEW_LC_BAL = NEW_LC_AMT * (1 + POS_TOL / 100);
            if(POS_TOL==0&&document.MAINFORM.NEW_AMT_SPEC.value==''){
            NEW_LC_BAL = NEW_LC_AMT * (1 + SYS_BeInt(document.MAINFORM.POS_TOL.value) / 100);	
            }
            document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_AMT);
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
            SYF_IPLC_CHK_NEW_LCAMTBAL();
            EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, "onchange");
        } else {
            document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_AMT);
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL);
            EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_INC_DEC_AMT = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var sTempMsg; // Utility Auto Fix Comments
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        sTempMsg = 'Decrease Amount can not be more than Original LC Amount!'; // Utility Auto Fix Comments
        if (INC_AMT > 0) {
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }

        if (DEC_AMT > 0) {
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }

        if (DEC_AMT > LC_AMT) {
            alert(sTempMsg);
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);

        }
        SYF_IPLC_Cal_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_NEW_EXPIRY_PLC = function() {
    try {

        if (document.MAINFORM.NEW_EXPIRY_PLC.value == 'Other') {
            document.MAINFORM.NEW_EXPIRY_PLC_NA.style.visibility = 'visible';
        } else {
            document.MAINFORM.NEW_EXPIRY_PLC_NA.style.visibility = 'hidden';
            document.MAINFORM.NEW_EXPIRY_PLC_NA.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_Bank_Reference = function() {
    try {

        if (document.MAINFORM.ADV_BK_REF.value == '') {
            document.MAINFORM.ADV_BK_REF.value = 'NONREF';
        }

        if (document.MAINFORM.ADV_THU_BK_REF.value == '') {
            document.MAINFORM.ADV_THU_BK_REF.value = 'NONREF';
        }

        if (document.MAINFORM.APPL_BK_REF.value == '') {
            document.MAINFORM.APPL_BK_REF.value = 'NONREF';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_NEW_LCAMTBAL = function() {
    try {

        if (document.MAINFORM.INC_AMT.value == 0 && document.MAINFORM.DEC_AMT.value == 0 && document.MAINFORM.NEW_NEG_TOL.value == 0 && document.MAINFORM.NEW_POS_TOL.value == 0) {
            document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_Temp_fields = function() {
    try {

        if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.NXT_STATUS.value = 'AmdLC';
        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_SameAsApplicant = function() {
    try {

        //Add by Jack on 20120904 for SMBC Worjshop
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
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_FORACOF_ID_back = function() {
    try {

        SYM_IPLC_FORACOF_MAIL_ADD();
        SYM_IPLC_CAL_FORACOF_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_FORACOF_ID_inFUNC = function() {
    try {

        if (document.MAINFORM.FORACOF_ID.value == '') {
            document.MAINFORM.FORACOF_NM.value = '';
            document.MAINFORM.FORACOF_ADD1.value = '';
            document.MAINFORM.FORACOF_ADD2.value = '';
            document.MAINFORM.FORACOF_ADD3.value = '';
            document.MAINFORM.FORACOF_EMAIL.value = '';
            document.MAINFORM.FORACOF_FAX.value = '';
            document.MAINFORM.FORACOF_MAIL_ADD.value = '';
            document.MAINFORM.FORACOF_CORR_MED.value = 'None';
            document.MAINFORM.FORACOF_TLX.value = '';
            document.MAINFORM.FORACOF_REF.value = '';
            document.MAINFORM.FORACOF_NOTES.value = '';
            document.MAINFORM.FORACOF_LANG.value = 'English';
            document.MAINFORM.FORACOF_AC_OFF_CODE.value = '';
            SYM_IPLC_CAL_FORACOF_ADD_back();
        } else {
            SYS_GetCUBK('FORACOF_ID', 'FORACOF_ID', 'SYF_IPLC_FORACOF_ID_back');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_SQL_ADV_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_SQL_ADV_THU_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_Change_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
        SYM_IPLC_SQL_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_onchange = function(event) {
    try {
        if (document.MAINFORM.ASSET_ACNO.value != '' && document.MAINFORM.LIAB_ACNO.value != '') {
            if (document.MAINFORM.ASSET_ACNO.value == document.MAINFORM.LIAB_ACNO.value) {
                alert("Bank Liability Account should be different from Customer Liability Account");
                document.MAINFORM.ASSET_ACNO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CAL_CONF_BK_ID_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DEC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.DEC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }

        if (document.MAINFORM.DEC_AMT.value > 0) {
            document.MAINFORM.DETRMNTL_FLG.value = "Yes";
        } else {
            document.MAINFORM.DETRMNTL_FLG.value = "No";
        }

        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_CHK_NEW_LCAMTBAL();
        SYF_IPLC_Cal_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_Change_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_FORACOF_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_onchange = function(event) {
    try {
        SYF_IPLC_CAL_FORACOF_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_FORACOF_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.INC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }

        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_CHK_NEW_LCAMTBAL();
        SYF_IPLC_Cal_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_AMT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_Cal_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.DEC_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_BAL_onchange = function(event) {
    try {
        SYF_IPLC_Cal_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_CCY_onchange = function(event) {
    try {
        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_CHK_NEW_LCAMTBAL();
        SYF_IPLC_Cal_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.DEC_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.INC_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LIAB_ACNO_onchange = function(event) {
    try {
        if (document.MAINFORM.ASSET_ACNO.value != '' && document.MAINFORM.LIAB_ACNO.value != '') {
            if (document.MAINFORM.LIAB_ACNO.value == document.MAINFORM.ASSET_ACNO.value) {
                alert("Customer Liability Account should be different from Bank Liability Account");
                document.MAINFORM.LIAB_ACNO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_CAL_Tolerance();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ACNO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_NEW_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_NEW_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.NEW_BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_NEW_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_NEW_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_EXPIRY_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.ISSUE_DT.name) > 0) {
            alert("The new expiry date should be always greater than the LC issuance date");
            document.MAINFORM.NEW_EXPIRY_DT.value = "";
        }
        if (SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.EXPIRY_DT.name) > 0) {
            document.MAINFORM.DETRMNTL_FLG.value = "Yes";
        } else {
            document.MAINFORM.DETRMNTL_FLG.value = "No";
        }
        if (document.MAINFORM.NEW_EXPIRY_DT.value == SYS_BUSI_DATE) {
            alert("New Date of Expiry should not be today date");
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
        }
        SYF_IPLC_Cal_Temp_fields();
        SYF_IPLC_New_Expiry_Date();
        EEHtml.fireEvent(document.MAINFORM.TEMP_EXPIRY_DT, 'onchange');
        SYF_IPLC_New_Expiry_Date();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_NEW_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_POS_TOL_onchange = function(event) {
    try {
        SYF_IPLC_CAL_Tolerance();
        SYF_IPLC_CHK_NEW_LCAMTBAL();
        SYF_IPLC_Cal_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_AMT, 'onchange');

        SYF_IPLC_Cal_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NO_OF_AMD_onchange = function(event) {
    try {
        SYF_IPLC_Cal_NO_OF_AMD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_AUTH_REQ_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_CORR_MED();
        SYM_IPLC_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_REIM_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
        SYM_IPLC_SQL_REIM_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant_2();
        SYF_IPLC_Change_SameAsApplicant();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_DATE3_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLCAmendment.js", e);
    }
}