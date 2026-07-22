var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        if (document.MAINFORM.ACCEPT_REJECT.value == 'ACCEPTED') {
            document.MAINFORM.NXT_STATUS.value = 'IPLC_ISS_LC';
        } else {
            document.MAINFORM.NXT_STATUS.value = 'Resubmit LC Iss';
        }
        document.MAINFORM.CURRNT_STATUS.value = 'LC App Verified By Bank';
        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification LC App';
        document.MAINFORM.NXT_STATUS.value = 'IPLC_ISS_LC';
        SYF_IPLC_ReasonforRejection();
        SYF_IPLC_CalLCbal();

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('D_div');
        SYT_DisableDivClass('K_div');
       SYT_DisableDivClass('E_div');
        SYT_DisableDivClass('F_div');
        SYT_DisableDivClass('G_div');
        SYM_IPLC_showMixPayment();
        onChangeDiary();
        EEHtml.getElementById('C').style.display = 'none';
        SYT_ChangeFldClass_New('SAME_AS_APPL_FLG', 'O');
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_ReasonforRejection = function() {
    try {

        if (document.MAINFORM.ACCEPT_REJECT.value == 'ACCEPTED') {
            SYT_ChangeFldClass(document.MAINFORM.REASON_FOR_REJ, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REASON_FOR_REJ, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CalLCbal = function() {
    try {

        var LC_AMT; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        document.MAINFORM.LC_BAL.value = LC_AMT + (LC_AMT * POS_TOL / 100);
        document.MAINFORM.LC_BAL.value = SYS_FormatAMTbyCCY(document.MAINFORM.LC_BAL);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ACCEPT_REJECT_onchange = function(event) {
    try {
        SYF_IPLC_ReasonforRejection();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
        EEHtml.fireEvent(document.MAINFORM.POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_REQ_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('DOC_REQ');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEG_TOL_onchange = function(event) {
    try {
        SYF_IPLC_CalLCbal();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_POS_TOL_onchange = function(event) {
    try {
        SYF_IPLC_CalLCbal();
        SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCFrCE.js", e);
    }
}