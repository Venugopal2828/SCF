var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "DI_REV_CHGS";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_ReverseCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        Chg.Screen.mapForeignCust("C_MAIN_REF", "C_MAIN_REF", 'FRGN_AC_CCY', 'FRGN_AC_NO');

        SYT_ReverseCharges();
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_ReverseCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "DI_REV_CHGS";
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_ReverseCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!Chk_Confirm()) {
            return false;
        }
        if (SYS_FUNCTION_TYPE != 'EC') {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES) + 1;
        } else {
            document.MAINFORM.INT_I_EVENT_TIMES.value = SYS_BeFloat(SYS_I_EVENT_TIMES);
        }
        document.MAINFORM.C_MODULE.value = SYS_MODULE_NAME;
        document.MAINFORM.C_UNIT_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY; // Utility Auto Fix Comments
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_ReverseCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_DI_ReverseCharges.js", e);
    }
}