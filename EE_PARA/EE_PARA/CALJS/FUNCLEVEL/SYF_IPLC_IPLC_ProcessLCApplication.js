var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        var date_send; // Utility Auto Fix Comments
        var day_send; // Utility Auto Fix Comments
        var hour_send; // Utility Auto Fix Comments
        var min_send; // Utility Auto Fix Comments
        var month_send; // Utility Auto Fix Comments
        var time_send; // Utility Auto Fix Comments
        var year_send; // Utility Auto Fix Comments
        date_send = document.MAINFORM.X798_CRE_DATE.value;

        time_send = document.MAINFORM.X798_CRE_TIME.value;


        if (date_send != '') {
            //year_send = date_send.substring(0, 4);
            //month_send = date_send.substring(4, 6);
            //day_send = date_send.substring(6, 8);
            year_send = date_send.substring(0, 4);
            month_send = date_send.substring(5, 7);
            day_send = date_send.substring(8, 10);
            date_send = day_send + '/' + month_send + '/' + year_send;
            document.MAINFORM.X798_CRE_DATE.value = date_send;
        }


        if (time_send != '') {
            hour_send = time_send.substring(0, 2);
            min_send = time_send.substring(2, 4);
            time_send = hour_send + ':' + min_send;
            document.MAINFORM.X798_CRE_TIME.value = time_send; // Utility Auto Fix Comments
        }

        EEHtml.fireEvent(document.MAINFORM.AVAL_BY, 'onchange');
        SYT_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        onChangeDiary();
        SYF_IPLC_Change_SameAsApplicant();
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        FLD_IPLC_AVAL_BY_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_APPL_ID_back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_APPL_MAIL_ADD();
        //SYF_IPLC_APPL_CHG_back();
        SYM_IPLC_CAL_APPL_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_APPL_ID_inFUNC = function() {
    try {
        if (document.MAINFORM.APPL_ID.value == '') {
            document.MAINFORM.APPL_NM.value = '';
            document.MAINFORM.APPL_ADD1.value = '';
            document.MAINFORM.APPL_ADD2.value = '';
            document.MAINFORM.APPL_ADD3.value = '';
            document.MAINFORM.APPL_EMAIL.value = '';
            document.MAINFORM.APPL_FAX.value = '';
            document.MAINFORM.APPL_MAIL_ADD.value = '';
            document.MAINFORM.APPL_CORR_MED.value = 'None';
            document.MAINFORM.APPL_TLX.value = '';
            document.MAINFORM.APPL_REF.value = '';
            document.MAINFORM.APPL_NOTES.value = '';
            document.MAINFORM.APPL_LANG.value = 'English';
            document.MAINFORM.AC_OFFICER_CODE.value = '';
            SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
            SYM_IPLC_CAL_APPL_ADD_back();
        } else {
            SYS_GetCUBK('APPL_ID', 'APPL_ID', 'SYF_IPLC_APPL_ID_back');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Chk_AVAL_BY = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRAFTS_AT.value = 'Payment at Sight';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "M");
            SYM_IPLC_Pay_By_Acceptance();
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = ''; // Utility Auto Fix Comments
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.DRW_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            SYM_IPLC_Pay_By_Acceptance();
            SYM_IPLC_CAL_CLEAR_DRWE_ID();
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DEF_PMT_DET.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.DRW_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            SYM_IPLC_CAL_CLEAR_DRWE_ID();
            SYS_DeleteDoRecord("PaymentTerms");
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.MIX_PMT_DETL.value;
        }
        //SYF_IPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_PERCTOL = function() {
    try {
        if (document.MAINFORM.AMT_SPEC.value == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "P");
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "P");
            document.MAINFORM.NEG_TOL.value = 0;
            document.MAINFORM.POS_TOL.value = 0;
        } else {

            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "O");
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "O");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMT_SPEC_onchange = function() {
    try {
        SYF_IPLC_MPO_PERCTOL();
        EEHtml.fireEvent(document.MAINFORM.POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function() {
    try {
        SYF_IPLC_CAL_APPL_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_BY_onchange = function() {
    try {
        SYF_IPLC_Chk_AVAL_BY();
        SYM_IPLC_CHK_AVAL_WT_BK_OPT();
        SYM_IPLC_showMixPayment();
        SYM_IPLC_addPaymentRecord();
        //SYM_IPLC_PaymentAvailableByChange();

        if (document.MAINFORM.AVAL_BY.value == "BY PAYMENT" || document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_OPT_onchange = function() {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_OPT();
        EEHtml.fireEvent(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_AMT_onchange = function() {
    try {
        if (document.MAINFORM.LC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.LC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LTST_SHIP_DT_onchange = function() {
    try {
        if (document.MAINFORM.ISSUE_DT.value == '') {
            alert("please first enter Issue Date in Main tab");

        }
        if (document.MAINFORM.EXPIRY_DT.value == '') {
            alert("please first enter Expiry Date in Main tab");
        }
        if (document.MAINFORM.LTST_SHIP_DT.value < document.MAINFORM.ISSUE_DT.value) {
            alert("Latest Shipment Date must be later than Issue date");
            document.MAINFORM.LTST_SHIP_DT.value = '';
        }
        if (document.MAINFORM.LTST_SHIP_DT.value > document.MAINFORM.EXPIRY_DT.value) {
            alert("Latest Shipment Date must be earlier than Expiry date");
            document.MAINFORM.LTST_SHIP_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_AUTH_REQ_onchange = function() {
    try {
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_SAME_AS_APPL_FLG_onchange = function() {
    try {
        SYF_IPLC_Change_SameAsApplicant();
        SYF_IPLC_Cal_SameAsApplicant_2();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TENOR_DAYS_onchange = function() {
    try {
        SYF_IPLC_Chk_AVAL_BY();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TENOR_TYPE_onchange = function() {
    try {
        SYF_IPLC_Chk_AVAL_BY();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_CONDITION_CLAUSE_BTN_onclick = function() {
    try {
        SYS_InsertClause('ADDIT_CONDITION');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_APPL_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVLBL_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHARGES_CLAUSE_BTN_onclick = function() {
    try {
        SYS_InsertClause('CHARGES');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_REQ_BTN_onclick = function() {
    try {
        SYS_InsertClause('DOC_REQ');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_DRWE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRW_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_DRWE_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_FORACOF_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_GOODS_DESC_BTN_onclick = function() {
    try {
        SYS_InsertClause('GOODS_DESC');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSTR_TO_PAY_BK_BTN_onclick = function() {
    try {
        SYS_InsertClause('INSTR_TO_PAY_BK');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_REIM_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_TO_RCV_INFO_CLAUSE_BTN_onclick = function() {
    try {
        SYS_InsertClause('SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCApplication.js", e);
    }
}