var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();
        //SYF_BPOM_CAL_LIAB_ACNO();
        SYT_DisableDivClass('C_div');
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHARGES = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['BPOM_LIEU'];
        amt = EEHtml.getElementById('TSU_PAY_AMT').value;
        ccy = EEHtml.getElementById('TSU_TTL_NET_CCY').value;
        Chg.calculate(arr, ccy, amt);

        arr = ['BPOM_OTHER']; // Utility Auto Fix Comments
        amt = EEHtml.getElementById('TSU_PAY_AMT').value; // Utility Auto Fix Comments
        ccy = EEHtml.getElementById('TSU_TTL_NET_CCY').value; // Utility Auto Fix Comments
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("SUPLR_ID", "SUPLR_NM");
        Chg.Screen.mapForeignCust("BUYR_ID", "BUYR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
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
            commList = "BPOM_LIEU,BPOM_OTHER";
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
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("GET_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYS_GetDataForDO_S("CAL_TBPO_PAY_TERMS", "N", false, '', "TBPO_PAY_TERMS");
        SYF_BPOM_MLDC_SetDebitCreditData();
        SYF_BPOM_CAL_BPOOBLGR_AMT_STEL();
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var Label; // Utility Auto Fix Comments
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
        SYM_BPOM_M_SW_TAG(new Array(document.MAINFORM.ADV_BK_SW_ADD));
        Label = EEHtml.getElementById('Label');
        Label.innerHTML = 'Confirmation Bank Liability Account';
        SYF_BPOM_TSU_PAY_CONF_AMT();
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        SYF_BPOM_GET_PO_C_MAIN_REF();
        document.MAINFORM.BUSI_STATUS.value = 'Export Settle';
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_MLDC_SetDebitCreditData = function() {
    try {

        var actions; // Utility Auto Fix Comments
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.TSU_CCY.value + "/" + document.MAINFORM.TSU_CCY.value;
        payAMTs = document.MAINFORM.TSU_PAY_AMT.value + "/" + document.MAINFORM.TSU_PAY_AMT.value;
        descs = "Settle Amt/Amount to Seller or to Bank Loan";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";

        comp = "Settlement";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_LIAB_ACNO = function() {
    try {

        if (document.MAINFORM.CONF_ADDED.value == 'Yes') {
            SYS_GetTableDataByRule_S('SYF_BPOM_BPOSettlement_SYF_BPOM_CAL_LIAB_ACNO_0', '1', 'Y');
            SYT_ChangeFldClass_New('LIAB_ACNO', 'P');
        } else {
            document.MAINFORM.LIAB_ACNO.value = '';
            SYT_ChangeFldClass_New('LIAB_ACNO', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_TSU_PAY_CONF_AMT = function() {
    try {

        var TSU_PAY_CONF_AMT; // Utility Auto Fix Comments
        TSU_PAY_CONF_AMT = SYS_BeFloat(document.MAINFORM.TSU_PAY_AMT.value) * SYS_BeFloat(document.MAINFORM.CONF_PCT.value) / 100;
        document.MAINFORM.TSU_PAY_CONF_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_PAY_CONF_AMT);
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_BPOOBLGR_AMT_STEL = function() {
    try {

        var PEC; // Utility Auto Fix Comments
        var PEC2; // Utility Auto Fix Comments
        var TSU_BPOOBLGR_AMT; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('TBPO_PAY_OBLIG'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("TBPO_PAY_OBLIG");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                PEC = SYS_getValFromRec(record, 'PERCENT');
                PEC2 = SYS_BeFloat(document.MAINFORM.CONF_PCT.value); // Utility Auto Fix Comments
                TSU_BPOOBLGR_AMT = SYS_BeFloat(PEC) * SYS_BeFloat(document.MAINFORM.TSU_PAY_AMT.value) * PEC2 / 100 / 100;
                SYS_setFieldValue(_do, id, "TSU_BPOOBLGR_AMT", TSU_BPOOBLGR_AMT); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_GET_PO_C_MAIN_REF = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "C_MAIN_REF";
        //sMappingList = "PO_C_MAIN_REF";
        SYS_GetTableDataByRule_S('SYF_BPOM_BPOSettlement_SYF_BPOM_GET_PO_C_MAIN_REF_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_BPOSettlement.js", e);
    }
}