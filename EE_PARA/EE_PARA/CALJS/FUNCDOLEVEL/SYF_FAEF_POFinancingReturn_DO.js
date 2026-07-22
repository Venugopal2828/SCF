function Settle_loan_po(node, recordId, status) {
    try {
        var arrayvalue;
        var fldValue;
        var i;
        var id;
        var interestsum;
        var mData;
        var num;
        var ovdIntSum;
        var paymentsum;
        var record;
        var tempDo;
        var pmtamt;
        var intamt;
        var ovdIntamt;
        var pottl;
        var temp_acc_amtttl;

        tempDo = currentDo;
        arrayvalue = SYS_getRecords(node);
        paymentsum = 0;
        interestsum = 0;
        ovdIntSum = 0;
        pottl = 0;
        temp_acc_amtttl = 0;
        mData = [];


        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            fldValue = SYS_getValFromRec(record, 'FA_LOAN_PAID_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_LOAN_PAID_AMT', 0);
            }

            mData.push(record);

            SYS_reLoadGrid(node, mData);


            pmtamt = SYS_getValFromRec(record, "FA_LOAN_PPAID_AMT");
            intamt = SYS_getValFromRec(record, "FA_LOAN_IPAID_AMT");
            ovdIntamt = SYS_getValFromRec(record, "FA_OVD_INT_EAMT");
            paymentsum = SYS_FloatAdd(paymentsum, pmtamt);
            interestsum = SYS_FloatAdd(interestsum, intamt);
            ovdIntSum = SYS_FloatAdd(ovdIntSum, ovdIntamt);

        }
        SYS_setValueToMain('FA_PAID_PRIN_SUM', SYS_BeFloat(paymentsum));
        if (SYS_BeFloat(SYS_getValueFromMain('TEMP_AMT4'))> 0) {      
                if(SYS_BeFloat(SYS_getValueFromMain('TEMP_AMT4'))>= SYS_BeFloat(paymentsum)) {//CPYT_STL_AMT is amount credit to temp account on invoice financing TEMP_AMT30 is a temp field to store the debit amount from temp account on invoice financing;
            				SYS_setValueToMain('TEMP_AMT30', SYT_CCY_AMT(document.MAINFORM.FA_SEL_AC_CCY.value,SYS_BeFloat(paymentsum)));
            				SYS_setValueToMain('CPYT_STL_AMT', SYT_CCY_AMT(document.MAINFORM.FA_SEL_AC_CCY.value,SYS_FloatSub(SYS_getValueFromMain('TEMP_AMT4'), paymentsum)));
            				
        				}
        		  if(SYS_BeFloat(SYS_getValueFromMain('TEMP_AMT4')) < SYS_BeFloat(paymentsum)) {
            				
            				SYS_setValueToMain('TEMP_AMT30', SYT_CCY_AMT(document.MAINFORM.FA_SEL_AC_CCY.value,SYS_BeFloat(SYS_getValueFromMain('TEMP_AMT4'))));
            				SYS_setValueToMain('CPYT_STL_AMT', SYT_CCY_AMT(document.MAINFORM.FA_SEL_AC_CCY.value,0));
        				}
        }
        SYS_setValueToMain('FA_PAID_INT_SUM', interestsum);
        SYS_setValueToMain('FA_OVDUE_INT_SUM', ovdIntSum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_PRIN_SUM'), 'onchange');
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_INT_SUM'), 'onchange');
        EEHtml.fireEvent(SYS_getMainObj('FA_OVDUE_INT_SUM'), 'onchange');




        currentDo = tempDo;
        temp_acc_amtttl = SYS_getValueFromMain('TEMP_AMT30');
        if (SYS_BeFloat(temp_acc_amtttl) > 0) {
            SYF_FAEF_MLDC_SetDebitCreditData_INV();
        } else {

            SYF_FAEF_MLDC_SetDebitCreditData();

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*Settle_loan_po", e);
    }
}

function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiCreditSummary_MultiCredit_OnDeSelected", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiCreditSummary_MultiCredit_OnSelected", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiCreditSummary_OnDeSelected", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiCreditSummary_OnSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiDebitSummary_MultiDebit_OnDeSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiDebitSummary_MultiDebit_OnSelected", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiDebitSummary_OnDeSelected", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*MultiDebitSummary_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit", e);
    }
}

function SYF_FAEF_getDOdata_Settle_loan_po(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*SYF_FAEF_getDOdata_Settle_loan_po", e);
    }
}

function Settle_loan_po_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*Settle_loan_po_OnDeSelected", e);
    }
}

function Settle_loan_po_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingReturn_DO.js*Settle_loan_po_OnSelected", e);
    }
}