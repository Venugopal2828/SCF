var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TEMP_DRWR_ID.value = 'No Foreign ID';
        document.MAINFORM.TEMP_DRWR_NM.value = 'No Foreign Name';
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chg_Tracer = function() {
    try {
        var arr = ['IMCO_TRCR_CHG_NA'];

        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_Chg_Tracer", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chg_UNPD = function() {
    try {
        var arr = ['IMCO_UNPD_COLL_NA'];
        var amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_Chg_UNPD", e);
    }
}

csFuncLevelProto.SYF_IMCO_IMCO_AMEND_COMM = function() {
    try {
        var arr = ['IMCO_AMEND_COMM_NA'];

        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_IMCO_AMEND_COMM", e);
    }
}

csFuncLevelProto.SYF_IMCO_IMCO_COLL_COMM = function() {
    try {
        var arr = ['IMCO_COLL_COMM_NA'];

        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_IMCO_COLL_COMM", e);
    }
}

csFuncLevelProto.SYF_IMCO_IMCO_DEF_PAY_COMM = function() {
    try {
        var arr = ['IMCO_DEF_PAY_COMM_NA'];

        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_IMCO_DEF_PAY_COMM", e);
    }
}

csFuncLevelProto.SYF_IMCO_IMCO_FREE_PAYT = function() {
    try {
        var arr = ['IMCO_FREE_PAYT_NA'];

        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_IMCO_FREE_PAYT", e);
    }
}

csFuncLevelProto.SYF_IMCO_Postage_charge = function() {
    try {
        var arr = ['IMCO_POST_CHG_NA'];
        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, 0);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_Postage_charge", e);
    }
}

csFuncLevelProto.SYF_IMCO_Rel_Goods_CHG = function() {
    try {
        var arr = ['IMCO_REL_GOODS_CHG_NA'];
        var amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        var ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*SYF_IMCO_Rel_Goods_CHG", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*editRecordCheck", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        Chg.Screen.mapLocalCust(document.MAINFORM.DRWE_ID.name, document.MAINFORM.DRWE_NM.name);
        if (document.MAINFORM.DRWR_ID.value != '' && document.MAINFORM.DRWR_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.DRWR_ID.name, document.MAINFORM.DRWR_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_DRWR_ID.name, document.MAINFORM.TEMP_DRWR_NM.name);
        }

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_IMCO_IMCO_COLL_COMM();
            SYF_IMCO_IMCO_DEF_PAY_COMM();
            SYF_IMCO_IMCO_FREE_PAYT();
            SYM_IMCO_COURIER_FEE_CHG();
            SYF_IMCO_Postage_charge();
            SYF_IMCO_Rel_Goods_CHG();
            SYM_IMCO_Chg_Calculate_IMCOSWIFT();
            SYM_IMCO_Chg_Calculation_Other();
            SYF_IMCO_IMCO_AMEND_COMM();
            SYF_IMCO_Chg_Tracer();
            SYF_IMCO_Chg_UNPD();
        }


        // SYT_Chg_Note_Additional(); remove on 20200522 for Unique test
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*FLD_IMCO_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_NoteAdditionalCharges.js*FLD_IMCO_CHG_VALUE_DATE_onclick", e);
    }
}