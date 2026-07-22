function For_Fullpayment_GetDoData() {
    try {
        var aa = SYS_getDoByXpath('Settle_New');
        var mData = [];
        var arrayvalue = SYS_getRecords(aa);
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            var invstatus = 'Refunded';
        } else {
            var invstatus = 'Settled';
        }
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'FA_PMT_CLEAR_TYPE', '1');
            record = SYS_setValToRec(record, 'FA_DOC_BAL', 0);
            record = SYS_setValToRec(record, 'FA_ADJ_BAL', 0);
            record = SYS_setValToRec(record, 'FA_DOC_STATUS', invstatus);
            record = SYS_setValToRec(record, 'FA_PMT_AMT', SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, SYS_getValFromRec(record, 'FA_TEMP_AMT8')));
            record = SYS_setValToRec(record, 'FA_PMT_REF', SYS_getValueFromMain("FA_PMT_REF"));
            record = SYS_setValToRec(record, 'FA_PMT_DT', SYS_getValueFromMain("FA_PMT_DT"));
            record = SYS_setValToRec(record, 'FA_PMT_TYPE', SYS_getValueFromMain("FA_PMT_TYPE"));
            record = SYS_setValToRec(record, 'FA_PMT_VAL_DT', SYS_getValueFromMain("FA_PMT_VAL_DT"));
            record = SYS_setValToRec(record, 'FA_BUSI_TYPE', SYS_getValueFromMain("FA_BUSI_TYPE"));
            record = SYS_setValToRec(record, 'TRX_DT', SYS_getValueFromMain("TRX_DT"));
            record = SYS_setValToRec(record, 'FA_TEMP3', SYS_BUSI_UNIT);
            record = SYS_setValToRec(record, 'FA_TEMP4', SYS_ORG_FUNCTION_SHORT_NAME);
            record = SYS_setValToRec(record, 'FA_TEMP2', SYS_getValueFromMain('C_MAIN_REF'));
            record = SYS_setValToRec(record, 'FA_INV_CLEAR_AMT', SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, SYS_getValFromRec(record, 'FA_TEMP_AMT8')));

            mData.push(record);
        }
        SYS_reLoadGrid(aa, mData);
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*For_Fullpayment_GetDoData", e);
    }
}

function For_Fullpayment_Cal() {
    try {
        var Settle_New_Do = SYS_getDoByXpath('Settle_New');
        var Settle_New_Do_objRecords = SYS_getRecords(Settle_New_Do);
        For_Clear_Type();
        Settle_New(SYS_getDoByXpath("Settle_New"));
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*For_Fullpayment_Cal", e);
    }
}

function For_Clear_Type() {
    try {
        var _do = SYS_getDoByXpath('Settle_New');
        var recs = SYS_getRecords(_do);
        var mData = [];
        var flag = false;
        if (recs.length > 0) {
            var arrayvalue = SYS_getRecords(_do);
            for (var i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var FA_PMT_CLEAR_TYPE = SYS_getValFromRec(record, 'FA_PMT_CLEAR_TYPE');
                var FA_ADJ_BAL = SYS_getValFromRec(record, 'FA_TEMP_AMT8');
                var FA_DOC_BAL = SYS_getValFromRec(record, 'FA_DOC_BAL');
                var FA_PMT_AMT = SYS_getValFromRec(record, 'FA_TEMP_AMT8');
                var FA_INV_BAL = SYS_getValFromRec(record, 'FA_TEMP_AMT14');
                if (FA_PMT_CLEAR_TYPE === "1") {
                    record = SYS_setValToRec(record, 'FA_PMT_AMT', FA_PMT_AMT);
                    record = SYS_setValToRec(record, 'FA_DOC_BAL', 0);
                    record = SYS_setValToRec(record, 'FA_ADJ_BAL', 0);
                    mData.push(record);
                } else {
                    record = SYS_setValToRec(record, 'FA_DOC_BAL', FA_DOC_BAL);
                    record = SYS_setValToRec(record, 'FA_ADJ_BAL', FA_ADJ_BAL);
                    record = SYS_setValToRec(record, 'FA_PMT_AMT', 0);
                    mData.push(record);
                }
            }
            SYS_reLoadGrid(_do, mData);
        }
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*For_Clear_Type", e);
    }
}

function SYF_FAEF_getDOdata_Settle_New(node, record, recordId) {
    try {

            var aa = SYS_getDoByXpath('Settle_New');
            aa.clearAllDataSets(true);
            var objGetdateRule = {
                PoolBuyerPayment: "Settle_New"
            };
            var objStatus = {
                Settle_New: "A"
            };
            SYS_GetDataBatchForDO_S(objGetdateRule, objStatus);
        
        For_Fullpayment_GetDoData();
        For_Fullpayment_Cal();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*SYF_FAEF_getDOdata_Settle_New", e);
    }
}

