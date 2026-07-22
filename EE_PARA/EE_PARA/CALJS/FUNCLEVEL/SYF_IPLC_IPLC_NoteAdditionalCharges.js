var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        //SYS_InqCUBK_Sql('TEST', 'WHERE 1=1');
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_Cal_C_TRANS_CODE();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TEMP_BENE_ID.value = 'NoForeignID';
        document.MAINFORM.TEMP_BENE_NM.value = 'No Foreign Name';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHG_IPLC_OPEN_COMM_NA = function() {
    try {
        var arr = ['IPLC_OPEN_COMM_NA'];

        var ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*SYF_IPLC_CHG_IPLC_OPEN_COMM_NA", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHG_IPLC_UTIL_SIGHT_CHG_NA = function() {
    try {
        var arr = ['IPLC_UTIL_SIGHT_CHG_NA'];
        var ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*SYF_IPLC_CHG_IPLC_UTIL_SIGHT_CHG_NA", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*editRecordCheck", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        Chg.Screen.mapLocalCust(document.MAINFORM.APPL_ID.name, document.MAINFORM.APPL_NM.name);
        if (document.MAINFORM.BENE_ID.value != '' && document.MAINFORM.BENE_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.BENE_ID.name, document.MAINFORM.BENE_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_BENE_ID.name, document.MAINFORM.TEMP_BENE_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        var arr = ['IPLC_TRANSFER_COMM_NA', 'IPLC_POST_CHG_NA', 'IPLC_AMEND_COMM_NA', 'IPLC_CANCEL_CHG_NA', 'IPLC_PRE-ADV_COMM_NA', 'IPLC_REL_GOODS_CHG_NA', 'IPLC_UTIL_DEF_CHG_NA'];
        var amt = 0;
        var ccy = EEHtml.getElementById('LC_CCY').value;

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            Chg.calculate(arr, ccy, amt);
            SYF_IPLC_CHG_IPLC_OPEN_COMM_NA();
            SYF_IPLC_CHG_IPLC_UTIL_SIGHT_CHG_NA();
            SYM_IPLC_Chg_DISCREP_COLL();
            SYM_IPLC_Chg_SpecialHandlingFee();
            SYM_IPLC_Chg_SpecialCourier();
            SYM_IPLC_Chg_SWIFT_CHG();
            SYM_IPLC_Chg_Calculation_Other();
        }
        SYT_Chg_Note_Additional();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*FLD_IPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_NoteAdditionalCharges.js*FLD_IPLC_CHG_VALUE_DATE_onclick", e);
    }
}