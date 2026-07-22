var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification LC Amd';
        if (document.MAINFORM.ACCEPT_REJECT.value == 'ACCEPTED') {
            document.MAINFORM.NXT_STATUS.value = 'IPLC_ISS_LC';
        } else {
            document.MAINFORM.NXT_STATUS.value = 'Resubmit LC Iss';
        }

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification LC App';
        document.MAINFORM.NXT_STATUS.value = 'IPLC_ISS_LC';
        SYF_IPLC_ReasonforRejection();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYS_DisableDoButton("PaymentTerms", "ADD,EDIT,DEL", true);
        SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*LoadDODataOnInit", e);
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
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYM_IPLC_showMixPayment();
        SYM_IPLC_showMixPayment_New();
        onChangeDiary();
        EEHtml.getElementById('C').style.display = 'none';
        SYM_IPLC_CAL_DRWE_ID_back();
        FLD_IPLC_AVAL_WT_BK_ID_onchange();
        var NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value);
        var DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        var INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        if (NEW_POS_TOL > 0) {
            EEHtml.fireEvent(document.MAINFORM.NEW_POS_TOL, 'onchange');
        }
        if (INC_AMT > 0) {
            EEHtml.fireEvent(document.MAINFORM.INC_AMT, 'onchange');
        }
        if (DEC_AMT > 0) {
            EEHtml.fireEvent(document.MAINFORM.DEC_AMT, 'onchange');
        }

        SYT_ChangeFldClass(document.MAINFORM.REV_LC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CUMULATIVE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.EVERGREEN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REV_EVENT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NO_PRD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NXT_REV_DT, 'P');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*PostconditionOnInit", e);
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
        var POS_TOL;
        var lc_bal_new;
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        POS_TOL = SYS_BeInt(document.MAINFORM.NEW_POS_TOL.value);
        NEW_LC_AMT = LC_AMT + INC_AMT - DEC_AMT;
        NEW_LC_BAL = NEW_LC_AMT * (1 + POS_TOL / 100);
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_AMT);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, "onchange");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*SYF_IPLC_CAL_NEW_LC_BAL", e);
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
        SYF_IPLC_CAL_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*SYF_IPLC_CHK_INC_DEC_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_CalLCbal = function() {
    try {
        var LC_AMT; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value);
        document.MAINFORM.NEW_LC_BAL.value = NEW_LC_AMT + (NEW_LC_AMT * POS_TOL / 100);
        document.MAINFORM.NEW_LC_BAL.value = SYS_FormatAMTbyCCY(document.MAINFORM.NEW_LC_BAL);
        SYF_IPLC_CAL_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*SYF_IPLC_CalLCbal", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_PERCTOL = function() {
    try {
        if (document.MAINFORM.NEW_AMT_SPEC.value == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, "P");
            document.MAINFORM.NEW_NEG_TOL.value = 0;
            document.MAINFORM.NEW_POS_TOL.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, "O");
        }
        SYF_IPLC_CalLCbal();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*SYF_IPLC_MPO_PERCTOL", e);
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
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*SYF_IPLC_ReasonforRejection", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IPLC_ACCEPT_REJECT_onchange = function(event) {
    try {
        SYF_IPLC_ReasonforRejection();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_ACCEPT_REJECT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_AVAL_WT_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DEC_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) < 0) {
            alert("Decrease Amount by[33B] field should not be negative");
            document.MAINFORM.DEC_AMT.value = 0;
        }
        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_CAL_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_DEC_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_DRWE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_DRWE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INC_AMT_onchange = function(event) {
    try {
        var AAAA = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        if (AAAA < 0) {
            alert("amount field value cannot be Negative");
            document.MAINFORM.INC_AMT.value = 0;
        }
        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_CAL_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_INC_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_NEW_AMT_SPEC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_POS_TOL_onchange = function(event) {
    try {
        SYF_IPLC_CalLCbal();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_NEW_POS_TOL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_AVAL_WT_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVLBL_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_AVLBL_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_REQ_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('DOC_REQ');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_DOC_REQ_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_DRWE_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_DRW_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReviewLCAmtFrCE.js*FLD_IPLC_view_1_onclick", e);
    }
}