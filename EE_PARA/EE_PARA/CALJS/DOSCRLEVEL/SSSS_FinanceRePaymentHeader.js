"path:SCRN/DO/FinanceRePaymentHeader.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}

csDOScreenProto.FinanceTimesChange = function() {
    try {
        var nFinanceTimes; // Utility Auto Fix Comments
        nFinanceTimes = document.MAINFORM.CFNC_I_FINC_NO.value;
        if (nFinanceTimes > 0) {
            document.MAINFORM.CFNC_I_RFD_NO.value = nFinanceTimes;
        } else {
            SYS_CheckError(document.MAINFORM.CFNC_I_FINC_NO, "Finance Times Cannot be 0 !"); // Utility Auto Fix Comments
            document.MAINFORM.CFNC_I_FINC_NO.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}

csDOScreenProto.FormatAMT = function() {
    try {
        var nBalanceAMT; // Utility Auto Fix Comments
        var nFinanceAMT; // Utility Auto Fix Comments
        var sCCY; // Utility Auto Fix Comments
        sCCY = document.MAINFORM.C_TRX_CCY_M.value; // Utility Auto Fix Comments
        nFinanceAMT = document.MAINFORM.CFNC_N_CR_AMT.value;
        nBalanceAMT = document.MAINFORM.CFNC_N_CR_BAL.value;
        document.MAINFORM.CFNC_N_CR_AMT.value = SYT_AmtFormat(sCCY, nFinanceAMT);
        document.MAINFORM.CFNC_N_CR_BAL.value = SYT_AmtFormat(sCCY, nBalanceAMT);
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}

csDOScreenProto.InitFinanceAmount = function() {
    try {
        var fieldlist; // Utility Auto Fix Comments
        var sFinanceRef; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        //sFinanceRef = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.INT_C_MAIN_REF.value = SYS_getValueFromMain('C_MAIN_REF');
        //strSQLWhere = "C_MAIN_REF='" + sFinanceRef + "'";
        //fieldlist = "CFNC_N_FINC_TTL_AMT;C_TRX_CCY;CFNC_N_FINC_TTL_BAL";
        SYS_GetTableDataByRule_S('SSSS_FinanceRePaymentHeader_InitFinanceAmount_0', '1');
        FormatAMT();
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        InitFinanceAmount();
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}

csDOScreenProto.CFNC_I_RFD_NO_onchange = function(event) {
    try {
        FinanceTimesChange();
    } catch (e) {
        DisExcpt("SSSS_FinanceRePaymentHeader.js", e);
    }
}