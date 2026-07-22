"path:SCRN/o2m/COMM_PC_LBU.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_LBU.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_LBU.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_LBU.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.REC_STAT.value = "A";
        document.MAINFORM.C_TRX_REF.value = SYS_getValueFromMain("C_TRX_REF");
        document.MAINFORM.ORG_ID.value = SYS_getValueFromMain("ORG_ID");
        document.MAINFORM.INST_CD.value = SYS_getValueFromMain("INST_CD");
        document.MAINFORM.CNTRY_CD.value = SYS_getValueFromMain("CNTRY_CD");
    } catch (e) {
        DisExcpt("SSSS_COMM_PC_LBU.js", e);
    }
}