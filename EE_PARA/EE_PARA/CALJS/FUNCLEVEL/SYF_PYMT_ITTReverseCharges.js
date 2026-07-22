var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "ITT_REV_CHGS";
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTReverseCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.Screen.mapLocalCust("X103_BENECU_ID_59A", "X103_BENECU_NM_59A");
        Chg.Screen.mapForeignCust("C_MAIN_REF", "C_MAIN_REF", 'FRGN_AC_CCY', 'FRGN_AC_NO');

        SYT_ReverseCharges();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTReverseCharges.js", e);
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
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
        SYT_Set_Int_Flds_CustId();
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTReverseCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "ITT_REV_CHGS";
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTReverseCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTReverseCharges.js", e);
    }
}