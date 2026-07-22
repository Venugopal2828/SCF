function DFAgreement(node, recordId, status) {
    try {
        var num = SYS_getcurrRecordCount("DFAgreement");
        SYS_setValueToMain('FA_NO_OF_COUNTER', num);
        var arrayvalue = SYS_getRecords(node);
        var record;
        var id;
        var type;
        var buyerid;
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                type = SYS_getRecState(record);
                buyerid = SYS_getValFromRec(record, 'FA_BUYER_ID');
                if (buyerid == '') {
                    SYS_setValToRec(record, "FA_BUYER_ID", 'aaa');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME_DO.js", e);
    }
}

function DFAgreement_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME_DO.js", e);
    }
}

function DFAgreement_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME_DO.js", e);
    }
}

function SYF_FADA_getDOdata_DFAgreement(node, recordId, status) {
    try {
        SYS_GetDataForDO('DFAgreement');
    } catch (e) {
        DisExcpt("SYF_FADA_SignAgreementFromCE_ME_DO.js", e);
    }
}