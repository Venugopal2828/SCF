"path:SCRN/DO/TSU_DT_Adjustment.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.CheckAdjustTp = function() {
    try {
        var TSU_IAFT_OT_TP; // Utility Auto Fix Comments
        var TSU_IAFT_TP; // Utility Auto Fix Comments
        var ches; // Utility Auto Fix Comments
        TSU_IAFT_TP = document.MAINFORM.TSU_IAFT_TP.value;
        TSU_IAFT_OT_TP = document.MAINFORM.TSU_IAFT_OT_TP.value;
        ches = document.getElementsByName("RadioGroup1");
        if (TSU_IAFT_TP != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_IAFT_OT_TP != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        var CCY; // Utility Auto Fix Comments
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Adjstmnt") {
            document.MAINFORM.TSU_LNITMNB.value = 0;
        }
        if (SYS_DO_XPATH == "ByPurchaseOrder.DT_Adjstmnt") {
            CCY = parent.SYS_getCurrNodeParentValue('ByPurchaseOrder', 'TSU_CCY');
            document.MAINFORM.TSU_CCY.value = CCY;
            document.MAINFORM.TSU_LNITMNB.value = 0;
            document.MAINFORM.TSU_COMM_REF.value = 0;
        }
        if (SYS_DO_XPATH == "ByCommercialInvoice.DT_Adjstmnt") {
            CCY = parent.SYS_getCurrNodeParentValue('ByCommercialInvoice', 'TSU_CCY'); // Utility Auto Fix Comments
            document.MAINFORM.TSU_CCY.value = CCY;
            document.MAINFORM.TSU_LNITMNB.value = 0;
            document.MAINFORM.TSU_PO_ID.value = 0;
        }
        if (SYS_DO_XPATH == "ByCommercialInvoice.BreakdownByPurchaseOrder.DT_Adjstmnt") {
            CCY = parent.SYS_getCurrNodeParentValue('BreakdownByPurchaseOrder', 'TSU_CCY'); // Utility Auto Fix Comments
            document.MAINFORM.TSU_CCY.value = CCY;
            document.MAINFORM.TSU_LNITMNB.value = 0;
            document.MAINFORM.TSU_COMM_REF.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        EEHtml.getElementById('RadioGroup0').checked = true;
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SwitchDsp(0);
        }
        TSU_CCY();
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Adjstmnt") {
            SYS_checkDoAdd('R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.R2DT_ComrclLineItms.DT_Adjstmnt');
        }
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.R2DT_ComrclLineItms.DT_Adjstmnt") {
            SYS_checkDoAdd('R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Adjstmnt');
        }
        DO_XPATH();
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckAdjustTp();
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_IAFT_OT_TP").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_TP, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_OT_TP, 'P', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_IAFT_TP").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_TP, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_IAFT_OT_TP, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var MainCCY; // Utility Auto Fix Comments
        MainCCY = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = MainCCY;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.TSU_IAFT_AMT = function() {
    try {
        var cADJUST_DRCTN; // Utility Auto Fix Comments
        var nADT_Amt; // Utility Auto Fix Comments
        nADT_Amt = document.MAINFORM.TSU_IAFT_AMT.value;
        nADT_Amt = Math.abs(SYS_BeFloat(nADT_Amt));
        cADJUST_DRCTN = document.MAINFORM.TSU_ADJUST_DRCTN.value;
        if (cADJUST_DRCTN == 'ADDD') {
            document.MAINFORM.TSU_IAFT_AMT_CAL.value = '+' + nADT_Amt;
        }
        if (cADJUST_DRCTN == 'SUBS') {
            document.MAINFORM.TSU_IAFT_AMT_CAL.value = '-' + nADT_Amt;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.TSU_ADJUST_DRCTN_onchange = function(event) {
    try {
        TSU_IAFT_AMT();
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}

csDOScreenProto.TSU_IAFT_AMT_onchange = function(event) {
    try {
        TSU_IAFT_AMT();
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Adjustment.js", e);
    }
}