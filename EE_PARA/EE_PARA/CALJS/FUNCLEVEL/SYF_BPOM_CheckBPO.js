var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();

        SYM_BPOM_Change_BUYR_CORR_MED();
        SYM_BPOM_Change_SUPLR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_LIAB_ACNO = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_BPOM_CheckBPO_SYF_BPOM_CAL_LIAB_ACNO_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYM_BPOM_CAL_BUYR();
        SYM_BPOM_CAL_SUPLR();
        SYM_BPOM_CAL_ISSUE_BK();
        SYM_BPOM_CAL_ADV_BK();
        SYF_BPOM_CAL_LIAB_ACNO();
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
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
            commList = "BPOM_ISSUE_COMM,BPOM_IM_HANDLING,BPOM_OTHER";
            Chg.LoadCommission(commList, 'MAINREF', '', null, '', '', 'false');
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_BPOM_CHARGES();
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("BUYR_ID", "BUYR_NM");
        Chg.Screen.mapForeignCust("SUPLR_ID", "SUPLR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("CAL_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYS_GetDataForDO_S("CAL_TBPO_PAY_TERMS", "N", false, '', "TBPO_PAY_TERMS");
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHARGES = function() {
    try {

        SYF_BPOM_Chg_BPOM_IM_HANDLING();
        SYF_BPOM_Chg_BPOM_ISSUE_COMM();
        SYM_BPOM_Chg_OtherFee();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Chg_BPOM_ISSUE_COMM = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['BPOM_ISSUE_COMM'];
        amt = EEHtml.getElementById('TSU_TTL_NET_AMT').value;
        ccy = EEHtml.getElementById('TSU_TTL_NET_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Chg_BPOM_IM_HANDLING = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['BPOM_IM_HANDLING'];
        amt = EEHtml.getElementById('TSU_TTL_NET_AMT').value;
        ccy = EEHtml.getElementById('TSU_TTL_NET_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TSU_TTL_NET_CCY_OLD.value = document.MAINFORM.TSU_TTL_NET_CCY.value;
        document.MAINFORM.TSU_TTL_NET_AMT_OLD.value = document.MAINFORM.TSU_TTL_NET_AMT.value;
        document.MAINFORM.LIAB_ACNO_OLD.value = document.MAINFORM.LIAB_ACNO.value;
        document.MAINFORM.BUSI_STATUS.value = 'Import Issue';
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_BUYR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_BUYR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_SUPLR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_SUPLR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPO.js", e);
    }
}