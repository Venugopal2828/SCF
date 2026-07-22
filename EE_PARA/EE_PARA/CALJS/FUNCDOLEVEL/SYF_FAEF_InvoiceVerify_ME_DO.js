function SYF_FAEF_getDOdata_VerifyInv(node, recordId, status) {
    try {
    	if(document.MAINFORM.FA_BUYER_CNTC_FLG.value=='Yes'){
    		SYS_GetDataForDO('Verifynv_SCF5');
    	}else{
    	if(document.MAINFORM.FA_TEMP2.value=='1'){
    		SYS_GetDataForDO('Verifynv_SCF');
    	}else if(document.MAINFORM.FA_TEMP2.value=='2'){
    		SYS_GetDataForDO('Verifynv_SCF2');
    	}else if(document.MAINFORM.FA_TEMP2.value=='3'){
    		SYS_GetDataForDO('Verifynv_SCF3');
    	}else if(document.MAINFORM.FA_TEMP2.value=='4'){
    		SYS_GetDataForDO('Verifynv_SCF4');
    	}
    }
        document.MAINFORM.FA_ACCEPT_FLG.value='';
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME_DO.js*SYF_FAEF_getDOdata_VerifyInv", e);
    }
}

function VerifyInv(node, recordId, status) {
    try {
//tempo solution start
		var fin_mode= SYS_getValueFromMain('INV_FIN_MODE');
        var num = SYS_getcurrRecordCount("VerifyInv");
        var arrayvalue = SYS_getRecords(node);
        var ccy = SYS_LOCAL_CCY;
        if(num>0){
        	            for (i = 0, len = arrayvalue.length; i < len; i++) { 
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                var type = SYS_getRecState(record);
                var veristatus = SYS_getValFromRec(record, 'FA_DOC_VERIFIED');
                var amt = SYS_getValFromRec(record, 'FA_ADJ_AMT');
                var doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');
                var appr = SYS_getValFromRec(record, 'FA_REQ_BUYER_APR_FLG');
                var pool_val = SYS_getValFromRec(record, 'INV_PASS_POOL_VAL');
                ccy = SYS_getValFromRec(record,'FA_DOC_CCY');
       /* if (veristatus == 'Accepted'&&doctype=='1' &&pool_val == 'Yes' ) {
            SYS_setValToRec(record, "FA_DOC_STATUS", 'Active');
            SYS_setValToRec(record, "TEMP_ACCEPT_INV", amt);

        } else if (veristatus == 'Rejected') {
            SYS_setValToRec(record, "FA_DOC_STATUS", 'Reject');
            SYS_setValToRec(record, "TEMP_ACCEPT_INV", 0);
        } else if(veristatus == 'Accepted'&&doctype!='1') {
            SYS_setValToRec(record, "FA_DOC_STATUS", 'Active');
            SYS_setValToRec(record, "TEMP_ACCEPT_INV", 0);
        } */
        
        if(pool_val == 'Yes'){
        	if(veristatus == 'Accepted'&&doctype=='1' ){
        	  SYS_setValToRec(record, "FA_DOC_STATUS", 'Active');
            SYS_setValToRec(record, "TEMP_ACCEPT_INV", amt);
        		
        	}
        	if(doctype == '1' && veristatus == 'Accepted'&& fin_mode == 'POOL' ){
                		SYS_setValToRec(record,  "INV_POOL_STATUS", 'IN');	
                	}
                }
        if (veristatus == 'Rejected') {
            SYS_setValToRec(record, "FA_DOC_STATUS", 'Reject');
            SYS_setValToRec(record, "TEMP_ACCEPT_INV", 0);
            SYS_setValToRec(record,  "INV_POOL_STATUS", '');	
        } 
        if(veristatus == 'Accepted'&&doctype!='1') {
            SYS_setValToRec(record, "FA_DOC_STATUS", 'Active');
            SYS_setValToRec(record, "TEMP_ACCEPT_INV", 0);
        } 
        	   
        if(appr == '1') {
            SYS_setValToRec(record, "FA_REQ_BUYER_APR_FLG", '2');
        }
                   SYS_reLoadGrid(node, arrayvalue);
                   
                 }

        var invamtsum = SYS_getFieldSumValue(node, "TEMP_ACCEPT_INV", 2);
        SYS_setValueToMain('ACCEPT_INV_AMT', SYT_AmtFormat(ccy, invamtsum));


            }

//tempo solution end        
} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME_DO.js*VerifyInv", e);
    }
}

function VerifyInv_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME_DO.js*VerifyInv_OnDeSelected", e);
    }
}

function VerifyInv_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceVerify_ME_DO.js*VerifyInv_OnSelected", e);
    }
}