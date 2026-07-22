function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_DO.js", e);
    }
}


function SYF_FAEF_getDOdata_writeoff(node, recordId, status) {
    try {
        SYS_GetDataForDO('writeoff');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_DO.js", e);
    }
}

function writeoff(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var doctype; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var pmtamt; // Utility Auto Fix Comments
        var pmtamtsum; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("writeoff");
        pmtamtsum = 0;
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            pmtamt = SYS_getValFromRec(record, 'FA_PMT_AMT');
            doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');
            if (doctype == '1') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) + SYS_BeFloat(pmtamt);
            } else if (doctype == '2') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) - SYS_BeFloat(pmtamt);
            }
        }
        document.MAINFORM.FA_PMT_AMT_SUM.value = SYS_BeFloat(pmtamtsum);
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT_SUM, 'onchange');
        SYS_setValueToMain('FA_PMT_AMT_SUM', pmtamtsum);
        document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT_SUM.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_DO.js", e);
    }
}

function writeoff_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_DO.js", e);
    }
}

function writeoff_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceWrite-off_DO.js", e);
    }
}