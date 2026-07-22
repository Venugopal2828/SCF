function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}


function POReturnFin(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var finRetsum; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var interestsum; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var newfinRetsum; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var ovdIntSum; // Utility Auto Fix Comments
        var paymentsum; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var refundIntSum; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        tempDo = currentDo;
        arrayvalue = SYS_getRecords(node);
        mData = [];


        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            fldValue = SYS_getValFromRec(record, 'TEMP_AMT18');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'TEMP_AMT18', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT8');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_TEMP_AMT8', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_PMT_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_PMT_AMT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'TEMP_AMT14');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'TEMP_AMT14', 0);
            }
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        paymentsum = SYS_getFieldSumValue(node, "FA_PMT_AMT", 2);
        interestsum = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
        //ovdIntSum = SYS_getFieldSumValue(node, "FA_PEN_INT_AMT", 2);
        ovdIntSum = SYS_getFieldSumValue(node, "FA_OVD_INT_AMT", 2);
        refundIntSum = SYS_getFieldSumValue(node, "PO_REFUND_INT", 2);
        SYS_setValueToMain('FA_PAID_PRIN_SUM', paymentsum);
        SYS_setValueToMain('FA_PAID_INT_SUM', interestsum);
        SYS_setValueToMain('FA_OVDUE_INT_SUM', ovdIntSum);
        SYS_setValueToMain('FA_TTL_REFUND_INT', refundIntSum);
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_SUM, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_OVDUE_INT_SUM, 'onchange');

        finRetsum = SYS_getFieldSumValue(node, "TEMP_AMT18", 2);
        //newfinRetsum = SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value) - SYS_BeFloat(finRetsum);
        //SYS_setValueToMain('FA_TTL_FIN_RET_BAL', newfinRetsum);
        //document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, SYS_BeFloat(newfinRetsum));
        currentDo = tempDo;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function POReturnFin_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function POReturnFin_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function POReturnFin_Settle_loan_po(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var intChgType; // Utility Auto Fix Comments
        var invint; // Utility Auto Fix Comments
        var lastpindt; // Utility Auto Fix Comments
        var loanDueDt; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var overDueInt; // Utility Auto Fix Comments
        var pmtValDt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var subdays1;
        var loanbal;
        var ppaidamt;
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
            fldValue = SYS_getValFromRec(record, 'PO_LOAN_EBAL');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'PO_LOAN_EBAL', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_TEMP_PO_INT_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_TEMP_PO_INT_AMT', 0);
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

        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            type = SYS_getRecState(record);
            document.MAINFORM.FA_LOAN_PPAID_AMT.value = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
            document.MAINFORM.PO_LOAN_ID.value = SYS_getValFromRec(record, 'PO_LOAN_ID');
            document.MAINFORM.TEMP_LOAN_ID.value = document.MAINFORM.PO_LOAN_ID.value;
            SYS_GetTableDataByRule_S('GET_Total_Paid_Interest', '1', 'Y');
            interest = document.MAINFORM.FA_TEMP_PO_INT_AMT.value;
            record = SYS_setValToRec(record, 'FA_TEMP_PO_INT_AMT', interest);
            //lastpindt = SYS_getValFromRec(record, 'FA_LAST_PINT_DT');
            document.MAINFORM.FA_LOAN_DUE_DT.value = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
            document.MAINFORM.FA_LOAN_INT_RT.value = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');
            document.MAINFORM.FA_TEMP7.value = SYS_GetSubDays(document.MAINFORM.FA_PMT_VAL_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name); // Utility Auto Fix Comments
            pmtValDt = document.MAINFORM.TRX_DT.value;
            document.MAINFORM.FA_TEMP_DT1.value = SYS_getValFromRec(record, 'FA_TEMP_DT1');
            //document.MAINFORM.FA_TEMP_DT1.value = SYS_getValFromRec(record, 'FA_LOAN_VAL_DT');
            intChgType = SYS_getValFromRec(record, 'FA_INT_CHG_TYPE');
            //pmtValDt = document.MAINFORM.FA_PMT_VAL_DT.value;
            loanDueDt = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
            document.MAINFORM.FA_LOAN_DUE_DT.value = loanDueDt;
            subdays1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
            if (subdays1 < 0 && intChgType == '1') { //For upfront and befer due date            	
                SYS_InqGapi_S('FAEF_Settle_Inquire_AMZ');
                record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', document.MAINFORM.IA_Y_REFUND_INT.value);
                invint = 0;
                overDueInt = 0;
            } else { //Edit by amy in 20151110 for upfront and after due date
                document.MAINFORM.TRX_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.TRX_DT.value);
                SYS_InqGapi_S('FAEF_Settle_Inquire_ACC');
                invint = document.MAINFORM.FA_TEMP_AMT11.value;
                overDueInt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
                document.MAINFORM.TRX_DT.value = pmtValDt;
                record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', invint);
                //Edit by Sunny
                record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', invint);
                record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', overDueInt);
                record = SYS_setValToRec(record, 'FA_TEMP_AMT19', overDueInt);
            }
            loanbal = SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL');
            ppaidamt = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
            if (loanbal > ppaidamt) {
                document.MAINFORM.FA_LOAN_PPAID_AMT.value = ppaidamt;
            } else {
                document.MAINFORM.FA_LOAN_PPAID_AMT.value = loanbal;
            }
            /*if (!(pmtValDt < loanDueDt && intChgType == '1')) {
      SYS_InqGapi_S('FAEF_inquiryint_set8013_PO');
      invint = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
      overDueInt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
      record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', invint);
      record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', overDueInt);
  } else {
      record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', 0);
      record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', 0);
  }*/
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        currentDo = tempDo;
        var INTAMT = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
        document.MAINFORM.FA_LOAN_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, INTAMT);
        var OVDINTAMT = SYS_getFieldSumValue(node, "FA_OVD_INT_EAMT", 2);
        document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, OVDINTAMT);
        var PO_REFUND_INT = SYS_getFieldSumValue(node, "IA_Y_REFUND_INT", 2);
        document.MAINFORM.PO_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, PO_REFUND_INT);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function POReturnFin_Settle_loan_po_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function POReturnFin_Settle_loan_po_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_POReturnFin() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_POReturnFin_Settle_loan_po() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}


