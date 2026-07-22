"path:SCRN/DO/TSU_SellerBanksInfo_019.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_SellerBanksInfo_019.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_SellerBanksInfo_019.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_SellerBanksInfo_019.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "tsmt.019.001.03A") {
            var TSU_ROLE = parent.SYS_getValueFromMain('TSU_OUR_ROLE');
            if (TSU_ROLE == "Supplier Bank") {
                document.MAINFORM.TSU_SEL_BK_ID.value = parent.SYS_getValueFromMain('TSU_SUB_B_ID');
                document.MAINFORM.TSU_SEL_BK_BIC.value = parent.SYS_getValueFromMain('TSU_SUB_B_BIC');
                document.MAINFORM.TSU_SEL_BK_NM.value = parent.SYS_getValueFromMain('TSU_SUB_B_NM');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_SellerBanksInfo_019.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        //var sFieldList = "C_MAIN_REF;NARR_NM";
        //var sMappingList = "TSU_SEL_BK_ID;TSU_SEL_BK_NM";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableDataByRule('SSSS_TSU_SellerBanksInfo_019_OnSelected_0', '1', sSucJsFuncName, '', 'Y');
    } catch (e) {
        DisExcpt("SSSS_TSU_SellerBanksInfo_019.js", e);
    }
}

csDOScreenProto.TSU_SELLRBK_ID = function() {
    try {
        SYS_GetCUBK('TSU_SELLRBK_ID', 'TSU_SEL_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_TSU_SellerBanksInfo_019.js", e);
    }
}

csDOScreenProto.TSU_SEL_BK_ID_onchange = function(event) {
    try {
        TSU_SELLRBK_ID();
    } catch (e) {
        DisExcpt("SSSS_TSU_SellerBanksInfo_019.js", e);
    }
}