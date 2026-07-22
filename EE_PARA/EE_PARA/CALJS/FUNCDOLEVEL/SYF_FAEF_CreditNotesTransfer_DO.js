function CreNote(node, recordId, status) {
    try {
        var tempDo = currentDo;
        var crnnosum = SYS_getFieldSumValue(node, "FA_TEMP_AMT8", 0);
        SYS_setValueToMain('FA_TTL_CRN_NO', crnnosum);

        var crnamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        SYS_setValueToMain('FA_TTL_CRN_AMT', crnamtsum);
        SYS_getMainObj('FA_TTL_CRN_AMT').fireEvent('onchange');
        var ifhandalsum;
        var type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (type == 'EF') {
            ifhandalsum = SYS_getFieldSumValue(node, "FA_IF_HAN_CHG_PAMT", 2);
            SYS_setValueToMain('FA_IF_HAN_CHG_SUM', ifhandalsum);
            SYS_getMainObj('FA_IF_HAN_CHG_SUM').fireEvent('onchange');
        }
        var efhandalsum = SYS_getFieldSumValue(node, "FA_EF_HAN_CHG_PAMT", 2);
        SYS_setValueToMain('FA_EF_HAN_CHG_SUM', efhandalsum);
        SYS_getMainObj('FA_EF_HAN_CHG_SUM').fireEvent('onchange');



        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum);
        document.MAINFORM.FA_TTL_IF_CHG_AMT.fireEvent('onchange');
        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        document.MAINFORM.FA_SEL_AC_AMT.fireEvent('onchange');
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);

        document.MAINFORM.FA_BUY_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        document.MAINFORM.FA_BUY_AC_AMT.fireEvent('onchange');
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
    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_DO.js", e);
    }
}

function CreNote_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_DO.js", e);
    }
}

function CreNote_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_CreNote() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_CreditNotesTransfer_DO.js", e);
    }
}