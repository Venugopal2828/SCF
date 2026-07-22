var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*editRecordCheck", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_REIM_Chg_Screen_ISSUE();
        if (document.MAINFORM.CLM_BK_ID.value != "" && document.MAINFORM.CLM_BK_NM.value != "") {
            Chg.Screen.mapForeignCust(document.MAINFORM.CLM_BK_ID.name, document.MAINFORM.CLM_BK_NM.name, document.MAINFORM.LC_CCY.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_CLM_BK_ID.name, document.MAINFORM.TEMP_CLM_BK_NM.name, document.MAINFORM.LC_CCY.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYT_CAL_COMM('OTHER_CHG', document.MAINFORM.LC_CCY.value);
            CHG_setAllCollCcy(SYS_LOCAL_CCY);
            SYT_Set_TRXCCY2CHG();
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE;
        }
        CHG_setAllChargeAt("1");
        Chg.Screen.protectAllChargeAt();
        Chg.Screen.unprotectAllBalAmt();
        //SYT_Chg_Note_Additional(); 
        CHG_DefCharge_chargeAtOnchange();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P');
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*FLD_REIM_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*FLD_REIM_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*FLD_REIM_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*FLD_REIM_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*FLD_REIM_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*FLD_REIM_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_REIM_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_REIM_REIM_NoteAdditionalCharges.js*FLD_REIM_CHG_VALUE_DATE_onclick", e);
    }
}