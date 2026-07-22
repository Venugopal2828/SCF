var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var EXCH_RT; // Utility Auto Fix Comments
        var UnitPrice; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var issuer; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var minvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var row; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("CommodityMarketPrice");
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
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.UPDATE_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_LoadDoComplete = function() {
    try {

        var CCY; // Utility Auto Fix Comments
        var UnitPrice; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('Get_PriceDetails', "N", false, '', "CommodityMarketPrice");
        }
        node = SYS_getDoByXpath("CommodityMarketPrice");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            CCY = SYS_getValFromRec(record, 'CCY');
            UnitPrice = SYS_getValFromRec(record, 'UNIT_PRICE');
            SYS_GetExchangeRate_S('USD', CCY, 'Booking Rate', 'EXCH_RT4');
            record = SYS_setValToRec(record, "EXCH_RATE", document.MAINFORM.EXCH_RT4.value);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_ISSUER_afteredit = function(ed, record) {
    try {

        var args; // Utility Auto Fix Comments
        args = config["fields"]["ISSUER"]["editor"];
        args["AJAX_MODE"] = false;
        args["editinfo"] = ed;
        DoFrame.getDoCUBK(args);
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CCY.value = SYS_LOCAL_CCY;
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.FLD_CMDT_CCY_onchange = function(event) {
    try {
        document.MAINFORM.EXCH_RT4.value = '';
        v = SYS_getEditGridVal(record, 'CCY');
        if (v == null || v == "") {
            return v;
        }
        SYS_GetExchangeRate_S('USD', v, 'Booking Rate', 'EXCH_RT4');
        if (document.MAINFORM.EXCH_RT4.value == null || document.MAINFORM.EXCH_RT4.value == "") {
            SYS_setValToRec(record, "EXCH_RATE", "");
        } else {
            SYS_setValToRec(record, "EXCH_RATE", document.MAINFORM.EXCH_RT4.value);
        }
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.FLD_CMDT_EXCH_RATE_onchange = function(event) {
    try {
        SYF_CMDT_UNIT_PRICE_onchange(v, record);
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}

csFuncLevelProto.FLD_CMDT_UNIT_PRICE_onchange = function(event) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var issuer; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var minvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var row; // Utility Auto Fix Comments
        v = SYS_getEditGridVal(record, 'UNIT_PRICE');
        if (v == null || v == "") {
            return v;
        }
        SYS_setValToRec(record, "LCY_PRICE", v / record.data['EXCH_RATE']);
        node = SYS_getDoByXpath("CommodityMarketPrice");
        row = node.getDataByMinField("LCY_PRICE");
        issuer = node.getFieldValue(null, row, "ISSUER");
        minvalue = node.getFieldValue(null, row, "LCY_PRICE");
        document.MAINFORM.UNIT_PRICE.value = SYT_CCY_AMT(document.MAINFORM.CCY.value, minvalue);
        document.MAINFORM.ISSUER.value = issuer;
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            record = SYS_setValToRec(record, "UPDATE_DT", SYS_BUSI_DATE);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_CMDT_InputCommodityMarketPrice.js", e);
    }
}