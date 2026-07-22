function CollateralAdjustment(node, recordId, status) {
    try {
        /*Caculate Total Collateral Value Under This Batch*/
        var sum = 0;
        var arrayvalue = SYS_getRecords(node);
        for (var i = 0, len = arrayvalue.length; i < len; i++) {
            var ss = arrayvalue[i];
            var status = ss['recordType'];
            if (status != 'D' && status != 'C') {
                //var COLLAT_VAL = SYS_BeFloat(ss['COLLAT_VAL']);
                var COLLAT_VAL = SYS_BeFloat(ss['TEMP_COLLAT_VAL'])
                sum = SYS_FloatAdd(SYS_BeFloat(sum), COLLAT_VAL);
            }
        }
        // document.MAINFORM.REG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, SYS_FloatMul(document.MAINFORM.EXCH_RATE.value, sum));
        document.MAINFORM.TEMP_REG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, SYS_FloatMul(document.MAINFORM.EXCH_RATE.value, sum));
        // document.MAINFORM.REG_AMT.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust_DO.js", e);
    }
}

function CollateralAdjustment_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust_DO.js", e);
    }
}

function CollateralAdjustment_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_CollateralAdjustment() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_PriceCompenseAdjust_DO.js", e);
    }
}