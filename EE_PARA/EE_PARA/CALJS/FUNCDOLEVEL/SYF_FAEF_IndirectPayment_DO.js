function IndirectPmt(node, recordId, status) {
    try {

        var acamt; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var bkchg; // Utility Auto Fix Comments
        var clearamt; // Utility Auto Fix Comments
        var deduct; // Utility Auto Fix Comments
        var deductsum; // Utility Auto Fix Comments
        var doctype; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var paidintsum; // Utility Auto Fix Comments
        var paidovdintsum; // Utility Auto Fix Comments
        var paidprinsum; // Utility Auto Fix Comments
        var pmtamt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var refundintsum; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        tempDo = currentDo;
        arrayvalue = SYS_getRecords(node);
        sum = 0;
        deductsum = 0;
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            pmtamt = SYS_getValFromRec(record, 'FA_PMT_AMT');
            doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');
            bkchg = SYS_getValFromRec(record, 'FA_BK_CHG_AMT');
            deduct = SYS_getValFromRec(record, 'FA_DEDUCT_AMT');

            if (doctype == '1') {
                sum = SYS_BeFloat(sum) + SYS_BeFloat(pmtamt);
            } else if (doctype == '2') {
                sum = SYS_BeFloat(sum) - SYS_BeFloat(pmtamt);
            }
            deductsum = SYS_BeFloat(deductsum) + SYS_BeFloat(deduct) + SYS_BeFloat(bkchg);
        }
        SYS_setValueToMain('FA_PMT_AMT_SUM', sum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PMT_AMT_SUM'), 'onchange');
        SYS_setValueToMain('FA_TTL_AMT_DEDUCT', deductsum);
        paidprinsum = SYS_getFieldSumValue(node, "FA_PAID_PRIN_AMT", 2);
        paidintsum = SYS_getFieldSumValue(node, "FA_PAID_INT_AMT", 2);
        paidovdintsum = SYS_getFieldSumValue(node, "FA_OVD_INT_AMT", 2);
        refundintsum = SYS_getFieldSumValue(node, "FA_INV_REFUND_INT", 2);
        SYS_setValueToMain('FA_PAID_PRIN_SUM', paidprinsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_PRIN_SUM'), 'onchange');
        SYS_setValueToMain('FA_PAID_INT_SUM', paidintsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_INT_SUM'), 'onchange');
        SYS_setValueToMain('FA_OVDUE_INT_SUM', paidovdintsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_OVDUE_INT_SUM'), 'onchange');
        SYS_setValueToMain('FA_TTL_REFUND_INT', refundintsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_REFUND_INT'), 'onchange');
        acamt = SYS_BeFloat(paidprinsum) + SYS_BeFloat(paidintsum) + SYS_BeFloat(paidovdintsum) - SYS_BeFloat(refundintsum);
        SYS_setValueToMain('FA_SEL_AC_AMT', acamt);
        EEHtml.fireEvent(SYS_getMainObj('FA_SEL_AC_AMT'), 'onchange');
        clearamt = SYS_BeFloat(deductsum) + SYS_BeFloat(sum);
        SYS_setValueToMain('FA_TTL_AMT_CLEARED', clearamt);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_CLEARED'), 'onchange');
        //document.MAINFORM.FA_TEMP_INV_INT_AMT.value=SYS_getFieldSumValue(node,"FA_TEMP_INV_INT_AMT",2);
        currentDo = tempDo;

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function IndirectPmt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function IndirectPmt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function IndirectPmt_Settle_loan(node, recordId, status) {
    try {

        var FA_LOAN_IPAID_AMT; // Utility Auto Fix Comments
        var FA_LOAN_PAID_AMT; // Utility Auto Fix Comments
        var FA_LOAN_PPAID_AMT; // Utility Auto Fix Comments
        var FA_OVD_INT_EAMT; // Utility Auto Fix Comments
        var IA_Y_REFUND_INT; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var intpaidflg; // Utility Auto Fix Comments
        var invint; // Utility Auto Fix Comments
        var loanduedate; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var ovdint; // Utility Auto Fix Comments
        var paidint; // Utility Auto Fix Comments
        var pintdate; // Utility Auto Fix Comments
        var pmtvaldate; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var refundint; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        tempDo = currentDo;
        arrayvalue = SYS_getRecords(node);
        mData = [];

        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            fldValue = SYS_getValFromRec(record, 'IA_Y_REFUND_INT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_LOAN_PPAID_AMT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_LOAN_INT_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT19');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_TEMP_AMT19', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_INV_LOAN_EBAL');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_INV_LOAN_EBAL', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_TEMP_INV_INT_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_TEMP_INV_INT_AMT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_LOAN_IPAID_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_OVD_INT_EAMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT12');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_TEMP_AMT12', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT11');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_TEMP_AMT11', 0);
            }
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        pmtvaldate = getDate(SYS_DATE_FORMAT, document.MAINFORM.TRX_DT.value);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            type = SYS_getRecState(record);
            loanduedate = getDate(SYS_DATE_FORMAT, SYS_getValFromRec(record, 'FA_LOAN_DUE_DT'));
            intpaidflg = SYS_getValFromRec(record, 'FA_INT_CHG_TYPE');
            document.MAINFORM.FA_INV_LOAN_ID.value = SYS_getValFromRec(record, 'FA_INV_LOAN_ID');
            document.MAINFORM.FA_LAST_PINT_DT.value = SYS_getValFromRec(record, 'FA_TEMP_DT1');
            document.MAINFORM.FA_TEMP_DT1.value = SYS_getValFromRec(record, 'FA_TEMP_DT1');
            document.MAINFORM.FA_LOAN_INT_RT.value = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');

            if (intpaidflg == '1' && pmtvaldate < loanduedate) {
                document.MAINFORM.FA_LOAN_PPAID_AMT.value = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
                SYS_InqGapi_S('FAEF_inquire_refund_int');
                refundint = SYS_BeFloat(document.MAINFORM.IA_Y_REFUND_INT.value);

                record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', refundint);
            } else {
                record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', 0);
            //moved for not exist bug    
            SYS_InqGapi_S('FAEF_inquiryint_overdue');
            invint = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
            ovdint = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
            pintdate = document.MAINFORM.TRX_DT.value;
            paidint = (invint * 1000) / 1000; // Utility Auto Fix Comments

            record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', invint);
            record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', ovdint);
            record = SYS_setValToRec(record, 'FA_INV_LOAN_EBAL', 0);
            record = SYS_setValToRec(record, 'FA_LAST_PINT_DT', pintdate);
            record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', paidint);
            }
            FA_LOAN_IPAID_AMT = SYS_getValFromRec(record, 'FA_LOAN_IPAID_AMT');
            FA_LOAN_PPAID_AMT = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
            FA_OVD_INT_EAMT = SYS_getValFromRec(record, 'FA_OVD_INT_EAMT');
            IA_Y_REFUND_INT = SYS_getValFromRec(record, 'IA_Y_REFUND_INT');
            FA_LOAN_PAID_AMT = (SYS_BeFloat(FA_LOAN_IPAID_AMT) * 1000 + SYS_BeFloat(FA_LOAN_PPAID_AMT) * 1000 + SYS_BeFloat(FA_OVD_INT_EAMT) * 1000 - SYS_BeFloat(IA_Y_REFUND_INT) * 1000) / 1000;
            record = SYS_setValToRec(record, 'FA_LOAN_PAID_AMT', FA_LOAN_PAID_AMT);

            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        ttlpaidint = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
        document.MAINFORM.FA_PAID_INT_AMT.value = ttlpaidint;
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_AMT, 'onchange');
        ttlpaidovdint = SYS_getFieldSumValue(node, "FA_OVD_INT_EAMT", 2);
        document.MAINFORM.FA_OVD_INT_AMT.value = ttlpaidovdint;
        EEHtml.fireEvent(document.MAINFORM.FA_OVD_INT_AMT, 'onchange');
        ttlrefundint = SYS_getFieldSumValue(node, "IA_Y_REFUND_INT", 2);
        document.MAINFORM.FA_INV_REFUND_INT.value = ttlrefundint;
        EEHtml.fireEvent(document.MAINFORM.FA_INV_REFUND_INT, 'onchange');
        document.MAINFORM.FA_TEMP_INV_INT_AMT.value = SYS_getFieldSumValue(node, "FA_TEMP_INV_INT_AMT", 2);
        document.MAINFORM.FA_PAID_PRIN_AMT.value = SYS_getFieldSumValue(node, "FA_LOAN_PPAID_AMT", 2);
        currentDo = tempDo;

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function IndirectPmt_Settle_loan_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function IndirectPmt_Settle_loan_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_IndirectPmt() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_IndirectPmt_Settle_loan() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}


function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IndirectPayment_DO.js", e);
    }
}