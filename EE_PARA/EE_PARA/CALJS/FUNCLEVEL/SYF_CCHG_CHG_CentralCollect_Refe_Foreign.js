var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('CCHG', 'SYM_CCHG_CHG_SetRef()');
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        OPEN();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_CCHG_ChgCentralCollectInit();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Chg.Screen.mapLocalCust(document.MAINFORM.DRWR_ID.name, document.MAINFORM.DRWR_NM.name);
        Chg.Screen.mapForeignCust(document.MAINFORM.DRWE_ID.name, document.MAINFORM.DRWE_NM.name);
        Chg.Screen.protectAllChargeFor();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.SYF_CCHG_ChgCentralCollectInit = function() {
    try {

        if (typeof strLocalCustId !== "undefined" && strLocalCustId != null && strLocalCustId != "null") {
            document.MAINFORM.DRWR_ID.value = strLocalCustId;
            document.MAINFORM.DRWR_NM.value = strLocalCustId; // Utility Auto Fix Comments
            EEHtml.fireEvent(document.MAINFORM.DRWR_ID, "onchange");
        } else {
            document.MAINFORM.DRWR_ID.value = "CS001";
            document.MAINFORM.DRWR_NM.value = "TEST";
        }

        if (strForCustId != "null") {
            alert(strForCustId);
            document.MAINFORM.DRWE_ID.value = strForCustId;
            EEHtml.fireEvent(document.MAINFORM.DRWE_ID, "onchange");
        } else {
            strForCustId = "";
        }
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}

csFuncLevelProto.FLD_CCHG_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_CCHG_CHG_CentralCollect_Refe_Foreign.js", e);
    }
}