function ReturnFin(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var finRetsum; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var interestsum; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var newfinRetsum; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var ovdIntSum; // Utility Auto Fix Comments
        var paymentsum; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var refundIntSum; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        tempDo = currentDo;
        arrayvalue = SYS_getRecords(node);
        mData = [];


        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            fldValue = SYS_getValFromRec(record, 'TEMP_AMT18');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'TEMP_AMT18', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT8');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_TEMP_AMT8', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_PMT_AMT');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_PMT_AMT', 0);
            }
            fldValue = SYS_getValFromRec(record, 'FA_FIN_RET_BAL');
            if (fldValue == '' || fldValue == null) {
                record = SYS_setValToRec(record, 'FA_FIN_RET_BAL', 0);
            }
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        paymentsum = SYS_getFieldSumValue(node, "FA_PMT_AMT", 2);
        interestsum = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
        //ovdIntSum = SYS_getFieldSumValue(node, "FA_PEN_INT_AMT", 2);
        ovdIntSum = SYS_getFieldSumValue(node, "FA_OVD_INT_AMT", 2);
        refundIntSum = SYS_getFieldSumValue(node, "FA_INV_REFUND_INT", 2);
        SYS_setValueToMain('FA_PAID_PRIN_SUM', paymentsum);
        SYS_setValueToMain('FA_PAID_INT_SUM', interestsum);
        SYS_setValueToMain('FA_OVDUE_INT_SUM', ovdIntSum);
        SYS_setValueToMain('FA_TTL_REFUND_INT', refundIntSum);
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_SUM, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_OVDUE_INT_SUM, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_REFUND_INT, 'onchange');;
        /*num=SYS_getcurrRecordCount("ReturnFin");
if(num==0){
SYT_ChangeFldClass();
}*/
        finRetsum = SYS_getFieldSumValue(node, "TEMP_AMT18", 2);
        newfinRetsum = SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value) - SYS_BeFloat(finRetsum);
        newfinRetsum = Math.max(newfinRetsum, 0);
        SYS_setValueToMain('FA_TTL_FIN_RET_BAL', newfinRetsum);
        document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, SYS_BeFloat(newfinRetsum));
        currentDo = tempDo;
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function ReturnFin_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function ReturnFin_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function ReturnFin_Settle_loan(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var intChgType; // Utility Auto Fix Comments
        var invint; // Utility Auto Fix Comments
        var lastpindt; // Utility Auto Fix Comments
        var loanDueDt; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var overDueInt; // Utility Auto Fix Comments
        var pmtValDt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var subdays1;
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

        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            type = SYS_getRecState(record);
            document.MAINFORM.FA_LOAN_PPAID_AMT.value = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
            document.MAINFORM.FA_INV_LOAN_ID.value = SYS_getValFromRec(record, 'FA_INV_LOAN_ID');
            document.MAINFORM.TEMP_LOAN_ID.value = document.MAINFORM.FA_INV_LOAN_ID.value;
            SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_DO_Settle_New_Settle_loan_0', '1', 'Y');
            interest = document.MAINFORM.FA_TEMP_INV_INT_AMT.value;
            record = SYS_setValToRec(record, 'FA_TEMP_INV_INT_AMT', interest);
            //lastpindt = SYS_getValFromRec(record, 'FA_LAST_PINT_DT');
            document.MAINFORM.FA_LOAN_DUE_DT.value = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
            document.MAINFORM.FA_LOAN_INT_RT.value = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');
            document.MAINFORM.FA_TEMP7.value = SYS_GetSubDays(document.MAINFORM.FA_PMT_VAL_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name); // Utility Auto Fix Comments
            pmtValDt = document.MAINFORM.TRX_DT.value;
            document.MAINFORM.FA_TEMP_DT1.value = SYS_getValFromRec(record, 'FA_TEMP_DT1');
            //document.MAINFORM.FA_TEMP_DT1.value = SYS_getValFromRec(record, 'FA_LOAN_VAL_DT');
            intChgType = SYS_getValFromRec(record, 'FA_INT_CHG_TYPE');
            //pmtValDt = document.MAINFORM.FA_PMT_VAL_DT.value;
            loanDueDt = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
            document.MAINFORM.FA_LOAN_DUE_DT.value = loanDueDt;
            subdays1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
            if (subdays1 < 0 && intChgType == '1') { //For upfront and befer due date
                SYS_InqGapi_S('FAEF_Settle_Inquire_AMZ');
                record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', document.MAINFORM.IA_Y_REFUND_INT.value);
                invint = 0;
                overDueInt = 0;
            } else { //Edit by amy in 20151110 for upfront and after due date
                document.MAINFORM.TRX_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.TRX_DT.value);
                SYS_InqGapi_S('FAEF_Settle_Inquire_ACC');
                invint = document.MAINFORM.FA_TEMP_AMT11.value;
                overDueInt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
                document.MAINFORM.TRX_DT.value = pmtValDt;
                record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', invint);
                //Edit by Sunny
                record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', invint);
                record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', overDueInt);
                record = SYS_setValToRec(record, 'FA_TEMP_AMT19', overDueInt);
            }
            /*if (!(pmtValDt < loanDueDt && intChgType == '1')) {
        SYS_InqGapi_S('FAEF_inquiryint_set8013');
        invint = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
        overDueInt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
        record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', invint);
        record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', overDueInt);
    } else {
        record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', 0);
        record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', 0);
    }*/
            mData.push(record);
        }

        SYS_reLoadGrid(node, mData);
        currentDo = tempDo;
        var INTAMT = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
        document.MAINFORM.FA_LOAN_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, INTAMT);
        var OVDINTAMT = SYS_getFieldSumValue(node, "FA_OVD_INT_EAMT", 2);
        document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, OVDINTAMT);
        var FA_INV_REFUND_INT = SYS_getFieldSumValue(node, "IA_Y_REFUND_INT", 2);
        document.MAINFORM.FA_INV_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, FA_INV_REFUND_INT);
    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function ReturnFin_Settle_loan_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function ReturnFin_Settle_loan_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ReturnFin() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ReturnFin_Settle_loan() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingReturn_DO.js", e);
    }
}