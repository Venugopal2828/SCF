function CollateralAdjustment(node, recordId, status) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}

function CollateralAdjustment_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}

function CollateralAdjustment_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_CollateralAdjustment(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}


function CollateralEntry(node, recordId, status) {
    try {
        SYM_ABLF_Cal_Adj_Coll_Val();
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
        document.MAINFORM.REG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, SYS_FloatAdd(document.MAINFORM.REG_AMT.value, SYS_FloatMul(sum, document.MAINFORM.EXCH_RATE.value)));

        //document.MAINFORM.REG_AMT.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.REG_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}

function CollateralEntry_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}

function CollateralEntry_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_CollateralEntry() {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralAdjustment_DO.js", e);
    }
}