function Settle_New(node, recordId, status) {
    try {
        var amtcleared; // Utility Auto Fix Comments
        var amtclearedsum; // Utility Auto Fix Comments
        var amtdeduct; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var bkchg; // Utility Auto Fix Comments
        var bkchgsum; // Utility Auto Fix Comments
        var deduct; // Utility Auto Fix Comments
        var deductsum; // Utility Auto Fix Comments
        var docbal; // Utility Auto Fix Comments
        var docbalsum; // Utility Auto Fix Comments
        var doctype; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var overint; // Utility Auto Fix Comments
        var overintsum; // Utility Auto Fix Comments
        var paidint; // Utility Auto Fix Comments
        var paidintsum; // Utility Auto Fix Comments
        var pmtamt; // Utility Auto Fix Comments
        var pmtamtsum; // Utility Auto Fix Comments
        var pmtflg; // Utility Auto Fix Comments
        var prin; // Utility Auto Fix Comments
        var prinsum; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var refund; // Utility Auto Fix Comments
        var refundsum; // Utility Auto Fix Comments
        var tmpDo; // Utility Auto Fix Comments
        var rebateamount; // Utility Auto Fix Comments
        var rebatsum; // Utility Auto Fix Comments
        tmpDo = currentDo;
        num = SYS_getcurrRecordCount("Settle_New");
        arrayvalue = SYS_getRecords(node);
        pmtamtsum = 0;
        bkchgsum = 0;
        deductsum = 0;
        docbalsum = 0;
        amtcleared = 0;
        amtclearedsum = 0;
        prinsum = 0;
        paidintsum = 0;
        overintsum = 0;
        refundsum = 0;
        rebatsum = 0;
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            pmtamt = SYS_getValFromRec(record, 'FA_PMT_AMT');
            doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');
            bkchg = SYS_getValFromRec(record, 'FA_BK_CHG_AMT');
            deduct = SYS_getValFromRec(record, 'FA_DEDUCT_AMT');
            docbal = SYS_getValFromRec(record, 'FA_ADJ_BAL');
            pmtflg = SYS_getValFromRec(record, 'FA_PMT_CLEAR_TYPE');
            amtcleared = SYS_getValFromRec(record, 'FA_INV_CLEAR_AMT');
            rebateamount = SYS_getValFromRec(record, 'FA_REBATE_AMT');
            if (doctype == '1') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) + SYS_BeFloat(pmtamt);

            } else if (doctype == '2') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) - SYS_BeFloat(pmtamt);

            }
            bkchgsum = SYS_BeFloat(bkchg) + SYS_BeFloat(bkchgsum);
            deductsum = SYS_BeFloat(deduct) + SYS_BeFloat(deductsum);
            docbalsum = SYS_BeFloat(docbal) + SYS_BeFloat(docbalsum);
            amtclearedsum = SYS_BeFloat(amtcleared) + SYS_BeFloat(amtclearedsum);
            rebatsum = SYS_BeFloat(rebateamount) + SYS_BeFloat(rebatsum);
        }
        SYS_setValueToMain('FA_PMT_AMT_SUM', pmtamtsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PMT_AMT_SUM'), 'onchange');
        amtdeduct = SYS_BeFloat(bkchgsum) + SYS_BeFloat(deductsum);
        //SYS_setValueToMain('FA_TTL_AMT_CLEARED', amtclearedsum);
        //EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_CLEARED'), 'onchange');
        //SYS_setValueToMain('FA_REBATE_AMT', rebatsum);
       // EEHtml.fireEvent(SYS_getMainObj('FA_REBATE_AMT'), 'onchange');
        currentDo = tmpDo;
        SYF_FAEF_Cal_AMTTOSELLER();
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*Settle_New", e);
    }
}

function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiCreditSummary_MultiCredit_OnDeSelected", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiCreditSummary_MultiCredit_OnSelected", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiCreditSummary_OnDeSelected", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiCreditSummary_OnSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiDebitSummary_MultiDebit_OnDeSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiDebitSummary_MultiDebit_OnSelected", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiDebitSummary_OnDeSelected", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*MultiDebitSummary_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit", e);
    }
}

function SYF_FAEF_getDOdata_Settle_New_Settle_loan(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*SYF_FAEF_getDOdata_Settle_New_Settle_loan", e);
    }
}

function Settle_New_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*Settle_New_OnDeSelected", e);
    }
}

function Settle_New_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*Settle_New_OnSelected", e);
    }
}

function Settle_New_Settle_loan_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*Settle_New_Settle_loan_OnDeSelected", e);
    }
}

function Settle_New_Settle_loan_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_PoolPayment_DO.js*Settle_New_Settle_loan_OnSelected", e);
    }
}