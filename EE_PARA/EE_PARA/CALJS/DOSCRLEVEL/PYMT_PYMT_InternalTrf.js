"path:SCRN/PYMT_InternalTrf.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("PYMT_PYMT_InternalTrf.js", e);
    }
}

csDOScreenProto.Clr_App_Details = function() {
    try {
        document.MAINFORM.CPYT_DR_ID.value = "";
        document.MAINFORM.CPYT_DR_NAME.value = "";
        document.MAINFORM.CPYT_DR_ADD1.value = "";
        document.MAINFORM.CPYT_DR_ADD2.value = "";
        document.MAINFORM.CPYT_DR_ADD3.value = "";
        document.MAINFORM.APPL_CNTY_RES.value = "";
        document.MAINFORM.CPYT_DR_AC.value = "";
    } catch (e) {
        DisExcpt("PYMT_PYMT_InternalTrf.js", e);
    }
}

csDOScreenProto.Clr_Ben_Cust = function() {
    try {
        document.MAINFORM.CPYT_ASSGN_ID.value = "";
        document.MAINFORM.CPYT_ASSGN_NM.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD1.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD2.value = "";
        document.MAINFORM.CPYT_ASSGN_ADD3.value = "";
        document.MAINFORM.BENE_CNTY_RES.value = "";
        document.MAINFORM.CPYT_CR_AC.value = "";
        return;
    } catch (e) {
        DisExcpt("PYMT_PYMT_InternalTrf.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("PYMT_PYMT_InternalTrf.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("PYMT_PYMT_InternalTrf.js", e);
    }
}

csDOScreenProto.Get_X103_EXCH_RT_36 = function() {
    try {
        SYS_GetExchangeRate('CPYT_CR_CCY', 'CPYT_DR_CCY', 'BOOK_KEEPING_RATE', 'X103_EXCH_RT_36', ''); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("PYMT_PYMT_InternalTrf.js", e);
    }
}

csDOScreenProto.CR_CALC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.DB_CALC_AMT.value = "0.00";
    } catch (e) {
        DisExcpt("PYMT_PYMT_InternalTrf.js", e);
    }
}