function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}


function SYF_FAEF_getDOdata_Settle_New(node, recordId, status) {
    try {
        var search_by = SYS_getValueFromMain("FA_SETTLE_FLG");
        var loanref = SYS_getValueFromMain("FA_LOAN_ID");
        if (search_by == 'Loan') {
                var aa = SYS_getDoByXpath('Settle_New');
                aa.clearAllDataSets(true);
                    var objGetdateRule = {
                        settle_invoiceME: "Settle_New",
                        settle: "Settle_New.Settle_loan"
                    };
                var objStatus = {
                    Settle_New: "A",
                    Settle_New_Settle_loan: "A"
                };
                SYS_GetDataBatchForDO_S(objGetdateRule, objStatus);
        } else {
            var lastduedate = SYS_getValueFromMain("TEMP_DUE_DT");
            if (lastduedate == '') {
                alert("Last Due Date cannot be empty, please input it!");
                return;
            } else {
                var aa = SYS_getDoByXpath('Settle_New');
                aa.clearAllDataSets(true);
                var objGetdateRule = {
                    settle_unfinance_ME: "Settle_New"
                };
                var objStatus = {
                    Settle_New: "A"
                };
                SYS_GetDataBatchForDO_S(objGetdateRule, objStatus);
            }
        }
            For_Fullpayment_GetDoData();
            For_Fullpayment_Cal();
            Settle_New_Settle_loan_auto();
    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_Settle_New_Settle_loan() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
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
            docbal = SYS_getValFromRec(record, 'FA_DOC_BAL');
            pmtflg = SYS_getValFromRec(record, 'FA_PMT_CLEAR_TYPE');
            amtcleared = SYS_getValFromRec(record, 'FA_INV_CLEAR_AMT');
            prin = SYS_getValFromRec(record, 'FA_PAID_PRIN_AMT');
            paidint = SYS_getValFromRec(record, 'FA_PAID_INT_AMT');
            overint = SYS_getValFromRec(record, 'FA_OVD_INT_AMT');
            refund = SYS_getValFromRec(record, 'FA_INV_REFUND_INT');
            if (doctype == '1') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) + SYS_BeFloat(pmtamt);

            } else if (doctype == '2') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) - SYS_BeFloat(pmtamt);

            }
            bkchgsum = SYS_BeFloat(bkchg) + SYS_BeFloat(bkchgsum);
            deductsum = SYS_BeFloat(deduct) + SYS_BeFloat(deductsum);
            docbalsum = SYS_BeFloat(docbal) + SYS_BeFloat(docbalsum);
            amtclearedsum = SYS_BeFloat(amtcleared) + SYS_BeFloat(amtclearedsum);
            prinsum = SYS_BeFloat(prin) + SYS_BeFloat(prinsum);
            paidintsum = SYS_BeFloat(paidint) + SYS_BeFloat(paidintsum);
            overintsum = SYS_BeFloat(overint) + SYS_BeFloat(overintsum);
            refundsum = SYF_FAEF_dcmAdd(SYS_BeFloat(refund), SYS_BeFloat(refundsum));
        }

        /*SYS_setValueToMain('FA_PMT_AMT_SUM', pmtamtsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PMT_AMT_SUM'), 'onchange');
        amtdeduct = SYS_BeFloat(bkchgsum) + SYS_BeFloat(deductsum);
        SYS_setValueToMain('FA_TTL_AMT_DEDUCT', amtdeduct);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_DEDUCT'), 'onchange');
        SYS_setValueToMain('FA_TTL_AMT_CLEARED', amtclearedsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_CLEARED'), 'onchange');
        SYS_setValueToMain('FA_PAID_PRIN_SUM', prinsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_PRIN_SUM'), 'onchange');
        SYS_setValueToMain('FA_PAID_INT_SUM', paidintsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_INT_SUM'), 'onchange');
        SYS_setValueToMain('FA_OVDUE_INT_SUM', overintsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_OVDUE_INT_SUM'), 'onchange');
        SYS_setValueToMain('FA_TTL_REFUND_INT', refundsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_REFUND_INT'), 'onchange');*/
        //Edit by amy for POF in 20151023
        SYS_setValueToMain('FA_PMT_AMT_SUM', pmtamtsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PMT_AMT_SUM'), 'onchange');
        amtdeduct = SYS_BeFloat(bkchgsum) + SYS_BeFloat(deductsum);
        //SYS_setValueToMain('FA_TTL_AMT_DEDUCT', amtdeduct);
        //EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_DEDUCT'), 'onchange');
        SYS_setValueToMain('FA_TTL_AMT_CLEARED', amtclearedsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_CLEARED'), 'onchange');
        SYS_setValueToMain('FA_PAID_PRIN_SUM', prinsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_PRIN_SUM'), 'onchange');
        SYS_setValueToMain('FA_PAID_INT_SUM', paidintsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PAID_INT_SUM'), 'onchange');
        SYS_setValueToMain('FA_OVDUE_INT_SUM', overintsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_OVDUE_INT_SUM'), 'onchange');
        SYS_setValueToMain('FA_TTL_REFUND_INT', refundsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_REFUND_INT'), 'onchange');
        currentDo = tmpDo;
        //SYF_FAEF_ForAmtFormat();
        //SYF_FAEF_Cal_Payment_Information();
        SYF_FAEF_Cal_AMTTOSELLER();
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement_DO.js", e);
    }
}

function For_Fullpayment_GetDoData() {
    var aa = SYS_getDoByXpath('Settle_New');
    var mData = [];
    var arrayvalue = SYS_getRecords(aa);
    if(document.MAINFORM.FA_BUSI_TYPE.value=='RD'){
    var invstatus='Refunded';
    }else{
    var invstatus='Settled';	
    }
    for (var i = 0, len = arrayvalue.length; i < len; i++) {
        record = arrayvalue[i];
        record = SYS_setValToRec(record, 'FA_PMT_CLEAR_TYPE', '1');
        record = SYS_setValToRec(record, 'FA_DOC_BAL', 0);
        record = SYS_setValToRec(record, 'FA_DOC_STATUS', invstatus);
        record = SYS_setValToRec(record, 'FA_PMT_AMT', SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, SYS_getValFromRec(record, 'FA_TEMP_AMT8')));
        record = SYS_setValToRec(record, 'FA_PMT_REF', SYS_getValueFromMain("FA_PMT_REF"));
        record = SYS_setValToRec(record, 'FA_PMT_DT', SYS_getValueFromMain("FA_PMT_DT"));
        record = SYS_setValToRec(record, 'FA_PMT_TYPE', SYS_getValueFromMain("FA_PMT_TYPE"));
        record = SYS_setValToRec(record, 'FA_PMT_VAL_DT', SYS_getValueFromMain("FA_PMT_VAL_DT"));
        record = SYS_setValToRec(record, 'FA_BUSI_TYPE', SYS_getValueFromMain("FA_BUSI_TYPE"));
        record = SYS_setValToRec(record, 'CLERK_ID', SYS_getValueFromMain("CLERK_ID"));
        record = SYS_setValToRec(record, 'TRX_DT', SYS_getValueFromMain("TRX_DT"));
        record = SYS_setValToRec(record, 'FA_TEMP3', SYS_BUSI_UNIT);
        record = SYS_setValToRec(record, 'FA_TEMP4', SYS_ORG_FUNCTION_SHORT_NAME);
        record = SYS_setValToRec(record, 'FA_TEMP2', SYS_getValueFromMain('C_MAIN_REF'));
        //SYS_GetTableData_SvrSql_S("GET_BASE_DAYS", "FA_DOC_CCY", "I_BASE_DAY", "IA_I_BASE_DAYS", 'Y');
		SYS_GetTableDataByRule_S('GET_BASE_DAYS', '1', 'Y');
        record=SYS_setValToRec(record,'IA_I_BASE_DAYS',document.MAINFORM.IA_I_BASE_DAYS.value);
        record = SYS_setValToRec(record, 'FA_INV_CLEAR_AMT', SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, SYS_getValFromRec(record, 'FA_TEMP_AMT8')));
        record = SYS_setValToRec(record, 'FA_OVD_INT_AMT', 0);
        record = SYS_setValToRec(record, 'FA_PAID_INT_AMT', 0);
        record = SYS_setValToRec(record, 'FA_PAID_PRIN_AMT', 0);
        record = SYS_setValToRec(record, 'FA_INV_REFUND_INT', 0);
        record = SYS_setValToRec(record, 'FA_INV_LOAN_BAL', 0);
        mData.push(record);
    }
    SYS_reLoadGrid(aa, mData);
}


function For_Fullpayment_Cal() {
    var Settle_New_Do = SYS_getDoByXpath('Settle_New');
    var Settle_New_Do_objRecords = SYS_getRecords(Settle_New_Do);
    //    var _do=SYS_getDoByXpath('Settle_New.Settle_loan');
    //    if(_do === null){
    For_Clear_Type();
    //    For_FA_INV_CLEAR_AMT();
    Settle_New(SYS_getDoByXpath("Settle_New"));

}


function For_Clear_Type() {

    var _do = SYS_getDoByXpath('Settle_New');
    var recs = SYS_getRecords(_do);
    var mData = [];
    var flag = false;
    if (recs.length > 0) {
        var arrayvalue = SYS_getRecords(_do);
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var record = arrayvalue[i];
            var FA_PMT_CLEAR_TYPE = SYS_getValFromRec(record, 'FA_PMT_CLEAR_TYPE');
            var FA_DOC_BAL = SYS_getValFromRec(record, 'FA_TEMP_AMT8');
            var FA_PMT_AMT = SYS_getValFromRec(record, 'FA_TEMP_AMT8');
            var FA_INV_BAL = SYS_getValFromRec(record, 'FA_TEMP_AMT14');
            if (FA_PMT_CLEAR_TYPE === "1") {
                record = SYS_setValToRec(record, 'FA_PMT_AMT', FA_PMT_AMT);
                record = SYS_setValToRec(record, 'FA_DOC_BAL', 0);
                record = SYS_setValToRec(record, 'FA_OVD_INT_AMT', 0);
                record = SYS_setValToRec(record, 'FA_PAID_INT_AMT', 0);
                record = SYS_setValToRec(record, 'FA_PAID_PRIN_AMT', FA_INV_BAL);
                record = SYS_setValToRec(record, 'FA_INV_REFUND_INT', 0);
                record = SYS_setValToRec(record, 'FA_INV_LOAN_BAL', 0);
                mData.push(record);
            } else {
                record = SYS_setValToRec(record, 'FA_DOC_BAL', FA_DOC_BAL);
                record = SYS_setValToRec(record, 'FA_PMT_AMT', 0);
                record = SYS_setValToRec(record, 'FA_OVD_INT_AMT', 0);
                record = SYS_setValToRec(record, 'FA_PAID_INT_AMT', 0);
                record = SYS_setValToRec(record, 'FA_PAID_PRIN_AMT', 0);
                record = SYS_setValToRec(record, 'FA_INV_REFUND_INT', 0);
                record = SYS_setValToRec(record, 'FA_INV_LOAN_BAL', FA_INV_BAL);
                mData.push(record);
            }
        }
        SYS_reLoadGrid(_do, mData);
    }
    SYF_FAEF_MLDC_SetDebitCreditData();
}


function FullPayment(node, recordId, status) {
    try {
        var aa = SYS_getDoByXpath('Settle_New');
        var aa_re = SYS_getRecords(aa);
        if (aa_re.length !== 0) {
            For_Fullpayment_GetDoData();
            For_Fullpayment_Cal();
            Settle_New(aa);
        } else {
            alert("Please click GetData button to retrieve invoices!");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function Settle_New_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function Settle_New_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function Settle_New_Settle_loan_auto() {
        if(document.MAINFORM.FA_SETTLE_FLG.value=='Unfinanced Invoices') {
            return;
        }  
        var _loando = SYS_getDoByXpath('Settle_New.Settle_loan');
        if(_loando == null){
            return;
        }
        var invint = document.MAINFORM.FA_TEMP_AMT11.value;
        var interest = document.MAINFORM.FA_TEMP_INV_INT_AMT.value;
        var subdays1 = SYS_GetSubDays(document.MAINFORM.FA_INVOICE_END_DT.name, document.MAINFORM.TRX_DT.name);
		var _settledo = SYS_getDoByXpath('Settle_New');
        var objLoanRecords = SYS_getAllRecords(_loando);    
        var settleData = [];
		for(var qq=0,lng=objLoanRecords.length;qq<lng;qq++){
			 var loanInstance = objLoanRecords[qq];            
             var parentid = loanInstance.parentRecordId;
             var settleRecord = _settledo.getRecord(parentid);//get settle DO record
			var parentloantimes=SYS_getFieldValue(_settledo,parentid,"FA_INV_LOAN_TIMES");
			var parentpaidflg=SYS_getFieldValue(_settledo,parentid,"FA_PMT_CLEAR_TYPE");
//            if (parentloantimes == 1 && parentpaidflg == '1') {   AutoFinancing not update INVC_MASTER level
                 if (parentpaidflg == '1') {
            			var PRINAMT = 0;
		              var INTAMT = 0;
		              var OVDINTAMT = 0;
		              var LOANBAL = 0;
		              var FA_INV_REFUND_INT = 0;
		              var tempintamt = 0;
			   var parentpaidamt=SYS_getFieldValue(_settledo,parentid,"FA_PMT_AMT");
			   var parentovdintrt=SYS_getFieldValue(_settledo,parentid,"FA_OVDUE_INT_RT");
               var loanData = [];
			   var loanRecords  = _loando.getRecords(loanInstance.data);    //get loan DO record           
                for (var i = 0, len = loanRecords.length; i < len; i++) {
                    var loanRecord = loanRecords[i];
                    //for requirement1.1
                    var invloanid = SYS_getValFromRec(loanRecord, 'FA_INV_LOAN_ID');
                    settleRecord = SYS_setValToRec(settleRecord, 'FA_INV_LOAN_ID', invloanid);
                    settleRecord = SYS_setValToRec(settleRecord, 'TEMP_LOAN_ID', invloanid);
                    document.MAINFORM.TEMP_LOAN_ID.value=invloanid;
                    SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_DO_Settle_New_Settle_loan_0', '1', 'Y');                 
                    loanRecord = SYS_setValToRec(loanRecord, 'FA_TEMP_INV_INT_AMT', interest);
                    tempintamt += interest;
                    //for requirement1.2 
                    var tempDT = SYS_getValFromRec(loanRecord, 'FA_LOAN_VAL_DT');
                    var loanDueDt = SYS_getValFromRec(loanRecord, 'FA_LOAN_DUE_DT');
                    var tempEbal = SYS_getValFromRec(loanRecord, 'FA_TEMP_LOAN_EBAL');
                    var loanintrt = SYS_getValFromRec(loanRecord, 'FA_LOAN_INT_RT');


                    settleRecord = SYS_setValToRec(settleRecord, 'FA_TEMP_DT1', tempDT);
                    settleRecord = SYS_setValToRec(settleRecord, 'FA_LOAN_DUE_DT', loanDueDt);
                    settleRecord = SYS_setValToRec(settleRecord, 'FA_LOAN_PPAID_AMT', tempEbal);
                    settleRecord = SYS_setValToRec(settleRecord, 'FA_LOAN_INT_RT', loanintrt);
                    settleRecord = SYS_setValToRec(settleRecord, 'FA_OVDUE_INT_RT', parentovdintrt);

                   //for requirement1.3
                   var intChgType = SYS_getValFromRec(loanRecord, 'FA_INT_CHG_TYPE');
                   var pmtValDt =  SYS_getValFromRec(loanRecord, 'TRX_DT');
                   document.MAINFORM.FA_INVOICE_END_DT.value = loanDueDt;
                   if ((subdays1 < 0 ||subdays1 == 0)&& intChgType == '1') {
                         document.MAINFORM.FA_LOAN_PPAID_AMT.value = tempEbal;
                       SYS_InqGapi_S('FAEF_Settle_Inquire_AMZ_SCF');
                       var refundint = document.MAINFORM.IA_Y_REFUND_INT.value;
                       loanRecord = SYS_setValToRec(loanRecord, 'IA_Y_REFUND_INT', refundint);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_LOAN_INT_AMT', 0);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_LOAN_IPAID_AMT', 0);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_OVD_INT_EAMT', 0);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_TEMP_AMT19', 0);
                       settleRecord = SYS_setValToRec(settleRecord, 'IA_Y_REFUND_INT', refundint);
                       var invint = 0;
                       var overDueInt = 0;
                       FA_INV_REFUND_INT += SYS_BeFloat(refundint);
                   } else {
                       document.MAINFORM.FA_TEMP_DT1.value = tempDT;
                       SYS_InqGapi_S('FAEF_Settle_Inquire_ACC_SCF');
                       var invint = document.MAINFORM.FA_TEMP_AMT11.value;
                       var overDueInt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_LOAN_INT_AMT', invint);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_LOAN_IPAID_AMT', invint);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_OVD_INT_EAMT', overDueInt);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_TEMP_AMT19', overDueInt);
                       loanRecord = SYS_setValToRec(loanRecord, 'FA_LOAN_INT_SM_AMT', invint);
                   }

                //for requirement1.4
                var loanintAmt = SYS_getValFromRec(loanRecord, 'FA_LOAN_INT_AMT');
                var pamt = (SYS_BeFloat(tempEbal) * 1000 + SYS_BeFloat(loanintAmt) * 1000) / 1000;
                var ppamt = (SYS_BeFloat(tempEbal) * 1000) / 1000; // Utility Auto Fix Comments        
                loanRecord = SYS_setValToRec(loanRecord, 'FA_LOAN_PAID_AMT', pamt);
                loanRecord = SYS_setValToRec(loanRecord, 'FA_LOAN_PPAID_AMT', ppamt);
                loanRecord = SYS_setValToRec(loanRecord, 'FA_INV_LOAN_EBAL', 0); 

                //for requirement1.5
                PRINAMT += ppamt;//SYS_BeFloat(data[FA_LOAN_PPAID_AMT]);
                INTAMT += SYS_BeFloat(loanintAmt);
                OVDINTAMT += SYS_BeFloat(SYS_getValFromRec(loanRecord, 'FA_TEMP_AMT19'));

                LOANBAL += SYS_BeFloat(SYS_getValFromRec(loanRecord, 'FA_TEMP_LOAN_EBAL'));
                if (SYS_BeFloat(parentpaidamt) > SYS_BeFloat(overDueInt) + SYS_BeFloat(invint)) {
                    settleRecord = SYS_setValToRec(settleRecord, 'FA_PAID_PRIN_AMT',SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, PRINAMT));
                    settleRecord = SYS_setValToRec(settleRecord,"FA_PAID_INT_AMT",SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, INTAMT));
                    settleRecord = SYS_setValToRec(settleRecord,"FA_OVD_INT_AMT",SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, OVDINTAMT));
                    settleRecord = SYS_setValToRec(settleRecord,"FA_INV_LOAN_BAL",SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, LOANBAL - PRINAMT));

                } else {
                    settleRecord = SYS_setValToRec(settleRecord,"FA_PAID_PRIN_AMT",0);
                    settleRecord = SYS_setValToRec(settleRecord,"FA_PAID_INT_AMT",0);
                    settleRecord = SYS_setValToRec(settleRecord,"FA_OVD_INT_AMT",0);
                    settleRecord = SYS_setValToRec(settleRecord,"FA_INV_LOAN_BAL",SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, LOANBAL));
                }
                settleRecord = SYS_setValToRec(settleRecord,"FA_INV_REFUND_INT",FA_INV_REFUND_INT);
                settleRecord = SYS_setValToRec(settleRecord,"FA_TEMP_INV_INT_AMT",tempintamt);
                    
                loanData.push(loanRecord);

                }
				_loando.updateDataSetValue(loanData,qq);
            }
            settleData.push(settleRecord);
        }
        SYS_reLoadGrid(_settledo, settleData);

        var node=SYS_getDoByXpath('Settle_New');
        Settle_New(node);
}

