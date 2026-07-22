function SYF_FAEF_getDOdata_POAdjust(node, record, recordId) {
    try {
        SYS_GetDataForDO('ADJ_PO');

        document.MAINFORM.FA_ACCEPT_FLG.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment_DO.js*SYF_FAEF_getDOdata_POAdjust", e);
    }
}

function POAdjust(node, recordId, status) {
    try {
        var num = SYS_getcurrRecordCount("POAdjust");
        var arrayvalue = SYS_getRecords(node);
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                var type = SYS_getRecState(record);
                var veristatus = SYS_getValFromRec(record, 'FA_DOC_VERIFIED');
                var amt = SYS_getValFromRec(record, 'PO_AMT');
                var loan_per = SYS_getValFromRec(record, 'PO_MAX_LOAN_PERC');
                var loan_val = SYS_FloatMul(amt, loan_per) / 100;
                var ccy = SYS_getValFromRec(record, 'PO_CCY');
                if (veristatus == 'Hit') {
                    SYS_setValToRec(record, "PO_STATUS", 'Hit');
                    SYS_setValToRec(record, "FA_TEMP_AMT10", amt);
                    SYS_setValToRec(record, "PO_BAL", 0);
                    SYS_setValToRec(record, "PO_LOAN_AVL", loan_val);

                } else if (veristatus == 'Rejected') {
                    SYS_setValToRec(record, "PO_STATUS", 'Reject');
                    SYS_setValToRec(record, "FA_TEMP_AMT10", amt);
                    SYS_setValToRec(record, "PO_BAL", 0);
                    SYS_setValToRec(record, "PO_LOAN_AVL", 0);
                }
            }
            SYS_reLoadGrid(node, arrayvalue);
        }
        var invamtsum = SYS_getFieldSumValue(node, "FA_TEMP_AMT10", 2);
        SYS_setValueToMain('ACCEPT_PO_AMT', SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, invamtsum));
    } catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment_DO.js*POAdjust", e);
    }
}

function POAdjust_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment_DO.js*POAdjust_OnDeSelected", e);
    }
}

function POAdjust_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment_DO.js*POAdjust_OnSelected", e);
    }
}