var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        if (document.MAINFORM.BENE_ID.value != '' && document.MAINFORM.BENE_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.BENE_ID.name, document.MAINFORM.BENE_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_BENE_ID.name, document.MAINFORM.TEMP_BENE_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        SYT_Chg_Note_Additional();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_ESCA_NoteAdditionalCharges.js", e);
    }
}