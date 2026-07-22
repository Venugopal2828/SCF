function AdviceForBankCust_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function AdviceForBankCust_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_AdviceForBankCust() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}


function PaymentInstructionDealer_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit(node, recordId, status) {
    try {
        var CrdNum_obj = SYS_getScreenObjByxpath('PaymentInstructionDealer.PaymentInstrDeal.PaymentCreditHeader', 'CPYT_NO_CR');

        if (status == 'A') {
            CrdNum_obj.value = SYS_getcurrRecordCount();
        }
        if (status == 'D') {
            CrdNum_obj.value = SYS_getcurrRecordCount();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit(node, recordId, status) {
    try {
        var DbtNum_obj = SYS_getScreenObjByxpath('PaymentInstructionDealer.PaymentInstrDeal.PaymentDebitHeader', 'CPYT_NO_DR');

        if (status == 'A') {
            DbtNum_obj.value = SYS_getcurrRecordCount();
        }
        if (status == 'D') {
            DbtNum_obj.value = SYS_getcurrRecordCount();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentInstructionDealer() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}

function SYF_IPLC_getDOdata_PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_PayAccept_DO.js", e);
    }
}