function Settle_New_Settle_loan(node, recordId, status) {
    try {
        var FA_INV_REFUND_INT; // Utility Auto Fix Comments
        var INTAMT; // Utility Auto Fix Comments
        var LOANBAL; // Utility Auto Fix Comments
        var OVDINTAMT; // Utility Auto Fix Comments
        var PRINAMT; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var fieldlist; // Utility Auto Fix Comments
        var fieldmapping; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var intChgType; // Utility Auto Fix Comments
        var interest; // Utility Auto Fix Comments
        var invint; // Utility Auto Fix Comments
        var loanDueDt; // Utility Auto Fix Comments
        var loanbal; // Utility Auto Fix Comments
        var loantimes; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var ovdintrt; // Utility Auto Fix Comments
        var overDueInt; // Utility Auto Fix Comments
        var paidamt; // Utility Auto Fix Comments
        var paidflg; // Utility Auto Fix Comments
        var pamt; // Utility Auto Fix Comments
        var pmtValDt; // Utility Auto Fix Comments
        var ppaidamt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        var tempDT;
        //var subday;// Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        arrayvalue = SYS_getRecords(node);
        mData = [];
        paidamt = document.MAINFORM.FA_PMT_AMT.value;
        paidflg = document.MAINFORM.FA_PMT_CLEAR_TYPE.value;
        loantimes = document.MAINFORM.FA_INV_LOAN_TIMES.value;
        ovdintrt = document.MAINFORM.FA_OVDUE_INT_RT.value;


        //Edit by Sunny
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
        if (loantimes == 1 && paidflg == '1') {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                type = SYS_getRecState(record);
                //for requirement1.1 
                document.MAINFORM.FA_INV_LOAN_ID.value = SYS_getValFromRec(record, 'FA_INV_LOAN_ID');
                document.MAINFORM.TEMP_LOAN_ID.value = document.MAINFORM.FA_INV_LOAN_ID.value;
                SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_DO_Settle_New_Settle_loan_0', '1', 'Y');
                interest = document.MAINFORM.FA_TEMP_INV_INT_AMT.value;
                record = SYS_setValToRec(record, 'FA_TEMP_INV_INT_AMT', interest);
                //for requirement1.2 
                tempDT = SYS_getValFromRec(record, 'FA_TEMP_DT1');
                document.MAINFORM.FA_TEMP_DT1.value = tempDT;
                document.MAINFORM.FA_LOAN_DUE_DT.value = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
                loanbal = SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL');
                document.MAINFORM.FA_LOAN_PPAID_AMT.value = SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL');
                //subday = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name);
                //document.MAINFORM.FA_TEMP7.value = subday;
                document.MAINFORM.FA_LOAN_INT_RT.value = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');
                record = SYS_setValToRec(record, 'FA_OVDUE_INT_RT', ovdintrt);
                //for requirement1.3
                intChgType = SYS_getValFromRec(record, 'FA_INT_CHG_TYPE');
                pmtValDt = document.MAINFORM.TRX_DT.value;
                loanDueDt = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
                //Edit By Sunny
                document.MAINFORM.FA_LOAN_DUE_DT.value = loanDueDt;
                subdays1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
                if (subdays1 < 0 && intChgType == '1') {
                    SYS_InqGapi_S('FAEF_Settle_Inquire_AMZ');
                    record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', document.MAINFORM.IA_Y_REFUND_INT.value);
                    invint = 0;
                    overDueInt = 0;
                } else {
                    //Add by Amy for date format 20160708
                    //document.MAINFORM.TRX_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.TRX_DT.value);
                    //document.MAINFORM.FA_TEMP_DT1.value= getDate(SYS_DATE_FORMAT,document.MAINFORM.FA_TEMP_DT1.value);
                    SYS_InqGapi_S('FAEF_Settle_Inquire_ACC');
                    //document.MAINFORM.TRX_DT.value = pmtValDt;
                    //document.MAINFORM.FA_TEMP_DT1.value = tempDT;
                    //End by Amy 20160708
                    invint = document.MAINFORM.FA_TEMP_AMT11.value;
                    overDueInt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
                    record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', invint);
                    //Edit by Sunny
                    record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', invint);
                    record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', overDueInt);
                    record = SYS_setValToRec(record, 'FA_TEMP_AMT19', overDueInt);
                }
                //for requirement1.4

                pamt = (SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL')) * 1000 + SYS_BeFloat(SYS_getValFromRec(record, 'FA_LOAN_INT_AMT')) * 1000) / 1000;
                ppamt = (SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL')) * 1000) / 1000; // Utility Auto Fix Comments
                record = SYS_setValToRec(record, 'FA_LOAN_PAID_AMT', pamt);
                record = SYS_setValToRec(record, 'FA_LOAN_PPAID_AMT', ppamt);
                //Edit by Sunny
                record = SYS_setValToRec(record, 'FA_INV_LOAN_EBAL', 0);
                mData.push(record);
                SYS_reLoadGrid(node, mData);
                //for requirement1.5
                PRINAMT = SYS_getFieldSumValue(node, "FA_LOAN_PPAID_AMT", 2);
                INTAMT = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
                OVDINTAMT = SYS_getFieldSumValue(node, "FA_TEMP_AMT19", 2);
                //Edit by Sunny
                //LOANBAL = SYS_getFieldSumValue(node,'FA_INV_LOAN_EBAL',2);
                LOANBAL = SYS_getFieldSumValue(node, 'FA_TEMP_LOAN_EBAL', 2);
                if (SYS_BeFloat(paidamt) > SYS_BeFloat(overDueInt) + SYS_BeFloat(invint)) {
                    //Edit by Sunny
                    //document.MAINFORM.FA_PAID_PRIN_AMT.value=PRINAMT;
                    //document.MAINFORM.FA_PAID_INT_AMT.value=INTAMT;
                    //document.MAINFORM.FA_OVD_INT_AMT.value = OVDINTAMT;
                    //document.MAINFORM.FA_INV_LOAN_BAL.value = LOANBAL-PRINAMT;
                    document.MAINFORM.FA_PAID_PRIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, PRINAMT);
                    document.MAINFORM.FA_PAID_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, INTAMT);
                    document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, OVDINTAMT);
                    document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, LOANBAL - PRINAMT);
                } else {
                    document.MAINFORM.FA_PAID_PRIN_AMT.value = 0;
                    document.MAINFORM.FA_PAID_INT_AMT.value = 0;
                    document.MAINFORM.FA_OVD_INT_AMT.value = 0;
                    //Edit by Sunny
                    //document.MAINFORM.FA_INV_LOAN_BAL.value = LOANBAL;
                    document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, LOANBAL);
                }

            }
        } else if (loantimes > 1 || paidflg == '2') {
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                type = SYS_getRecState(record);
                //for requirement2.1
                document.MAINFORM.FA_INV_LOAN_ID.value = SYS_getValFromRec(record, 'FA_INV_LOAN_ID');
                document.MAINFORM.TEMP_LOAN_ID.value = document.MAINFORM.FA_INV_LOAN_ID.value;
                fieldlist = "ia_y_ttl_paid_int";
                fieldmapping = "FA_TEMP_INV_INT_AMT";
                SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_DO_Settle_New_Settle_loan_1', '1', 'Y');
                interest = document.MAINFORM.FA_TEMP_INV_INT_AMT.value;
                record = SYS_setValToRec(record, 'FA_TEMP_INV_INT_AMT', interest);
                tempDT = SYS_getValFromRec(record, 'FA_TEMP_DT1');
                document.MAINFORM.FA_TEMP_DT1.value = tempDT;
                document.MAINFORM.FA_LOAN_DUE_DT.value = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
                //for requirement2.2
                loanbal = SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL');
                ppaidamt = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
                if (loanbal > ppaidamt) {
                    document.MAINFORM.FA_LOAN_PPAID_AMT.value = ppaidamt;
                } else {
                    document.MAINFORM.FA_LOAN_PPAID_AMT.value = loanbal;
                }
                //for requirement2.3
                document.MAINFORM.FA_LOAN_DUE_DT.value = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
                //subday = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name);
                //document.MAINFORM.FA_TEMP7.value = subday;
                document.MAINFORM.FA_LOAN_INT_RT.value = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');
                record = SYS_setValToRec(record, 'FA_OVDUE_INT_RT', ovdintrt);
                intChgType = SYS_getValFromRec(record, 'FA_INT_CHG_TYPE');
                pmtValDt = document.MAINFORM.TRX_DT.value;
                loanDueDt = SYS_getValFromRec(record, 'FA_LOAN_DUE_DT');
                //loanDueDt = SYS_FormatDateObj(loanDueDt,SYS_DATE_FORMAT);
                //for requirement2.4
                //Edit By Sunny
                document.MAINFORM.FA_LOAN_DUE_DT.value = loanDueDt;
                subdays1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
                if (subdays1 < 0 && intChgType == '1') {
                    // if(pmtValDt < loanDueDt && intChgType== '1'){
                    //Delete By Sunny
                    //if(document.MAINFORM.FA_LOAN_PPAID_AMT.value == 0 || document.MAINFORM.FA_LOAN_PPAID_AMT.value == '' ){
                    //alert('Please input payment amount!');
                    // continue;
                    //}
                    if (paidflg == '1') {
                        SYS_InqGapi_S('FAEF_Settle_Inquire_AMZ');
                        record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', document.MAINFORM.IA_Y_REFUND_INT.value);
                    }
                } else {
                    //Add by Amy for date format 20160708
                    //document.MAINFORM.TRX_DT.value=getDate(SYS_DATE_FORMAT,document.MAINFORM.TRX_DT.value);
                    //document.MAINFORM.FA_TEMP_DT1.value= getDate(SYS_DATE_FORMAT,document.MAINFORM.FA_TEMP_DT1.value);
                    SYS_InqGapi_S('FAEF_Settle_Inquire_ACC');
                    //document.MAINFORM.TRX_DT.value = pmtValDt;
                    //document.MAINFORM.FA_TEMP_DT1.value = tempDT;
                    //End by Amy 20160708
                    invint = document.MAINFORM.FA_TEMP_AMT11.value;
                    overDueInt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
                    record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', invint);
                    //Edit by Sunny
                    record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', invint);
                    record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', overDueInt);
                    record = SYS_setValToRec(record, 'FA_TEMP_AMT19', overDueInt);
                }
                mData.push(record);
            }
        }
        //for requirement2.5
        SYS_reLoadGrid(node, mData);
        FA_INV_REFUND_INT = SYS_getFieldSumValue(node, "IA_Y_REFUND_INT", 2);
        //Edit by Sunny
        //document.MAINFORM.FA_INV_REFUND_INT.value=FA_INV_REFUND_INT;
        document.MAINFORM.FA_INV_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, FA_INV_REFUND_INT);
        document.MAINFORM.FA_TEMP_INV_INT_AMT.value = SYS_getFieldSumValue(node, "FA_TEMP_INV_INT_AMT", 2);
        if ('D' == status) {
            recs = SYS_getRecords(node);
            if (recs.length > 0) {
                SYF_FAEF_Change_Field_Class('2');
            }
        }

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function Settle_New_Settle_loan_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}

function Settle_New_Settle_loan_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DFSettlement_DO.js", e);
    }
}