var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var arrayvalue;
        var docamt;
        var docvey;
        var posum;
        var percent;
        var poamtsum;
        var loan_aval;
        var i;
        var id;
        var mData;
        var node;
        var record;
        var appr;
        node = SYS_getDoByXpath("POVerify");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        poamtsum = 0;
        posum =0;
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            docamt = SYS_getValFromRec(record, 'PO_AMT');
            docvey = SYS_getValFromRec(record, 'FA_DOC_VERIFIED');
            appr = SYS_getValFromRec(record, 'FA_REQ_BUYER_APR_FLG');
            percent = SYS_getValFromRec(record,'PO_MAX_LOAN_PERC');
            loan_aval=SYS_FloatMul(docamt, percent) / 100;
            if (docvey == 'Accepted') {
                poamtsum = SYS_FloatAdd(poamtsum, docamt);
                posum = SYS_FloatAdd(posum, loan_aval);
            }
            if (appr == '1') {
                SYS_setValToRec(record, "FA_REQ_BUYER_APR_FLG", '2');
            }
        }
        SYS_reLoadGrid(node, arrayvalue);
        posum = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, posum);
        SYS_setValueToMain('PO_AVAL_FOR_FUNDING', posum);
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        var _do = SYS_getDoByXpath('POVerify');
        num = SYS_getcurrRecordCount("POVerify");
        if (num > 0) {
            var arrayvalue = SYS_getRecords(_do);
            for (var i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var recordTypeTemp = record['FA_DOC_VERIFIED']
                if (recordTypeTemp == 0) {
                    alert('Please use the Accept/Reject All flag or edit the records seprately to verify POs before confirm the transaction!');
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_TRF_REF.value = document.MAINFORM.FA_BUSI_TYPE.value + document.MAINFORM.FA_TRF_REF.value;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TRF_REF.value;
        document.MAINFORM.FA_TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_CHAR1.value = '1';
        document.MAINFORM.TEMP_CHAR2.value = '2';
        document.MAINFORM.TEMP_CHAR3.value = '3';
        SYS_GetCUBK('GET_APPR_PO', 'FA_SBR_REF', 'SYF_FAEF_GET_APPR_PO_Callbak()','','Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYF_FAEF_GET_APPR_PO_Callbak();
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo_S('SCF_INV_VER', 'SYF_FAEF_Cal_Ref(ref)');
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {
        var UnitCode;
        var date;
        var sub;
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
        sub = 'V';
        document.MAINFORM.FA_TRF_REF.value = pre + sub + year + day + UnitCode + ref;
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*SYF_FAEF_Cal_Ref", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_APPR_PO_Callbak = function() {
    try {
        if (document.MAINFORM.FA_TEMP6.value != '') {
            EEHtml.getElementById('APPR1').style.display = "";
            EEHtml.getElementById('FA_BUYER_CNTC_FLG').style.display = "";
            document.MAINFORM.FA_BUYER_CNTC_FLG.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.FA_TEMP2, 'P');
        } else {
            EEHtml.getElementById('APPR1').style.display = "none";
            EEHtml.getElementById('FA_BUYER_CNTC_FLG').style.display = "none";
            document.MAINFORM.FA_BUYER_CNTC_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*SYF_FAEF_GET_APPR_PO_Callbak", e);
    }
}

csFuncLevelProto.SYF_FAEF_Verify_Status = function() {
    try {
        var num = SYS_getcurrRecordCount("POVerify");
        var docamt;
        var loan_per;
        var loan_aval;
        if (num > 0) {

            var node = SYS_getDoByXpath("POVerify");
            var arrayvalue = SYS_getRecords(node);
            mdata = [];
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                if (document.MAINFORM.FA_ACCEPT_FLG.value == 'Accept All') {

                    docamt = SYS_getValFromRec(record, 'PO_AMT');
                    loan_per = SYS_getValFromRec(record, 'PO_MAX_LOAN_PERC');
                    loan_aval = SYS_FloatMul(docamt, loan_per) / 100;
                    SYS_setFieldValue(node, id, "PO_BAL", docamt);
                    SYS_setFieldValue(node, id, "PO_LOAN_AVL", loan_aval);
                    SYS_setFieldValue(node, id, "TRX_DT", SYS_BUSI_DATE);
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Accepted');
                    SYS_setFieldValue(node, id, "PO_STATUS", 'Active');
                } else if (document.MAINFORM.FA_ACCEPT_FLG.value == 'Reject All') {
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Rejected');
                    SYS_setFieldValue(node, id, "PO_STATUS", 'Reject');
                    SYS_setFieldValue(node, id, "PO_BAL", 0);
                    SYS_setFieldValue(node, id, "TRX_DT", SYS_BUSI_DATE);

                }
            }
        } else {
            alert('Please get PO data first.');
            document.MAINFORM.FA_ACCEPT_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*SYF_FAEF_Verify_Status", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_ACCEPT_FLG_onchange = function() {
    try {
        SYF_FAEF_Verify_Status();
        x_DO = SYS_getDoByXpath('POVerify');
        var arrayvalue = SYS_getRecords(x_DO);
        if (document.MAINFORM.FA_ACCEPT_FLG.value == 'Accept All') {
            /*for (i = 0, len = arrayvalue.length; i < len; i++) {
                id = SYS_getRecID(arrayvalue[i]);
                var POamt = SYS_getValFromRec(arrayvalue[i], 'PO_AMT');
            }*/
            var POamtsum = SYS_getFieldSumValue(x_DO, "PO_AMT", 2);
            //var ccy = EEHtml.getElementById('PO_CCY');
            var ccy = document.MAINFORM.FA_LMT_CCY.value;
            SYS_setValueToMain('ACCEPT_PO_AMT', SYT_AmtFormat(ccy, POamtsum));
			document.MAINFORM.FA_TTL_PO_NO.value = SYS_getcurrRecordCount("POVerify");
        }
		else if (document.MAINFORM.FA_ACCEPT_FLG.value == 'Reject All') {
            /*for (i = 0, len = arrayvalue.length; i < len; i++) {
                id = SYS_getRecID(arrayvalue[i]);
                var POamt = SYS_getValFromRec(arrayvalue[i], 'PO_AMT');
            }*/
            var POamtsum = 0;
            //var ccy = EEHtml.getElementById('PO_CCY');
            var ccy = document.MAINFORM.FA_LMT_CCY.value;
            SYS_setValueToMain('ACCEPT_PO_AMT', SYT_AmtFormat(ccy, POamtsum));
			document.MAINFORM.FA_TTL_PO_NO.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40.js*FLD_FAEF_FA_ACCEPT_FLG_onchange", e);
    }
}