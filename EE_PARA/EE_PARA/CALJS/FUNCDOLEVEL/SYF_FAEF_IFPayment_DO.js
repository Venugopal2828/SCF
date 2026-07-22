function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}


function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}


function PaymentReg(node, recordId, status) {
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
        var pmtamt; // Utility Auto Fix Comments
        var pmtamtsum; // Utility Auto Fix Comments
        var pmtflg; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var tempDO; // Utility Auto Fix Comments
        tempDO = currentDo;
        num = SYS_getcurrRecordCount("PaymentReg");
        arrayvalue = SYS_getRecords(node);
        pmtamtsum = 0;
        bkchgsum = 0;
        deductsum = 0;
        docbalsum = 0;
        amtcleared = 0;
        amtclearedsum = 0;
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
            if (doctype == '1') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) + SYS_BeFloat(pmtamt);

            } else if (doctype == '2') {
                pmtamtsum = SYS_BeFloat(pmtamtsum) - SYS_BeFloat(pmtamt);

            }
            bkchgsum = SYS_BeFloat(bkchg) + SYS_BeFloat(bkchgsum);
            deductsum = SYS_BeFloat(deduct) + SYS_BeFloat(deductsum);
            docbalsum = SYS_BeFloat(docbal) + SYS_BeFloat(docbalsum);
            amtclearedsum = SYS_BeFloat(amtcleared) + SYS_BeFloat(amtclearedsum);

        }
        SYS_setValueToMain('FA_PMT_AMT_SUM', pmtamtsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PMT_AMT_SUM'), 'onchange');
        amtdeduct = SYS_BeFloat(bkchgsum) + SYS_BeFloat(deductsum);
        SYS_setValueToMain('FA_TTL_AMT_DEDUCT', amtdeduct);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_DEDUCT'), 'onchange');
        SYS_setValueToMain('FA_TTL_AMT_CLEARED', amtclearedsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_CLEARED'), 'onchange');
        currentDo = tempDO;
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function PaymentReg_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function PaymentReg_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_PaymentReg(node, recordId, status) {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var lastduedate; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var value; // Utility Auto Fix Comments
        lastduedate = SYS_getValueFromMain("TEMP_DUE_DT");
        if (lastduedate == '') {
            alert("Last Due Date cannot be empty, please input it!");
        } else {
            SYS_GetDataForDO_S('IFPayment');
        }
        /*if(SYS_FUNCTION_TYPE == "PM"){
	_do=SYS_getDoByXpath('PaymentReg');
	num=SYS_getcurrRecordCount("PaymentReg");
	flag = false;
	value = 0;
	if(num>0){
		arrayvalue= SYS_getRecords(_do);
		for(i=0,len=arrayvalue.length;i<len;i++){
		record = arrayvalue[i];
		value = SYS_getValFromRec(record,"FA_DOC_AMT");
		if(value == null || value == ""){
			SYS_setValToRec(record,"FA_DOC_AMT",0);
		}
		value = SYS_getValFromRec(record,"FA_PMT_AMT");
		if(value == null || value == ""){
			SYS_setValToRec(record,"FA_PMT_AMT",0);
		}
		value = SYS_getValFromRec(record,"FA_DOC_BAL");
		if(value == null || value == ""){
			SYS_setValToRec(record,"FA_DOC_BAL",0);
		}
		value = SYS_getValFromRec(record,"FA_BK_CHG_AMT");
		if(value == null || value == ""){
			SYS_setValToRec(record,"FA_BK_CHG_AMT",0);
		}
		value = SYS_getValFromRec(record,"FA_DEDUCT_AMT");
		if(value == null || value == ""){
			SYS_setValToRec(record,"FA_DEDUCT_AMT",0);
		}
		value = SYS_getValFromRec(record,"FA_INV_CLEAR_AMT");
		if(value == null || value == ""){
			SYS_setValToRec(record,"FA_INV_CLEAR_AMT",0);
		}
		value = SYS_getValFromRec(record,"FA_CRN_BAL");
		if(value == null || value == ""){
			SYS_setValToRec(record,"FA_CRN_BAL",0);
		}
	}
}
}*/
    } catch (e) {
        DisExcpt("SYF_FAEF_IFPayment_DO.js", e);
    }
}