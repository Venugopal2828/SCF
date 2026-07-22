function CommodityMarketPrice(node, recordId, status) {
    try {
        var EXCH_RT; // Utility Auto Fix Comments
        var UnitPrice; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var issuer; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var minvalue; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var row; // Utility Auto Fix Comments
        node.setFieldValue("", recordId, "COMDT_ID", document.MAINFORM.COMDT_ID.value);
        node.setFieldValue("", recordId, "UNIT", document.MAINFORM.UNIT.value);
        node.setFieldValue("", recordId, "C_MAIN_REF", document.MAINFORM.C_MAIN_REF.value);
        node.setFieldValue("", recordId, "C_UNIT_CODE", SYS_BUSI_UNIT);
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            EXCH_RT = SYS_getValFromRec(record, 'EXCH_RATE');
            UnitPrice = SYS_getValFromRec(record, 'UNIT_PRICE');
            record = SYS_setValToRec(record, "LCY_PRICE", UnitPrice / EXCH_RT);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        row = node.getDataByMinField("LCY_PRICE");
        issuer = node.getFieldValue(null, row, "ISSUER");
        minvalue = node.getFieldValue(null, row, "LCY_PRICE");
        document.MAINFORM.UNIT_PRICE.value = SYT_CCY_AMT(document.MAINFORM.CCY.value, minvalue);
        document.MAINFORM.ISSUER.value = issuer;
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice_DO.js", e);
    }
}

function CommodityMarketPrice_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice_DO.js", e);
    }
}

function CommodityMarketPrice_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice_DO.js", e);
    }
}

function SYF_CMDT_getDOdata_CommodityMarketPrice() {
    try {

    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice_DO.js", e);
    }
}