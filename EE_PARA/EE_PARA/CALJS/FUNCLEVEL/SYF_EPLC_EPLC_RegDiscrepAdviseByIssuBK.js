var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('B_div');
        SYM_EPLC_M_PRES_BK_CLS();

        SYF_EPLC_MT798_FLG();
        FLD_EPLC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            document.MAINFORM.X798_21_REF.value = document.MAINFORM.PRES_BK_REF.value;
            document.MAINFORM.X798_20_REF.value = document.MAINFORM.LC_NO.value;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD1_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD2_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD3_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD_BTN_MT750_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_MT750_ADD', 'AC_WT_BK_ID_MT750', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_BTN_MT750_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_MT750_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID_MT750', 'AC_WT_BK_ID_MT750');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_NM_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ORDER_NO_MT750_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_SW_ADD_MT750_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD1_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD2_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD3_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD_BTN_MT750_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_BK_MT750_ADD', 'RCV_BK_ID_MT750', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_BTN_MT750_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_MT750_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_BK_ID_MT750', 'RCV_BK_ID_MT750');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_NM_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ORDER_NO_MT750_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_SW_ADD_MT750_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegDiscrepAdviseByIssuBK.js", e);
    }
}