var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'YES';
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_LoadDoComplete = function() {
    try {

        SYS_GetDataForDO_S("CAL_TBPO_PAY_OBLIG", "N", false, '', "TBPO_PAY_OBLIG");
        SYF_BPOM_CAL_TSU_BPOOBLGR_AMT();
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("BUYR_ID", "BUYR_NM");
        Chg.Screen.mapForeignCust("SUPLR_ID", "SUPLR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
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
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }
        SYF_BPOM_SET_CHARGE_AT();
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
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
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_TSU_PAY_CONF_AMT = function() {
    try {

        var TSU_PAY_CONF_AMT; // Utility Auto Fix Comments
        if (document.MAINFORM.BUSI_ROLE.value == 'EXPORT') {
            TSU_PAY_CONF_AMT = SYS_BeFloat(document.MAINFORM.TSU_PAY_AMT.value) * SYS_BeFloat(document.MAINFORM.CONF_PCT.value) / 100;
            document.MAINFORM.TSU_PAY_CONF_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_PAY_CONF_AMT);
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_CONF_FIELDS = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.BUSI_ROLE.value == 'EXPORT') {
            //sFieldList = "TSU_TID;TSU_GOODS_DESC;CONF_ADDED;CONF_PCT;CONF_BAL;CONF_BK_ID;CONF_BK_NM;CONF_BK_ADD1;CONF_BK_ADD2;CONF_BK_ADD3;CONF_BK_MAIL_ADD;CONF_BK_SW_TAG;CONF_BK_SW_ADD";
            //sMappingList = "TSU_TID;TSU_GOODS_DESC;CONF_ADDED;CONF_PCT;CONF_BAL;CONF_BK_ID;CONF_BK_NM;CONF_BK_ADD1;CONF_BK_ADD2;CONF_BK_ADD3;CONF_BK_MAIL_ADD;CONF_BK_SW_TAG;CONF_BK_SW_ADD";
            SYS_GetTableDataByRule_S('SYF_BPOM_CloseBPO_SYF_BPOM_CAL_CONF_FIELDS_0', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();
        SYF_BPOM_HIDDEN_CONF_INFO();
        SYF_BPOM_CAL_CONF_FIELDS();
        SYF_BPOM_CAL_TSU_PAY_CONF_AMT();
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CAL_TSU_BPOOBLGR_AMT = function() {
    try {

        var PEC; // Utility Auto Fix Comments
        var PEC2; // Utility Auto Fix Comments
        var TSU_BPOOBLGR_AMT; // Utility Auto Fix Comments
        var EEAuto_do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        EEAuto_do = SYS_getDoByXpath('TBPO_PAY_OBLIG'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("TBPO_PAY_OBLIG");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(EEAuto_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                PEC = SYS_getValFromRec(record, 'PERCENT');
                PEC2 = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
                if (document.MAINFORM.BUSI_ROLE.value == 'IMPORT') {
                    TSU_BPOOBLGR_AMT = SYS_BeFloat(PEC) * SYS_BeFloat(document.MAINFORM.TSU_PAY_AMT.value) / 100;
                } else if (document.MAINFORM.BUSI_ROLE.value == 'EXPORT') {
                    TSU_BPOOBLGR_AMT = SYS_BeFloat(PEC) * SYS_BeFloat(document.MAINFORM.TSU_PAY_AMT.value) * PEC2 / 100 / 100;
                }
                SYS_setFieldValue(EEAuto_do, id, "TSU_BPOOBLGR_AMT", TSU_BPOOBLGR_AMT); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
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
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
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
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_CloseBPO.js", e);
    }
}