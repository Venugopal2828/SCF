function SYF_FADA_getDOdata_SelReq() {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreement_ME_DO.js", e);
    }
}

function SelReq(node, recordId, status) {
    try {
        var num = SYS_getcurrRecordCount("SelReq");
        SYS_setValueToMain('FA_NO_OF_BUYERS', num);
        SYS_setValueToMain('FA_NO_OF_COUNTER', num);
        if (num == 0) {
            SYF_FADA_MPO_sel_id_class('2');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreement_ME_DO.js", e);
    }
}

function SelReq_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreement_ME_DO.js", e);
    }
}

function SelReq_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreement_ME_DO.js", e);
    }
}