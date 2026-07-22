"path:SCRN/DO/102_SEQ_C_13C.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_C_13C.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_C_13C.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_C_13C.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.X102_13C_TIME_INDICATION.value = '/CLSTIME/0915+0100';
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_C_13C.js", e);
    }
}