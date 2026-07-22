"path:SCRN/o2m/FAEF_InvFinancing.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvFinancing.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        alert(document.MAINFORM.FA_BA_FLG.value);
        if (SYS_ORG_FUNCTION_NAME == 'FinancingFromCE') {
            FA_BA_FLG();
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvFinancing.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvFinancing.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvFinancing.js", e);
    }
}

csDOScreenProto.FA_BA_FLG = function() {
    try {
        var LMT_AMT; // Utility Auto Fix Comments
        var invduedate; // Utility Auto Fix Comments
        var trfdate; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var vFA_BA_FLG; // Utility Auto Fix Comments
        LMT_AMT = SYS_getValueFromMain("FA_LMT_AMT");
        vFA_BA_FLG = SYS_getValueFromMain("FA_BA_FLG");
        type = SYS_getValueFromMain("FA_BUSI_TYPE");
        invduedate = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_DOC_DUE_DT.value);
        if (SYS_BeFloat(LMT_AMT) == 0 || FA_BA_FLG == '2') {
            document.MAINFORM.FA_BA_FLG.value = '2';
        } else {
            document.MAINFORM.FA_BA_FLG.value = '1';
        }
        if (type != 'EF' && type != 'DF') {
            document.MAINFORM.FA_BA_FLG.value = '';
        }
        alert(document.MAINFORM.FA_BA_FLG.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvFinancing.js", e);
    }
}