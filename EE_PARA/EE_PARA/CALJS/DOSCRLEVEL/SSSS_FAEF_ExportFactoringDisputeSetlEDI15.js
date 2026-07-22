"path:SCRN/o2m/FAEF_ExportFactoringDisputeSetlEDI15.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_DOC_STATUS.value = opener.document.MAINFORM.FA_BUSI_STATUS.value;
        document.MAINFORM.FA_DSP_REF.value = opener.document.MAINFORM.FA_DSP_REF.value;
        document.MAINFORM.FA_DSP_NO.value = opener.document.MAINFORM.FA_DSP_NO.value;
        document.MAINFORM.FA_FIN_RETURN_REQ.value = opener.document.MAINFORM.FA_FIN_RETURN_REQ.value;
        //get_NotifyBy();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.get_NotifyBy = function() {
    try {
        if (document.MAINFORM.FA_NOTIFY_BY_NM.value == opener.document.MAINFORM.FA_IF_NM.value) {
            document.MAINFORM.FA_NOTIFY_BY.value = '1';
        } else if (document.MAINFORM.FA_NOTIFY_BY_NM.value == opener.document.MAINFORM.FA_EF_NM.value) {
            document.MAINFORM.FA_NOTIFY_BY.value = '2';
        } else if (document.MAINFORM.FA_NOTIFY_BY_NM.value == opener.document.MAINFORM.FA_BUYER_NM.value) {
            document.MAINFORM.FA_NOTIFY_BY.value = '3';
        } else if (document.MAINFORM.FA_NOTIFY_BY_NM.value == opener.document.MAINFORM.FA_SEL_NM.value) {
            document.MAINFORM.FA_NOTIFY_BY.value = '4';
        } else {
            document.MAINFORM.FA_NOTIFY_BY.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.plg_InputFormPopulated = function(frm, rowID, grid) {
    try {
        InitValues();
        get_NotifyBy();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.plg_o2mPostConfirmInput = function(grid, inputMode, argWindow) {
    try {
        InitValues();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.FA_NOTIFY_BY_NM_onchange = function(event) {
    try {
        get_NotifyBy();
        EEHtml.fireEvent(document.MAINFORM.FA_NOTIFY_BY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}

csDOScreenProto.FA_SEL_NM_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetlEDI15.js", e);
    }
}