"path:SCRN/DO/102_SEQ_B_71F.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B_71F.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B_71F.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B_71F.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.X102_71F_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71F_CCY.value, document.MAINFORM.X102_71F_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B_71F.js", e);
    }
}

csDOScreenProto.X102_71F_AMT_onchange = function(event) {
    try {
        //document.MAINFORM.X102_71F_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71F_CCY.value, document.MAINFORM.X102_71F_AMT.value);

        var X102_71F_AMT;
        X102_71F_AMT = SYS_BeFloat(document.MAINFORM.X102_71F_AMT.value);
        if (X102_71F_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X102_71F_AMT.value = 0;
        }
        document.MAINFORM.X102_71F_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71F_CCY.value, document.MAINFORM.X102_71F_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B_71F.js", e);
    }
}

csDOScreenProto.X102_71F_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X102_71F_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71F_CCY.value, document.MAINFORM.X102_71F_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_102_SEQ_B_71F.js", e);
    }
}