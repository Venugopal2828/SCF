"path:SCRN/DO/RegForClean.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_RegForClean.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_RegForClean.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_RegForClean.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.CR_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.CR_CALC_AMT.value);
        document.MAINFORM.DB_CALC_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, document.MAINFORM.DB_CALC_AMT.value);
        document.MAINFORM.X103_SETT_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X103_SETT_CCY_32A.value, document.MAINFORM.X103_SETT_AMT_32A.value);
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, document.MAINFORM.CPYT_DR_AMT_DRCCY.value);
    } catch (e) {
        DisExcpt("SSSS_RegForClean.js", e);
    }
}