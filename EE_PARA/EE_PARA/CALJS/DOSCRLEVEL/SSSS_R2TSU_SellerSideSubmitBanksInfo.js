"path:SCRN/DO/R2TSU_SellerSideSubmitBanksInfo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.BK_ID = function() {
    try {
        var notshowError = true;
        SYS_GetCUBK('R2TSU_SELRSIDEBK_ID', 'TSU_SEL_BK_ID', '', '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_SellerSideSubmitBanksInfo.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_SellerSideSubmitBanksInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_SellerSideSubmitBanksInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_SellerSideSubmitBanksInfo.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        //BK_ID();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_SellerSideSubmitBanksInfo.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        //var sFieldList = "C_MAIN_REF;NARR_NM";
        //var sMappingList = "TSU_SEL_BK_ID;TSU_SEL_BK_NM";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableDataByRule('SSSS_R2TSU_SellerSideSubmitBanksInfo_OnSelected_0', '1', sSucJsFuncName, '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_SellerSideSubmitBanksInfo.js", e);
    }
}

csDOScreenProto.TSU_SEL_BK_ID_onchange = function(event) {
    try {
        BK_ID();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_SellerSideSubmitBanksInfo.js", e);
    }
}