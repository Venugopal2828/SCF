function CollateralEntry(node, recordId, status) {
    try {
        /*Caculate Total Collateral Value Under This Batch*/
        var sum = 0;
        var arrayvalue = SYS_getRecords(node);
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var ss = arrayvalue[i];
            var status = ss['recordType'];
            if (status != 'D' && status != 'C') {
                var COLLAT_VAL = SYS_BeFloat(ss['COLLAT_VAL']);
                sum = SYS_FloatAdd(SYS_BeFloat(sum), COLLAT_VAL);
            }
        }
        document.MAINFORM.REG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, SYS_FloatMul(document.MAINFORM.EXCH_RATE.value, sum));

        //document.MAINFORM.REG_AMT.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.REG_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry_DO.js", e);
    }
}

function CollateralEntry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry_DO.js", e);
    }
}

function CollateralEntry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_CollateralEntry() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralEntry_DO.js", e);
    }
}