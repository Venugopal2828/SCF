function DFAgreement(node, recordId, status) {
    try {
        var num = SYS_getcurrRecordCount("DFAgreement");
        SYS_setValueToMain('FA_NO_OF_COUNTER', num);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME_DO.js", e);
    }
}

function DFAgreement_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME_DO.js", e);
    }
}

function DFAgreement_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME_DO.js", e);
    }
}

function SYF_FADA_getDOdata_DFAgreement() {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_AmendAgreement_ME_DO.js", e);
    }
}