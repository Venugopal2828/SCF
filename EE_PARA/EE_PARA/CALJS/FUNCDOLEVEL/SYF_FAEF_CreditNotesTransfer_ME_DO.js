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
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
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
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}


function CreNote(node, recordId, status) {
    try {
        var tempDo = currentDo;
        var crnnosum = SYS_getFieldSumValue(node, "FA_TEMP_AMT8", 0);
        SYS_setValueToMain('FA_TTL_CRN_NO', crnnosum);

        var crnamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        SYS_setValueToMain('FA_TTL_CRN_AMT', crnamtsum);
        //SYS_getMainObj('FA_TTL_CRN_AMT').fireEvent('onchange');
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_CRN_AMT'), 'onchange');
        document.MAINFORM.FA_TTL_CRN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_CRN_AMT.value);

        var ifhandalsum;
        var type = document.MAINFORM.FA_BUSI_TYPE.value;
        var efhandalsum = SYS_getFieldSumValue(node, "FA_EF_HAN_CHG_PAMT", 2);
        SYS_setValueToMain('FA_EF_HAN_CHG_SUM', efhandalsum);
        //SYS_getMainObj('FA_EF_HAN_CHG_SUM').fireEvent('onchange');
        EEHtml.fireEvent(SYS_getMainObj('FA_EF_HAN_CHG_SUM'), 'onchange');




        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum);
        //document.MAINFORM.FA_TTL_IF_CHG_AMT.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_IF_CHG_AMT, 'onchange');

        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        //document.MAINFORM.FA_SEL_AC_AMT.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);

        document.MAINFORM.FA_BUY_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        //document.MAINFORM.FA_BUY_AC_AMT.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_BUY_AC_AMT, 'onchange');
        document.MAINFORM.FA_BUY_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_BUY_AC_AMT.value);

        var ttlCommAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_IF_CHG_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        var commvat = (ttlCommAmt * 1000 * VATRate / 100) / 1000;
        var num;

        //below add by TJ20081025 to calculat total fin return amount
        if ('D' != status) {
            var finRetsum = SYS_getFieldSumValue(node, "TEMP_AMT18", 2); // sum of FA_FIN_RET_AMT
            var newfinRetsum = SYS_BeFloat(finRetsum) + SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value); //TEMP_AMT14=Original TTL_FIN_RET_BAL 
            SYS_setValueToMain('FA_TTL_FIN_RET_BAL', newfinRetsum);
            document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, SYS_BeFloat(newfinRetsum));
            a = document.MAINFORM.FA_TTL_FIN_RET_BAL.value;
            document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYS_BeFloat(a);
        }
        if ('D' == status) {
            num = SYS_getcurrRecordCount("CreNote");
            if (num == 0) {
                SYF_FAEF_Cal_forControlDocCcy('2');
            } else {
                SYF_FAEF_Cal_forControlDocCcy('1');
            }
        } else {
            if (num == 0) {
                SYF_FAEF_Cal_forControlDocCcy('2');
            } else {
                SYF_FAEF_Cal_forControlDocCcy('1');
            }
        }

        SYF_FAEF_Set_charge();
        currentDo = tempDo;

        var finamtsum = SYS_getValueFromMain('TEMP_FA_LAST_AMT');
        var crenotamtsum = SYS_getValueFromMain('FA_TTL_CRN_AMT');
        finamtsum = SYS_BeFloat(finamtsum) - SYS_BeFloat(crenotamtsum);
        finamtsum = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, finamtsum);
        SYS_setValueToMain('AMT_AVAL_FOR_FUNDING', finamtsum);
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function CreNote_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function CreNote_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_CreNote() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_ME_DO.js", e);
    }
}