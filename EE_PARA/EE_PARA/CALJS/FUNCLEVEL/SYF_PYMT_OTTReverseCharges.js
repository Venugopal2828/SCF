var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "OTT_REV_CHGS";
        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTReverseCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = "OTT_REV_CHGS";
        document.MAINFORM.C_UNIT_CODE.value = "CSBANK";
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTReverseCharges.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR, "O");
        var RecChgsObj; // Utility Auto Fix Comments
        Chg.Screen.mapLocalCust("X103_ORDCU_ID_50A", "X103_ORDCU_NM_50A");
        Chg.Screen.mapForeignCust("C_MAIN_REF", "C_MAIN_REF", 'FRGN_AC_CCY', 'FRGN_AC_NO');
        SYT_ReverseCharges();
        if (Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG')) {
            RecChgsObj = Chg.Screen.getTrxChargeByCommCode('OTT_71GCHG'); // Utility Auto Fix Comments
            RecChgsObj.reset();
            RecChgsObj.hide();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTReverseCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        document.MAINFORM.COUNTRY.value = SYS_BANK_COUNTRY;
        SYT_Audit_Main();
        SYT_Set_Int_Flds_CustId();
        if (!Chk_Confirm()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTReverseCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_OTTReverseCharges.js", e);
    }
}