"path:SCRN/DO/Claim.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Claim.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Claim.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Claim.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Hidden_Credit_Debit_tab();

    } catch (e) {
        DisExcpt("SSSS_Claim.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SubDoFrame.showDO("Claim.DebitHeader_ClaimDo", "B_div", "Claim Debit");
        SubDoFrame.showDO("Claim.CreditHeader_ClaimDo", "C_div", "Claim Credit");
    } catch (e) {
        DisExcpt("SSSS_Claim.js", e);
    }
}

csDOScreenProto.set_DebitCredit_value = function() {
    try {
        SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_AMT_TTLCCY').value = SYT_AmtFormat(document.MAINFORM.CLM_CCY.value, document.MAINFORM.CLM_TRX_CCY_AMT.value);
        SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_AMT_TTLCCY').value = SYT_AmtFormat(document.MAINFORM.CLM_CCY.value, document.MAINFORM.CLM_TRX_CCY_AMT.value);
        SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_CCY').value = document.MAINFORM.CLM_CCY.value;
        SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_CCY').value = document.MAINFORM.CLM_CCY.value;

        EEHtml.fireEvent(SYS_getScreenObjByxpath('Claim.CreditHeader_ClaimDo', 'CPYT_CR_TTL_AMT_TTLCCY'), 'onchange');
        EEHtml.fireEvent(SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_AMT_TTLCCY'), 'onchange');
    } catch (e) {
        DisExcpt("SSSS_Claim.js", e);
    }
}

csDOScreenProto.CLM_TRX_CCY_AMT_onchange = function(event) {
    try {
        Hidden_Credit_Debit_tab();
        document.MAINFORM.CLM_TRX_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.CLM_CCY.value, document.MAINFORM.CLM_TRX_CCY_AMT.value);
        set_DebitCredit_value();
    } catch (e) {
        DisExcpt("SSSS_Claim.js", e);
    }
}