var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'DI_ADDIT_CHGS';
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'DI_ADDIT_CHGS';
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
            Chg.Screen.mapForeignCust("C_MAIN_REF", "C_MAIN_REF", 'FRGN_AC_CCY', 'FRGN_AC_NO');
            Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
            var chg_ccy;
            if (SYS_BANK_COUNTRY == "ZM") {
                chg_ccy = "USD";
            } else {
                chg_ccy = SYS_LOCAL_CCY;
            }
            if (SYS_FUNCTION_TYPE != 'EC') {
                Chg.Screen.setChargeValue('DI_CMSN', chg_ccy, '0');
                Chg.Screen.setChargeValue('DI_REIS', chg_ccy, '0');
                Chg.Screen.setChargeValue('DI_REPU', chg_ccy, '0');
            }
        }
        SYT_RecoverAdditionalCharges();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!Chk_Confirm()) {
            return false;
        }
        SYM_PYMT_BalanceCheck_init();

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_DraftRecoverAdditionalCharges.js", e);
    }
}