"path:SCRN/DO/TSU_DefinedInformation.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DefinedInformation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DefinedInformation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DefinedInformation.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_DfndInf" || SYS_DO_XPATH == "R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods.DT_SellDfndInf") {
            document.MAINFORM.TSU_TRAN_INF.value = 0;
            document.MAINFORM.TSU_TRAN_DOC_REF.value = 0;
        }
        if (SYS_DO_XPATH == "R2TrnsprtDataset.R2DT_TrnsprtDocRef.R2DT_TrnsprtdGoods.DT_DfndInf" || SYS_DO_XPATH == "R2TrnsprtDataset.R2DT_TrnsprtDocRef.R2DT_TrnsprtdGoods.DT_SellDfndInf") {
            document.MAINFORM.TSU_COMM_REF.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DefinedInformation.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        DO_XPATH();
    } catch (e) {
        DisExcpt("SSSS_TSU_DefinedInformation.js", e);
    }
}