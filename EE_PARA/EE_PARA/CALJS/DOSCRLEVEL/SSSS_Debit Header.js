"path:SCRN/DO/Debit Header.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Header.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Header.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Header.js", e);
    }
}

csDOScreenProto.InitValues = function(curDo) {
    try {
        var CPYT_N_PAY_AMT = 0;
        var nCCY = "";

        CPYT_N_PAY_AMT = SYS_getCurrNodeParentValue('PaymentInstruction', 'CPYT_N_PAY_AMT', curDo);
        if (SYS_MODULE_NAME == "EXLC") {
            nCCY = SYS_getValueFromMain('LC_CCY');
        } else if (SYS_MODULE_NAME == "IMLC") {
            nCCY = SYS_getValueFromMain('PRES_CCY');
        } else if (SYS_MODULE_NAME == "GTEE") {
            nCCY = SYS_getValueFromMain('GTEE_CCY');
        } else if (SYS_MODULE_NAME == "EXCO") {
            nCCY = SYS_getValueFromMain('COLL_CCY');
        }

        document.MAINFORM.CPYT_DR_TTL_CCY.value = nCCY;
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(nCCY, SYS_BeFloat(CPYT_N_PAY_AMT));
    } catch (e) {
        DisExcpt("SSSS_Debit Header.js", e);
    }
}

csDOScreenProto.OnSelected = function(curDo) {
    try {
        InitValues(curDo);
    } catch (e) {
        DisExcpt("SSSS_Debit Header.js", e);
    }
}