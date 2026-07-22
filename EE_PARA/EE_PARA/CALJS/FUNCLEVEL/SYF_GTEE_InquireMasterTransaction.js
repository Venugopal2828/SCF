var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        //CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //var SQL = "C_CUST_ID='liability' AND C_CURRENCY = '" + SYS_LOCAL_CCY + "' AND C_AC_IDENTIFIER='C'";
        //            SYS_InqCUBK_Sql('LIAB_ACNO', SQL);
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_APPL_AC_MRGN_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //var SQL = "C_CUST_ID='liability' AND C_CURRENCY = '" + SYS_LOCAL_CCY + "' AND C_AC_IDENTIFIER<>'C'";
        //            SYS_InqCUBK_Sql('ASSET_ACNO', SQL);
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_ASSET_ACNO_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_InquireMasterTransaction.js*FLD_GTEE_view_1_onclick", e);
    }
}