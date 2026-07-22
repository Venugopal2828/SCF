function BuyPayment(node, recordId, status) {
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
        var docno;
        var temp70;
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var pmtamt; // Utility Auto Fix Comments
        var pmtamtsum; // Utility Auto Fix Comments
        var pmtflg; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var tempDO; // Utility Auto Fix Comments
        tempDO = currentDo;
        num = SYS_getcurrRecordCount("BuyPayment");
        arrayvalue = SYS_getRecords(node);
        pmtamtsum = 0;
        bkchgsum = 0;
        deductsum = 0;
        docbalsum = 0;
        amtcleared = 0;
        amtclearedsum = 0;
        temp70 = '';
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            pmtamt = SYS_getValFromRec(record, 'FA_PMT_AMT');
            bkchg = SYS_getValFromRec(record, 'FA_BK_CHG_AMT');
            deduct = SYS_getValFromRec(record, 'FA_DEDUCT_AMT');
            docbal = SYS_getValFromRec(record, 'FA_DOC_BAL');
            pmtflg = SYS_getValFromRec(record, 'FA_PMT_CLEAR_TYPE');
            amtcleared = SYS_getValFromRec(record, 'FA_INV_CLEAR_AMT');
            docno = SYS_getValFromRec(record, 'FA_DOC_NO');
            pmtamtsum = SYS_BeFloat(pmtamtsum) + SYS_BeFloat(pmtamt);
            bkchgsum = SYS_BeFloat(bkchg) + SYS_BeFloat(bkchgsum);
            deductsum = SYS_BeFloat(deduct) + SYS_BeFloat(deductsum);
            docbalsum = SYS_BeFloat(docbal) + SYS_BeFloat(docbalsum);
            amtclearedsum = SYS_BeFloat(amtcleared) + SYS_BeFloat(amtclearedsum);
            temp70 += '/TSU/' + docno + ',';

        }
        SYS_setValueToMain('FA_PMT_AMT_SUM', pmtamtsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_PMT_AMT_SUM'), 'onchange');
        amtdeduct = SYS_BeFloat(bkchgsum) + SYS_BeFloat(deductsum);
        SYS_setValueToMain('FA_TTL_AMT_DEDUCT', amtdeduct);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_DEDUCT'), 'onchange');
        SYS_setValueToMain('X103_REMIT_INFO_70', temp70);
        SYS_setValueToMain('FA_TTL_AMT_CLEARED', amtclearedsum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_AMT_CLEARED'), 'onchange');
        SYS_setValueToMain('FA_TTL_AMT_DEDUCT', amtdeduct);
        SYF_FAEF_Cal_forChildtoMainScreen(node, recordId, status);
        currentDo = tempDO;
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function BuyPayment_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function BuyPayment_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_BuyPayment(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("Payment", "N", false, '', "BuyPayment");
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}


function ChgDoDef_OnDeSelected(node, record, recordId) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
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
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoDef() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}


function ChgDoTrx_OnDeSelected(node, record, recordId) {
    try {
        SYS_disableButton(Chg.Screen.trxChgDoNm, "Override");
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function ChgDoTrx_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgDoTrx() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}


function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit(node, recordId, status) {
    try {
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var DrAccNo; // Utility Auto Fix Comments
        tempDO = currentDo;
        num = SYS_getcurrRecordCount("MultiDebitSummary.MultiDebit");
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            DrAccNo = SYS_getValFromRec(record, 'C_MLDC_DR_AC');

        }
        SYS_setValueToMain('X103_ORDCUACNO_50A', DrAccNo);
        EEHtml.fireEvent(SYS_getMainObj('X103_ORDCUACNO_50A'), 'onchange');
        currentDo = tempDO;
    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_Payment_DO.js", e);
    }
}