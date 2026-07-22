var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.DOC_STAT.value = 'Discrepancy Found';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_IPLC_INIT();
        SYM_IPLC_NEGO_INIT_VALUES();
        SYM_IPLC_CalM_TEMP_N90_21();
        SYM_IPLC_SQL_PRES_BK_SW_ADD();
        SYM_IPLC_INIT_FOR_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_IPLC_NEGO_SHOW_NOTES();
        SYM_IPLC_MPO_PRES_CORR_MED();
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        SYM_IPLC_Cal_PRES_BK_SW_TAG();

        EEHtml.getElementById('display1').style.display = 'none';
        EEHtml.getElementById('display2').style.display = 'none';
        EEHtml.getElementById('display3').style.display = 'none';
        EEHtml.getElementById('display4').style.display = 'none';
        EEHtml.getElementById('display5').style.display = 'none';
        EEHtml.getElementById('display6').style.display = 'none';
        EEHtml.getElementById('display7').style.display = 'none';
        EEHtml.getElementById('display8').style.display = 'none';


        document.MAINFORM.PRES_BK_SW_ADD.value = '';

        SYT_ChangeFldClass(document.MAINFORM.ADV_APPL_FLG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHGS_DEDUCTED_TXT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CHGS_ADDED_TXT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'P');
        EEHtml.fireEvent(document.MAINFORM.DOC_PRES_BY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IPLC_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*SYF_IPLC_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.SYF_IPLC_presenterchange = function() {
    try {
        SYT_ChangeFldClass_New('PRES_BK_ID', 'M');
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*SYF_IPLC_presenterchange", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_CHGS_DEDUCTED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();
        SYF_IPLC_presenterchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_DOC_PRES_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_AMT_onchange = function(event) {
    try {
        var PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        if (PRES_AMT < 0) {
            alert('Amount should not be negative');
            document.MAINFORM.PRES_AMT.value = 0;
        }
        SYM_IPLC_CAL_LC_BAL_NEGO();
        SYM_IPLC_Cal_PRES_BAL();
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_MPO_PRES_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_REF_onchange = function(event) {
    try {
        SYM_IPLC_CalM_TEMP_N90_21();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_REF_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary' || document.MAINFORM.DOC_PRES_BY.value == '') {
            SYS_InqCUBK('PRES_CUST_ID');
        } else {
            SYT_BankLookUp(event.currentTarget);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT750.js*FLD_IPLC_view_1_onclick", e);
    }
}