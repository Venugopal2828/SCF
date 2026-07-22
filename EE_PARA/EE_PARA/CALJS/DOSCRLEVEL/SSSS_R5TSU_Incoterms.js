"path:SCRN/DO/R5TSU_Incoterms.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R5TSU_Incoterms.js", e);
    }
}

csDOScreenProto.CheckIncoterm = function() {
    try {
        var TSU_INCOTMS_CD = document.MAINFORM.TSU_INCOTMS_CD.value;
        var TSU_IDEN_ID = document.MAINFORM.TSU_IDEN_ID.value;
        var ches = document.getElementsByName("RadioGroup1");
        if (TSU_INCOTMS_CD != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_IDEN_ID != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_Incoterms.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_Incotrms") {
            document.MAINFORM.TSU_TRAN_INF.value = 0;
            ChangeFldClass(document.MAINFORM.TSU_INCOTMS_LCTN, 'M', 'N');
        }
        if (SYS_DO_XPATH == "R2TrnsprtDataset.DT_Incotrms") {
            document.MAINFORM.TSU_COMM_REF.value = 0;
            document.MAINFORM.TSU_PO_ID.value = 0;
            ChangeFldClass(document.MAINFORM.TSU_INCOTMS_LCTN, 'M', 'N');
        }
        if (SYS_DO_XPATH == "R5Goods.R5Incoterms") {
            SYS_checkDoAdd('R5Goods.R5LineItemDetails7.R5Incoterms');
            document.MAINFORM.TSU_LNITMNB.value = 0;
        }
        if (SYS_DO_XPATH == "R5Goods.R5LineItemDetails7.R5Incoterms") {
            SYS_checkDoAdd('R5Goods.R5Incoterms');
        }
        if (SYS_DO_XPATH == "R5GoodsRe.R5Incoterms") {
            SYS_checkDoAdd('R5GoodsRe.R5LineItemDetails7.R5Incoterms');
            document.MAINFORM.TSU_LNITMNB.value = 0;
        }
        if (SYS_DO_XPATH == "R5GoodsRe.R5LineItemDetails7.R5Incoterms") {
            SYS_checkDoAdd('R5GoodsRe.R5Incoterms');
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_Incoterms.js", e);
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
        DisExcpt("SSSS_R5TSU_Incoterms.js", e);
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
        DisExcpt("SSSS_R5TSU_Incoterms.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_IDEN_ID").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_INCOTMS_CD, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_IDEN_ID, 'P', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_INCOTMS_CD").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_INCOTMS_CD, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_IDEN_ID, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_Incoterms.js", e);
    }
}

csDOScreenProto.TSU_IDEN_ID_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_R5TSU_Incoterms.js", e);
    }
}