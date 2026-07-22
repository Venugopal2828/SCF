"path:SCRN/DO/R2TSU_PayByCommercialInv.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.Get_INV_MainRef = function() {
    try {
        //var sFieldList = "C_MAIN_REF";
        //var sMappingList = "C_MAIN_REF";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableDataByRule('SSSS_R2TSU_PayByCommercialInv_Get_INV_MainRef_0', '1', sSucJsFuncName, '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        if (SYS_DO_XPATH == "ByCommercialInvoice") {
            SYS_checkDoAdd('ByPurchaseOrder');
        }
        TSU_NET_CCY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_NET_CCY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.TSU_NET_AMT = function() {
    try {
        var TSU_COMM_AMT = document.MAINFORM.TSU_COMM_AMT.value;
        var ccy = document.MAINFORM.TSU_NET_CCY.value;
        var TSU_TTL_AMT = document.MAINFORM.TSU_TTL_AMT.value;
        AMT = SYS_BeFloat(TSU_COMM_AMT) + SYS_BeFloat(TSU_TTL_AMT);
        document.MAINFORM.TSU_NET_AMT.value = SYT_CCY_AMT(ccy, AMT);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.TSU_NET_CCY = function() {
    try {
        var ccy = document.MAINFORM.TSU_CCY.value;
        document.MAINFORM.TSU_NET_CCY.value = ccy;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.TSU_CCY_onchange = function(event) {
    try {
        TSU_NET_CCY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.TSU_COMM_AMT_onchange = function(event) {
    try {
        TSU_NET_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.TSU_COMM_REF_onchange = function(event) {
    try {
        Get_INV_MainRef();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}

csDOScreenProto.TSU_TTL_AMT_onchange = function(event) {
    try {
        TSU_NET_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_PayByCommercialInv.js", e);
    }
}