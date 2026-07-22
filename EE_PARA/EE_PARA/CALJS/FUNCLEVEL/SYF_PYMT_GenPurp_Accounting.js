var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        win_onload_IntTrf();

        document.MAINFORM.X103_EXCH_RT_36.value = "1";
        document.MAINFORM.CPYT_DR_VAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CPYT_CR_VAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_AMT.value);
        document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_AMT.value);
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, document.MAINFORM.CR_CALC_AMT.value);
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, document.MAINFORM.DB_CALC_AMT.value);



        Chg.attchEvent(PYMTChgCallBack);
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_PYMT_GenPurp_Accounting.js", e);
    }
}