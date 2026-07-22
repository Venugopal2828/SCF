"path:SCRN/DO/201_203_SEQ_B.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_201_203_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_201_203_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_201_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_32B_AMT_onchange = function(event) {
    try {
        document.MAINFORM.X203_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_32B_CCY.value, document.MAINFORM.X203_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_201_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_32B_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X203_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_32B_CCY.value, document.MAINFORM.X203_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_201_203_SEQ_B.js", e);
    }
}