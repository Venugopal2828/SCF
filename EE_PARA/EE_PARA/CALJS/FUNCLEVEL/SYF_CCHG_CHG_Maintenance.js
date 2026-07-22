var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('CCHG', 'SYM_CCHG_CHG_SetRef()');
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_Maintenance.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.setLocalCust(custId, '', '');
        Chg.Screen.protectAllChargeAt();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_Maintenance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_Maintenance.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_Maintenance.js", e);
    }
}