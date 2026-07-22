var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "OTT_ADDIT_CHGS";
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "OTT_ADDIT_CHGS";
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!Chk_Confirm()) {
            return false;
        }
        //SYM_PYMT_Chg_X103_VALUE_DT_32A();
        if (!SYT_Chk_CHG_FLD_LOCAL_CUST_AC_NO()) {
            return false;
        }
        SYM_PYMT_BalanceCheck_init();

        document.MAINFORM.X103_VALUE_DT_32A.value = document.MAINFORM.CHG_VALUE_DATE.value;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
        SYT_Set_Int_Flds_CustId();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var chg_ccy;
        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        Chg.Screen.mapForeignCust("C_MAIN_REF", "C_MAIN_REF", 'FRGN_AC_CCY', 'FRGN_AC_NO');
        Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
        chg_ccy = SYM_PYMT_set_charge_recovery_currency();
        if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'RE') {
            SYT_Charge_Set_Types("OT");
            Chg.Screen.setChargeValue('SWIFT_CHG_PYT', chg_ccy, '0');
            Chg.Screen.setChargeValue('PYMT_COMM', chg_ccy, '0');
            Chg.Screen.setChargeValue(chargeCode1, chg_ccy, '0');
        }
        SYT_RecoverAdditionalCharges();
        if (SYS_FUNCTION_NAME == "OTTRecoverAdditionalCharges") {
            document.MAINFORM.CHG_OVERRIDE_IND.value = 'No';
        }
        //SYF_PYMT_CHG_VALUE_DATE();
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_BalanceCheckSuccess = function() {
    try {

        SYF_PYMT_initialize();
        if (!SYF_PYMT_checkErrorDescription()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountNumberSyncAndBalanceNumeric()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountStatus()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountCurrenciesSync()) {
            return false;
        }
        if (!SYF_PYMT_checkAccountStyle()) {
            return false;
        }
        if (!SYF_PYMT_checkSufficientFunds()) {
            return false;
        }
        document.MAINFORM.BALANCECHECK_RESPONSE.value = "true";
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTRecoverAdditionalCharges.js", e);
    }
}