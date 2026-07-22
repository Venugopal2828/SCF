"path:SCRN/o2m/FAEF_DFSUBFinancing.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBFinancing.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBFinancing.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBFinancing.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_LOAN_INT_RT.value = SYS_getValueFromMain("FA_LOAN_INT_RT");
        // For Historical Data 1204 start--
        if (SYS_FUNCTION_TYPE == 'PM') {
            var invoiceLmtAmtNow = document.MAINFORM.FA_INV_LMT_APPRV.value;
            var invoiceLmtAmtLast = document.MAINFORM.FA_TEMP_LMT.value;
            var lmtApprv = SYS_BeFloat(invoiceLmtAmtNow) - SYS_BeFloat(invoiceLmtAmtLast);
            var loanamt = SYS_BeFloat(lmtApprv) * (SYS_BeFloat(opener.document.MAINFORM.FA_LOAN_PERC.value) / 100);
            var lastloanamt = SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_AMT.value);
            var loanbal = lastloanamt + loanamt;
            document.MAINFORM.FA_INV_LOAN_AMT.value = loanamt;
            document.MAINFORM.FA_INV_LOAN_BAL.value = loanbal;
            document.MAINFORM.FA_FIN_LOAN_AMT.value = loanbal;
            document.MAINFORM.FA_INV_LOAN_EBAL.value = loanamt;
            EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_AMT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_BAL, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.FA_FIN_LOAN_AMT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_EBAL, 'onchange');
        }
        // --1204 end

    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBFinancing.js", e);
    }
}