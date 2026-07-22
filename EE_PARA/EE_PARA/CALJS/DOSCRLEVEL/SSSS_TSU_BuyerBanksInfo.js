"path:SCRN/DO/TSU_BuyerBanksInfo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_BuyerBanksInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_BuyerBanksInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_BuyerBanksInfo.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "tsmt.019.001.03A") {
            var TSU_ROLE = parent.SYS_getValueFromMain('TSU_OUR_ROLE');
            if (TSU_ROLE == "Buyer Bank") {

                document.MAINFORM.TSU_BUYER_BK_ID.value = parent.SYS_getValueFromMain('TSU_SUB_B_ID');
                document.MAINFORM.TSU_BUYER_BK_BIC.value = parent.SYS_getValueFromMain('TSU_SUB_B_BIC');
                document.MAINFORM.TSU_BUYER_BK_NM.value = parent.SYS_getValueFromMain('TSU_SUB_B_NM');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_BuyerBanksInfo.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        //var sFieldList = "C_MAIN_REF;NARR_NM";
        //var sMappingList = "TSU_BUYER_BK_ID;TSU_BUYER_BK_NM";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableDataByRule('SSSS_TSU_BuyerBanksInfo_OnSelected_0', '1', sSucJsFuncName, '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_TSU_BuyerBanksInfo.js", e);
    }
}

csDOScreenProto.TSUM_TSU_BYRBK_ID = function() {
    try {
        SYS_GetCUBK('TSU_BYRBK_ID', 'TSU_BUYER_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_TSU_BuyerBanksInfo.js", e);
    }
}

csDOScreenProto.TSU_BUYER_BK_ID_onchange = function(event) {
    try {
        TSUM_TSU_BYRBK_ID();
    } catch (e) {
        DisExcpt("SSSS_TSU_BuyerBanksInfo.js", e);
    }
}