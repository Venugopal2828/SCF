function AdviceForBankCust_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function AdviceForBankCust_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function SYF_EXCO_getDOdata_AdviceForBankCust() {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}


function FincSinglePayment_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function FincSinglePayment_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function SYF_EXCO_getDOdata_FincSinglePayment() {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}


function PaymentDealer_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentCreditHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentCreditHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentCreditHeader_PaymentCredit(node, recordId, status) {
    try {
        var CrdNum_obj = SYS_getScreenObjByxpath('PaymentDealer.PaymentCreditHeader', 'CPYT_NO_CR');

        if (status == 'A') {
            CrdNum_obj.value = SYS_getcurrRecordCount();
        }
        if (status == 'D') {
            CrdNum_obj.value = SYS_getcurrRecordCount();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentCreditHeader_PaymentCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentCreditHeader_PaymentCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentDebitHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentDebitHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentDebitHeader_PaymentDebit(node, recordId, status) {
    try {
        var DbtNum_obj = SYS_getScreenObjByxpath('PaymentDealer.PaymentDebitHeader', 'CPYT_NO_DR');

        if (status == 'A') {
            DbtNum_obj.value = SYS_getcurrRecordCount();
        }
        if (status == 'D') {
            DbtNum_obj.value = SYS_getcurrRecordCount();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentDebitHeader_PaymentDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function PaymentDealer_PaymentDebitHeader_PaymentDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function SYF_EXCO_getDOdata_PaymentDealer() {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function SYF_EXCO_getDOdata_PaymentDealer_PaymentCreditHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function SYF_EXCO_getDOdata_PaymentDealer_PaymentCreditHeader_PaymentCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function SYF_EXCO_getDOdata_PaymentDealer_PaymentDebitHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}

function SYF_EXCO_getDOdata_PaymentDealer_PaymentDebitHeader_PaymentDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_SettlementAtMaturity_DO.js", e);
    }
}