function ByCommercialInvoice(node, recordId, status) {
    try {
        var mainccy = SYS_getCurrDoScreenValue("TSU_CCY");
        SYS_refreshChildDoValue('ByCommercialInvoice.DT_Adjstmnt', "TSU_CCY", mainccy);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_BreakdownByPurchaseOrder(node, recordId, status) {
    try {
        var mainccy = SYS_getCurrDoScreenValue("TSU_CCY");
        SYS_refreshChildDoValue('ByCommercialInvoice.BreakdownByPurchaseOrder.DT_Adjstmnt', "TSU_CCY", mainccy);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_BreakdownByPurchaseOrder_DT_Adjstmnt(node, recordId, status) {
    try {
        // get sum of TSU_IAFT_AMT in current page;
        var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');

        //get current parent value;
        var TSU_TTL_NET_AMT = SYS_getCurrNodeParentValue('BreakdownByPurchaseOrder', 'TSU_TTL_NET_AMT');

        // get sum of TSU_TTL_NET_AMT and return value to parent page;
        var nTSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_NET_AMT) + SYS_BeFloat(nTSU_IAFT_AMT_CAL);

        SYS_setCurrNodeParentValue('BreakdownByPurchaseOrder', "TSU_TTL_AMT", nTSU_IAFT_AMT_CAL);
        SYS_setCurrNodeParentValue('BreakdownByPurchaseOrder', "TSU_NET_AMT", nTSU_TTL_NET_AMT);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_BreakdownByPurchaseOrder_DT_Adjstmnt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_BreakdownByPurchaseOrder_DT_Adjstmnt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_BreakdownByPurchaseOrder_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_BreakdownByPurchaseOrder_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_DT_Adjstmnt(node, recordId, status) {
    try {
        // get sum of TSU_IAFT_AMT in current page;
        var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');

        //get current parent value;
        var TSU_COMM_AMT = SYS_getCurrNodeParentValue('ByCommercialInvoice', 'TSU_COMM_AMT');

        // get sum of TSU_TTL_NET_AMT and return value to parent page;
        var TSU_TTL_NET_AMT = SYS_BeFloat(TSU_COMM_AMT) + SYS_BeFloat(nTSU_IAFT_AMT_CAL);


        SYS_setCurrNodeParentValue('ByCommercialInvoice', "TSU_TTL_AMT", nTSU_IAFT_AMT_CAL);
        SYS_setCurrNodeParentValue('ByCommercialInvoice', "TSU_NET_AMT", TSU_TTL_NET_AMT);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_DT_Adjstmnt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_DT_Adjstmnt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByCommercialInvoice_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_ByCommercialInvoice() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_ByCommercialInvoice_BreakdownByPurchaseOrder() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_ByCommercialInvoice_BreakdownByPurchaseOrder_DT_Adjstmnt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_ByCommercialInvoice_DT_Adjstmnt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}


function ByPurchaseOrder(node, recordId, status) {
    try {
        var mainccy = SYS_getCurrDoScreenValue("TSU_CCY");
        SYS_refreshChildDoValue('ByPurchaseOrder.DT_Adjstmnt', "TSU_CCY", mainccy);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByPurchaseOrder_DT_Adjstmnt(node, recordId, status) {
    try {
        // get sum of TSU_IAFT_AMT in current page;
        var nTSU_IAFT_AMT_CAL = SYS_getFieldSumByDoName('TSU_IAFT_AMT_CAL');

        //get current parent value;
        var TSU_TTL_NET_AMT = SYS_getCurrNodeParentValue('ByPurchaseOrder', 'TSU_TTL_NET_AMT');

        //get sum of TSU_TTL_NET_AMT and return value to parent page;
        var nTSU_TTL_NET_AMT = SYS_BeFloat(TSU_TTL_NET_AMT) + SYS_BeFloat(nTSU_IAFT_AMT_CAL);

        SYS_setCurrNodeParentValue('ByPurchaseOrder', "TSU_TTL_AMT", nTSU_IAFT_AMT_CAL);
        SYS_setCurrNodeParentValue('ByPurchaseOrder', "TSU_NET_AMT", nTSU_TTL_NET_AMT);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByPurchaseOrder_DT_Adjstmnt_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByPurchaseOrder_DT_Adjstmnt_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByPurchaseOrder_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function ByPurchaseOrder_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_ByPurchaseOrder() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}

function SYF_TSUM_getDOdata_ByPurchaseOrder_DT_Adjstmnt() {
    try {

    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification_DO.js", e);
    }
}