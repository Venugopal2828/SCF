var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var docamt = document.MAINFORM.ACCEPT_PO_AMT.value;
        var loan_per = document.MAINFORM.PO_MAX_LOAN_PERC.value;
        var loan_aval = SYS_FloatMul(docamt, loan_per) / 100;
        document.MAINFORM.PO_AVAL_FOR_FUNDING.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, loan_aval);
    } catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TRF_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment.js*InitValues", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo_S('SCF_PO_ADJ', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment.js*PreconditionOnInit", e);
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
        sub = 'ADP';
        document.MAINFORM.FA_TRF_REF.value = pre + sub + year + day + UnitCode + ref;
    } catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment.js*SYF_FAEF_Cal_Ref", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_ACCEPT_FLG_onchange = function() {
    try {
        var num = SYS_getcurrRecordCount("POAdjust");
        var docamt;
        var loan_per;
        var loan_aval;
        if (num > 0) {

            var node = SYS_getDoByXpath("POAdjust");
            var arrayvalue = SYS_getRecords(node);
            mdata = [];
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                if (document.MAINFORM.FA_ACCEPT_FLG.value == 'All Hit') {
                    SYS_setFieldValue(node, id, "PO_BAL", 0);
                    SYS_setFieldValue(node, id, "PO_LOAN_AVL", 0);
                    SYS_setFieldValue(node, id, "TRX_DT", SYS_BUSI_DATE);
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Hit');
                    SYS_setFieldValue(node, id, "PO_STATUS", 'Hit');
                } else if (document.MAINFORM.FA_ACCEPT_FLG.value == 'All Reject') {
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Rejected');
                    SYS_setFieldValue(node, id, "PO_STATUS", 'Reject');
                    SYS_setFieldValue(node, id, "PO_BAL", 0);
                    SYS_setFieldValue(node, id, "PO_LOAN_AVL", 0)
                    SYS_setFieldValue(node, id, "TRX_DT", SYS_BUSI_DATE);
                }
                docamt = SYS_getValFromRec(record, 'PO_AMT');
                loan_per = SYS_getValFromRec(record, 'PO_MAX_LOAN_PERC');
                loan_aval = SYS_FloatMul(docamt, loan_per) / 100;
            }
            var POamtsum = SYS_getFieldSumValue(node, "PO_AMT", 2);
            var ccy = document.MAINFORM.FA_LMT_CCY.value;
            SYS_setValueToMain('ACCEPT_PO_AMT', SYT_AmtFormat(ccy, POamtsum));
        } else {
            alert('Please get PO data first.');
            document.MAINFORM.FA_ACCEPT_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POAdjustment.js*FLD_FAEF_FA_ACCEPT_FLG_onchange", e);
    }
}