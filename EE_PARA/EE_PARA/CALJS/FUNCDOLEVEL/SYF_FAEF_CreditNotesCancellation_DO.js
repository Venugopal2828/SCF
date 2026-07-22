function EFIncAjustCancel(node, recordId, status) {
    try {
        var docAmt = SYS_BeFloat(SYS_getFieldSumValue(node, "FA_DOC_AMT", 2));
        SYS_setValueToMain('TEMP_AMT60', docAmt);
        var finRetsum = SYS_getFieldSumValue(node, "TEMP_AMT18", 2);
        //var newfinRetsum = SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value) - SYS_BeFloat(finRetsum);
        var newfinRetsum = 0 - SYS_BeFloat(finRetsum);
        SYS_setValueToMain('FA_TTL_FIN_RET_BAL', newfinRetsum);
        document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, SYS_BeFloat(newfinRetsum));
        var crnamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        var newcrnamtsum = 0 - SYS_BeFloat(crnamtsum);
        SYS_setValueToMain('FA_TTL_CRN_AMT', newcrnamtsum);
        //SYS_getMainObj('FA_TTL_CRN_AMT').fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation_DO.js", e);
    }
}

function EFIncAjustCancel_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation_DO.js", e);
    }
}

function EFIncAjustCancel_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_EFIncAjustCancel() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesCancellation_DO.js", e);
    }
}