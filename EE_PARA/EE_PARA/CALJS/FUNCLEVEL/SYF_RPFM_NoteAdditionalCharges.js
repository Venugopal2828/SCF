var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        if (document.MAINFORM.SYND_PART_ID.value == '' || document.MAINFORM.SYND_PART_NM.value == '') {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.GRANTOR_ID.value;
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.GRANTOR_NM.value;
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_RPFM_Rest_Chg = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM') {
            var sCommCodeArr = new Array('RPFM_OTHER_CHG');
            var sTrxCcy = document.MAINFORM.PART_RISK_CCY.value;
            var nTrxAmt = document.MAINFORM.PART_RISK_AMT.value;
            var dStartDate = SYS_BUSI_DATE;
            var dEndDate = document.MAINFORM.PART_MAT_DT.value;
            SYT_CAL_COMM(sCommCodeArr, sTrxCcy, nTrxAmt, dStartDate, dEndDate);
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*SYF_RPFM_Rest_Chg", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        Chg.Screen.mapLocalCust(document.MAINFORM.GRANTOR_ID.name, document.MAINFORM.GRANTOR_NM.name);
        if (document.MAINFORM.SYND_PART_ID.value != '' && document.MAINFORM.SYND_PART_NM.value != '') {
            Chg.Screen.mapForeignCust(document.MAINFORM.SYND_PART_ID.name, document.MAINFORM.SYND_PART_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_BENE_ID.name, document.MAINFORM.TEMP_BENE_NM.name);
        }
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        SYF_RPFM_Rest_Chg();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYT_Chg_Note_Additional();
        }
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P');
        if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "EC") {
            //SYT_Set_Branch_Info();
        }
        CHG_DefCharge_chargeAtOnchange();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P'); //added
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P'); //added
        SYT_ChangeFldClass(document.MAINFORM.CHG_GETAC_BTN, 'P'); //added
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*FLD_RPFM_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*FLD_RPFM_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*FLD_RPFM_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*FLD_RPFM_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*FLD_RPFM_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*FLD_RPFM_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_RPFM_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_RPFM_NoteAdditionalCharges.js*FLD_RPFM_CHG_VALUE_DATE_onclick", e);
    }
}