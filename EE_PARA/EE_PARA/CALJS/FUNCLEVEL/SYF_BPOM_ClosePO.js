var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("CAL_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYF_BPOM_CAL_TSU_BPOOBLGR_BAL();
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHK_CLS_FLG = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "COUNT (*) AS COUNT";
        //sMappingList = "TEMP_COUNT";
        SYS_GetTableDataByRule_S('SYF_BPOM_ClosePO_SYF_BPOM_CHK_CLS_FLG_0', '1', 'Y');

        if (SYS_BeFloat(document.MAINFORM.TEMP_COUNT.value) > 0) {
            alert("There is related BPO still in process, please close the BPO first!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();
        SYF_BPOM_HIDDEN_CONF_INFO();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_BPOM_CHK_CLS_FLG();
            SYF_BPOM_CAL_SUM_TSU_PAY_AMT();
            SYF_BPOM_CAL_TSU_PO_BAL();
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_BPOM_CHK_CLS_FLG()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_SUM_TSU_PAY_AMT = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "SUM(TSU_PAY_AMT) AS AMT";
        //sMappingList = "TEMP_AMT";
        SYS_GetTableDataByRule_S('SYF_BPOM_ClosePO_SYF_BPOM_CAL_SUM_TSU_PAY_AMT_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_TSU_PO_BAL = function() {
    try {

        var TSU_PO_BAL; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        if (document.MAINFORM.BUSI_ROLE.value == 'IMPORT') {
            TSU_PO_BAL = SYS_BeFloat(document.MAINFORM.TSU_TTL_NET_AMT.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT.value);
            document.MAINFORM.TSU_PO_BAL.value = SYT_AmtFormat(document.MAINFORM.TSU_TTL_NET_CCY.value, TSU_PO_BAL);
        } else if (document.MAINFORM.BUSI_ROLE.value == 'EXPORT') {
            per = document.MAINFORM.CONF_PCT.value;
            TSU_PO_BAL = (SYS_BeFloat(document.MAINFORM.TSU_TTL_NET_AMT.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT.value)) * per / 100; // Utility Auto Fix Comments
            document.MAINFORM.TSU_PO_BAL.value = SYT_AmtFormat(document.MAINFORM.TSU_TTL_NET_CCY.value, TSU_PO_BAL);
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_TSU_BPOOBLGR_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var PEC; // Utility Auto Fix Comments
        var TSU_BPOOBLGR_BAL; // Utility Auto Fix Comments
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
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                PEC = SYS_getValFromRec(record, 'PERCENT');
                TSU_BPOOBLGR_BAL = SYS_BeFloat(PEC) * SYS_BeFloat(document.MAINFORM.TSU_PO_BAL.value) / 100;
                SYS_setFieldValue(_do, id, "TSU_BPOOBLGR_BAL", TSU_BPOOBLGR_BAL); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_HIDDEN_CONF_INFO = function() {
    try {

        if (document.MAINFORM.BUSI_ROLE.value == 'IMPORT') {
            EEHtml.getElementById("conf1").style.display = "none";
            EEHtml.getElementById("conf2").style.display = "none";
            EEHtml.getElementById("CONFBANK").style.display = "none";
        } else {
            EEHtml.getElementById("conf1").style.display = "";
            EEHtml.getElementById("conf2").style.display = "";
            EEHtml.getElementById("CONFBANK").style.display = "";
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
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
            commList = "BPOM_OTHER_NA";
            Chg.LoadCommission(commList, 'MAINREF', '', null, '', '', 'false');
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }
        SYF_BPOM_SET_CHARGE_AT();
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_SET_CHARGE_AT = function() {
    try {

        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoDef");
        if (xDO) {
            records = SYS_getRecords(xDO);
            for (i = 0; i < records.length; i++) {
                id = SYS_getRecID(records[i]);
                SYS_setFieldValue(xDO, id, "CHG_CHARGE_AT", '1');

            }
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("BUYR_ID", "BUYR_NM");
        Chg.Screen.mapForeignCust("SUPLR_ID", "SUPLR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_ClosePO.js", e);
    }
}