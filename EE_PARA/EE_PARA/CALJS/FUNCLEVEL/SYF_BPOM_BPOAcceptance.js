var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("GET_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYS_GetDataForDO_S("CAL_TBPO_PAY_TERMS", "N", false, '', "TBPO_PAY_TERMS");
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYM_BPOM_CAL_BUYR();
        SYM_BPOM_CAL_SUPLR();
        SYM_BPOM_CAL_ISSUE_BK();
        SYM_BPOM_CAL_ADV_BK();
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ADV_BK_SW_ADD));
        SYF_BPOM_GET_PO_C_MAIN_REF();
        document.MAINFORM.BUSI_STATUS.value = 'Import Accept'; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("BUYR_ID", "BUYR_NM");
        Chg.Screen.mapForeignCust("SUPLR_ID", "SUPLR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHARGES = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['BPOM_USANCE'];
        amt = EEHtml.getElementById('TSU_PAY_AMT').value;
        ccy = EEHtml.getElementById('TSU_TTL_NET_CCY').value;
        Chg.calculate(arr, ccy, amt);

        arr = ['BPOM_OTHER']; // Utility Auto Fix Comments
        amt = EEHtml.getElementById('TSU_PAY_AMT').value; // Utility Auto Fix Comments
        ccy = EEHtml.getElementById('TSU_TTL_NET_CCY').value; // Utility Auto Fix Comments
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
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
            commList = "BPOM_USANCE,BPOM_OTHER";
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
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_GET_PO_C_MAIN_REF = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "C_MAIN_REF";
        //sMappingList = "PO_C_MAIN_REF";
        SYS_GetTableDataByRule_S('SYF_BPOM_BPOAcceptance_SYF_BPOM_GET_PO_C_MAIN_REF_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_RadioGroup0_onclick = function(event) {
    try {
        if (document.MAINFORM.RadioGroup0.checked == true) {
            document.MAINFORM.RadioGroup1.disabled = true;
            SYT_ChangeFldClass_New(document.MAINFORM.TSU_IAFT_TP.name, "M");
        } else {

            document.MAINFORM.RadioGroup1.disabled = "";
            SYT_ChangeFldClass_New(document.MAINFORM.TSU_IAFT_TP.name, "B");
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_RadioGroup1_onclick = function(event) {
    try {
        if (document.MAINFORM.RadioGroup1.checked == true) {
            document.MAINFORM.RadioGroup0.disabled = true;
            SYT_ChangeFldClass_New(document.MAINFORM.TSU_IAFT_OT_TP.name, "M");
        } else {

            document.MAINFORM.RadioGroup0.disabled = "";
            SYT_ChangeFldClass_New(document.MAINFORM.TSU_IAFT_OT_TP.name, "B");
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOAcceptance.js", e);
    }
}