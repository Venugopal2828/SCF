"path:SCRN/DO/StructuredGoods.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_NO_OF_ITEMS_BAL = function() {
    try {
        document.MAINFORM.NO_OF_ITEMS_BAL.value = SYS_BeInt(document.MAINFORM.NO_OF_ITEMS.value) - SYS_BeInt(document.MAINFORM.NO_OF_ITEMS_RECVD.value);
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.Cal_PRICE_OF_ITEMS = function() {
    try {
        document.MAINFORM.PRICE_OF_ITEMS.value = SYS_BeInt(document.MAINFORM.NO_OF_ITEMS.value) * SYS_BeFloat(document.MAINFORM.PRICE_OF_ITEMS_UNIT.value);
        document.MAINFORM.PRICE_OF_ITEMS.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.PRICE_OF_ITEMS.value);
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.Cal_PRICE_OF_ITEMS_BAL = function() {
    try {
        document.MAINFORM.PRICE_OF_ITEMS_BAL.value = SYS_BeInt(document.MAINFORM.NO_OF_ITEMS_BAL.value) * SYS_BeFloat(document.MAINFORM.PRICE_OF_ITEMS_UNIT.value);
        document.MAINFORM.PRICE_OF_ITEMS_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.PRICE_OF_ITEMS_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (SYS_ORG_FUNCTION_NAME == "DocumentCheck") {

            SYT_ChangeFldClass(document.MAINFORM.NO_OF_ITEMS_RECVD, "O");
        }
        if (SYS_ORG_FUNCTION_NAME == "IMLC_IssueLC" || SYS_ORG_FUNCTION_NAME == "IMLC Amend After Registration") {

            SYT_ChangeFldClass(document.MAINFORM.ITEM_NAME, "M");
            SYT_ChangeFldClass(document.MAINFORM.NO_OF_ITEMS, "M");
            SYT_ChangeFldClass(document.MAINFORM.PRICE_OF_ITEMS_UNIT, "M");
            SYT_ChangeFldClass(document.MAINFORM.ITEM_UNIT, "M");
        }

    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.NO_OF_ITEMS_onchange = function(event) {
    try {
        Cal_PRICE_OF_ITEMS();
        Cal_NO_OF_ITEMS_BAL();
        Cal_PRICE_OF_ITEMS_BAL();
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.NO_OF_ITEMS_RECVD_onchange = function(event) {
    try {
        Cal_NO_OF_ITEMS_BAL();
        Cal_PRICE_OF_ITEMS_BAL();
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}

csDOScreenProto.PRICE_OF_ITEMS_UNIT_onchange = function(event) {
    try {
        Cal_PRICE_OF_ITEMS();
        Cal_NO_OF_ITEMS_BAL();
        Cal_PRICE_OF_ITEMS_BAL();
    } catch (e) {
        DisExcpt("SSSS_StructuredGoods.js", e);
    }
}