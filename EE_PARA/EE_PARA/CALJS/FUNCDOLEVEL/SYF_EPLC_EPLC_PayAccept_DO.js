function AdviceForBankCust_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function AdviceForBankCust_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_AdviceForBankCust() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}


function FinanceEstablishment_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function FinanceEstablishment_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_FinanceEstablishment() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}


function PaymentInstructionDealer_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit(node, recordId, status) {
    try {
        var CrdNum_obj = CPYT_NO_CR;
        if (status == "D") {
            var oldValue = CrdNum_obj.value;
            CrdNum_obj.value = oldValue - 1;
            return;
        }
        var vCount = node.parentObj.getChildDoRecordCount("PaymentCredit");
        CrdNum_obj.value = vCount;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit(node, recordId, status) {
    try {
        var CrdNum_obj = CPYT_NO_DR;
        if (status == "D") {
            var oldValue = CrdNum_obj.value;
            CrdNum_obj.value = oldValue - 1;
            return;
        }
        var vCount = node.parentObj.getChildDoRecordCount("PaymentDebit");
        CrdNum_obj.value = vCount;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentInstructionDealer() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}

function SYF_EPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_PayAccept_DO.js", e);
    }
}