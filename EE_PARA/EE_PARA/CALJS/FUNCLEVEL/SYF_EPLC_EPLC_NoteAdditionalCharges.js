var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        Chg.Screen.mapLocalCust(document.MAINFORM.BENE_ID.name, document.MAINFORM.BENE_NM.name);
        if (document.MAINFORM.APPL_ID.value != '' && document.MAINFORM.APPL_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.APPL_ID.name, document.MAINFORM.APPL_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_APPL_ID.name, document.MAINFORM.TEMP_APPL_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYM_EPLC_M_EPLC_SWIFT_CHG();
            SYM_EPLC_M_EPLC_COURIER_CHG();
            Chg.calculate(['EPLC_POST_CHG_NA'], document.MAINFORM.LC_CCY.value);
            SYT_CAL_COMM("EPLC_PRE-ADV_COMM_NA", document.MAINFORM.LC_CCY.value);
            SYT_CAL_COMM("EPLC_ADVISE_COMM_NA", document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
            Chg.calculate(["EPLC_CONF_COMM_NA"], document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);
            Chg.calculate(['EPLC_AMEND_COMM_NA'], document.MAINFORM.LC_CCY.value);
            Chg.calculate(["EPLC_CANCEL_CHG_NA"], document.MAINFORM.LC_CCY.value);
            Chg.calculate(["EPLC_DISCREP_COLL"], document.MAINFORM.LC_CCY.value);
            Chg.calculate(["EPLC_UTIL_SIGHT_CHG_NA"], document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);
            Chg.calculate(["EPLC_UTIL_DEF_CHG_NA"], document.MAINFORM.LC_CCY.value);
            Chg.calculate(["EPLC_TRANSFER_COMM_NA"], document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);
            Chg.calculate(["EPLC_HANDLING_COMM"], document.MAINFORM.LC_CCY.value);
            Chg.calculate(["EPLC_REL_GOODS_CHG_NA"], document.MAINFORM.LC_CCY.value);
            SYM_EPLC_M_EPLC_OTHER_CHG();
        }
        SYT_Chg_Note_Additional();
        CHG_DefCharge_chargeAtOnchange();
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = 1;
        //SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P');
        FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*FLD_EPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_NoteAdditionalCharges.js*FLD_EPLC_CHG_VALUE_DATE_onclick", e);
    }
}