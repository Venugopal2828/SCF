var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RecoverDeferredCharges();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.APPL_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        document.MAINFORM.APPL_NM.value = document.MAINFORM.X103_ORDCU_NM_50A.value;
        document.MAINFORM.BENE_ID.value = document.MAINFORM.X103_ORDCU_ID_50A.value;
        document.MAINFORM.BENE_NM.value = document.MAINFORM.X103_ORDCU_NM_50A.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CASH_IND_onchange = function(event) {
    try {
        SYM_IWGT_setref();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_ITTRecoverDeferredCharges.js", e);
    }
}