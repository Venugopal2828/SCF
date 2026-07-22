"path:SCRN/DO/TSU_RtgSummry_Choice.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_Choice.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_Choice.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_Choice.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        OnSelected();
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_Choice.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        var hidField = EEHtml.getElementById("selectobj");
        var ches = document.getElementsByName("RadioGroup1");
        if (hidField.value == "0") {
            ches[0].checked = true;

        } else {
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_Choice.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_DO_XPATH == "Goods.LineItemDetails4.RtgSummry") {
            SYS_checkDoAdd('Goods.RtgSummry');
        }
        if (SYS_DO_XPATH == "Goods.RtgSummry") {
            SYS_checkDoAdd('Goods.LineItemDetails4.RtgSummry');
        }
        if (SYS_DO_XPATH == "R2Goods.R2RoutingSummary") {
            SYS_checkDoAdd('R2Goods.R2LineItemDetails7.R2RoutingSummary');
        }
        if (SYS_DO_XPATH == "R2Goods.R2LineItemDetails7.R2RoutingSummary") {
            SYS_checkDoAdd('R2Goods.R2RoutingSummary');
        }
        if (SYS_DO_XPATH == "R2GoodsRe.R2RoutingSummary") {
            SYS_checkDoAdd('R2GoodsRe.R2LineItemDetails7.R2RoutingSummary');
        }
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.R2RoutingSummary") {
            SYS_checkDoAdd('R2GoodsRe.R2RoutingSummary');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RtgSummry_Choice.js", e);
    }
}