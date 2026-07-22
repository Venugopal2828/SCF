function BPO_PAY_OBLIGOR_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function BPO_PAY_OBLIGOR_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_BPO_PAY_OBLIGOR() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}


function ChgDoDef_OnDeSelected(node, record, recordId) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
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
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoDef() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}


function ChgDoTrx_OnDeSelected(node, record, recordId) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function ChgDoTrx_OnSelected(node, record, recordId) {
    try {
        /*if(Chg.Screen.agreementOverride){
	var index = SYS_getValFromRec(record,Chg.FLD_CHARGE_INDEX);
	var entry = Chg.Screen.getOrignalTrxChg(index);
	if(entry != null && entry.getCommCode() != Chg.OTHER){
		SYS_enableButton(Chg.Screen.trxChgDoNm,"Override");
	}
}*/
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoTrx() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}


function InvTRF1(node, recordId, status) {
    try {
        var tempDo = currentDo;
        SYF_FAEF_Cal_forChildtoMainScreen(node, recordId, status);
        currentDo = tempDo;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function InvTRF1_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function InvTRF1_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_InvTRF1(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("GET_INVOICE", "N", false, '', "InvTRF1");
        SYF_FAEF_Sum_DO_Data();
        var doObj_InvTRF;
        doObj_InvTRF = SYS_getDoByXpath('InvTRF1');
        SYF_FAEF_Cal_forChildtoMainScreen(doObj_InvTRF);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessInvoiceFromCE_DO.js", e);
    }
}