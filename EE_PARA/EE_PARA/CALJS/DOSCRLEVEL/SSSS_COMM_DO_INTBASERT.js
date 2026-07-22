"path:SCRN/o2m/COMM_DO_INTBASERT.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_DO_INTBASERT.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_DO_INTBASERT.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_DO_INTBASERT.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.PROD_ID.value = SYS_getValueFromMain("PROD_ID");
        document.MAINFORM.PROD_LEVEL_CD.value = SYS_getValueFromMain("PROD_LEVEL_CD");
        document.MAINFORM.ORG_ID.value = SYS_getValueFromMain("ORG_ID");
        document.MAINFORM.INST_CD.value = SYS_getValueFromMain("INST_CD");
        document.MAINFORM.C_TRX_REF.value = SYS_getValueFromMain("C_TRX_REF");
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.CNTRY_CD.value = SYS_getValueFromMain("CNTRY_CD");
    } catch (e) {
        DisExcpt("SSSS_COMM_DO_INTBASERT.js", e);
    }
}