"path:SCRN/o2m/FAEF_Pay_IM.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.DOCSTATUS = function() {
    try {
        document.MAINFORM.FA_DOC_STATUS.value = opener.document.MAINFORM.FA_BUSI_STATU.value;
        document.MAINFORM.FA_PMT_TYPE.value = opener.document.MAINFORM.FA_BUSI_STATU.value;
        //opener.document.MAINFORM.FA_BUSI_STATUS.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.PMTVALDTcheck = function() {
    try {
        if (document.MAINFORM.FA_PMT_DT.value != '' && document.MAINFORM.FA_PMT_VAL_DT.value != '') {
            SYS_Day1MustbeLaterThanDay2('FA_PMT_VAL_DT', 'FA_PMT_DT');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.amountfomate = function() {
    try {
        document.MAINFORM.FA_PMT_AMT.value = DecimalFormat(document.MAINFORM.FA_PMT_AMT.value, 2);
        document.MAINFORM.FA_BK_CHG_AMT.value = DecimalFormat(document.MAINFORM.FA_BK_CHG_AMT.value, 2);
        document.MAINFORM.FA_DEDUCT_AMT.value = DecimalFormat(document.MAINFORM.FA_DEDUCT_AMT.value, 2);
        document.MAINFORM.FA_DOC_AMT.value = DecimalFormat(document.MAINFORM.FA_DOC_AMT.value, 2);
        document.MAINFORM.FA_DOC_BAL.value = DecimalFormat(document.MAINFORM.FA_DOC_BAL.value, 2);
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.checkPMT_AMT = function() {
    try {
        var orgDocBal; // Utility Auto Fix Comments
        var ttlPaid; // Utility Auto Fix Comments
        ttlPaid = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_DEDUCT_AMT.value);
        orgDocBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        if (ttlPaid > orgDocBal) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, "Amount paid exceeds the document balance! Please check."); // Utility Auto Fix Comments
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.forclass = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BK_CHG_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BK_CHG_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_DEDUCT_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.plg_InputFormPopulated = function(frm, rowID, grid) {
    try {
        forclass();
        amountfomate();
        DOCSTATUS();
        document.MAINFORM.FA_PMT_REF.value = opener.document.MAINFORM.FA_PMT_REF.value;
        document.MAINFORM.FA_PMT_DT.value = opener.document.MAINFORM.FA_PMT_DT.value;
        EEHtml.fireEvent(opener.document.MAINFORM.FA_PMT_DT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.plg_o2mPostConfirmInput = function(argWindow, grid, inputMode) {
    try {
        document.MAINFORM.FA_PMT_AMT.value = document.MAINFORM.FA_DOC_AMT.value;
        DOCSTATUS();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.FA_BK_CHG_AMT_onchange = function(event) {
    try {
        amountfomate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.FA_DEDUCT_AMT_onchange = function(event) {
    try {
        amountfomate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.FA_DOC_TYPE_onchange = function(event) {
    try {
        forclass();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        amountfomate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}

csDOScreenProto.FA_PMT_VAL_DT_onchange = function(event) {
    try {
        PMTVALDTcheck();
    } catch (e) {
        DisExcpt("SSSS_FAEF_Pay_IM.js", e);
    }
}