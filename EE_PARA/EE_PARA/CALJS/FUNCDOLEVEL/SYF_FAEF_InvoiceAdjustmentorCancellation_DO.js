function EFIncAjustCancel_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation_DO.js", e);
    }
}

function EFIncAjustCancel_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_EFIncAjustCancel(node, recordId, status) {
    try {
        SYS_GetDataForDO_S('InvCalAdj', "N", false, '', "EFIncAjustCancel");
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustmentorCancellation_DO.js", e);
    }
}