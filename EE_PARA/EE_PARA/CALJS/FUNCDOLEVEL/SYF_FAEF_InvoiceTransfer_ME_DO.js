function ChgDoDef_OnDeSelected(context, record, rowIndex) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("DO_ChgDoDef.js", e);
    }
}

function ChgDoDef_OnSelected(context, record, rowIndex) {
    try {
        if (Chg.Screen.agreementOverride) {
            var index = SYS_getValFromRec(record, Chg.FLD_CHARGE_INDEX);
            var entry = Chg.Screen.getOrignalDefChg(index);
            if (entry != null && entry.getCommCode() != Chg.OTHER) {
                SYS_enableButton(Chg.Screen.defChgDoNm, "Override");
            }
        }
    } catch (e) {
        DisExcpt("DO_ChgDoDef.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoDef() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}


function ChgDoTrx_OnDeSelected(context, record, rowIndex) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("DO_ChgDoTrx.js", e);
    }
}

function ChgDoTrx_OnSelected(context, record, rowIndex) {
    try {
        if (Chg.Screen.agreementOverride) {
            var index = SYS_getValFromRec(record, Chg.FLD_CHARGE_INDEX);
            var entry = Chg.Screen.getOrignalTrxChg(index);
            if (entry != null && entry.getCommCode() != Chg.OTHER) {
                SYS_enableButton(Chg.Screen.trxChgDoNm, "Override");
            }
        }
    } catch (e) {
        DisExcpt("DO_ChgDoTrx.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoTrx() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}


function InvTRF(node, recordId, status) {
    try {
        var invnosum = SYS_getcurrRecordCount("InvTRF");
        var invNo = SYS_getValueFromMain('TEMP_INV_NO');
        invNo = SYS_BeFloat(invNo);
        var totalInvNo = invNo + invnosum;
        SYS_setValueToMain('FA_TTL_INV_NO', totalInvNo);
        var invamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        var percent = SYS_getValueFromMain('FA_MAX_LOAN_PERC');
        var CreditPercentage = SYS_getValueFromMain('FA_CREDIT_NOTE_PER');
        var ccy = SYS_getValueFromMain('FA_DOC_CCY');
        SYS_setValueToMain('FA_TTL_INV_AMT', SYT_AmtFormat(ccy, invamtsum));
        var invamtfin = (invamtsum * percent) / 100;
        var CreditAmount = (invamtsum * CreditPercentage) / 100;
        SYS_setValueToMain('AMT_AVAL_FOR_FUNDING', SYT_AmtFormat(ccy, invamtfin));
        SYS_setValueToMain('FA_CREDIT_NOTE_PER_TOT_AMT', SYT_AmtFormat(ccy, CreditAmount));
        /*var grossTurnover = SYS_BeFloat(SYS_getValueFromMain('FA_EF_COMM_RT'));
	 	 		var docCCY = SYS_getValueFromMain('FA_DOC_CCY');
        if(grossTurnover == '0'){
        	efcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT'));
        }else{
        	efcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_EF_COMM_RT')) / 100;
        }
        SYS_setValueToMain('FA_EF_COMM_SUM', efcommsum);
        document.MAINFORM.FA_EF_COMM_SUM.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_EF_COMM_SUM.value);*/

        doObj_InvTRF = SYS_getDoByXpath('InvTRF');
        SYF_FAEF_Cal_forChildtoMainScreen(doObj_InvTRF);
        SYF_FAEF_Chk_ValDuplicate(doObj_InvTRF, 'FA_DOC_NO');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function InvTRF_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function InvTRF_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_InvTRF() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer_ME_DO.js", e);
    }
}