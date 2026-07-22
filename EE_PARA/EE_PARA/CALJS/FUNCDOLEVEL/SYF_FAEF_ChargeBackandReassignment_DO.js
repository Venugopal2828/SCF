function ChgBack(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var cbkamt; // Utility Auto Fix Comments
        var doctype; // Utility Auto Fix Comments
        var finRetsum; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var newfinRetsum; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        tempDo = currentDo;
        arrayvalue = SYS_getRecords(node);
        sum = 0;
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            cbkamt = SYS_getValFromRec(record, 'FA_CBK_AMT');
            doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');

            if (doctype == '1') {
                sum = SYS_BeFloat(sum) + SYS_BeFloat(cbkamt);
            } else if (doctype == '2') {
                sum = SYS_BeFloat(sum) - SYS_BeFloat(cbkamt);
            }
        }
        SYS_setValueToMain('FA_TTL_CBK_AMT', sum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_CBK_AMT'), 'onchange');
        if ('D' == status) {
            num = SYS_getcurrRecordCount("ChgBack");
            if (num == 0) {
                SYF_FAEF_PMO_Field_Class('2');
            }
        }
        currentDo = tempDo;

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function ChgBack_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function ChgBack_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgBack() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}


function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ChargeBackandReassignment_DO.js", e);
    }
}