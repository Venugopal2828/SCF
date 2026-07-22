"path:SCRN/o2m/TEST_Compliance.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TEST_Compliance.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TEST_Compliance.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TEST_Compliance.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.TEMP_REF.value = SYS_getValueFromMain("C_MAIN_REF");
    } catch (e) {
        DisExcpt("SSSS_TEST_Compliance.js", e);
    }
}