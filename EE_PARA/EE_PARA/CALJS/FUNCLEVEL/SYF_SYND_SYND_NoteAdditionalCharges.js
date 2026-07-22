var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        Chg.Screen.mapLocalCust(document.MAINFORM.LEAD_BK_ID.name, document.MAINFORM.LEAD_BK_NM.name);
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'RE') {
            SYT_CAL_COMM("OTHER_CHG", document.MAINFORM.PCPT_CCY.value);
        }
        Chg.Screen.protectAllChargeFor();
        Chg.Screen.unprotectAllBalAmt();
        CHG_hidden_TR('tr_paid_by');
        CHG_hidden_TR('tr_paid_at');
        SYT_Chg_Note_Additional();
        CHG_DefCharge_chargeAtOnchange();
        var other_Chg = Chg.Screen.getTrxChargeByCommCode('OTHER_CHG');
        var obj = $(other_Chg._getFldId(Chg.FLD_ACTIVE_CCY));
        obj.className = 'CHAR_P';
        obj.disabled = true;
        var obj = $(other_Chg._getFldId("CHG_AGREEMENT_OVERRIDE"));
        obj.disabled = false;
        other_Chg.hideOverRideColunm(false);
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_BAL_AMT_2, 'P');
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*FLD_SYND_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*FLD_SYND_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*FLD_SYND_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*FLD_SYND_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*FLD_SYND_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*FLD_SYND_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_SYND_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_NoteAdditionalCharges.js*FLD_SYND_CHG_VALUE_DATE_onclick", e);
    }
}