"path:SCRN/DO/TSU_DT_Tax.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}

csDOScreenProto.CheckTaxTp = function() {
    try {
        var TSU_IAFT_TP = document.MAINFORM.TSU_IAFT_TP.value;
        var TSU_IAFT_OT_TP = document.MAINFORM.TSU_IAFT_OT_TP.value;
        var ches = document.getElementsByName("RadioGroup1");
        if (TSU_IAFT_TP != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_IAFT_OT_TP != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Tax") {
            SYS_checkDoAdd('R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.R2DT_ComrclLineItms.DT_Tax');
        }
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.R2DT_ComrclLineItms.DT_Tax") {
            SYS_checkDoAdd('R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Tax');
        }
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Tax") {
            document.MAINFORM.TSU_LNITMNB.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        EEHtml.getElementById('RadioGroup0').checked = true;
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SwitchDsp(0);
        }
        TSU_CCY();
        DO_XPATH();
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckTaxTp();
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
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
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var MainCCY = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = MainCCY;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_Tax.js", e);
    }
}