function ChgDoDef_OnDeSelected(context, record, rowIndex) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("DO_ChgDoDef.js", e);
    }
}

function ChgDoDef_OnSelected(context, record, rowIndex) {
    try {
        if (Chg.Screen.agreementOverride) {
            var index = SYS_getValFromRec(record, Chg.FLD_CHARGE_INDEX);
            var entry = Chg.Screen.getOrignalDefChg(index);
            if (entry != null && entry.getCommCode() != Chg.OTHER) {
                SYS_enableButton(Chg.Screen.defChgDoNm, "Override");
            }
        }
    } catch (e) {
        DisExcpt("DO_ChgDoDef.js", e);
    }
}

function SYF_ABLF_getDOdata_ChgDoDef() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}


function ChgDoTrx_OnDeSelected(context, record, rowIndex) {
    try {
        //SYS_disableButton(Chg.Screen.trxChgDoNm, "Override"); marked for no use
    } catch (e) {
        DisExcpt("DO_ChgDoTrx.js", e);
    }
}

function ChgDoTrx_OnSelected(context, record, rowIndex) {
    try {
        if (Chg.Screen.agreementOverride) {
            var index = SYS_getValFromRec(record, Chg.FLD_CHARGE_INDEX);
            var entry = Chg.Screen.getOrignalTrxChg(index);
            if (entry != null && entry.getCommCode() != Chg.OTHER) {
                SYS_enableButton(Chg.Screen.trxChgDoNm, "Override");
            }
        }
    } catch (e) {
        DisExcpt("DO_ChgDoTrx.js", e);
    }
}

function SYF_ABLF_getDOdata_ChgDoTrx() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}


function Collateral_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function Collateral_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_Collateral() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}


function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing_DO.js", e);
    }
}