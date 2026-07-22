var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_EXCO_CHARGE_DT();
        SYM_EXCO_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_EXCO_TEMP_CHARGE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*InitValues", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*editRecordCheck", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        Chg.Screen.mapLocalCust(document.MAINFORM.DRWR_ID.name, document.MAINFORM.DRWR_NM.name);
        if (document.MAINFORM.DRWE_ID.value != '' && document.MAINFORM.DRWE_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.DRWE_ID.name, document.MAINFORM.DRWE_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_DRWE_ID.name, document.MAINFORM.TEMP_DRWE_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYM_EXCO_M_EXCO_SWIFT_CHG();
            SYM_EXCO_M_EXCO_COURIER_CHG();
            SYT_CAL_COMM("EXCO_POST_CHG_NA", document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM("EXCO_COLL_COMM_NA", document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM("EXCO_DEF_PAY_COMM_NA", document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM('EXCO_FREE_PAYT_NA', document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM("EXCO_REL_GOODS_CHG_NA", document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM("EXCO_UNPD_COLL_NA", document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM('EXCO_TRCR_CHG_NA', document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM('EXCO_AMEND_COMM_NA', document.MAINFORM.COLL_CCY.value);
            SYT_CAL_COMM('EXCO_OTHER_CHG', document.MAINFORM.COLL_CCY.value);
        }
        SYT_Chg_Note_Additional();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*FLD_EXCO_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_NoteAdditionalCharges.js*FLD_EXCO_CHG_VALUE_DATE_onclick", e);
    }
}