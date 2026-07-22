function SCF_CounterParty(node, recordId, status) {
    try {
        var num = SYS_getcurrRecordCount("SCF_CounterParty");
        SYS_setValueToMain('FA_NO_OF_COUNTER', num);
    } catch (e) {
        DisExcpt("SYF_FADA_SignAGM_DO.js", e);
    }
}

function SCF_CounterParty_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FADA_SignAGM_DO.js", e);
    }
}

function SCF_CounterParty_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FADA_SignAGM_DO.js", e);
    }
}

function SYF_FADA_getDOdata_SCF_CounterParty(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FADA_SignAGM_DO.js", e);
    }
}