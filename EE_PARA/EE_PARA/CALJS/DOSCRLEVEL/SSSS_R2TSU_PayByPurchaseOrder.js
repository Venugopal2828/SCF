"path:SCRN/DO/R2TSU_PayByPurchaseOrder.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "ByPurchaseOrder") {
            SYS_checkDoAdd('ByCommercialInvoice');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        TSU_TID();
        DO_XPATH();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_NET_CCY();
        TSU_TID();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.TSU_NET_AMT = function() {
    try {
        var NET_AMT = document.MAINFORM.TSU_TTL_NET_AMT.value;
        var TSU_TTL_AMT = document.MAINFORM.TSU_TTL_AMT.value;
        AMT = SYS_BeFloat(NET_AMT) + SYS_BeFloat(TSU_TTL_AMT);
        var ccy = document.MAINFORM.TSU_CCY.value;
        document.MAINFORM.TSU_NET_AMT.value = SYT_CCY_AMT(ccy, AMT);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.TSU_NET_CCY = function() {
    try {
        var ccy = document.MAINFORM.TSU_CCY.value;
        document.MAINFORM.TSU_NET_CCY.value = ccy;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.TSU_TID = function() {
    try {
        if (SYS_DO_XPATH == "ByCommercialInvoice.BreakdownByPurchaseOrder") {
            var CCY = parent.SYS_getCurrNodeParentValue('ByCommercialInvoice', 'TSU_CCY');
            document.MAINFORM.TSU_CCY.value = CCY;
            document.MAINFORM.TSU_NET_CCY.value = CCY;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.TSU_CCY_onchange = function(event) {
    try {
        TSU_NET_CCY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.TSU_TTL_AMT_onchange = function(event) {
    try {
        TSU_NET_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}

csDOScreenProto.TSU_TTL_NET_AMT_onchange = function(event) {
    try {
        TSU_NET_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByPurchaseOrder.js", e);
    }
}