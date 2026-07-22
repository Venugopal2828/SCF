function POVerify(node, recordId, status) {
    try {
        var num = SYS_getcurrRecordCount("POVerify");
        var arrayvalue = SYS_getRecords(node);
		var FA_TTL_PO_NO=0;
        if (num > 0) {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                var type = SYS_getRecState(record);
                var veristatus = SYS_getValFromRec(record, 'FA_DOC_VERIFIED');
                var amt = SYS_getValFromRec(record, 'PO_AMT');
                var appr = SYS_getValFromRec(record, 'FA_REQ_BUYER_APR_FLG');
                var loan_per = SYS_getValFromRec(record, 'PO_MAX_LOAN_PERC');
                var loan_val=SYS_FloatMul(amt, loan_per) / 100;
                var ccy = SYS_getValFromRec(record,'PO_CCY');
                if (veristatus == 'Accepted') {
                    SYS_setValToRec(record, "PO_STATUS", 'Active');
                    SYS_setValToRec(record, "FA_TEMP_AMT10", amt);
                    SYS_setValToRec(record, "PO_BAL", amt);
                    SYS_setValToRec(record, "PO_LOAN_AVL", loan_val);
					FA_TTL_PO_NO++;
                    
                } else if (veristatus == 'Rejected') {
                    SYS_setValToRec(record, "PO_STATUS", 'Reject');
                    SYS_setValToRec(record, "FA_TEMP_AMT10", 0);
                    SYS_setValToRec(record, "PO_BAL", 0);
                }
                  if(appr == '1') {
                    SYS_setValToRec(record, "FA_REQ_BUYER_APR_FLG", '2');
        }
            }
            SYS_reLoadGrid(node, arrayvalue);
        }
        var invamtsum = SYS_getFieldSumValue(node, "FA_TEMP_AMT10", 2);
        SYS_setValueToMain('ACCEPT_PO_AMT', SYT_AmtFormat(ccy, invamtsum));
        SYS_setValueToMain('FA_TTL_PO_NO', FA_TTL_PO_NO);
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40_DO.js*POVerify", e);
    }
}

function SYF_FAEF_getDOdata_POVerify(node, record, recordId) {
    try {
    	  if(document.MAINFORM.FA_BUYER_CNTC_FLG.value=='Yes'){
    		SYS_GetDataForDO('Verify_PO_APPR');
    	}else{
        if (document.MAINFORM.FA_TEMP2.value == '1') {
            SYS_GetDataForDO('Verify_PO_ALL');
        } else if (document.MAINFORM.FA_TEMP2.value == '2') {
            SYS_GetDataForDO('Verify_PO_HIT');
        } else if (document.MAINFORM.FA_TEMP2.value == '3') {
            SYS_GetDataForDO('Verify_PO_ACK');
        } else if (document.MAINFORM.FA_TEMP2.value == '4') {
            SYS_GetDataForDO('Verify_PO_HANDACK');
        }
      }
        document.MAINFORM.FA_ACCEPT_FLG.value = '';
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
		document.MAINFORM.FA_TTL_PO_NO.value = SYS_getcurrRecordCount("POVerify");
    } catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40_DO.js*SYF_FAEF_getDOdata_POVerify", e);
    }
}

function POVerify_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40_DO.js*POVerify_OnDeSelected", e);
    }
}

function POVerify_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POVerify_BL40_DO.js*POVerify_OnSelected", e);
    }
}