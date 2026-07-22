var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_BPOM_CAL_LIAB_ACNO = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_BPOM_CheckBPOAmend_SYF_BPOM_CAL_LIAB_ACNO_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_TsuBene = function() {
    try {

        if (document.MAINFORM.TSU_BENE_BBAN.value == "") {
            if (document.MAINFORM.TSU_BENE_IBAN.value == "") {
                if (document.MAINFORM.TSU_BENE_UPIC.value == "") {
                    if (document.MAINFORM.TSU_BENE_ACC.value == "") {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'M', 'N');
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
                    }
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("BUYR_ID", "BUYR_NM");
        Chg.Screen.mapForeignCust("SUPLR_ID", "SUPLR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
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
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
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
            commList = "BPOM_AMEND,BPOM_IM_HANDLING,BPOM_OTHER";
            Chg.LoadCommission(commList, 'MAINREF', '', null, '', '', 'false');
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_TSUM_TsuBene();
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("CAL_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYS_GetDataForDO_S("CAL_TBPO_PAY_TERMS", "N", false, '', "TBPO_PAY_TERMS");
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();

        SYM_BPOM_Change_BUYR_CORR_MED();
        SYM_BPOM_Change_SUPLR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        SYM_BPOM_CAL_BUYR();
        SYM_BPOM_CAL_SUPLR();
        SYM_BPOM_CAL_ISSUE_BK();
        SYM_BPOM_CAL_ADV_BK();
        SYF_BPOM_CAL_LIAB_ACNO();
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BUSI_STATUS.value = 'Import Amend';
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_BUYR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_BUYR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}

csFuncLevelProto.FLD_BPOM_SUPLR_CORR_MED_onchange = function(event) {
    try {
        SYM_BPOM_Change_SUPLR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_BPOM_CheckBPOAmend.js", e);
    }
}