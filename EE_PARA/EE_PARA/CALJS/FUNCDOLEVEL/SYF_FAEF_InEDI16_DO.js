function ChgBack(node, recordId, status) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var cbkamt; // Utility Auto Fix Comments
        var doctype; // Utility Auto Fix Comments
        var finRetsum; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var newfinRetsum; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        arrayvalue = SYS_getRecords(node);
        sum = 0;
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            cbkamt = SYS_getValFromRec(record, 'FA_CBK_AMT');
            doctype = SYS_getValFromRec(record, 'FA_DOC_TYPE');
            if (doctype == '1') {
                sum = SYS_BeFloat(sum) + SYS_BeFloat(cbkamt);
            } else if (doctype == '2') {
                sum = SYS_BeFloat(sum) - SYS_BeFloat(cbkamt);
            }
        }
        SYS_setValueToMain('FA_TTL_CBK_AMT', sum);
        EEHtml.fireEvent(SYS_getMainObj('FA_TTL_CBK_AMT'), 'onchange');
        if ('D' == status) {
            num = SYS_getcurrRecordCount("ChgBack");
            if (num == 0) {
                SYF_FAEF_Change_Field_Class('2');
            }
        }
        //below add by TJ20081025 to calculat total fin return amount

        finRetsum = SYS_getFieldSumValue(node, "TEMP_AMT18", 2);
        newfinRetsum = SYS_BeFloat(finRetsum) + SYS_BeFloat(document.MAINFORM.TEMP_AMT14.value);
        SYS_setValueToMain('FA_TTL_FIN_RET_BAL', newfinRetsum);
        document.MAINFORM.FA_TTL_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, SYS_BeFloat(newfinRetsum));
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI16_DO.js", e);
    }
}

function ChgBack_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI16_DO.js", e);
    }
}

function ChgBack_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI16_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_ChgBack() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI16_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI16_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI16_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI16_DO.js", e);
    }
}