"path:SCRN/o2m/FAEF_InvVerify.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        if (document.MAINFORM.FA_DOC_VERIFIED.value == 'Accepted'&&document.MAINFORM.FA_DOC_VERIFIED.value == '1') {
            document.MAINFORM.FA_DOC_STATUS.value = 'Active';
            document.MAINFORM.TEMP_ACCEPT_INV.value = document.MAINFORM.FA_ADJ_AMT.value;
        } else if (document.MAINFORM.FA_DOC_VERIFIED.value == 'Rejected') {
            document.MAINFORM.FA_DOC_STATUS.value = 'Reject';
            document.MAINFORM.TEMP_ACCEPT_INV.value = 0;
        } else if (document.MAINFORM.FA_DOC_VERIFIED.value == 'Accepted'&&document.MAINFORM.FA_DOC_VERIFIED.value != '1') {
            document.MAINFORM.FA_DOC_STATUS.value = 'Active';
            document.MAINFORM.TEMP_ACCEPT_INV.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvVerify.js*ConfirmBusinessCall", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.TEMP_ACCEPT_INV.value = document.MAINFORM.FA_ADJ_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvVerify.js*InitValues", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (document.MAINFORM.FA_DOC_STATUS.value == 'Need Acknowledged') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_VAL_DT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_DUE_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_VAL_DT, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvVerify.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.FA_DOC_VERIFIED_onchange = function() {
    try {
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvVerify.js*FA_DOC_VERIFIED_onchange", e);
    }
}