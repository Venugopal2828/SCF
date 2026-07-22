"path:SCRN/DO/TSU_Incoterms.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_Incoterms.js", e);
    }
}

csDOScreenProto.CheckIncoterm = function() {
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
        DisExcpt("SSSS_TSU_Incoterms.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_Incoterms.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_Incoterms.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Incotrms") {
            document.MAINFORM.TSU_TRAN_INF.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.TSU_INCOTMS_LCTN, 'M', 'N');
        }
        if (SYS_DO_XPATH == "R2TrnsprtDataset.DT_Incotrms") {
            document.MAINFORM.TSU_COMM_REF.value = 0;
            document.MAINFORM.TSU_PO_ID.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.TSU_INCOTMS_LCTN, 'M', 'N');
        }
        if (SYS_DO_XPATH == "R2Goods.Incoterms1") {
            SYS_checkDoAdd('R2Goods.R2LineItemDetails7.Incoterms1');
            document.MAINFORM.TSU_LNITMNB.value = 0;
        }
        if (SYS_DO_XPATH == "R2Goods.R2LineItemDetails7.Incoterms1") {
            SYS_checkDoAdd('R2Goods.Incoterms1');
        }
        if (SYS_DO_XPATH == "R2GoodsRe.Incoterms1") {
            SYS_checkDoAdd('R2GoodsRe.R2LineItemDetails7.Incoterms1');
            document.MAINFORM.TSU_LNITMNB.value = 0;
        }
        if (SYS_DO_XPATH == "R2GoodsRe.R2LineItemDetails7.Incoterms1") {
            SYS_checkDoAdd('R2GoodsRe.Incoterms1');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Incoterms.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        EEHtml.getElementById('RadioGroup0').checked = true;
        if (EEHtml.getElementById('RadioGroup1').checked == true) {
            SwitchDsp(0);
        }
        DO_XPATH();
    } catch (e) {
        DisExcpt("SSSS_TSU_Incoterms.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckIncoterm();
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Incotrms") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_INCOTMS_LCTN, 'M', 'N');
        }
        if (SYS_DO_XPATH == "R2TrnsprtDataset.DT_Incotrms") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_INCOTMS_LCTN, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_Incoterms.js", e);
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
        DisExcpt("SSSS_TSU_Incoterms.js", e);
    }
}