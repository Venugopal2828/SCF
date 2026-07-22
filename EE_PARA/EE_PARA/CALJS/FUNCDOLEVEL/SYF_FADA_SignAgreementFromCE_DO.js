function SYF_FADA_getDOdata_SelReq(node, recordId, status) {
    try {
        SYS_GetDataForDO_S('SelReq');
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_DO.js", e);
    }
}

function SelReq_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_DO.js", e);
    }
}

function SelReq_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_DO.js", e);
    }
}