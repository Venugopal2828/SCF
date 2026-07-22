var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();
        if (document.MAINFORM.CONF_ADDED.value == 'Yes') {
            SYT_ChangeFldClass_New('CONF_PCT', 'M');
        } else {
            SYT_ChangeFldClass_New('CONF_PCT', 'P');
            document.MAINFORM.CONF_PCT.value = '';
        }
        SYF_BPOM_CAL_NEW_CONF_BAL();
        SYF_BPOM_CAL_LIAB_ACNO();
        SYF_BPOM_MPO_CONF_BK();
        SYM_BPOM_Change_BUYR_CORR_MED();
        SYM_BPOM_Change_SUPLR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("SUPLR_ID", "SUPLR_NM");
        Chg.Screen.mapForeignCust("BUYR_ID", "BUYR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_NEW_CONF_BAL = function() {
    try {

        var new_conf_bal; // Utility Auto Fix Comments
        var pct; // Utility Auto Fix Comments
        var ttl_net_amt; // Utility Auto Fix Comments
        ttl_net_amt = SYS_BeFloat(document.MAINFORM.TSU_TTL_NET_AMT.value);
        pct = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
        if (pct != '' && pct != null) {
            new_conf_bal = ttl_net_amt * pct / 100;
            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.TSU_TTL_NET_CCY.value, new_conf_bal);
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_LIAB_ACNO = function() {
    try {

        if (document.MAINFORM.CONF_ADDED.value == 'Yes') {
            SYS_GetTableDataByRule_S('SYF_BPOM_AdviceBPOAmend_SYF_BPOM_CAL_LIAB_ACNO_0', '1', 'Y');
            SYT_ChangeFldClass_New('LIAB_ACNO', 'M');
        } else {
            document.MAINFORM.LIAB_ACNO.value = '';
            SYT_ChangeFldClass_New('LIAB_ACNO', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_MPO_CONF_BK = function() {
    try {

        if (document.MAINFORM.CONF_ADDED.value == 'Yes') {
            SYT_ChangeFldClass_New('CONF_BK_ID', 'M');
            SYT_ChangeFldClass_New('CONF_BK_NM', 'O');
            SYT_ChangeFldClass_New('CONF_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('CONF_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('CONF_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('CONF_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('CONF_BK_ID_BTN', 'O');
        } else {
            SYT_ChangeFldClass_New('CONF_BK_ID', 'P');
            SYT_ChangeFldClass_New('CONF_BK_NM', 'P');
            SYT_ChangeFldClass_New('CONF_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('CONF_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('CONF_BK_ADD3', 'P');
            SYT_ChangeFldClass_New('CONF_BK_MAIL_ADD', 'P');
            SYT_ChangeFldClass_New('CONF_BK_ID_BTN', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_CONF_PCT = function() {
    try {

        if (document.MAINFORM.CONF_ADDED.value == 'Yes') {
            SYT_ChangeFldClass_New('CONF_PCT', 'M');
            SYT_ChangeFldClass_New('NEW_CONF_BAL', 'M');
        } else {
            SYT_ChangeFldClass_New('CONF_PCT', 'P');
            SYT_ChangeFldClass_New('NEW_CONF_BAL', 'P');
            document.MAINFORM.CONF_PCT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Chg_BPOM_EX_HANDLING = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['BPOM_EX_HANDLING'];
        amt = EEHtml.getElementById('TSU_LINE_TTL_AMT').value;
        ccy = EEHtml.getElementById('TSU_LINE_TTL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Charges = function() {
    try {

        SYF_BPOM_Chg_BPOM_EX_HANDLING();
        SYM_BPOM_Chg_OtherFee();
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var chgEntry; // Utility Auto Fix Comments
        var commList; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            commList = "BPOM_EX_HANDLING,BPOM_OTHER";
            Chg.LoadCommission(commList, 'MAINREF', '', null, '', '', 'false');
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_BPOM_Charges();
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("CAL_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYS_GetDataForDO_S("CAL_TBPO_PAY_TERMS", "N", false, '', "TBPO_PAY_TERMS");
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var Label; // Utility Auto Fix Comments
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYM_BPOM_CAL_BUYR();
        SYM_BPOM_CAL_SUPLR();
        SYM_BPOM_CAL_ISSUE_BK();
        SYM_BPOM_CAL_ADV_BK();
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ADV_BK_SW_ADD));

        Label = EEHtml.getElementById('Label');
        Label.innerHTML = 'Confirmation Bank Liability Account';
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BUSI_STATUS.value = 'Export Amemd';
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_BUYR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_BUYR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_ADDED_onchange = function(event) {
    try {
        SYF_BPOM_CAL_CONF_PCT();
        SYF_BPOM_CAL_LIAB_ACNO();
        SYF_BPOM_MPO_CONF_BK();
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_BK_ADD1_onchange = function(event) {
    try {
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.CONF_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_BK_ADD2_onchange = function(event) {
    try {
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.CONF_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_BK_ADD3_onchange = function(event) {
    try {
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.CONF_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_BK_ID.value != '') {
            SYS_GetCUBK_S('CONF_BK_ID', document.MAINFORM.CONF_BK_ID.name);
        } else {
            document.MAINFORM.CONF_BK_ID.value = '';
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_MAIL_ADD.value = '';
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
        }
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.CONF_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('CONF_BK_ID', 'CONF_BK_ID');
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_BK_NM_onchange = function(event) {
    try {
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.CONF_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.CONF_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_CONF_PCT_onchange = function(event) {
    try {
        SYF_BPOM_CAL_NEW_CONF_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_CONF_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_SUPLR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_SUPLR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_AdviceBPOAmend.js", e);
    }
}