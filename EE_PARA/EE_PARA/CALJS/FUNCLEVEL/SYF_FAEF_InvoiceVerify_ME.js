var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var docamt; // Utility Auto Fix Comments
        var docvey;
        var invsum;
        var percent;
        var invamtsum;
        var doctype;
        var appr;
        var pool_val;
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("VerifyInv");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        invamtsum = 0;
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            docamt = SYS_getValFromRec(record, 'FA_ADJ_AMT');
            docvey = SYS_getValFromRec(record, 'FA_DOC_VERIFIED');
            doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');
            appr = SYS_getValFromRec(record, 'FA_REQ_BUYER_APR_FLG');
            pool_val = SYS_getValFromRec(record, 'INV_PASS_POOL_VAL');
            if(pool_val =='Yes'){
            	if (docvey == 'Accepted' && doctype == '1') {
                invamtsum = SYS_FloatAdd(invamtsum, docamt);
            }
            
          }
            if(appr == '1') {
            SYS_setValToRec(record, "FA_REQ_BUYER_APR_FLG", '2');
        }
        }
        SYS_reLoadGrid(node, arrayvalue);
        
        percent = SYS_getValueFromMain('FA_MAX_LOAN_PERC');
        invsum = SYS_FloatMul(invamtsum, percent) / 100;
        invsum = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, invsum);
        SYS_setValueToMain('AMT_AVAL_FOR_FUNDING', invsum);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        var _do = SYS_getDoByXpath('VerifyInv');
        num = SYS_getcurrRecordCount("VerifyInv");
        if (num > 0) {
            var arrayvalue = SYS_getRecords(_do);
            for (var i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var recordTypeTemp = record['FA_DOC_VERIFIED']
                if (recordTypeTemp == 0) {
                    alert('Please use the Accept/Reject All flag or edit the records seprately to verify invoices before confirm the transaction!');
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'PF') {
            document.MAINFORM.INVC_CE_UNIT_CODE.value = document.MAINFORM.FA_ANCHOR_ID.value;
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            document.MAINFORM.INVC_CE_UNIT_CODE.value = document.MAINFORM.FA_COUNTER_ID.value;
        }
        document.MAINFORM.FA_TRF_REF.value = document.MAINFORM.FA_BUSI_TYPE.value + document.MAINFORM.FA_TRF_REF.value;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TRF_REF.value;
        document.MAINFORM.FA_TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_CHAR1.value = '1';
        document.MAINFORM.TEMP_CHAR2.value = '2';
        document.MAINFORM.TEMP_CHAR3.value = '3';
        SYS_GetCUBK('GET_APPR_INV', 'FA_SBR_REF', 'SYF_FAEF_GET_APPR_INV_Callbak()','','Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYF_FAEF_GET_APPR_INV_Callbak();
		//SYS_InqGapi_S('EE_Counterparty');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo_S('SCF_INV_VER', 'SYF_FAEF_Cal_Ref');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {
        /*var UnitCode; // Utility Auto Fix Comments
                                                var date; // Utility Auto Fix Comments
                                                var sub; // Utility Auto Fix Comments
                                                UnitCode = SYS_BUSI_UNIT;
                                                date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
                                                year = date.substr(2, 2);
                                                month = date.substr(5, 2);
                                                sub = 'INV';
                                                document.MAINFORM.FA_TRF_REF.value = UnitCode + year + month + ref + sub;

                                                var LC = SYS_MODULE_NAME;
                                                //var Sequence = ref.substr(5, 10);
                                                var Sequence = ref;
                                                var BANKCNTY = SYS_BANK_COUNTRY;
                                                var BranchID = SYS_USER_ID.substr(0, 3);
                                                var d = new Date();
                                                var ys = d.getFullYear();
                                                var sys = ys.toString();
                                                var code = 'VE';
                                                var ss = sys.substr(2, 4) + LC + BranchID + Sequence + code;
                                                document.MAINFORM.FA_TRF_REF.value = ss;*/

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
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
        sub = 'IVE';
        document.MAINFORM.FA_TRF_REF.value = pre + sub + year + day + UnitCode + ref;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*SYF_FAEF_Cal_Ref", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_APPR_INV_Callbak = function() {
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
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*SYF_FAEF_GET_APPR_INV_Callbak", e);
    }
}

csFuncLevelProto.SYF_FAEF_Verify_Status = function() {
    try {
        var num = SYS_getcurrRecordCount("VerifyInv");
        if (num > 0) {
            var node = SYS_getDoByXpath("VerifyInv");
            var arrayvalue = SYS_getRecords(node);
            mdata = [];
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                if (document.MAINFORM.FA_ACCEPT_FLG.value == 'Accept All') {
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Accepted');
                    SYS_setFieldValue(node, id, "FA_DOC_STATUS", 'Active');
                    var invnosum = SYS_getcurrRecordCount("VerifyInv");
                    SYS_setValueToMain('TEMP_INV_NO', invnosum);
                } else if (document.MAINFORM.FA_ACCEPT_FLG.value == 'Reject All') {
                    SYS_setFieldValue(node, id, "FA_DOC_VERIFIED", 'Rejected');
                    SYS_setFieldValue(node, id, "FA_DOC_STATUS", 'Reject');
                    SYS_setFieldValue(node, id, "INV_POOL_STATUS", '');
                }
            }
        } else {
            alert('Please get invoice data first.');
            document.MAINFORM.FA_ACCEPT_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*SYF_FAEF_Verify_Status", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_ACCEPT_FLG_onchange = function() {
    try {
        SYF_FAEF_Verify_Status();
        x_DO = SYS_getDoByXpath('VerifyInv');
        var arrayvalue = SYS_getRecords(x_DO);
        if (document.MAINFORM.FA_ACCEPT_FLG.value == 'Accept All') {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                id = SYS_getRecID(arrayvalue[i]);
                var fin_mode= SYS_getValueFromMain('INV_FIN_MODE');
                var invamt = SYS_getValFromRec(arrayvalue[i], 'FA_ADJ_AMT');
                var doctype = SYS_getValFromRec(arrayvalue[i], 'FA_DOC_TYPE');
                var pool_val = SYS_getValFromRec(arrayvalue[i],  'INV_PASS_POOL_VAL');
               /* if (doctype == '1'  ) {
                    SYS_setFieldValue(x_DO, id, "TEMP_ACCEPT_INV", invamt);
                } else {
                    SYS_setFieldValue(x_DO, id, "TEMP_ACCEPT_INV", 0);
                }*/
   
                if(pool_val =='Yes'){

                	if(doctype == '1' && fin_mode == 'POOL'){
                		SYS_setFieldValue(x_DO, id, "INV_POOL_STATUS", 'IN');	
                	}
                	if(doctype == '1'){
                	SYS_setFieldValue(x_DO, id, "TEMP_ACCEPT_INV", invamt);	
                	}
                	else {
                    SYS_setFieldValue(x_DO, id, "TEMP_ACCEPT_INV", 0);
                }
                }
            }
            var invamtsum = SYS_getFieldSumValue(x_DO, "TEMP_ACCEPT_INV", 2);
            var ccy = document.MAINFORM.FA_LMT_CCY.value;
            SYS_setValueToMain('ACCEPT_INV_AMT', SYT_AmtFormat(ccy, invamtsum));
        } else {
            document.MAINFORM.ACCEPT_INV_AMT.value = '0.00'
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*FLD_FAEF_FA_ACCEPT_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TEMP3_onchange = function() {
    try {
        if (document.MAINFORM.FA_TEMP3.value == '1') {
            document.MAINFORM.TEMP_CHAR1.value = '1';
            document.MAINFORM.TEMP_CHAR2.value = '2';
            document.MAINFORM.TEMP_CHAR3.value = '3';
        } else if (document.MAINFORM.FA_TEMP3.value == '2') {
            document.MAINFORM.TEMP_CHAR1.value = '1';
            document.MAINFORM.TEMP_CHAR2.value = '1';
            document.MAINFORM.TEMP_CHAR3.value = '1';
        } else if (document.MAINFORM.FA_TEMP3.value == '3') {
            document.MAINFORM.TEMP_CHAR1.value = '2';
            document.MAINFORM.TEMP_CHAR2.value = '2';
            document.MAINFORM.TEMP_CHAR3.value = '3';
        } else {
            document.MAINFORM.TEMP_CHAR1.value = '1';
            document.MAINFORM.TEMP_CHAR2.value = '2';
            document.MAINFORM.TEMP_CHAR3.value = '3';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME.js*FLD_FAEF_FA_TEMP3_onchange", e);
    }
}