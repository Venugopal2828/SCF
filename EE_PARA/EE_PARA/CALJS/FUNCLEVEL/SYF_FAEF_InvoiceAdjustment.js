var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var percent = document.MAINFORM.FA_MAX_LOAN_PERC.value;
        if (document.MAINFORM.INV_FIN_MODE.value == 'POOL') {
            var invsum = SYS_FloatMul(SYS_BeFloat(document.MAINFORM.FA_DECR_AMT.value), SYS_BeFloat(percent)) / 100;
        } else {
            var invsum = SYS_FloatMul(SYS_BeFloat(document.MAINFORM.ACCEPT_INV_AMT.value), SYS_BeFloat(percent)) / 100;
        }
        document.MAINFORM.AMT_AVAL_FOR_FUNDING.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, invsum);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TRF_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment.js*InitValues", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo_S('SCF_INV_ADJ', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {
        UnitCode = SYS_BUSI_UNIT.substr(0, 4);
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        day = date.substr(8, 2);
        var date1 = new Date(year, month, day);
        var date2 = new Date(year, 1, 1);
        var day = date1 - date2;
        var day = (date1 - date2) / 1000 / 60 / 60 / 24 + 1;
        sub = 'ADJ';
        document.MAINFORM.FA_TRF_REF.value = pre + sub + year + day + UnitCode + ref;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment.js*SYF_FAEF_Cal_Ref", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_ACCEPT_FLG_onchange = function() {
    try {
        var num = SYS_getcurrRecordCount("InvoiceAdjust");
        if (num > 0) {
            var node = SYS_getDoByXpath("InvoiceAdjust");
            var arrayvalue = SYS_getRecords(node);
            var mdata = [];
            var poolamt = 0;
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                if (document.MAINFORM.FA_ACCEPT_FLG.value == 'All Hit') {
                    SYS_setFieldValue(node, id, "FA_DOC_STATUS", 'Hit');
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Hit');
                } else if (document.MAINFORM.FA_ACCEPT_FLG.value == 'All Reject') {
                    SYS_setFieldValue(node, id, "FA_DOC_STATUS", 'Reject');
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Rejected');
                }
                var poolsts = SYS_getValFromRec(record, 'INV_POOL_STATUS');
                if (poolsts == "IN") {
                    SYS_setFieldValue(node, id, "INV_POOL_STATUS", 'OUT');
                    SYS_setFieldValue(node, id, "INV_POOL_STATUS__DESC__", 'OUT');
                }
                var adjamt = SYS_getValFromRec(record, 'FA_ADJ_AMT');
                var tempamt = SYS_getValFromRec(record, 'TEMP_ACCEPT_INV');
                if (tempamt > 0) {
                    poolamt = SYS_FloatAdd(poolamt, adjamt);
                }
                var invnosum = SYS_getcurrRecordCount("InvoiceAdjust");
                SYS_setValueToMain('TEMP_INV_NO', invnosum);
            }
            document.MAINFORM.FA_DECR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, poolamt)
            var invamtsum = SYS_getFieldSumValue(node, "FA_ADJ_AMT", 2);
            document.MAINFORM.ACCEPT_INV_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, invamtsum);
        } else {
            alert('Please get invoice data first.');
            document.MAINFORM.FA_ACCEPT_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceAdjustment.js*FLD_FAEF_FA_ACCEPT_FLG_onchange", e);
    }
}