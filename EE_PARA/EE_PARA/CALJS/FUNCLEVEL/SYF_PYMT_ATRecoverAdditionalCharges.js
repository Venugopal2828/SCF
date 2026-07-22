var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "0";
        CHG_allTrxChargeAt_onchange();
        SYT_ConfigureHelpLink();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            if (document.MAINFORM.RECORDER_TYPE.value.toUpperCase() == "CUSTOMER") {
                Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
            } else if (document.MAINFORM.BENE_AC_TYPE.value.toUpperCase() == "CUSTOMER") {
                Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
            } else {
                Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
            }
            Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
            var chg_ccy = SYM_PYMT_set_charge_recovery_currency();
            if (SYS_FUNCTION_TYPE != 'EC') {
                Chg.Screen.setChargeValue('PYMT_COMM', chg_ccy, '0');
                Chg.Screen.setChargeValue('INW_PYT_COMM', chg_ccy, '0');
                Chg.Screen.setChargeValue('DI_PYFEE', chg_ccy, '0');
                Chg.Screen.setChargeValue('SWIFT_INT', chg_ccy, '0');
                Chg.Screen.setChargeValue('STP_FAIL', chg_ccy, '0');
                Chg.Screen.setChargeValue('FND_WD', chg_ccy, '0');
            }
        }
        SYT_Chgs_Without_Deferred_Terms();
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "AT_ADDIT_CHGS";
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'AT_ADDIT_CHGS';
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_ATRecoverAdditionalCharges.js", e);
    }
}