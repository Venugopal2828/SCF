"path:SCRN/DO/TSU_ComrclDocRef.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        TSU_CCY();
        var TSU_BUYER_NAME = parent.SYS_getValueFromMain('TSU_BUYER_NM');
        document.MAINFORM.TSU_BUYER_NM.value = TSU_BUYER_NAME;
        var TSU_SELLER_NAME = parent.SYS_getValueFromMain('TSU_SEL_NM');
        document.MAINFORM.TSU_SEL_NM.value = TSU_SELLER_NAME;
        TSU_COMM_REF_SetValue();
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_CCY();
        var TSU_BUYER_NAME = parent.SYS_getValueFromMain('TSU_BUYER_NM');
        document.MAINFORM.TSU_BUYER_NM.value = TSU_BUYER_NAME;
        var TSU_SELLER_NAME = parent.SYS_getValueFromMain('TSU_SEL_NM');
        document.MAINFORM.TSU_SEL_NM.value = TSU_SELLER_NAME;
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var mainccy = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = mainccy;
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.TSU_COMM_REF = function() {
    try {
        var notshowError = true;
        SYS_GetCUBK('TSU_COMM_REF014', 'TSU_COMM_REF', '', '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.TSU_COMM_REF_SetValue = function() {
    try {
        var TSU_COMM_REF = parent.SYS_getCurrDoScreenValue("TSU_COMM_REF");
        TSU_COMM_REF = "%" + TSU_COMM_REF + "%";
        parent.SYS_setValueToMain("TSU_COMM_REF", TSU_COMM_REF.toLowerCase());
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}

csDOScreenProto.TSU_COMM_REF_onchange = function(event) {
    try {
        TSU_COMM_REF();
        TSU_COMM_REF_SetValue();
    } catch (e) {
        DisExcpt("SSSS_TSU_ComrclDocRef.js", e);
    }
}