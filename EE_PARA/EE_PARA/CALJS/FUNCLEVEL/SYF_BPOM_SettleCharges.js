var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_BPOM_CHG_INIT();
        CHG_setAllChargeAt("1");
        //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
    } catch (e) {
        DisExcpt("SYF_BPOM_SettleCharges.js", e);
    }
}

csFuncLevelProto.SYF_BPOM_CHG_INIT = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust("BUYR_ID", "BUYR_NM");
        Chg.Screen.mapForeignCust("SUPLR_ID", "SUPLR_NM");
    } catch (e) {
        DisExcpt("SYF_BPOM_SettleCharges.js", e);
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
            commList = "";
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
        DisExcpt("SYF_BPOM_SettleCharges.js", e);
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
        DisExcpt("SYF_BPOM_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_SettleCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BPOM_SettleCharges.js", e);
    }
}