"path:SCRN/DO/R2TSU_LineItem017.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem017.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_QTY_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem017.js", e);
    }
}

csDOScreenProto.TSU_QTY_OTUNIT = function() {
    try {
        if (document.MAINFORM.TSU_QTY_OTUNIT.value == '') {
            document.MAINFORM.TSU_QTY_OTUNIT.style.visibility = 'hidden';
        }
        if (document.MAINFORM.TSU_QTY_OTUNIT.value != '') {
            document.MAINFORM.TSUR2_QTY_UNIT_CD.disp = 'Other';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_LineItem017.js", e);
    }
}