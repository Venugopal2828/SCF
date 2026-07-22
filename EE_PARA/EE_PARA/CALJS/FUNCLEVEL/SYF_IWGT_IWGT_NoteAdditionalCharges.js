var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.SYF_IWGT_Chg_Calculate_AdviceComm = function() {
    try {
        var arr = ['IWGT_ADV_COMM_NA'];
        var amt = EEHtml.getElementById("GTEE_AMT").value;
        var ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*SYF_IWGT_Chg_Calculate_AdviceComm", e);
    }
}

csFuncLevelProto.SYF_IWGT_Chg_Calculate_AmendComm = function() {
    try {
        var arr = ['IWGT_AMEND_COMM_NA'];
        var amt = EEHtml.getElementById("GTEE_AMT").value;
        var ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*SYF_IWGT_Chg_Calculate_AmendComm", e);
    }
}

csFuncLevelProto.SYF_IWGT_Chg_Calculate_IssComm = function() {
    try {
        var arr = ['IWGT_ISS_COMM_NA'];
        var amt = EEHtml.getElementById("GTEE_AMT").value;
        var ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*SYF_IWGT_Chg_Calculate_IssComm", e);
    }
}

csFuncLevelProto.SYF_IWGT_Chg_Calculate_POST = function() {
    try {
        var arr = ['IWGT_POST_CHG_NA'];
        var amt = EEHtml.getElementById("GTEE_AMT").value;
        var ccy = EEHtml.getElementById("GTEE_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*SYF_IWGT_Chg_Calculate_POST", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*editRecordCheck", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        Chg.Screen.mapLocalCust(document.MAINFORM.BENE_ID.name, document.MAINFORM.BENE_NM.name);
        if (document.MAINFORM.APPL_ID.value != '' && document.MAINFORM.APPL_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_APPL_ID.name, document.MAINFORM.TEMP_APPL_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_APPL_ID.name, document.MAINFORM.TEMP_APPL_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_IWGT_Chg_Calculate_AdviceComm();
            SYF_IWGT_Chg_Calculate_IssComm();
            SYF_IWGT_Chg_Calculate_AmendComm();
            SYF_IWGT_Chg_Calculate_POST();
            SYM_IWGT_Chg_Calculate_Other();
            SYM_IWGT_Chg_Calculate_SWIFT();
            SYM_IWGT_Chg_Calculate_courier();
        }

        SYT_Chg_Note_Additional();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*FLD_IWGT_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_NoteAdditionalCharges.js*FLD_IWGT_CHG_VALUE_DATE_onclick", e);
    }
}