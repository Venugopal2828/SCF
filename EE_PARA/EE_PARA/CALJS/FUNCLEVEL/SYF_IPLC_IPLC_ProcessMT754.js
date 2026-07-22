var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_IPLC_INIT();
        SYM_IPLC_INIT_FOR_DT();
        SYM_IPLC_NEGO_INIT_VALUES();
        SYM_IPLC_SQL_PRES_BK_SW_ADD();
        document.MAINFORM.TOTAL_AMT.value = document.MAINFORM.PRES_AMT.value;
        SYT_DisableDivClass('A_div');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IPLC_NEGO_SHOW_NOTES();
        SYM_IPLC_MPO_PRES_CORR_MED();
        SYM_IPLC_CalM_TEMP_N90_21();
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        SYM_IPLC_Cal_PRES_BK_SW_TAG();


        EEHtml.getElementById('hide_presenter1').style.display = 'none';
        EEHtml.getElementById('hide_presenter2').style.display = 'none';
        EEHtml.getElementById('hide_presenter3').style.display = 'none';
        EEHtml.getElementById('hide_presenter4').style.display = 'none';
        EEHtml.getElementById('hide_presenter5').style.display = 'none';
        EEHtml.getElementById('hide_presenter6').style.display = 'none';
        EEHtml.getElementById('hide_presenter7').style.display = 'none';
        EEHtml.getElementById('hide_presenter8').style.display = 'none';
        EEHtml.getElementById('hide_presenter9').style.display = 'none';
        EEHtml.getElementById('hide_presenter10').style.display = 'none';
        EEHtml.getElementById('hide_presenter0').style.display = 'none';
        EEHtml.getElementById('display1').style.display = 'none';
        EEHtml.getElementById('display2').style.display = 'none';
        EEHtml.getElementById('display3').style.display = 'none';
        EEHtml.getElementById('display4').style.display = 'none';
        EEHtml.getElementById('display5').style.display = 'none';
        EEHtml.getElementById('display6').style.display = 'none';
        EEHtml.getElementById('display7').style.display = 'none';
        EEHtml.getElementById('display8').style.display = 'none';
        SYM_IPLC_MPO_PRESENTER_CLASS();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.PRES_AMT.value) < 0) {
            alert("The Presentation amount should not be negative");
            document.MAINFORM.PRES_AMT.value = 0;
        }
        SYM_IPLC_Cal_TOTAL_AMT();
        SYM_IPLC_Cal_PRES_BAL();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_MPO_PRES_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYS_InqCUBK('PRES_CUST_ID');
        } else {
            SYT_BankLookUp(event.currentTarget);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ADD(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_REF_onchange = function(event) {
    try {
        SYM_IPLC_CalM_TEMP_N90_21();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ProcessMT754.js", e);
    }
}