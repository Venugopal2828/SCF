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
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
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
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}


function PORegister(node, recordId, status) {
    try {
        var tempDo = currentDo;
        var poCCY; // Utility Auto Fix Comments
        var efcommsum; // Utility Auto Fix Comments
        var efhandalsum; // Utility Auto Fix Comments
        var poamtsum; // Utility Auto Fix Comments
        var ponosum; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        ponosum = SYS_getcurrRecordCount("PORegister");
        poCCY = SYS_getValueFromMain('PO_CCY');
        type = SYS_getValueFromMain('FA_BUSI_TYPE');
        SYS_setValueToMain('FA_TTL_PO_NO', ponosum);

        poamtsum = SYS_getFieldSumValue(node, "PO_AMT", 2);
        efhandalsum = SYS_getFieldSumValue(node, "FA_EF_HAN_CHG_PAMT", 2);

        SYS_setValueToMain('FA_TTL_PO_AMT', poamtsum);
        document.MAINFORM.FA_TTL_PO_AMT.value = SYT_CCY_AMT(poCCY, document.MAINFORM.FA_TTL_PO_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_PO_AMT, 'onchange');

        SYS_setValueToMain('FA_EF_HAN_CHG_SUM', efhandalsum);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_SUM, 'onchange');
        document.MAINFORM.FA_EF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);

        efcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_PO_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_EF_COMM_RT')) / 100;

        SYS_setValueToMain('FA_EF_COMM_SUM', efcommsum);
        document.MAINFORM.FA_EF_COMM_SUM.value = SYT_CCY_AMT(poCCY, document.MAINFORM.FA_EF_COMM_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_COMM_SUM, 'onchange');

        document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_EF_COMM_SUM.value);


        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value);
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(poCCY, document.MAINFORM.FA_SEL_AC_AMT.value);

        SYF_FAEF_Set_charge();
        currentDo = tempDo;
    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function PORegister_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function PORegister_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_PORegister() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_PORegistration_DO.js", e);
    }
}