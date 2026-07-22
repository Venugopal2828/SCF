function DisputeSettl(node, recordId, status) {
    try {
        var num = SYS_getFieldSumValue(node, "FA_TEMP_AMT8", 0);
        SYS_setValueToMain('FA_TTL_INV_NO', num);



    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement_DO.js", e);
    }
}

function DisputeSettl_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement_DO.js", e);
    }
}

function DisputeSettl_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_DisputeSettl(node, recordId, status) {
    try {
        SYS_GetDataForDO_S('DisputeSettl');
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement_DO.js", e);
    }
}