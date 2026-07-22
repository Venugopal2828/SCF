function SYF_FAEF_getDOdata_InvoiceAdjust(node, record, recordId) {
    try {
        SYS_GetDataForDO_S('AdjustInv_SCF');
        document.MAINFORM.FA_ACCEPT_FLG.value = '';
        document.MAINFORM.ACCEPT_INV_AMT.value = 0;
        document.MAINFORM.FA_DECR_AMT.value = 0;
        var num = SYS_getcurrRecordCount("InvoiceAdjust");
        if (num > 0) {
            var node = SYS_getDoByXpath("InvoiceAdjust");
            var arrayvalue = SYS_getRecords(node);
            var mData = [];
            var poolamt = 0;
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                var adjamt = SYS_getValFromRec(record, 'FA_ADJ_AMT');
                var poolsts = SYS_getValFromRec(record, 'INV_POOL_STATUS');
                if (poolsts == "IN") {
                    SYS_setFieldValue(node, id, "TEMP_ACCEPT_INV", adjamt);
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment_DO.js*SYF_FAEF_getDOdata_InvoiceAdjust", e);
    }
}

function InvoiceAdjust(node, recordId, status) {
    try {
        var num = SYS_getcurrRecordCount("InvoiceAdjust");
        if (num > 0) {
            var node = SYS_getDoByXpath("InvoiceAdjust");
            var arrayvalue = SYS_getRecords(node);
            var poolamt = 0;
            var invamtsum = 0;
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                var adjamt = SYS_getValFromRec(record, 'FA_ADJ_AMT');
                var tempamt = SYS_getValFromRec(record, 'TEMP_ACCEPT_INV');
                var verify = SYS_getValFromRec(record, 'FA_DOC_VERIFIED');
                if (verify == 'Hit' || verify == 'Rejected') {
                    if (tempamt > 0) {
                        poolamt = SYS_FloatAdd(poolamt, adjamt);
                    }
                    invamtsum = SYS_FloatAdd(invamtsum, adjamt);
                }
            }
            document.MAINFORM.FA_DECR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, poolamt);
            document.MAINFORM.ACCEPT_INV_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, invamtsum);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment_DO.js*InvoiceAdjust", e);
    }
}

function InvoiceAdjust_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment_DO.js*InvoiceAdjust_OnDeSelected", e);
    }
}

function InvoiceAdjust_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment_DO.js*InvoiceAdjust_OnSelected", e);
    }
}