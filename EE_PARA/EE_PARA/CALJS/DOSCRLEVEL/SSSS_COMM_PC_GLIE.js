"path:SCRN/o2m/COMM_PC_GLIE.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_GLIE.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_GLIE.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_GLIE.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("SUB_PROD_ID");
        document.MAINFORM.REC_STAT.value = "A";
        document.MAINFORM.C_TRX_REF.value = SYS_getValueFromMain("C_TRX_REF");
        document.MAINFORM.ORG_ID.value = SYS_getValueFromMain("ORG_ID");
        document.MAINFORM.CNTRY_CD.value = SYS_getValueFromMain("CNTRY_CD");
        document.MAINFORM.INST_CD.value = SYS_getValueFromMain("INST_CD");
        document.MAINFORM.PROD_ID.value = SYS_getValueFromMain("PROD_ID");
        document.MAINFORM.SUB_PROD_ID.value = SYS_getValueFromMain("SUB_PROD_ID");
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_GLIE.js", e);
    }
}