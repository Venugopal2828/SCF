var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
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
        SYF_BPOM_CAL_EXPORT_FIELDS();
        Label = EEHtml.getElementById('Label');
        Label.innerHTML = 'Confirmation Bank Liability Account';
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("SUPLR_ID", "SUPLR_NM");
        Chg.Screen.mapForeignCust("BUYR_ID", "BUYR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_Charges = function() {
    try {

        SYF_BPOM_Chg_BPOM_EX_HANDLING();
        SYM_BPOM_Chg_OtherFee();
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
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
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
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
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("CAL_TBPO_PAY_TERMS", "N", false, '', "TBPO_PAY_TERMS");
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_LIAB_ACNO = function() {
    try {

        if (document.MAINFORM.CONF_ADDED.value == 'Yes') {
            SYS_GetTableDataByRule_S('SYF_BPOM_ExportAccept_SYF_BPOM_CAL_LIAB_ACNO_0', '1', 'Y');
            SYT_ChangeFldClass_New('LIAB_ACNO', 'M');
        } else {
            document.MAINFORM.LIAB_ACNO.value = '';
            SYT_ChangeFldClass_New('LIAB_ACNO', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();
        SYF_BPOM_CAL_LIAB_ACNO();
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_EXPORT_FIELDS = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "TSU_TID;TSU_GOODS_DESC;CONF_ADDED;CONF_PCT;CONF_BAL;CONF_BK_ID;CONF_BK_NM;CONF_BK_ADD1;CONF_BK_ADD2;CONF_BK_ADD3;CONF_BK_MAIL_ADD;CONF_BK_SW_TAG;CONF_BK_SW_ADD;TSU_COMM_REQ;TSU_TRAN_REQ;TSU_INSU_REQ;TSU_ANAY_REQ;TSU_HEAL_REQ;TSU_ORIG_REQ;TSU_PHYT_REQ;TSU_QUAT_REQ;TSU_WEIG_REQ";
        //sMappingList = "TSU_TID;TSU_GOODS_DESC;CONF_ADDED;CONF_PCT;CONF_BAL;CONF_BK_ID;CONF_BK_NM;CONF_BK_ADD1;CONF_BK_ADD2;CONF_BK_ADD3;CONF_BK_MAIL_ADD;CONF_BK_SW_TAG;CONF_BK_SW_ADD;TSU_COMM_REQ;TSU_TRAN_REQ;TSU_INSU_REQ;TSU_ANAY_REQ;TSU_HEAL_REQ;TSU_ORIG_REQ;TSU_PHYT_REQ;TSU_QUAT_REQ;TSU_WEIG_REQ";
        SYS_GetTableDataByRule_S('SYF_BPOM_ExportAccept_SYF_BPOM_CAL_EXPORT_FIELDS_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BUSI_STATUS.value = 'Export Accept';
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ExportAccept.js", e);
    }
}