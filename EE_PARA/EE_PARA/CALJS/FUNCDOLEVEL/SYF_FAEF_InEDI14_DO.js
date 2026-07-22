function DisputeReg(node, recordId, status) {
    try {
        document.MAINFORM.FA_DSP_REF.value = SYS_getValueFromMain("FA_DSP_REF");
        document.MAINFORM.FA_DSP_NO.value = SYS_getValueFromMain("FA_DSP_NO");
        document.MAINFORM.FA_NOTIFY_BY.value = SYS_getValueFromMain("FA_NOTIFY_BY");
        if ('D' == status) {
            var num = SYS_getcurrRecordCount("DisputeReg");
            if (num == 0) {
                SYF_FAEF_changefield('2');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14_DO.js", e);
    }
}

function DisputeReg_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14_DO.js", e);
    }
}

function DisputeReg_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_DisputeReg() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14_DO.js", e);
    }
}