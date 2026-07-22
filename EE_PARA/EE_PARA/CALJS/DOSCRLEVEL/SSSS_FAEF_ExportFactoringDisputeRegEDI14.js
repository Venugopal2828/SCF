"path:SCRN/o2m/FAEF_ExportFactoringDisputeRegEDI14.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        get_doc_status_value();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_DSP_NO.value = opener.document.MAINFORM.FA_DSP_NO.value;
        document.MAINFORM.FA_DSP_REF.value = opener.document.MAINFORM.FA_DSP_REF.value;
        //get_doc_status_value();
        //get_NotifyBy();
        if (SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) > 0) {
            alert('There is still Financing balance not paid!');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (document.MAINFORM.FA_DOC_DUE_DT.value > 180) {
            SYS_CheckError(document.MAINFORM.FA_DOC_DUE_DT, 'Document Due Date can not exceed 180 days!');
            return false;
        }
        return true;

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.check_amount = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) < SYS_BeFloat(document.MAINFORM.FA_DSP_AMT.value)) {
            SYS_CheckError(document.MAINFORM.FA_DSP_AMT, 'Dispute amount can not exceed document amount!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
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
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.get_doc_status_value = function() {
    try {
        if (document.MAINFORM.FA_PMT_TYPE.value == 'PUG') {
            document.MAINFORM.FA_DOC_STATUS.value = 'PUG DSP';
        } else {
            document.MAINFORM.FA_DOC_STATUS.value = 'DSP';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.plg_InputFormPopulated = function(frm, rowID, grid) {
    try {
        InitValues();
        get_doc_status_value();
        get_NotifyBy();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.plg_o2mPostConfirmInput = function(argWindow, grid, inputMode) {
    try {
        get_doc_status_value();
        get_NotifyBy();
        document.MAINFORM.FA_DSP_NO.value = opener.document.MAINFORM.FA_DSP_NO.value;
        document.MAINFORM.FA_DSP_REF.value = opener.document.MAINFORM.FA_DSP_REF.value;
        if (SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) > 0) {
            alert('There is still Financing balance that have not been paid!');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.FA_BUYER_NM_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}
csDOScreenProto.FA_DSP_AMT_onchange = function(event) {
    try {
        check_amount();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.FA_DSP_NO_onchange = function(event) {
    try {
        plg_o2mPostConfirmInput();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.FA_DSP_REF_onchange = function(event) {
    try {
        plg_o2mPostConfirmInput();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.FA_EF_NM_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}
csDOScreenProto.FA_IF_NM_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}
csDOScreenProto.FA_INV_LOAN_BAL_onchange = function(event) {
    try {
        plg_o2mPostConfirmInput();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.FA_NOTIFY_BY_NM_onchange = function(event) {
    try {
        get_NotifyBy();
        EEHtml.fireEvent(document.MAINFORM.FA_NOTIFY_BY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.FA_PMT_TYPE_onchange = function(event) {
    try {
        get_doc_status_value();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}

csDOScreenProto.FA_SEL_NM_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeRegEDI14.js", e);
    }
}