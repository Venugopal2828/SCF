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
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
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
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}


function ProcessPO(node, recordId, status) {
    try {
        var tempDo = currentDo;
        SYF_FAEF_Cal_forChildtoMainScreen(node, recordId, status);
        currentDo = tempDo;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function ProcessPO_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function ProcessPO_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ProcessPO(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("Get_PO", "N", false, '', "ProcessPO");
        SYF_FAEF_Sum_DO_Data();
        var doObj_POREG;
        doObj_POREG = SYS_getDoByXpath('ProcessPO');
        SYF_FAEF_Cal_forChildtoMainScreen(doObj_POREG);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessPOFromCE_DO.js", e);
    }
}