"path:SCRN/DO/R2TSU_TrnsprtInf017.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TrnsprtInf017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TrnsprtInf017.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TrnsprtInf017.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_CNSQTY_OTUNIT();
        TSU_TTLVOL_OTUNIT();
        TSU_TTLWGT_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TrnsprtInf017.js", e);
    }
}

csDOScreenProto.TSU_CNSQTY_OTUNIT = function() {
    try {
        if (document.MAINFORM.TSU_CNSQTY_OTUNIT.value == '') {
            document.MAINFORM.TSU_CNSQTY_OTUNIT.style.visibility = 'hidden';
        }
        if (document.MAINFORM.TSU_CNSQTY_OTUNIT.value != '') {
            document.MAINFORM.TSU_CNSQTY_UNIT_CD.disp = 'Other';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TrnsprtInf017.js", e);
    }
}

csDOScreenProto.TSU_TTLVOL_OTUNIT = function() {
    try {
        if (document.MAINFORM.TSU_TTLVOL_OTUNIT.value == '') {
            document.MAINFORM.TSU_TTLVOL_OTUNIT.style.visibility = 'hidden';
        }
        if (document.MAINFORM.TSU_TTLVOL_OTUNIT.value != '') {
            document.MAINFORM.TSU_TTLVOL_OTUNIT.disp = 'Other';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TrnsprtInf017.js", e);
    }
}

csDOScreenProto.TSU_TTLWGT_OTUNIT = function() {
    try {
        if (document.MAINFORM.TSU_TTLWGT_OTUNIT.value == '') {
            document.MAINFORM.TSU_TTLWGT_OTUNIT.style.visibility = 'hidden';
        }
        if (document.MAINFORM.TSU_TTLWGT_OTUNIT.value != '') {
            document.MAINFORM.TSU_TTLWGT_OTUNIT.disp = 'Other';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_TrnsprtInf017.js", e);
    }
}