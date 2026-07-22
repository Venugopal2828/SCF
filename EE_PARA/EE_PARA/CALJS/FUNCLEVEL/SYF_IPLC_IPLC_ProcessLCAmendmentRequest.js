var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('O_div');
        SYT_DisableDivClass('K_div');
        SYT_DisableDivClass('D_div');
        SYT_DisableDivClass('E_div');
        SYT_DisableDivClass('F_div');
        SYT_DisableDivClass('G_div');
        SYM_IPLC_showMixPayment();
        SYM_IPLC_showMixPayment_New();
        //SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "O");

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_DetrimentalAMT = function() {
    try {

        var new_lc_amt;
        var new_lc_bal;
        new_lc_amt = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        new_lc_bal = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        if (document.MAINFORM.DETRMNTL_FLG.value == 'Yes') {
            document.MAINFORM.NEW_LC_AMT_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, new_lc_amt);
            document.MAINFORM.NEW_LC_BAL_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, new_lc_bal);
        } else {
            document.MAINFORM.NEW_LC_AMT_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            document.MAINFORM.NEW_LC_BAL_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DEC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.DEC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DETRMNTL_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_DetrimentalAMT();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.INC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessLCAmendmentRequest.js", e);
    }
}