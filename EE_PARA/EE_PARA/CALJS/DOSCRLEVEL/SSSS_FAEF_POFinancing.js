"path:SCRN/o2m/FAEF_POFinancing.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.PO_LOAN_TIMES.value = SYS_BeFloat(document.MAINFORM.PO_LOAN_TIMES.value) + 1;

        SYS_setValueToMain('FA_TTL_LOAN_AMT', SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_LOAN_AMT.value));

     
    } catch (e) {
        DisExcpt("SSSS_FAEF_POFinancing.js*ConfirmBusinessCall", e);
    }
}

csDOScreenProto.PO_LOAN_AMT = function() {
    try {
        var LoanAmt = SYS_BeFloat(document.MAINFORM.PO_LOAN_AMT.value);
       // var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.PO_LOAN_AVL.value);
       var ttlLoanAvl = SYS_BeFloat(document.MAINFORM.TSU_TTL_NET_AMT.value);
        if (LoanAmt > ttlLoanAvl) {
            alert('Request Loan Amount cannot more than Available Amount for Finance!');
            document.MAINFORM.PO_LOAN_AMT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_POFinancing.js*PO_LOAN_AMT", e);
    }
}

csDOScreenProto.PO_LOAN_AMT_onchange = function() {
    try {
        PO_LOAN_AMT();
        document.MAINFORM.PO_LOAN_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_LOAN_AMT.value);
        document.MAINFORM.PO_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_LOAN_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_POFinancing.js*PO_LOAN_AMT_onchange", e);
    }
}