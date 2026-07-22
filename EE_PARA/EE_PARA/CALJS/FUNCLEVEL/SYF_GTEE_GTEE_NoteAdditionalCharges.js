var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_Cal_C_TRANS_CODE();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return Cal_eloan_fields_GTEE();
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TEMP_BENE_ID.value = 'NoForeignID';
        document.MAINFORM.TEMP_BENE_NM.value = 'No Foreign Name';
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        if (document.MAINFORM.BENE_ID.value != '' && document.MAINFORM.BENE_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.BENE_ID.name, document.MAINFORM.BENE_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_BENE_ID.name, document.MAINFORM.TEMP_BENE_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        var arr = ['GTEE_AMEND_COMM', 'GTEE_COURIER_CHG', 'GTEE_POST_CHG', 'GTEE_SWIFT_CHG'];
        var amt = document.MAINFORM.GTEE_AMT.value;
        var ccy = document.MAINFORM.GTEE_CCY.value;

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            Chg.calculate(arr, ccy, amt);
            SYM_GTEE_Chg_Calculate_Other();
        }
        Chg.Screen.unprotectAllBalAmt();
        CHG_hidden_TR('tr_paid_by');
        CHG_hidden_TR('tr_paid_at');
        SYT_Chg_Note_Additional();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*FLD_GTEE_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_NoteAdditionalCharges.js*FLD_GTEE_CHG_VALUE_DATE_onclick", e);
    }
}