"path:SCRN/DO/R2TSU_CommercialDataset.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CommercialDataset.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CommercialDataset.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CommercialDataset.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.TSU_DS_VRSN.value = '1';
        document.MAINFORM.TSU_SUBMITR_BIC.value = SYS_LOGIN_BIC;
        getCOMMRef();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CommercialDataset.js", e);
    }
}

csDOScreenProto.getCOMMRef = function() {
    try {
        var TSU_DATA_ID = "";
        var ref = parent.SYS_getValueFromMain('C_MAIN_REF');
        var Length = ref.length;
        Length = Length - 10;
        var DataIdSuf = ref.substr(10, Length);
        TSU_DATA_ID = SYS_LOGIN_BIC + "COMM" + DataIdSuf;
        document.MAINFORM.TSU_DS_ID.value = TSU_DATA_ID;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CommercialDataset.js", e);
    }
}