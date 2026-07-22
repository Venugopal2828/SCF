var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        document.MAINFORM.CURRNT_STATUS.value = 'ITT_ADDIT_CHGS';
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'ITT_ADDIT_CHGS';
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
            Chg.Screen.mapForeignCust("C_MAIN_REF", "C_MAIN_REF", 'FRGN_AC_CCY', 'FRGN_AC_NO');
            Chg.init('TT Buying', 'TT Buying', 'TT Buying', 'TT Buying');
            var chg_ccy = SYM_PYMT_set_charge_recovery_currency();
            if (SYS_FUNCTION_TYPE != 'EC') {
                Chg.Screen.setChargeValue('71G_REC_CHGS', chg_ccy, '0');
                Chg.Screen.setChargeValue('INW_PYT_COMM', chg_ccy, '0');
                Chg.Screen.setChargeValue('SWIFT_CHG_PYT', chg_ccy, '0');
            }
        }
        SYT_RecoverAdditionalCharges();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!Chk_Confirm()) {
            return false;
        }
        SYM_PYMT_BalanceCheck_init();
        SYT_Set_Int_Flds_CustId();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverAdditionalCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverAdditionalCharges.js", e);
    }
}