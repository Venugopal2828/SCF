function ChgDoDef_OnDeSelected(node, record, recordId) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function ChgDoDef_OnSelected(node, record, recordId) {
    try {
        if (Chg.Screen.agreementOverride) {
            var index = SYS_getValFromRec(record, Chg.FLD_CHARGE_INDEX);
            var entry = Chg.Screen.getOrignalDefChg(index);
            if (entry != null && entry.getCommCode() != Chg.OTHER) {
                SYS_enableButton(Chg.Screen.defChgDoNm, "Override");
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoDef() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}


function ChgDoTrx_OnDeSelected(node, record, recordId) {
    try {
		if(Chg.Screen.agreementOverride)
			SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function ChgDoTrx_OnSelected(context, record, rowIndex) {
    try {
        /*if(Chg.Screen.agreementOverride){
	var index = SYS_getValFromRec(record,Chg.FLD_CHARGE_INDEX);
	var entry = Chg.Screen.getOrignalTrxChg(index);
	if(entry != null && entry.getCommCode() != Chg.OTHER){
		SYS_enableButton(Chg.Screen.trxChgDoNm,"Override");
	}
}*/
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoTrx() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}


function VerifyInv(node, recordId, status) {
    try {
    	  var node = SYS_getDoByXpath('VerifyInv');
        var num = SYS_getcurrRecordCount("VerifyInv");
        if (num>0){
        var arrayvalue = SYS_getRecords(node);
        var invamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        var ccy = EEHtml.getElementById('FA_DOC_CCY');
        SYS_setValueToMain('FA_TTL_INV_AMT', SYT_AmtFormat(ccy, invamtsum));
        	            for (i = 0, len = arrayvalue.length; i < len; i++) { 
                var record = arrayvalue[i];
                var id = SYS_getRecID(record);
                var type = SYS_getRecState(record);
            SYS_setValToRec(record, "FA_FIN_FLG", 'Yes');
                   SYS_reLoadGrid(node, arrayvalue);

              }
}
SYF_FAEF_Cal_forChildtoMainScreen();

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function VerifyInv_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function VerifyInv_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_VerifyInv() {
    try {
SYS_GetDataForDO_S("InvTrf_EF", "A", false, '', "VerifyInv");
VerifyInv();
FLD_FAEF_FA_TTL_INV_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_DO.js", e);
    }
}