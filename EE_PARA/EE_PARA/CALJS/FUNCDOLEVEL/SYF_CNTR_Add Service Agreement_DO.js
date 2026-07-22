function EligibleCollItem(node, recordId, status) {
    try {
        node.setFieldValue("", recordId, "CLTR_CCY", document.MAINFORM.LMT_CCY.value);
    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}

function EligibleCollItem_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}

function EligibleCollItem_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}

function SYF_CNTR_getDOdata_EligibleCollItem() {
    try {

    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}


function SYF_CNTR_getDOdata_WarehouseRgltAuth() {
    try {

    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}

function WarehouseRgltAuth(node, recordId, status) {
    try {
        node.setFieldValue("", recordId, "C_TRX_STATUS", 'M');
    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}

function WarehouseRgltAuth_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}

function WarehouseRgltAuth_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_CNTR_Add Service Agreement_DO.js", e);
    }
}