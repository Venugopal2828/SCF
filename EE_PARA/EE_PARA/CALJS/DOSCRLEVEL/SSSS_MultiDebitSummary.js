"path:SCRN/DO/MultiDebitSummary.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiDebitSummary.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiDebitSummary.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiDebitSummary.js", e);
    }
}

csDOScreenProto.PostconditionOnUnload = function() {
    try {
        var aDesc; // Utility Auto Fix Comments
        var append; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var strDesc; // Utility Auto Fix Comments
        strDesc = document.MAINFORM.C_MLDC_DESC.value;
        append = '';
        if (strDesc.indexOf("|") > -1) {
            aDesc = strDesc.split("|");
            for (i = 0, len = aDesc.length; i < len; i++) { // Utility Auto Fix Comments
                append += aDesc[i];
                if (i != len) {
                    append += ";\n";
                }
            }
        } else {
            append = strDesc;
        }
        document.MAINFORM.C_MLDC_DESC.value = append;
    } catch (e) {
        DisExcpt("SSSS_MultiDebitSummary.js", e);
    }
}